import "@logseq/libs";
import {
  FINDER_KINDS,
  filterFinderRecords,
  finderRecord,
} from "./finder.mjs";

const DEFAULTS = {
  bridgeUrl: "http://127.0.0.1:32145",
  bridgeSecret: "",
  debounceMs: 8000,
};

const runtime = { ...DEFAULTS, ...(globalThis.__HOME_OS_CONFIG__ || {}) };
let timer = null;
let setupContext = null;
let stopChangeListener = null;
let finderRecords = [];
let visibleFinderRecords = [];
let activeFinderIndex = -1;
let finderRequestId = 0;

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
    dialog: document.getElementById("home-os-setup-dialog"),
    title: document.getElementById("home-os-title"),
    lede: document.getElementById("home-os-lede"),
    details: document.getElementById("home-os-details"),
    status: document.getElementById("home-os-status"),
    setup: document.getElementById("home-os-setup"),
    cancel: document.getElementById("home-os-cancel"),
  };
}

function finderElements() {
  return {
    dialog: document.getElementById("home-os-finder"),
    close: document.getElementById("home-os-finder-close"),
    query: document.getElementById("home-os-finder-query"),
    count: document.getElementById("home-os-finder-count"),
    notice: document.getElementById("home-os-finder-notice"),
    results: document.getElementById("home-os-finder-results"),
    empty: document.getElementById("home-os-finder-empty"),
    emptyTitle: document.getElementById("home-os-finder-empty-title"),
    emptyDetail: document.getElementById("home-os-finder-empty-detail"),
    process: document.getElementById("home-os-finder-process"),
    dashboard: document.getElementById("home-os-finder-dashboard"),
  };
}

function nodeTitle(node) {
  return node?.fullTitle || node?.title || node?.content || node?.name || "";
}

async function loadFinderRecords() {
  const recordsByUuid = new Map();
  const taggedRecords = await Promise.all(FINDER_KINDS.map(async ({ tag }) => {
    try {
      return { tag, nodes: await logseq.Editor.getTagObjects(tag) };
    } catch (error) {
      console.warn(`Home OS Finder could not load ${tag}`, error);
      return { tag, nodes: [] };
    }
  }));
  for (const { tag, nodes } of taggedRecords) {
    for (const node of nodes || []) {
      if (!node?.uuid || !nodeTitle(node) || recordsByUuid.has(node.uuid)) continue;
      recordsByUuid.set(node.uuid, finderRecord({
        uuid: node.uuid,
        title: nodeTitle(node),
        kind: tag,
      }));
    }
  }
  return [...recordsByUuid.values()];
}

function finderIcon(kind) {
  if (kind === "HM Home") {
    return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 10.5L12 4l8 6.5V20H4z"/><path d="M9 20v-6h6v6"/></svg>`;
  }
  if (kind === "HM Space") {
    return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 21s6-5.1 6-11a6 6 0 10-12 0c0 5.9 6 11 6 11z"/><circle cx="12" cy="10" r="2"/></svg>`;
  }
  if (kind === "HM System") {
    return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="6" cy="6" r="2"/><circle cx="18" cy="6" r="2"/><circle cx="12" cy="18" r="2"/><path d="M7.7 7.2l3.2 8.7M16.3 7.2l-3.2 8.7M8 6h8"/></svg>`;
  }
  if (kind === "HM Document") {
    return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M6 3h8l4 4v14H6z"/><path d="M14 3v5h4M9 13h6M9 17h5"/></svg>`;
  }
  return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="4" y="5" width="16" height="14" rx="3"/><path d="M8 9h8M8 13h3M15 13h1M8 17h8"/></svg>`;
}

function updateActiveFinderResult(nextIndex, { focus = false } = {}) {
  const buttons = [...finderElements().results.querySelectorAll(".finder-result")];
  if (buttons.length === 0) {
    activeFinderIndex = -1;
    finderElements().query.removeAttribute("aria-activedescendant");
    return;
  }
  activeFinderIndex = Math.max(0, Math.min(nextIndex, buttons.length - 1));
  buttons.forEach((button, index) => {
    const active = index === activeFinderIndex;
    button.classList.toggle("active", active);
    button.setAttribute("aria-selected", String(active));
  });
  const active = buttons[activeFinderIndex];
  finderElements().query.setAttribute("aria-activedescendant", active.id);
  active.scrollIntoView({ block: "nearest" });
  if (focus) active.focus();
}

function renderFinderResults() {
  const elements = finderElements();
  visibleFinderRecords = filterFinderRecords(finderRecords, elements.query.value);
  elements.results.replaceChildren();
  elements.count.textContent = elements.query.value.trim()
    ? `${visibleFinderRecords.length} match${visibleFinderRecords.length === 1 ? "" : "es"}`
    : `${visibleFinderRecords.length} home record${visibleFinderRecords.length === 1 ? "" : "s"}`;

  for (const [index, record] of visibleFinderRecords.entries()) {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "finder-result";
    button.id = `home-os-finder-result-${index}`;
    button.setAttribute("role", "option");
    button.setAttribute("aria-selected", "false");
    button.setAttribute("aria-label", `${record.primary}, ${record.kindLabel}, ${record.detail}`);

    const icon = document.createElement("span");
    icon.className = "finder-result-icon";
    icon.innerHTML = finderIcon(record.kind);

    const copy = document.createElement("span");
    copy.className = "finder-result-copy";
    const primary = document.createElement("strong");
    primary.textContent = record.primary;
    const detail = document.createElement("span");
    detail.textContent = record.detail;
    copy.append(primary, detail);

    const kind = document.createElement("span");
    kind.className = "finder-kind";
    kind.textContent = record.kindLabel;

    const chevron = document.createElement("span");
    chevron.className = "finder-chevron";
    chevron.innerHTML = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M9 5l7 7-7 7"/></svg>`;

    button.append(icon, copy, kind, chevron);
    button.addEventListener("mouseenter", () => updateActiveFinderResult(index));
    button.addEventListener("focus", () => updateActiveFinderResult(index));
    button.addEventListener("click", () => openFinderRecord(record));
    elements.results.append(button);
  }

  const empty = visibleFinderRecords.length === 0;
  elements.results.hidden = empty;
  elements.empty.hidden = !empty;
  elements.emptyTitle.textContent = elements.query.value.trim() ? "No matching home records" : "No Home OS records yet";
  elements.emptyDetail.textContent = elements.query.value.trim()
    ? "Try an appliance, room, manufacturer, model, system, or document name."
    : "Add a #HomeCapture in your Journal, then process it from this window.";
  updateActiveFinderResult(empty ? -1 : 0);
}

function showFinderDialog(records, { companionAvailable = true } = {}) {
  const setup = setupElements();
  const finder = finderElements();
  setup.dialog.hidden = true;
  finder.dialog.hidden = false;
  finderRecords = records;
  finder.query.value = "";
  finder.query.disabled = false;
  finder.notice.hidden = companionAvailable;
  finder.notice.textContent = companionAvailable
    ? ""
    : "Your records are available, but capture processing is offline on this Mac.";
  finder.process.disabled = !companionAvailable;
  finder.dashboard.disabled = false;
  renderFinderResults();
  logseq.setMainUIInlineStyle({ position: "fixed", inset: "0", width: "100vw", height: "100vh", zIndex: 1000 });
  logseq.showMainUI({ autoFocus: true });
  window.setTimeout(() => finder.query.focus(), 40);
}

function showFinderLoading() {
  const setup = setupElements();
  const finder = finderElements();
  setup.dialog.hidden = true;
  finder.dialog.hidden = false;
  finderRecords = [];
  visibleFinderRecords = [];
  activeFinderIndex = -1;
  finder.query.value = "";
  finder.query.disabled = true;
  finder.count.textContent = "Loading home records…";
  finder.notice.hidden = true;
  finder.results.replaceChildren();
  finder.results.hidden = true;
  finder.empty.hidden = true;
  finder.process.disabled = true;
  finder.dashboard.disabled = true;
  logseq.setMainUIInlineStyle({ position: "fixed", inset: "0", width: "100vw", height: "100vh", zIndex: 1000 });
  logseq.showMainUI({ autoFocus: true });
}

function hideFinderDialog() {
  finderRequestId += 1;
  finderElements().dialog.hidden = true;
  logseq.hideMainUI({ restoreEditingCursor: true });
}

async function openFinderRecord(record) {
  hideFinderDialog();
  logseq.App.pushState("page", { name: record.sourceTitle || record.title });
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
  const { dialog, title, lede, details, setup, cancel, status } = setupElements();
  finderElements().dialog.hidden = true;
  dialog.hidden = false;
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
  setupElements().dialog.hidden = true;
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

async function notifyBridge(reason, visible, { quietUpToDate = false } = {}) {
  try {
    const payload = await bridgeRequest("/events", { reason });
    if (visible && payload.setupRequired) {
      showSetupDialog(payload);
      return;
    }
    if (visible && payload.busy && !payload.queued) {
      logseq.UI.showMsg("Home OS is already processing a capture. You can keep using Logseq.", "warning");
      return;
    }
    if (visible && payload.outcome === "up_to_date" && !quietUpToDate) {
      logseq.UI.showMsg("Home OS is up to date. No new captures.", "success");
      return;
    }
    if (visible && payload.queued) {
      const count = Number(payload.changedCount || 0);
      const message = payload.busy
        ? "Finishing the current check, then processing your captures."
        : `Processing ${count} capture${count === 1 ? "" : "s"} now. This can take a few minutes.`;
      logseq.UI.showMsg(message, "success");
      void waitForRun(payload.runId);
    }
    return payload;
  } catch (error) {
    if (visible) logseq.UI.showMsg("Home OS is not running on this Mac. Your capture is safe in Logseq.", "warning");
    console.warn("Home OS bridge notification failed", error);
  }
}

async function openDashboard() {
  const openedFromFinder = !finderElements().dialog.hidden;
  if (openedFromFinder) {
    hideFinderDialog();
    logseq.App.pushState("page", { name: "Home OS" });
  }
  try {
    const payload = await bridgeRequest("/dashboard", {});
    if (payload.setupRequired) {
      showSetupDialog(payload);
      return;
    }
    if (!openedFromFinder) {
      logseq.App.pushState("page", { name: payload.dashboard?.title || "Home OS" });
    }
    await notifyBridge("manual", true);
  } catch (error) {
    logseq.UI.showMsg("Home OS is not running on this Mac. Your Logseq data is unchanged.", "warning");
    console.warn("Home OS dashboard could not open", error);
  }
}

async function openFinder() {
  const requestId = finderRequestId + 1;
  finderRequestId = requestId;
  showFinderLoading();
  let companionAvailable = true;
  let payload = null;
  try {
    payload = await bridgeRequest("/dashboard", {});
    if (requestId !== finderRequestId) return;
    if (payload.setupRequired) {
      showSetupDialog(payload);
      return;
    }
  } catch (error) {
    companionAvailable = false;
    console.warn("Home OS companion is unavailable; opening the local record finder", error);
  }

  if (requestId !== finderRequestId) return;
  const records = await loadFinderRecords();
  if (requestId !== finderRequestId) return;
  showFinderDialog(records, { companionAvailable });
  if (companionAvailable) void notifyBridge("manual", true, { quietUpToDate: true });
}

async function processFromFinder() {
  const process = finderElements().process;
  process.disabled = true;
  try {
    await notifyBridge("manual", true);
  } finally {
    process.disabled = false;
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
  finderElements().close.addEventListener("click", hideFinderDialog);
  finderElements().query.addEventListener("input", renderFinderResults);
  finderElements().process.addEventListener("click", processFromFinder);
  finderElements().dashboard.addEventListener("click", openDashboard);
  document.getElementById("home-os-main").addEventListener("click", (event) => {
    if (event.target !== event.currentTarget) return;
    if (!finderElements().dialog.hidden) hideFinderDialog();
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      if (!finderElements().dialog.hidden) hideFinderDialog();
      else hideSetupDialog();
      return;
    }
    if (finderElements().dialog.hidden) return;
    if (event.key === "ArrowDown") {
      event.preventDefault();
      updateActiveFinderResult(activeFinderIndex + 1);
    }
    if (event.key === "ArrowUp") {
      event.preventDefault();
      updateActiveFinderResult(activeFinderIndex - 1);
    }
    if (event.key === "Enter" && visibleFinderRecords[activeFinderIndex]) {
      event.preventDefault();
      void openFinderRecord(visibleFinderRecords[activeFinderIndex]);
    }
  });

  logseq.provideModel({
    openFinder,
    openDashboard,
    processHomeOs: () => notifyBridge("manual", true),
  });

  logseq.App.registerCommandPalette(
    { key: "home-os-open-dashboard", label: "Home OS: Open dashboard" },
    openDashboard,
  );

  logseq.App.registerCommandPalette(
    {
      key: "home-os-find-record",
      label: "Home OS: Find a record",
    },
    openFinder,
  );

  logseq.App.registerCommandPalette(
    { key: "home-os-process-captures", label: "Home OS: Process new captures" },
    () => notifyBridge("manual", true),
  );

  logseq.App.registerUIItem("toolbar", {
    // Keep the legacy toolbar key so an already-pinned Home OS action becomes
    // the Finder button after upgrading instead of silently disappearing.
    key: "home-os-process-captures",
    template: `
      <a class="button" data-on-click="openFinder" title="Find in Home OS" aria-label="Find in Home OS">
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
