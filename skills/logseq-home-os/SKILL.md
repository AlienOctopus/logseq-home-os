---
name: logseq-home-os
description: Set up, inspect, validate, and safely enrich a local-first Home OS in a Logseq 2.x DB graph. Use when the user asks to install or operate Logseq Home OS, process #HomeCapture journal blocks, identify household appliances or systems from photos and model labels, build house-manual records, run the Home OS bridge, or diagnose its Logseq/Codex integration.
---

# Logseq Home OS

Treat Logseq as the operating surface and the human's journal blocks as immutable evidence. Use the bundled helper for deterministic discovery and triggering; use reasoning only after the helper reports changed captures.

## Safety boundary

- Use only Logseq's official desktop HTTP API or native plugin API. Never read or write SQLite, WAL, db-worker, search-index, or sync internals.
- Never delete, move, rename, or rewrite a `#HomeCapture` block or any of its children/assets.
- Never delete an existing Home OS page. Retire or supersede records instead.
- Write only approved Home OS properties and children beneath a tagged `#HM Generated` root.
- Keep API tokens, bridge secrets, serial numbers, and private addresses out of bridge prompts, logs, generated narrative, QR codes, and graph configuration pages. A serial belongs only in the private `hm-serial` record property and the local materialization payload used to write it.
- Treat manuals and manufacturer support pages as authoritative. Treat retailer pages as secondary identity/purchase evidence.
- Do not generate instructions for gas, mains electrical, refrigerant, combustion, structural, or other hazardous repair work. Link the official manual and recommend a qualified professional.
- Back up before schema or bulk mutations. Stop when graph identity does not match the configured graph.

## Helper

Set `HELPER` to `scripts/home-os.mjs` in this skill directory.

Use these commands:

```bash
node "$HELPER" doctor
node "$HELPER" scan --json
node "$HELPER" materialize --input <absolute-json-path>
node "$HELPER" status
node "$HELPER" schema-plan
node "$HELPER" schema-verify
node "$HELPER" schema-apply --confirm <exact-plan-token>
node "$HELPER" schema-complete --receipt <absolute-schema-receipt-path>
node "$HELPER" dashboard
node "$HELPER" canonical-title-audit
node "$HELPER" record-audit
node "$HELPER" privacy-audit
node "$HELPER" install-logseq-plugin
node "$HELPER" install-launch-agent
node "$HELPER" serve
```

Run `doctor` before any mutation. `scan` is read-only and returns only `#HomeCapture` blocks from the configured graph. If it returns no changed captures, stop without invoking research.
Do not process captures unless `doctor` reports `readyForProcessing: true`. A missing or outdated schema is a setup operation, not an invitation for a capture-processing run to invent schema.

## Setup workflow

1. Read [architecture.md](references/architecture.md) and [schema.md](references/schema.md).
2. Run `doctor`. Require a Logseq 2.x DB graph, the official desktop API, and an exact graph-name match.
3. Run `schema-plan`. It is read-only and must report `mutationPerformed: false`, zero conflicts, and an exact `applyToken`.
4. Show the proposed create/reuse counts and resolve every collision. Use the `HM` prefix and the one-word journal ingress tag `#HomeCapture`. In the native first-run dialog, the primary setup button is the user's confirmation for that exact plan.
5. Run setup from the dashboard action when the Logseq plugin is installed. The bridge saves an official graph export and creates properties, ranges, and tag schemas; the native plugin completes class inheritance inside Logseq, avoiding HTTP identity-conversion bugs.
6. Treat the six enumerated fields as documented value sets. Native closed choices are optional until Logseq's current plugin-property validator and UUID bridge accept them reliably; processing must still write only the documented values.
7. Create real Home, Space, and Item records only from captures. Do not pre-create imaginary rooms or appliances.
8. Create or repair the native `Home OS` dashboard. Its single top-level `Your home at a glance` block must carry `#HM Generated`; maintain only that generated subtree. Put the literal nested `#HomeCapture` example first, use the human headings `Your home`, `Rooms & areas`, `Appliances & equipment`, `Home systems`, `Manuals & records`, and `Inbox & review`, and list only real durable records returned by the native tags. Ensure every durable record title starts with exactly one type marker (`🏠` Home, `📍` Space, `⚙️` System, `🟢` Item, `📄` Document); dashboard labels omit the marker.
9. Materialize relationship-driven indexes in the main body of durable pages. A Home gets `Inside this home`; a Space gets `What's here`; populated System, Item, and Document relationship views appear only when useful. Every index root must carry `#HM Generated`, list only real typed relationships, and preserve all human-authored sibling blocks. Native linked references remain provenance, never the primary navigation surface.
10. Run `schema-verify`, then validate the dashboard and representative record pages in rendered Logseq. A successful structural receipt does not replace the rendered check.

## Capture workflow

The lowest-friction input is one tagged parent node in the journal whose descendants contain all evidence for one physical object or house issue. Do not require the user to navigate to a dashboard or room page.

Use this canonical two-level shape:

```text
- Refrigerator — basement utility room #HomeCapture
  - [full-appliance photo asset]
  - [model/serial-label photo asset]
  - Ice maker leaks occasionally
```

Treat the tagged parent and its complete descendant subtree as one capture envelope:

- Put `#HomeCapture` on the descriptive parent node. In a DB graph, select the existing tag from Logseq's tag autocomplete or node-tag control; do not leave it as unlinked text.
- Put each related photo asset and optional note in a child node beneath that parent. Additional nesting is allowed and remains part of the capture.
- Capture one physical object, system, document, or issue per tagged parent. Create a second tagged parent for a second object.
- Keep the parent description short but discriminating: object plus location is enough. The user does not need to know the manufacturer, model, canonical room name, or Home OS schema yet.
- Accept a photo embedded directly in the tagged parent for a one-photo capture, but prefer child assets because several photos and notes then share an unambiguous parent.

Reject sibling shapes such as the following because Logseq gives the three nodes no capture containment relationship:

```text
- Refrigerator — basement utility room
- #HomeCapture
- [photo asset]
```

Also reject a tag placed only on a photo child. The scanner discovers the tagged parent first and then reads its descendants; it does not infer a capture from nearby siblings or from an untagged ancestor.

When processing captures:

1. Run `scan --json` and select only entries reported as changed.
2. Read the capture subtree and attached assets. Preserve it verbatim.
3. Create or update one normalized `#HM Evidence` source review linked to the capture UUID and exact source fingerprint.
4. Determine the likely record kind: Home, Space, System, Item, or Document.
5. Extract manufacturer, model, and serial text from evidence. Treat serial as a mandatory first-class identity check for every Item: inspect each nameplate or label asset at original resolution, rotate/crop/zoom as needed, and copy every legible character exactly. Never infer a missing character.
6. Set `record.serialDisposition` on every Item materialization to exactly one of `captured`, `not-visible`, `unreadable`, `conflicting`, or `not-applicable`. `captured` requires `record.serial`; a present serial requires `captured`; `unreadable` and `conflicting` require `Needs review`. Never omit a readable serial merely because manufacturer and model are already known.
7. Research exact model identity using official manufacturer sources first and store citations in the source review.
8. Resolve the source review into a new or existing durable page using search-first Item naming: `🟢 Item noun — Manufacturer Model · Space · Home nickname`. Example: `🟢 Microwave — KitchenAid KMHC319LSS00 · Kitchen · My home`. Put the ordinary noun immediately after `🟢`; do not put the home hierarchy first or use slash-based pseudo-hierarchy. Preserve an exact model such as `LFXS29766S/00` in `hm-model`, but use `LFXS29766S∕00` in the page title so Logseq does not interpret the slash as a namespace. The green marker means any matching green breadcrumb/title is inside the canonical Item page. A containing room may also match, but it starts with `📍`. Typed relationships—not title parsing—remain the hierarchy. The helper normalizes legacy or wrong-type markers and migrates owned durable pages by UUID after an official export, so never create a second marked/unmarked record pair. If the owner has not supplied a home nickname, use `My home`, not the generic page title `Home`, which commonly collides with Logseq navigation and existing `#home` content.
9. Copy [materialization.example.json](references/materialization.example.json) to a temporary or audit path, populate it only with supported findings, and keep the exact scan UUID and fingerprint unchanged.
10. Run `materialize --input <absolute-json-path>`. Do not improvise graph writes through a general note wrapper. The helper permits only Home OS schema fields, rejects stale fingerprints, fills previously missing scalar facts and typed relationships, appends new source reviews to an existing record, and refuses to overwrite conflicting serial, home, room, or photo values.
11. Refresh the generated `Home OS` dashboard and relationship-driven record-page indexes so the record appears in the correct home, room, system, and document views.
12. Run `record-audit` and `privacy-audit`, then re-query and verify the source capture, source review, durable structure, dashboard, record-page indexes, and rendered pages. If a serial was captured, require the materializer's serial verification receipt; never print the value in the run receipt.

## Event-driven mode

The bundled native Logseq plugin listens to `logseq.DB.onChanged`, debounces changes, and notifies a loopback-only bridge. It does not inspect SQLite and it does not run a model itself.

- Automatic DB-change events are queued unless `autoRun` is explicitly enabled in the helper configuration.
- The connected-H toolbar action opens the native `Home OS` dashboard and performs a deterministic inbox check. Its four nodes echo Logseq's graph model while the H identifies Home OS without competing with Logseq's native Home icon. It is navigation first; on an uninitialized graph it becomes the guided setup surface.
- The `Home OS: Process new captures` command-palette action is an explicit manual trigger and may start a run even when `autoRun` is false.
- Logseq initially places the plugin toolbar action inside its puzzle-piece menu. Pin the connected-H Home OS row to keep it visible in the main toolbar.
- The bridge performs a deterministic fingerprint scan first. It must not start Codex when nothing changed.
- A manual action must report one of: up to date, already processing, processing N captures, or a final processed/partial/failed outcome. Do not leave the user guessing whether the click registered.
- Permit at most one Codex process at a time. Coalesce additional events and re-scan afterward.
- Use `gpt-5.6-sol` with high reasoning for evidence research unless the user explicitly selects another supported model. A low-cost model is unnecessary for change detection because the helper does that deterministically.

## Output contract

For every capture, report one of:

- `processed`: durable record created or updated and verified;
- `needs_review`: evidence conflicts or identification is uncertain;
- `no_action`: duplicate or unchanged evidence;
- `blocked`: exact API, graph, asset, or source failure.

Never call a run successful until the capture source remains intact and the resulting page can be retrieved from Logseq.
End an event-driven run with one exact machine-readable line in the form requested by the bridge for every capture in the batch: `HOME_OS_RESULT {...}`. Use only the bridge's bounded `reason_code` values and never add a free-form reason. A capture without its own valid accepted receipt must not be marked handled, even when another capture in the same run succeeds.
