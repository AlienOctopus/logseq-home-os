# Home OS v0.8.0 release gate

Validated on 2026-07-24 against Logseq 2.0.1 DB graphs on macOS.

## Retrieval contract

- The connected-H action acknowledges immediately with a loading Finder.
- Finder input becomes interactive only after setup, title migration, and
  dashboard convergence checks finish.
- Finder queries only `HM Home`, `HM Space`, `HM System`, `HM Item`, and
  `HM Document` through the official Logseq plugin SDK.
- Results are deduplicated by UUID. Captures, evidence, citations, generated
  relationship mentions, and narrative blocks cannot enter the result set.
- `microwave` returned exactly one production row and opened UUID
  `6a6185b5-3ecf-4d45-9db7-52b2dcd5cca8`.
- `refrigerator` returned exactly one production row and opened UUID
  `6a617926-ae38-485d-974e-0823edfcbb4a`.
- `kitchen` ranked the exact Room/Area first, followed by the two located
  appliances with explicit type badges.
- Object, manufacturer, model, multi-token, punctuation, diacritic, empty,
  and no-match behavior passed deterministic tests.
- Arrow-key selection, Enter-to-open, pointer opening, Escape, dashboard
  navigation, light mode, dark mode, and a 390-pixel viewport were rendered.

## Canonical-title migration

- Durable record type is authoritative through native `HM` tags, not title
  emoji.
- Production migration preflight found four owned pages and zero conflicts.
- The generic `🏠 Home` edge case resolved to `My home` instead of colliding
  with Logseq's native `Home` page.
- Room and Item titles propagated `My home` through typed relationships.
- All four production UUIDs remained unchanged.
- An official Logseq export was saved before migration, plus the migration's
  own supported export.
- A second dashboard convergence produced zero title migrations and zero
  generated-node cleanup.

## Integrity, privacy, and runtime

- `doctor` reports `readyForProcessing: true`.
- Schema: ready, 10 tags and 28 properties present, zero conflicts.
- Record audit: four durable records, three evidence records, zero errors and
  zero warnings.
- Serial coverage: two of two Items populated; values never enter Finder,
  dashboard text, logs, receipts, or this document.
- Privacy audit: zero violations across eight graph surfaces and seven local
  files.
- Changed-capture scan: zero production captures waiting.
- Bridge health now exposes graph name, graph path, and generator version.
  Processing readiness rejects a bridge/config identity or version mismatch.
- A manual event arriving during another check is queued with a stable run ID
  rather than being lost.

## Build and distribution

- Logseq plugin tests, bundle build, syntax checks, helper self-tests, package
  audits, Codex skill validation, and plugin validation pass.
- Rendered Logseq QA used Playwright over the running Electron CDP endpoint
  because the native Browser connector cannot operate Logseq's `lsp://`
  desktop surface.
- Public Finder screenshot uses a disposable graph with synthetic appliance
  data and contains no serial number or private production content.
