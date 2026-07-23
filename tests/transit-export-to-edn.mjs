#!/usr/bin/env node

import fs from "node:fs";
import { createRequire } from "node:module";

const require = createRequire(new URL("../skills/logseq-home-os/package.json", import.meta.url));
const transit = require("transit-js");

function transitEntries(value) {
  if (!value || typeof value !== "object" || Array.isArray(value) || value instanceof Date) return null;
  if (typeof value[Symbol.iterator] !== "function") return null;
  const entries = [...value];
  return entries.every((entry) => Array.isArray(entry) && entry.length === 2) ? entries : null;
}

function toEdn(value) {
  if (value == null) return "nil";
  if (typeof value === "string") return JSON.stringify(value);
  if (typeof value === "number" || typeof value === "boolean") return String(value);
  if (value instanceof Date) return `#inst ${JSON.stringify(value.toISOString())}`;
  if (Array.isArray(value)) return `[${value.map(toEdn).join(" ")}]`;
  const entries = transitEntries(value);
  if (entries) return `{${entries.map(([key, item]) => `${toEdn(key)} ${toEdn(item)}`).join(" ")}}`;
  const rendered = String(value);
  if (rendered.startsWith(":")) return rendered;
  if (/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(rendered)) {
    return `#uuid ${JSON.stringify(rendered)}`;
  }
  throw new TypeError(`Unsupported Transit value: ${rendered}`);
}

const [inputPath, outputPath] = process.argv.slice(2);
if (!inputPath || !outputPath) {
  throw new Error("Usage: transit-export-to-edn.mjs INPUT.transit.json OUTPUT.edn");
}

const decoded = transit.reader("json").read(fs.readFileSync(inputPath, "utf8"));
fs.writeFileSync(outputPath, `${toEdn(decoded)}\n`);
