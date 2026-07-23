# Home OS Agent Instructions

## Scope

These instructions apply to the entire repository. `AGENTS.md` is the
authoritative cross-agent contract. `CLAUDE.md` points Claude Code to this
file. Put durable project rules here and detailed procedures in
`docs/maintaining-and-extending.md`.

## Product contract

Home OS is a local-first system for Logseq 2.x DB graphs. Logseq is the source
of truth and operating surface. The native Logseq plugin detects and presents
work; the localhost bridge handles deterministic orchestration; Codex or
another compatible coding agent performs bounded interpretation and research.

Preserve these invariants:

- A `#HomeCapture` parent block and its complete descendant subtree are
  human-owned, immutable evidence. Never delete, move, rename, or rewrite them.
- Use only Logseq's official desktop HTTP API and native plugin SDK. Never
  access SQLite, WAL, db-worker, search-index, or sync internals.
- Mutate only allowlisted Home OS properties and agent-owned subtrees tagged
  `#HM Generated`.
- Never take over an existing human page or block because its title collides
  with a proposed Home OS record.
- Materialization must preflight all ownership and one-to-one relationship
  conflicts before the first write.
- Serial number is a first-class Item field whenever legible. Store its value
  only in `hm-serial` and the transient local materialization payload. Never
  put it in narrative, dashboards, QR content, screenshots, prompts, logs, or
  machine receipts.
- Raw Codex transcripts are transient. Persist only bounded, sanitized
  per-capture receipts with owner-only permissions.
- Back up through Logseq's supported export API before schema or generated
  convergence work that could replace existing generated structure.
- Uninstalling the runtime must preserve graph data, captures, exports, state,
  and audit receipts.

## Source map

- `skills/logseq-home-os/scripts/home-os.mjs` — bridge, installer, schema
  orchestration, scanning, materialization, audits, and deterministic tests.
- `skills/logseq-home-os/scripts/schema-transit-source.mjs` — editable source
  for the generated Transit helper.
- `skills/logseq-home-os/scripts/schema-transit.mjs` — generated; rebuild it,
  do not hand-edit it.
- `skills/logseq-home-os/assets/logseq-home-os-capture/src/main.js` — editable
  native Logseq plugin source.
- `skills/logseq-home-os/assets/logseq-home-os-capture/index.js` — generated
  plugin bundle; rebuild it, do not hand-edit it.
- `skills/logseq-home-os/assets/logseq-home-os-capture/index.html` — first-run
  and plugin UI surface.
- `skills/logseq-home-os/SKILL.md` — runtime behavior contract for Codex.
- `skills/logseq-home-os/references/` — architecture, schema, and payload
  contracts.
- `.codex-plugin/plugin.json` and `.agents/plugins/marketplace.json` — Codex
  distribution metadata.
- `marketplace/logseq-home-os-capture/` and `.github/workflows/publish.yml` —
  Logseq distribution metadata and release build.

## Development rules

- Make source changes, then rebuild generated artifacts from their package
  directories.
- Keep the bridge bound to loopback and require bearer authentication for
  every mutating endpoint.
- Keep graph identity checks exact. A configured/open graph mismatch is a hard
  stop, never a warning.
- Preserve idempotency: an unchanged capture replay must not create duplicate
  evidence, records, generated blocks, or handled-state entries.
- Prefer additive schema evolution. Never silently rename or remove an
  existing tag/property or reinterpret stored values.
- Keep the current documented-value compatibility mode for the six enumerated
  properties until Logseq's DB SDK reliably accepts plugin-scoped native
  closed choices. Do not introduce direct database workarounds.
- Do not add hazardous DIY repair instructions. Link official documentation
  and recommend a qualified professional for gas, mains electrical,
  combustion, refrigerant, structural, or similar work.
- Do not commit local runtime config, bridge secrets, graph exports, audit
  receipts, transcripts, `node_modules`, or private screenshots.
- Use `apply_patch` for deliberate source edits. Preserve unrelated user work.

## Required validation

Run from the repository root after relevant changes:

```bash
node --check skills/logseq-home-os/scripts/home-os.mjs
node skills/logseq-home-os/scripts/home-os.mjs self-test

cd skills/logseq-home-os
npm ci
npm run build
npm run check
npm audit --audit-level=high

cd assets/logseq-home-os-capture
npm ci
npm run build
npm audit --audit-level=high
```

For live integration work, use a disposable Logseq 2.x DB graph first. Run
`doctor` before mutation, require the exact graph match, and retain an official
export. After scratch validation, restore the production configuration and run:

```bash
node skills/logseq-home-os/scripts/home-os.mjs doctor
node skills/logseq-home-os/scripts/home-os.mjs schema-verify
node skills/logseq-home-os/scripts/home-os.mjs scan --changed-only --json
node skills/logseq-home-os/scripts/home-os.mjs record-audit
node skills/logseq-home-os/scripts/home-os.mjs privacy-audit
node skills/logseq-home-os/scripts/home-os.mjs serial-audit
```

Any user-visible change requires a rendered Logseq check after a cold restart.
Verify the connected-H action, dashboard, representative room and item pages,
completion feedback, and browser console/page errors. Structural API checks
alone are insufficient.

## Packaging and release

- Update the Logseq package version and `HOME_OS_GENERATOR_VERSION` together
  for product releases. Change `HOME_OS_SCHEMA_VERSION` only for a real schema
  migration with backward-compatible detection and recovery.
- After any Codex plugin source change, run the plugin-creator cachebuster,
  validate the plugin and skill, then reinstall the resulting local Codex
  package.
- A public release requires a clean secret/privacy scan, reviewed screenshots,
  a generated Logseq zip, a GitHub Actions pass, and a downloadable release
  asset.
- Keep the official Logseq marketplace manifest synchronized with the public
  repository. Marketplace acceptance is external; do not claim it is listed
  until the upstream pull request merges and the catalog shows it.

See `docs/maintaining-and-extending.md` for the full change and release
playbook.
