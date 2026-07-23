import "@logseq/libs";

const DEFAULTS = {
  bridgeUrl: "http://127.0.0.1:32145",
  bridgeSecret: "",
  debounceMs: 8000,
};

const runtime = { ...DEFAULTS, ...(globalThis.__HOME_OS_CONFIG__ || {}) };
let timer = null;
let setupContext = null;
let stopChangeListener = null;

const LOCAL_README_DIALOG_FIX = `
  .ui__dialog-content[label="plugin-readme"] {
    width: min(900px, calc(100vw - 4rem)) !important;
    max-width: calc(100vw - 2rem) !important;
  }

  .ui__dialog-content[label="plugin-readme"] .cp__plugins-details {
    width: 100%;
    min-width: 0;
  }
`;

async function bridgeRequest(path, body) {
  const response = await fetch(`${runtime.bridgeUrl}${path}`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${runtime.bridgeSecret}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body || {}),
  });
  const payload = await response.json().catch(() => ({}));
  if (!response.ok) {
    const error = new Error(payload.error || `Bridge returned ${response.status}`);
    error.payload = payload;
    throw error;
  }
  return payload;
}

async function bridgeHealth() {
  const response = await fetch(`${runtime.bridgeUrl}/health`);
  if (!response.ok) throw new Error(`Bridge health returned ${response.status}`);
  return response.json();
}

function delay(ms) {
  return new Promise((resolve) => window.setTimeout(resolve, ms));
}

function completionMessage(run) {
  if (run.outcome === "processed") {
    const count = Number(run.handledCount || run.captureCount || 0);
    return {
      message: `${count} capture${count === 1 ? "" : "s"} processed. Home OS is up to date.`,
      type: "success",
    };
  }
  if (run.outcome === "up_to_date") {
    return { message: "Home OS is up to date. No new captures.", type: "success" };
  }
  if (run.outcome === "partially_processed") {
    return { message: "Some captures were processed; at least one still needs attention.", type: "warning" };
  }
  return { message: run.message || "Home OS stopped safely. Your captures were not changed.", type: "warning" };
}

async function refreshDashboard() {
  try {
    return await bridgeRequest("/dashboard", {});
  } catch (error) {
    console.warn("Home OS dashboard refresh failed", error);
    return null;
  }
}

async function waitForRun(runId) {
  if (!runId) return;
  for (let attempt = 0; attempt < 1200; attempt += 1) {
    await delay(1000);
    try {
      const health = await bridgeHealth();
      if (health.lastRun?.runId !== runId) continue;
      const result = completionMessage(health.lastRun);
      if (health.lastRun.outcome === "processed" || health.lastRun.outcome === "partially_processed") {
        await refreshDashboard();
      }
      logseq.UI.showMsg(result.message, result.type);
      return;
    } catch (error) {
      if (attempt >= 4) {
        console.warn("Home OS processing status became unavailable", error);
        logseq.UI.showMsg("Home OS is still safe, but its processing status is temporarily unavailable.", "warning");
        return;
      }
    }
  }
  logseq.UI.showMsg("Home OS is still working. You can continue using Logseq.", "warning");
}

function setupElements() {
  return {
    title: document.getElementById("home-os-title"),
    lede: document.getElementById("home-os-lede"),
    details: document.getElementById("home-os-details"),
    status: document.getElementById("home-os-status"),
    setup: document.getElementById("home-os-setup"),
    cancel: document.getElementById("home-os-cancel"),
  };
}

function captureLabel(count) {
  if (count === 1) return "1 capture waiting";
  return `${count || 0} captures waiting`;
}

function setSetupStatus(message, state = "working") {
  const { status } = setupElements();
  status.className = `status visible${state === "error" ? " error" : state === "success" ? " success" : ""}`;
  status.innerHTML = state === "working" ? `<span class="spinner" aria-hidden="true"></span><span></span>` : "<span></span>";
  status.lastElementChild.textContent = message;
}

function showSetupDialog(payload) {
  setupContext = payload;
  const { title, lede, details, setup, cancel, status } = setupElements();
  const pending = Number(payload.pendingCaptureCount || 0);
  const summary = payload.plan?.summary || {};
  const blocked = payload.plan && payload.plan.ok === false;
  const nextStep = pending > 0
    ? `then process ${captureLabel(pending)} from your Journal.`
    : "then open your dashboard.";

  title.textContent = blocked ? "Home OS needs your attention" : "Make this graph ready for Home OS";
  lede.textContent = blocked
    ? "An existing name or field conflicts with Home OS, so nothing was changed."
    : `Home OS will back up this graph, add its organizing fields, and ${nextStep}`;
  details.textContent = blocked
    ? (payload.plan.conflicts || []).map((conflict) => conflict.reason || conflict.kind).join(" ")
    : `Adds or reuses fields for homes, rooms, equipment, manufacturer, model, serial number, warranty, manuals, photos, and source review. The plan includes ${summary.tags?.create || 0} new record types and ${summary.properties?.create || 0} new fields.`;
  setup.textContent = pending === 1 ? "Set up and process 1 capture" : pending > 1 ? `Set up and process ${pending} captures` : "Set up Home OS";
  setup.disabled = blocked;
  cancel.disabled = false;
  status.className = "status";
  status.textContent = "";
  logseq.setMainUIInlineStyle({ position: "fixed", inset: "0", width: "100vw", height: "100vh", zIndex: 1000 });
  logseq.showMainUI({ autoFocus: true });
  window.setTimeout(() => (blocked ? cancel : setup).focus(), 50);
}

function hideSetupDialog() {
  if (setupElements().setup.disabled && setupElements().cancel.disabled) return;
  setupContext = null;
  logseq.hideMainUI({ restoreEditingCursor: true });
}

async function applyClientSchemaOperations(operations) {
  const tags = await logseq.Editor.getAllTags();
  const byTitle = new Map((tags || []).map((tag) => [tag.title || tag.fullTitle || tag.content, tag]));
  for (const operation of operations || []) {
    if (operation.operation !== "add-tag-extends") throw new Error(`Unsupported Home OS setup operation: ${operation.operation}`);
    const child = byTitle.get(operation.child);
    const parent = byTitle.get(operation.parent);
    if (!child?.uuid || !parent?.uuid) throw new Error(`Could not resolve Home OS tags: ${operation.child} → ${operation.parent}`);
    await logseq.Editor.addTagExtends(child.uuid, parent.uuid);
  }
}

async function installAndProcess() {
  const { setup, cancel } = setupElements();
  setup.disabled = true;
  cancel.disabled = true;
  setSetupStatus("Creating a backup and building your Home OS…");
  try {
    let payload = await bridgeRequest("/setup", { action: "install-and-process" });
    if (payload.clientSetupRequired) {
      setSetupStatus("Finishing the graph structure inside Logseq…");
      await applyClientSchemaOperations(payload.clientOperations);
      payload = await bridgeRequest("/setup/complete", { setupToken: payload.setupToken });
    }
    setSetupStatus(payload.processingQueued ? "Setup verified. Your captures are processing now." : "Setup verified. Opening Home OS.", "success");
    setup.textContent = "Done";
    window.setTimeout(() => {
      setup.disabled = false;
      cancel.disabled = false;
      hideSetupDialog();
      logseq.App.pushState("page", { name: payload.dashboard?.title || "Home OS" });
      if (payload.processingQueued) {
        const count = Number(payload.pendingCaptureCount || 0);
        logseq.UI.showMsg(`Processing ${count} capture${count === 1 ? "" : "s"} now. This can take a few minutes.`, "success");
        void waitForRun(payload.processingRunId);
      } else {
        logseq.UI.showMsg("Home OS is ready.", "success");
      }
    }, 1300);
  } catch (error) {
    console.warn("Home OS setup failed", error);
    setSetupStatus(error.payload?.message || "Setup stopped safely. Your captures were not changed.", "error");
    setup.textContent = "Try again";
    setup.disabled = false;
    cancel.disabled = false;
  }
}

async function notifyBridge(reason, visible) {
  try {
    const payload = await bridgeRequest("/events", { reason });
    if (visible && payload.setupRequired) {
      showSetupDialog(payload);
      return;
    }
    if (visible && payload.busy) {
      logseq.UI.showMsg("Home OS is already processing a capture. You can keep using Logseq.", "warning");
      return;
    }
    if (visible && payload.outcome === "up_to_date") {
      logseq.UI.showMsg("Home OS is up to date. No new captures.", "success");
      return;
    }
    if (visible && payload.queued) {
      const count = Number(payload.changedCount || 0);
      logseq.UI.showMsg(`Processing ${count} capture${count === 1 ? "" : "s"} now. This can take a few minutes.`, "success");
      void waitForRun(payload.runId);
    }
    return payload;
  } catch (error) {
    if (visible) logseq.UI.showMsg("Home OS is not running on this Mac. Your capture is safe in Logseq.", "warning");
    console.warn("Home OS bridge notification failed", error);
  }
}

async function openHomeOs() {
  try {
    const payload = await bridgeRequest("/dashboard", {});
    if (payload.setupRequired) {
      showSetupDialog(payload);
      return;
    }
    logseq.App.pushState("page", { name: payload.dashboard?.title || "Home OS" });
    await notifyBridge("manual", true);
  } catch (error) {
    logseq.UI.showMsg("Home OS is not running on this Mac. Your Logseq data is unchanged.", "warning");
    console.warn("Home OS dashboard could not open", error);
  }
}

function scheduleChangeCheck() {
  if (timer) clearTimeout(timer);
  timer = setTimeout(() => notifyBridge("db-changed", false), runtime.debounceMs);
}

async function main() {
  if (!(await logseq.App.checkCurrentIsDbGraph())) {
    logseq.UI.showMsg("Home OS requires a Logseq DB graph.", "warning");
    return;
  }
  // Logseq 2.x gives marketplace README iframes a 900px minimum width but
  // leaves local README dialogs at width:auto, which can collapse them to a
  // one-character column. Remove this compatibility style once Home OS uses
  // Logseq's remote marketplace README path.
  logseq.provideStyle(LOCAL_README_DIALOG_FIX);
  logseq.hideMainUI();

  setupElements().setup.addEventListener("click", installAndProcess);
  setupElements().cancel.addEventListener("click", hideSetupDialog);
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") hideSetupDialog();
  });

  logseq.provideModel({
    openHomeOs,
    processHomeOs: () => notifyBridge("manual", true),
  });

  logseq.App.registerCommandPalette(
    { key: "home-os-open-dashboard", label: "Home OS: Open dashboard" },
    openHomeOs,
  );

  logseq.App.registerCommandPalette(
    { key: "home-os-process-captures", label: "Home OS: Process new captures" },
    () => notifyBridge("manual", true),
  );

  logseq.App.registerUIItem("toolbar", {
    // Keep the legacy toolbar key so an already-pinned Home OS action becomes
    // the dashboard button after upgrading instead of silently disappearing.
    key: "home-os-process-captures",
    template: `
      <a class="button" data-on-click="openHomeOs" title="Open Home OS" aria-label="Open Home OS">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <path d="M6 7v10M18 7v10M8 12h8" />
          <circle cx="6" cy="5" r="2" fill="currentColor" stroke="none" />
          <circle cx="6" cy="19" r="2" fill="currentColor" stroke="none" />
          <circle cx="18" cy="5" r="2" fill="currentColor" stroke="none" />
          <circle cx="18" cy="19" r="2" fill="currentColor" stroke="none" />
        </svg>
      </a>
    `,
  });

  stopChangeListener = logseq.DB.onChanged(scheduleChangeCheck);
  logseq.beforeunload(() => {
    if (timer) window.clearTimeout(timer);
    if (typeof stopChangeListener === "function") stopChangeListener();
  });
}

logseq.ready(main).catch((error) => console.error("Home OS Capture failed to start", error));
