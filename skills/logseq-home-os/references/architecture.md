# Architecture

## Components

1. **Logseq DB graph** — source of truth and user interface.
2. **`#HomeCapture` journal block** — human-owned immutable source envelope.
3. **`#HM Evidence` source review** — replaceable, versioned interpretation linked to one source capture and its semantic subtree fingerprint.
4. **Durable Home records** — long-lived Home, Space, System, Item, and Document nodes resolved from evidence rather than directly from photos.
5. **Native `Home OS` dashboard** — a normal Logseq page whose single `#HM Generated` subtree links to live tag-page tables and real durable records. It is navigation, not a second database.
6. **Durable-page indexes** — small `#HM Generated` main-body projections derived from typed relationships. Home and Space pages remain useful destinations while native linked references stay below as provenance.
7. **Native Logseq capture plugin** — receives `logseq.DB.onChanged`, debounces, and sends a fixed event to localhost. Its single connected-H action opens the operating surface and checks the inbox; a command-palette action can process without navigating.
8. **Home OS bridge** — verifies graph and schema identity, creates or repairs the generated dashboard and durable-page indexes, queries only capture-tagged nodes, fingerprints their subtrees, rate-limits runs, and starts Codex only for changed captures.
9. **Codex Home OS skill** — produces a normalized source review, performs bounded identification/research, and proposes additive durable-record changes through supported APIs.

## Event sequence

```text
mobile journal photo + #HomeCapture
  -> Logseq Sync
  -> desktop Logseq transaction
  -> native DB.onChanged event
  -> 8-second debounce
  -> localhost bridge notification
  -> deterministic capture scan/fingerprint
  -> no change: stop
  -> schema not ready: stop with setup-required status
  -> changed: one bounded Codex run
  -> replaceable #HM Evidence source review with citations
  -> resolve/merge into additive durable record
  -> refresh native Home OS dashboard and durable-page indexes
  -> verify source, evidence, record, and machine-readable run receipt
  -> record handled fingerprint only for accepted outcomes
```

Materialization receipts are appended with owner-only permissions under the
target graph's `.logseq-agent-audit/` directory. This keeps the receipt inside
the explicitly writable graph boundary used by an event-driven Codex sandbox;
bridge lifecycle events remain in the owner-only Home OS application-support
directory.

Codex stdout is treated as transient sensitive material. Home OS parses only the
bounded machine receipts it needs, strips free-form fields, writes the sanitized
receipt with owner-only permissions, and deletes the raw transcript after every
run. An owner-only active-run marker lets a restarted bridge terminate only its
own positively identified orphaned Codex process and remove any interrupted raw
transcript before accepting new work. Runs are also bounded by a configurable
timeout.

On an uninitialized graph, the first dashboard action inserts a guided setup phase before the scan: preview the additive plan, save an official export, create the base schema, let the native plugin complete class inheritance, create the generated dashboard, verify, open the dashboard, and resume the original processing request automatically.

Capture fingerprint algorithm `capture-v2` hashes the complete human-visible subtree after recursively discarding Logseq runtime metadata such as database IDs, timestamps, parent/page projections, collapsed state, and ordering fields. Titles, notes, properties, assets, tags, child content, and child order remain significant. During migration, the scanner also recognizes the previous whole-object hash so an already handled capture is not falsely requeued merely because the plugin upgraded.

## Ownership

| Surface | Owner | Agent permission |
|---|---|---|
| Capture title, children, assets | Human | Read only |
| Source review | Agent-generated, source-linked | Regenerate or supersede; never treat as the source |
| Durable Home OS relationship properties | Shared schema | Add/update allowlisted values |
| `#HM Generated` child subtree | Agent | Replace/update |
| `Home OS` dashboard page outside its generated root | Human | Preserve |
| Durable record page outside its generated index root(s) | Human | Preserve |
| Service history and retired records | Historical record | Append/status update only |
| Other graph content | Human | No access |

## Why not alternatives

- **Direct SQLite watcher:** bypasses Logseq's DB worker and sync transaction semantics.
- **Cron-only polling:** wakes work when nothing changed and cannot provide an immediate native trigger.
- **Codex lifecycle hook:** runs around Codex activity, not external Logseq database transactions.
- **Logseq plugin calling the OpenAI API:** requires separate API billing/credentials and puts orchestration inside the note app.
- **Codex plugin alone:** packages workflow but does not stay resident as an external-event listener.

## Failure behavior

- Logseq closed: no DB event; synced captures are noticed when Logseq opens and emits/receives a later transaction, or via manual trigger.
- Bridge closed: native plugin shows a manual-trigger error; source capture remains safe.
- Codex unavailable: queue remains and no Logseq mutation occurs.
- Bridge crash during Codex: the next bridge start terminates the positively identified orphan, removes its raw transcript, and leaves every unreceipted capture pending.
- Codex exceeds its bounded runtime: terminate it, keep unreceipted captures pending, and report a failed/partial run.
- Schema missing or outdated: do not launch Codex; preserve the changed capture and return setup-required.
- Logseq API read stalls: abort at the configured timeout; never fan out unbounded page reads.
- Research uncertain: create no asserted identity; mark `Needs review`.
- Missing or blocked machine-readable result receipt: do not mark the capture handled.
- Agent-generated DB event: fingerprint scan observes no unhandled human capture and exits, preventing loops.
- Existing page or block title collision: stop before attaching tags or properties; never take over human content.
- Conflicting home, room, photo, or serial relationship: preserve the existing value and stop for explicit review.
- Corrupt record graph (multiple durable kinds, parent-space cycle, or home/location mismatch): block materialization and dashboard refresh until repaired.
