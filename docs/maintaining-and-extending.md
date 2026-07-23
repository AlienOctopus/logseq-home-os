# Maintaining and Extending Home OS

This is the implementation and release playbook for human maintainers, Codex,
Claude Code, and other coding agents. Read the root `AGENTS.md` first; its
product invariants are mandatory.

## 1. Mental model

Home OS has four layers:

1. **Logseq DB graph** — source of truth, evidence store, schema, durable
   records, and user interface.
2. **Native Logseq plugin** — connected-H action, guided setup UI, database
   change notification, explicit processing feedback, and dashboard
   navigation.
3. **Local bridge/helper** — deterministic graph checks, schema setup,
   capture fingerprinting, concurrency control, Codex lifecycle, materializer,
   generated projections, and audits.
4. **Agent skill** — bounded interpretation, image/nameplate inspection,
   official-source research, and construction of a validated materialization
   payload.

The agent is not the database layer. It proposes facts through a strict
payload; the helper validates the capture fingerprint, graph ownership, schema
values, URLs, UUIDs, cardinality, and conflicts before using Logseq's official
API.

The durable information flow is:

```text
#HomeCapture subtree
  -> semantic fingerprint
  -> #HM Evidence source review
  -> durable Home / Space / System / Item / Document
  -> generated dashboard and relationship indexes
```

Source evidence is never replaced by the interpretation. Generated navigation
is never the source of truth.

## 2. Where to make a change

| Goal | Edit | Rebuild or verify |
|---|---|---|
| Change the toolbar action, commands, notifications, or setup-to-bridge protocol | `skills/logseq-home-os/assets/logseq-home-os-capture/src/main.js` | Run the Logseq plugin build; cold-reload Logseq |
| Change the guided setup dialog | `skills/logseq-home-os/assets/logseq-home-os-capture/index.html` and, if needed, `src/main.js` | Render light and dark mode; test narrow windows |
| Change scanning, fingerprints, materialization, dashboard generation, audits, bridge behavior, or installers | `skills/logseq-home-os/scripts/home-os.mjs` | Syntax check, self-test, scratch integration, production doctor |
| Change schema tags, properties, ranges, or inheritance | Schema declarations in `home-os.mjs`; Transit logic in `schema-transit-source.mjs` when native import behavior changes | Rebuild Transit helper; clean-graph and upgrade-graph tests |
| Change agent interpretation or research behavior | `skills/logseq-home-os/SKILL.md` and `references/` | Skill validation plus a real capture batch |
| Change the example payload contract | `references/materialization.example.json`, validator, prompt contract, and tests together | Positive and negative materialization tests |
| Change public installation or operation guidance | Root `README.md`, plugin README, and agent docs as applicable | Render GitHub README and Logseq plugin README |
| Change distribution metadata | `.codex-plugin/`, `.agents/plugins/`, `marketplace/`, and release workflow | Plugin validation, cachebuster/reinstall, Actions build |

Never edit `index.js` or `schema-transit.mjs` as source. They are generated
artifacts that must remain reproducible from their editable counterparts.

## 3. Local development setup

Install exact dependencies:

```bash
cd skills/logseq-home-os
npm ci

cd assets/logseq-home-os-capture
npm ci
```

Build both generated artifacts:

```bash
cd skills/logseq-home-os
npm run build

cd assets/logseq-home-os-capture
npm run build
```

Bootstrap against the currently open Logseq DB graph only after confirming it
is the intended target:

```bash
node skills/logseq-home-os/scripts/home-os.mjs bootstrap
node skills/logseq-home-os/scripts/home-os.mjs doctor
```

The helper's local support directory contains secrets and private receipts.
Never copy it into the repository or quote it in public issues. The installed
Logseq plugin's generated runtime config is likewise local-only and
owner-readable.

## 4. Validation ladder

Use the smallest adequate layer while developing, then complete every layer
before release.

### Layer A — static and deterministic

```bash
node --check skills/logseq-home-os/scripts/home-os.mjs
node skills/logseq-home-os/scripts/home-os.mjs self-test

cd skills/logseq-home-os
npm run build
npm run check
npm audit --audit-level=high

cd assets/logseq-home-os-capture
npm run build
npm audit --audit-level=high
```

Add deterministic self-tests whenever behavior can be factored away from a
live graph. Every validator change needs at least one accepted and one rejected
case.

### Layer B — disposable DB graph

Create a new Logseq 2.x DB graph through Logseq itself. Do not manufacture
graph storage files. Point Home OS at the scratch graph and test:

1. First connected-H click shows the guided setup card.
2. Setup saves an official export before mutation.
3. Schema, inheritance, dashboard, and initial scan complete.
4. One canonical capture creates a home, new room, item, source review, and
   first-class serial when visible.
5. Replaying the same capture creates nothing.
6. A follow-up capture attaches evidence to the existing record.
7. Editing the capture after scanning rejects the stale fingerprint.
8. A human page with the intended title causes a collision without takeover.
9. Conflicting serial, home, room, or photo stops before any partial durable
   write.
10. A wrong configured graph prevents reads and writes.
11. Bridge-down and API-restart states produce clear, non-destructive UI.
12. Stale `#HM Generated` children converge while adjacent human blocks remain.
13. Interrupted Codex cleanup removes the positively identified process,
    active marker, and raw transcript.
14. Uninstall/reinstall removes only runtime files and preserves graph data,
    state, exports, and audit receipts.

Restore the original production configuration immediately after scratch
testing. Confirm the graph name in `doctor`; do not rely on window position or
memory.

### Layer C — production read gate

Do not introduce sample records. Run:

```bash
node skills/logseq-home-os/scripts/home-os.mjs doctor
node skills/logseq-home-os/scripts/home-os.mjs schema-verify
node skills/logseq-home-os/scripts/home-os.mjs scan --changed-only --json
node skills/logseq-home-os/scripts/home-os.mjs record-audit
node skills/logseq-home-os/scripts/home-os.mjs privacy-audit
node skills/logseq-home-os/scripts/home-os.mjs serial-audit
```

Release readiness requires:

- `readyForProcessing: true`
- exact production graph match
- schema and dashboard ready
- bridge running, idle, and not awaiting setup completion
- zero integrity errors and warnings
- zero privacy violations
- no changed capture unintentionally left waiting
- every Item with a legible nameplate has a captured serial

### Layer D — rendered UI

Cold-restart Logseq after installing the built plugin. Verify:

- the connected-H glyph is visually distinct from Logseq's native Home icon;
- first-run setup is readable at typical and narrow window sizes;
- the dashboard uses human headings and literal nested capture instructions;
- home and room pages put useful generated indexes in the main body;
- item pages expose structured fields without leaking serials into generated
  prose;
- success, busy, partial, failed, bridge-down, and setup-required feedback are
  understandable;
- plugin README content renders at a usable width;
- there are no relevant console or page errors.

Use native Browser control when it can attach. For the Logseq Electron desktop
surface, use a local Playwright/CDP route when the in-app browser cannot see
the window. Record the route and evidence artifact in the release report.

## 5. Schema evolution

Schema changes have the highest migration risk.

Before editing:

1. Decide whether the change is additive, semantic, or destructive.
2. Prefer a new optional property or relationship over changing the meaning of
   an existing one.
3. Define behavior for clean graphs, existing graphs, partially installed
   graphs, and graphs with same-title human nodes.
4. Define how older generated records remain readable.

For an additive change:

1. Add the property/tag definition and attachments.
2. Extend schema planning, readiness, verification, public summaries, and
   materialization allowlists.
3. Extend audits when the field affects integrity or privacy.
4. Update payload examples, the agent skill, and user-facing labels.
5. Add deterministic tests.
6. Test clean setup and in-place repair in separate scratch graphs.

Increase `HOME_OS_SCHEMA_VERSION` only when the stored schema contract actually
changes. A version bump requires a supported upgrade path, an official export,
idempotent retry behavior, and a recovery test. Do not delete or rename the old
structure during a routine upgrade.

The six enumerated fields currently use documented value sets because the
Logseq DB SDK has had a plugin-scoped closed-choice validator/UUID conversion
mismatch. Re-test the current official DB build before changing this mode. If
native choices become reliable, implement them through supported Logseq
schema/import APIs and retain compatibility with existing documented values.

## 6. Capture and fingerprint changes

Fingerprinting determines whether AI runs and whether a result is stale.

- Hash all human-visible semantic content: titles, notes, properties, tags,
  asset references, child content, nesting, and child order.
- Exclude Logseq runtime metadata such as IDs, timestamps, collapsed state, and
  database projections.
- Never make an agent-generated evidence/index write requeue the source
  capture.
- Preserve compatibility with the immediately previous fingerprint algorithm
  when upgrading so already handled captures do not all requeue at once.
- A source fingerprint supplied for materialization must match a fresh read of
  that exact capture immediately before any write.

Test metadata-only changes, meaningful text changes, reordered children,
additional images, nested notes, removed evidence, and stale materialization.

## 7. Materialization changes

Materialization must remain narrower than the agent's reasoning.

Before the first graph mutation, preflight:

- source UUID and current fingerprint;
- exact graph identity;
- record/page ownership and durable kind;
- every proposed home, room, system, document, and asset reference;
- cardinality and existing one-to-one values;
- serial conflicts;
- safe HTTP(S) URLs;
- generated subtree ownership;
- complete payload schema and allowed values.

Do not create a new room and then discover that the existing Item belongs to a
different room. Resolve every conflict first. When a batch is partial, advance
handled state only for capture UUIDs with their own valid accepted receipt.

Replays may repair missing agent-owned generated children or missing
allowlisted fields, but they must not replace conflicting human/shared values.

## 8. UI and information architecture changes

The Logseq graph is node-based, so examples must show literal indentation:

```text
- Refrigerator — basement #HomeCapture
  - [whole-appliance photo]
  - [model and serial label photo]
  - note: ice maker leaks sometimes
```

Avoid instructions that look like sibling nodes or detached tags.

Use pages for durable entities and typed properties for relationships. Tags
represent classes/capabilities (`HM Item`, `HM Space`, `HM Generated`), not a
second folder hierarchy. The dashboard and durable-page indexes are projections
of relationships; linked references remain provenance.

Agent-owned main-body navigation must:

- live beneath a root tagged `#HM Generated`;
- show only populated, useful sections;
- use short human labels while durable page titles remain globally unique;
- preserve all human-authored siblings;
- converge stale generated children deterministically;
- never expose a serial number.

Canonical durable titles must:

- start with exactly one type marker: `🏠` Home, `📍` Space, `⚙️` System,
  `🟢` Item, or `📄` Document;
- treat marked and legacy unmarked forms as one logical identity in every
  preflight and materialization lookup;
- preserve page UUIDs and typed relationships during migration;
- stop before mutation if the marked target is occupied;
- save an official graph export before the first rename;
- keep generated dashboard and relationship aliases marker-free.

Item titles are search-first rather than folder-first:
`🟢 <object noun> — <manufacturer model> · <room> · <home>`. This makes the
human term appear at the start of a title match while typed `hm-home` and
`hm-location` properties remain the real hierarchy. Do not infer hierarchy
from the title. Preserve the exact model in `hm-model`. Normalize `/` to `∕`
in the visible page title only, because an ASCII slash can trigger Logseq
namespace behavior; dashboard labels may continue to display the exact model.

Rendered QA must search for a representative appliance term and confirm that
every visible result whose breadcrumb/title starts with `🟢` resolves inside
the same canonical Item page. A containing `📍` room may also match because its
generated index mentions the appliance; captures, evidence, citations, and
narrative may match too. The exact Item page result should rank ahead of
non-title matches when Logseq's current search ordering permits it.

## 9. Bridge, Codex, and receipt changes

The bridge must:

- bind only to loopback;
- authenticate mutating endpoints;
- allow one Codex process at a time;
- coalesce additional events and re-scan afterward;
- avoid starting Codex when deterministic scanning finds no changed capture;
- enforce a bounded timeout;
- positively identify an interrupted child process before terminating it;
- delete raw transcripts whether the run succeeds, fails, times out, or the
  bridge restarts;
- persist only bounded fields:
  `status`, `capture_uuid`, `record_uuid`, and `reason_code`.

Never trust free-form model text as a successful receipt. A missing, malformed,
duplicate, or out-of-batch result leaves that capture pending.

## 10. Privacy and public artifacts

Before publishing:

- scan tracked text and release contents for absolute local paths, tokens,
  secrets, scratch graph names, test UUIDs, and raw transcripts;
- inspect every committed screenshot manually;
- replace visible serial values with a semantic label such as “Stored
  privately”;
- exclude incidental development screenshots with `.gitignore`;
- confirm runtime config and state files are owner-readable only;
- confirm no `*-codex.log` or active-run marker remains;
- run `privacy-audit` against the production graph.

Model numbers and official product links can be public examples; serial
numbers, private addresses, API tokens, graph exports, and original household
photos cannot.

## 11. Versioning and release

For a product release:

1. Update `skills/logseq-home-os/assets/logseq-home-os-capture/package.json`.
2. Update `HOME_OS_GENERATOR_VERSION` in `home-os.mjs`.
3. Update both `?v=` script cache keys in the Logseq plugin `index.html`.
4. Set the matching base product version in
   `.codex-plugin/plugin.json`; the cachebuster suffix is added later.
5. Update user-facing release notes and the release-gate report.
6. Rebuild both generated artifacts.
7. Run every validation layer.
8. Run the plugin-creator cachebuster for `.codex-plugin/plugin.json`.
9. Validate the Codex plugin and skill and reinstall the local package.
10. Build the Logseq archive using the same file list as
   `.github/workflows/publish.yml`.
11. Test the archive, compare each entry with source, calculate SHA-256, and
   secret-scan its text entries.
12. Commit and push a clean tree.
13. Tag the release and wait for the GitHub Actions build.
14. Download the public release asset, test the zip, inspect its package
    version, and repeat the secret scan.
15. Render the public GitHub README and confirm all documentation images load.

Keep GitHub Actions majors current and run `workflow_dispatch` on `main` after
workflow changes. A tag build must attach a real plugin zip in addition to
GitHub's automatic source archives.

## 12. Logseq marketplace updates

The public plugin repository and release must exist before marketplace
submission. The upstream package contains only the reviewed `manifest.json`
and icon.

For a new submission or material metadata update:

1. Verify the public repository, README, screenshots, release, and zip.
2. Synchronize `marketplace/logseq-home-os-capture/manifest.json`.
3. Fork/update `logseq/marketplace`.
4. Add or update `packages/logseq-home-os-capture/`.
5. Open a focused pull request and wait for upstream review.
6. Do not claim marketplace availability until the pull request is merged and
   the live catalog contains the plugin.

Normal Home OS code releases do not require a marketplace PR when the
repository identifier and manifest metadata remain unchanged.

## 13. Incident and recovery behavior

- **Wrong graph:** stop. Restore configuration; do not attempt a fallback
  write path.
- **Logseq unavailable/restarting:** return a retryable message; leave captures
  untouched.
- **Bridge unavailable:** capture remains usable; show a local companion
  message.
- **Schema collision:** stop before mutation and report the exact title or
  property conflict.
- **Partial schema setup:** restore the prepared setup session and resume
  idempotently through the native plugin.
- **Codex crash/timeout:** terminate only the positively identified run, remove
  the raw transcript, sanitize the receipt, and leave unreceipted captures
  pending.
- **Privacy audit failure:** block readiness and release until the public
  surface or local file is corrected.
- **Integrity audit failure:** block materialization/dashboard refresh; repair
  deliberately with a backup rather than hiding the finding.

Never recover by editing Logseq's database files.

## 14. Definition of done

A change is complete only when:

- the intended behavior works in the supported Logseq DB environment;
- immutable captures and human-authored blocks are preserved;
- deterministic and negative tests pass;
- schema, record, privacy, and serial audits pass;
- the installed runtime matches final source;
- relevant UI is readable after a cold restart;
- public documentation matches actual behavior;
- package validators and dependency audits pass;
- generated artifacts and release assets are reproducible;
- no known failure is concealed behind a warning or manual cleanup step.
