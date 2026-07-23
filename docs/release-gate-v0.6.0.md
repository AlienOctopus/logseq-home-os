# Home OS v0.6.0 Release Gate

Status: **passed**

Validated on July 23, 2026 with Logseq 2.0.1 on macOS against Logseq's DB
graph line and the bundled Codex runtime.

## Adversarial acceptance matrix

| Gate | Result |
|---|---|
| Brand-new DB graph, first connected-H click, guided setup, official export, and automatic resume | Passed |
| Canonical parent capture with nested photos and notes | Passed |
| Serial number stored as a first-class Item property and excluded from public narrative, receipts, and dashboard text | Passed |
| A second capture attaches evidence to the existing durable record without replacing identity | Passed |
| Exact replay and repeated dashboard refresh remain idempotent | Passed |
| A changed subtree invalidates a stale source fingerprint before materialization | Passed |
| Existing human page with the proposed record title is never taken over | Passed |
| Conflicting serial, home, room, photo, and source relationships stop before any partial durable write | Passed |
| Wrong configured graph blocks reads and mutations | Passed |
| Missing localhost companion produces a clear, non-destructive Logseq message | Passed |
| Stale generated dashboard/index nodes converge while adjacent human blocks remain untouched | Passed |
| Corrupt durable structures are detected: multiple kinds, cardinality violations, home/location mismatch, parent-space cycles, and orphans | Passed |
| Interrupted Codex process is positively identified, terminated, and its raw transcript removed before the bridge accepts new work | Passed |
| Codex runs have a bounded timeout; unreceipted captures remain pending | Passed |
| Partial Codex batch accepts only bounded per-capture receipts and leaves blocked work pending | Passed |
| Local runtime uninstall/reinstall preserves graph records, captures, exports, state, and audit receipts | Passed |
| Cold Logseq restart loads the installed plugin, opens the dashboard, and reports no browser console or page errors | Passed |

## Final production invariants

- Schema version: 2
- Durable records: 4
- Integrity errors: 0
- Integrity warnings: 0
- Items: 2
- Items with captured serial numbers: 2 of 2
- Privacy violations: 0
- Changed captures waiting: 0
- Bridge: running, idle, and ready
- Setup completion pending: no
- Raw Codex transcripts present: 0
- Active Codex run marker present: no

The six enumerated Logseq properties use the documented-value mode described
in the project README because the current DB SDK still has a
validator/UUID-conversion mismatch for plugin-scoped native closed choices.
This is an explicit compatibility mode, not a failed gate. Tags, inheritance,
typed properties, ranges, and property attachments are native DB structure.

## Build and security checks

- Helper syntax and deterministic self-tests: passed
- Logseq plugin production build: passed
- Root and Logseq plugin npm audits: 0 vulnerabilities
- Codex plugin validation: passed
- Codex skill validation: passed
- Owner-only local support directory, config, state, and receipts: passed
- Source and release secret scan: passed
- Installed Logseq and Codex package verification: passed
- Distribution archive integrity and contents: passed

Final UI evidence: [production dashboard](media/home-os-v060-production-final.png)

Release archive SHA-256:
`87a750a62cf6222e70de36a6efffdd97e3b304ad5e5239e973d4812c15204c27`
