#!/usr/bin/env node

import fs from "node:fs";

const [webSocketUrl, command = "contexts", ...rest] = process.argv.slice(2);
if (!webSocketUrl) throw new Error("Usage: logseq-cdp.mjs WS_URL contexts|eval|screenshot [CONTEXT_ID] [EXPRESSION|OUTPUT_PATH]");

const socket = new WebSocket(webSocketUrl);
const pending = new Map();
const contexts = new Map();
let nextId = 1;

function call(method, params = {}) {
  const id = nextId++;
  socket.send(JSON.stringify({ id, method, params }));
  return new Promise((resolve, reject) => pending.set(id, { resolve, reject }));
}

socket.addEventListener("message", (event) => {
  const message = JSON.parse(event.data);
  if (message.id && pending.has(message.id)) {
    const waiter = pending.get(message.id);
    pending.delete(message.id);
    if (message.error) waiter.reject(new Error(message.error.message));
    else waiter.resolve(message.result);
    return;
  }
  if (message.method === "Runtime.executionContextCreated") {
    contexts.set(message.params.context.id, message.params.context);
  }
  if (message.method === "Runtime.executionContextDestroyed") {
    contexts.delete(message.params.executionContextId);
  }
});

await new Promise((resolve, reject) => {
  socket.addEventListener("open", resolve, { once: true });
  socket.addEventListener("error", reject, { once: true });
});
await call("Runtime.enable");
await new Promise((resolve) => setTimeout(resolve, 300));

if (command === "contexts") {
  console.log(JSON.stringify([...contexts.values()].map((context) => ({
    id: context.id,
    name: context.name,
    origin: context.origin,
    auxData: context.auxData,
  })), null, 2));
} else if (command === "eval") {
  const contextId = Number(rest.shift());
  const expression = rest.join(" ");
  if (!contextId || !expression) throw new Error("eval requires CONTEXT_ID and EXPRESSION");
  const result = await call("Runtime.evaluate", {
    contextId,
    expression,
    awaitPromise: true,
    returnByValue: true,
  });
  console.log(JSON.stringify(result, null, 2));
} else if (command === "screenshot") {
  const outputPath = rest.shift();
  if (!outputPath) throw new Error("screenshot requires OUTPUT_PATH");
  await call("Page.enable");
  const result = await call("Page.captureScreenshot", { format: "png", fromSurface: true, captureBeyondViewport: false });
  fs.writeFileSync(outputPath, Buffer.from(result.data, "base64"));
  console.log(JSON.stringify({ ok: true, outputPath, bytes: fs.statSync(outputPath).size }, null, 2));
} else {
  throw new Error(`Unknown command: ${command}`);
}

socket.close();
