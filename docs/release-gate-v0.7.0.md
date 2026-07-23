# Home OS v0.7.0 Release Gate

Status: **passed**

Validated on July 23, 2026 with Logseq 2.0.1 on macOS against Logseq's DB
graph line and the bundled Codex runtime.

## Adversarial acceptance matrix

| Gate | Result |
|---|---|
| Brand-new DB graph, cold plugin load, first connected-H click, guided setup, official export, and automatic dashboard open | Passed |
| Literal nested `#HomeCapture` with manufacturer, model, and serial children | Passed |
| Fresh materialization creates one Home, one Space, one Item, and one source review | Passed |
| Exact replay reuses every UUID, creates no second source review, and adds zero generated children | Passed |
| A conflicting serial stops before mutation and preserves the stored serial | Passed |
| Duplicate durable identities and duplicate source fingerprints are detected instead of silently selected | Passed |
| Canonical-title preflight detects occupied targets before mutation | Passed |
| Canonical-title migration saves an official export and renames owned pages by UUID | Passed |
| A second title migration and dashboard refresh perform zero renames | Passed |
| Item titles put the ordinary noun first and use `🟢` as the stable search affordance | Passed |
| Home, Space, System, and Document records use distinct `🏠`, `📍`, `⚙️`, and `📄` markers | Passed |
| Exact model values remain in `hm-model`; ASCII `/` becomes namespace-safe `∕` in page titles only | Passed |
| Native search for both production Items shows the canonical page as the first green result | Passed |
| Clicking the green microwave and refrigerator results opens the original Item UUIDs | Passed |
| Dashboard, Home, and Space main-body indexes retain compact marker-free aliases | Passed |
| Serial numbers remain first-class Item properties and do not leak into generated navigation or public receipts | Passed |
| Wrong graph, stale fingerprint, unsafe URL, invalid asset UUID, relationship conflict, parent-space cycle, and multiple-kind guards | Passed |
| Interrupted or partial Codex work remains bounded by sanitized per-capture receipts | Passed |
| Local runtime uninstall/reinstall preserves graph records, captures, exports, state, and audit receipts | Passed |
| Logseq plugin JavaScript cache keys match the release version after reinstall | Passed |
| Rendered Logseq checks cover search, canonical Item pages, dashboard navigation, and exact UUID preservation | Passed |

## Final production invariants

- Schema version: 2
- Durable records: 4
- Source reviews: 3
- Integrity errors: 0
- Integrity warnings: 0
- Canonical-title conflicts: 0
- Canonical-title migrations pending: 0
- Items: 2
- Items with captured serial numbers: 2 of 2
- Privacy violations: 0
- Changed captures waiting: 0
- Bridge: running, idle, and ready
- Setup completion pending: no

The six enumerated Logseq properties use the documented-value mode described
in the project README because the current DB SDK still has a
validator/UUID-conversion mismatch for plugin-scoped native closed choices.
This is an explicit compatibility mode, not a failed gate. Tags, inheritance,
typed properties, ranges, and property attachments are native DB structure.

## Build and security checks

- Helper syntax and deterministic self-tests: passed
- Logseq plugin production build: passed
- Root runtime and Logseq plugin npm audits: 0 vulnerabilities
- Codex plugin validation: passed
- Codex skill validation: passed
- Owner-only local support directory, config, state, and receipts: passed
- Source and release secret scan: passed
- Installed Logseq and Codex package verification: passed
- Distribution archive integrity and source-byte comparison: passed

Rendered search evidence:
[canonical green Item result](media/home-os-search-canonical-v0.7.0.png)

Local release archive SHA-256:
`a6f3dff86368dfbca5522b4f1c9a0123b9d80b3c7cf11c6edb3d3459e54c2e8b`
