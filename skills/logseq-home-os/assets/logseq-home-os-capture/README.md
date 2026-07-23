# Home OS Capture

Home OS Capture connects low-friction Logseq journal captures to the local
Home OS processing companion. It opens a native `Home OS` dashboard, watches
for changes, queues a deterministic scan, and provides a manual command-palette
trigger. It does not run an AI model or read Logseq's database
files directly.

## Capture something

Create one tagged parent block for one physical object, home system, document,
or issue. Put every related photo and note underneath it:

```text
- Refrigerator — basement utility room #HomeCapture
  - [full-appliance photo]
  - [model/serial-label photo]
  - Ice maker leaks occasionally
```

- Put `#HomeCapture` on the descriptive parent block.
- Add photos and notes as children of that parent.
- Use a separate tagged parent for each separate object or issue.
- Keep the original capture intact; Home OS adds structured records elsewhere.

## Open Home OS

Select the connected-H action or use **Home OS: Open dashboard** from
Logseq's command palette. The dashboard action opens the native `Home OS` page and checks for waiting
captures. The dashboard starts with a literal nested capture example, then
organizes real homes, rooms and areas, appliances and equipment, home systems,
manuals and records, and source reviews. Its links open Logseq's live records
and tag tables.

Home and room pages also receive a small generated index in their main body, so
appliances and equipment are visible before Logseq's linked-reference history.
System, item, and document indexes appear only when a real relationship exists.
Home OS owns only blocks tagged `#HM Generated`; notes you add beside them are
preserved.

Use **Home OS: Process new captures** from the command palette to process the
inbox without changing pages. Home OS immediately reports whether
there is nothing new, a run is already active, or one or more captures are now
processing. A completion message appears when the run finishes.

Home OS fingerprints the human content and structure of the entire tagged
subtree and skips it when nothing meaningful has changed. Logseq-only
timestamps and UI metadata do not requeue a capture.

On a new graph, the dashboard action opens a one-time setup card. It previews what
will be added, saves an official Logseq export, builds and verifies the graph
structure, creates the dashboard, and then resumes the waiting capture
automatically. There is no separate schema-install command for the user to
find.

The local Home OS companion must be installed and running for processing to
start. Capturing in Logseq remains available even when the companion is not
running.

## Privacy and safety

- The plugin communicates only with the configured loopback bridge on this Mac.
- Logseq remains the source of truth.
- The plugin does not delete, move, or rewrite `#HomeCapture` content.
- Readable serial numbers are stored only in the private `hm-serial` Item property, not in dashboard text, status messages, logs, or QR content.
- Raw Codex run transcripts are deleted after their bounded machine receipts are parsed and sanitized; bridge restart cleanup handles an interrupted run.
- Existing human pages and blocks are never silently converted into Home OS records when a title collides.
- It does not access Logseq's SQLite, WAL, sync, or db-worker files.

Home OS Capture is an early DB-graph prototype by **ZeroShot or Die**.
