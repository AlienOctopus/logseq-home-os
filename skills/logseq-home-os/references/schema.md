# Home OS schema

## Modeling rule

- Tags define schemas and inherited behavior.
- Pages represent unique durable things.
- Properties hold typed facts and relationships.
- Blocks represent captures, events, tasks, and narrative.
- Views project the same records without duplication.
- Captures are source evidence, source reviews are replaceable interpretations, and durable records are resolved knowledge. Never collapse those three layers into one node.

## Tags

```text
#HM Record (abstract)
  #HM Home
  #HM Space
  #HM System
  #HM Item
  #HM Document
#HM Capture
#HomeCapture extends #HM Capture
#HM Generated
  #HM Evidence
```

`#HomeCapture` is intentionally one word so a mobile user can type it quickly on any journal block.
The v2 installer deliberately stops at these ten tags. Maintenance, service, provider, receipt, and specification workflows can extend `#HM Record` later without changing the capture/source-review boundary.

## Core relationships

- `hm-home`: Node, one, range `#HM Home`
- `hm-location`: Node, one, range `#HM Space`
- `hm-parent-space`: Node, one, range `#HM Space`; reject cycles
- `hm-part-of-system`: Node, many, range `#HM System`
- `hm-related-to`: Node, many, range descendants of `#HM Record`
- `hm-source-evidence`: Node, many, range `#HM Evidence`
- `hm-source-capture`: Node, one, range `#HomeCapture`
- `hm-proposed-record`: Node, many, range descendants of `#HM Record`

The v2 installer attaches no generated properties to `#HomeCapture`. The human-owned capture and its descendants remain untouched; the source review carries processing state and provenance.

## Source review properties

- `hm-source-capture`: Node, one, required, range `#HomeCapture`
- `hm-source-fingerprint`: Text, one, required; `capture-v2` SHA-256 of the semantic capture subtree (human content and structure, excluding volatile Logseq runtime metadata)
- `hm-schema-version`: Text, one, required
- `hm-generator-version`: Text, one
- `hm-generated-at`: Date, one
- `hm-evidence-status`: documented values `Interpreted`, `Needs review`, `Blocked`, `Superseded`
- `hm-evidence-kind`: documented values `Photo`, `Document`, `Note`, `Receipt`, `Manual`, `Mixed`
- `hm-identity-confidence`: documented values `Low`, `Medium`, `High`, `Verified`
- `hm-proposed-record`: Node, many, range descendants of `#HM Record`

Each source review contains consistent narrative children:

```text
- Direct observations
- Identity candidates and exact identifiers
- Source-backed findings and citations
- Conflicts and open questions
- Proposed durable-record changes
```

Reprocessing the same changed capture creates or updates the review for that source fingerprint. A new fingerprint supersedes the previous review; it does not rewrite the capture or silently overwrite a conflicting durable fact.

## Item properties

- `hm-category`: documented values `Appliance`, `Equipment`, `Fixture`, `Control point`, `Safety device`, `Technology`, `Structural component`, `Other`
- `hm-manufacturer`, `hm-model`: Text
- `hm-serial`: Text, one, first-class and privacy-sensitive; populate whenever legible in source evidence, preserve exact characters, show it on the private Item record, and exclude it from dashboard text, logs, receipts, QR content, and public summaries
- `hm-home`: Node, one, range `#HM Home`
- `hm-location`: Node, one, range `#HM Space`
- `hm-part-of-system`: Node, many, range `#HM System`
- `hm-installed-date`, `hm-warranty-until`: Date, one
- `hm-lifecycle`: documented values `Active`, `Spare`, `Replaced`, `Removed`, `Unknown`
- `hm-verification`: documented values `Captured`, `Identified`, `Verified`, `Needs review`, `Blocked`
- `hm-primary-photo`, `hm-nameplate-photo`, `hm-official-manual`: Node, one, range Logseq's built-in `#Asset` class
- `hm-official-manual-url`, `hm-product-url`: URL, one

## Asset rule

Asset relationships are single-value Node properties restricted to Logseq's built-in `#Asset` class. This preserves first-class DB asset nodes instead of copying graph paths into strings. Keep additional photos, receipts, and manuals as related Asset nodes or `#HM Document` records.

## Serial contract

Every `HM Item` materialization must declare `record.serialDisposition` as one of `captured`, `not-visible`, `unreadable`, `conflicting`, or `not-applicable`. `captured` requires an exact `record.serial`, and a populated serial requires `captured`. `unreadable` and `conflicting` require a source review in `Needs review`.

The processor must inspect every supplied nameplate or identifier photo at original resolution and rotate, crop, or zoom it when useful. Manufacturer/model recognition does not satisfy the serial check. If the serial is legible, `hm-serial` must be populated even when the durable Item already exists. Materialization fills a missing serial but never overwrites a different stored serial; a conflict stops safely for review without printing either value in logs or receipts.

## Dashboard rule

`Home OS` is the human-facing operating surface, not the home record itself. `Home` (or another user-specific nickname) is an `#HM Home` durable record. The dashboard contains one top-level `Your home at a glance` block tagged `#HM Generated`; Home OS owns only that subtree and preserves every other block on the page.

The generated subtree begins with an exact nested capture example and groups navigation into `Your home`, `Rooms & areas`, `Appliances & equipment`, `Home systems`, `Manuals & records`, and `Inbox & review`. Every type heading links to its native Logseq tag page, whose built-in views remain the live table of record. Durable links use a short final-segment label while preserving their exact page target. The dashboard may list only real durable pages returned by each tag; it must not pre-create imaginary rooms, appliances, systems, or documents.

## Canonical record title and Finder rule

Durable record pages use clean human titles:

- `My home` — `HM Home`
- `My home · Basement` — `HM Space`
- `My home · HVAC` — `HM System`
- `Refrigerator — Whirlpool WRS325SDHZ · Basement · My home` — `HM Item`
- `My home · Basement · Refrigerator warranty` — `HM Document`

The native tag is the record type. Type is never encoded as title decoration.
**Find in Home OS** queries only the five durable tags, deduplicates nodes by
UUID, renders type as an icon and badge, and opens the chosen canonical record
directly. Logseq's graph-wide search is not a supported Home OS retrieval
surface because it correctly includes captures, evidence, generated indexes,
citations, and incidental mentions.

Item titles are object-first:
`<ordinary object noun> — <manufacturer model> · <space> · <home>`. The
ordinary term remains the primary Finder label. This is presentation, not
hierarchy. `hm-home`, `hm-location`, and the other typed relationships remain
authoritative. Exact identifier text belongs in `hm-model`; the visible title
replaces ASCII `/` with `∕` so a model suffix cannot be interpreted as a
Logseq namespace.

The helper treats each legacy marker variant (`🏠`, `📍`, `⚙️`, `🟢`, `📄`)
and the clean form as one proposed identity during ownership preflight. Before
materialization or dashboard refresh, it plans an owned-page-only migration,
stops on any target collision, saves an official graph export, renames by page
UUID through the supported Logseq API, and verifies that every UUID is
unchanged. A human page at the clean target title is never taken over.

Logseq DB releases may return either title-backed or UUID-backed page-reference text through the API. Dashboard idempotency therefore compares both exact human-authored aliases and their canonical UUID variants.

## Durable-page index rule

Native linked references are provenance and graph context; they are not the primary Home OS table of contents. Home OS projects typed relationships into small generated outlines in each useful durable page's main body:

- Home: `Inside this home` with Rooms & areas, Home systems, and records not yet assigned to a room.
- Space: `What's here` with nested areas, Appliances & equipment, Home systems, and Manuals & records.
- System: `Connected to this system` when related items or documents exist.
- Item: `Related information` when related documents exist.
- Document: `Related to this record` when relationships exist.

Each projection root carries `#HM Generated`. Home OS may replace or remove only that generated subtree, saves an official graph export before stale generated links are removed, and preserves every human-authored sibling. Empty categories are omitted. An empty Home or Space gets one actionable capture hint; empty System, Item, and Document projections are omitted entirely. Projection links are navigation only: the typed properties and durable record pages remain the single source of truth.

Use `My home` as the fallback home nickname when the owner has not supplied one. Avoid the generic durable page title `🏠 Home`, which can still be confused with Logseq's native Home concept or an existing `#home` tag.

## Human labels

The `hm-*` property key is the stable machine identity and never changes. Schema v2 gives each property a human display label—such as `Room or area`, `Manufacturer`, `Model`, `Serial number`, `Official manual`, and `Source reviews`—by updating the property node title while preserving its plugin property ident, type, range, attachments, and stored values. Code, materialization payloads, and migrations continue to address the stable `hm-*` key.

## Installer contract

`schema-plan` performs only reads. It reports each tag and property as `create` or `reuse`, detects incompatible property types/cardinality/ranges, and produces a plan-derived confirmation token.

`schema-apply` accepts only the current exact token. Before its first mutation it saves an official `logseq.App.export_edn` graph backup under `.logseq-agent-audit/backups/`. It then uses official tag/property APIs for typed properties, human display labels, node ranges, and tag-property attachments. When class inheritance remains, it returns a bounded list of operations for the native Logseq plugin to execute in its own SDK context, then verifies the complete structure. It never deletes or renames human content; it may update only Home OS property display titles while preserving their stable idents and values.

The six enumerated properties use a documented-value fallback on current Logseq nightlies. The helper reports `choiceMode: documented` and verifies all structural relationships. Native closed values can be enabled later without changing property names or record semantics once Logseq's plugin-property validator and UUID bridge accept that path reliably.

## Record-worthiness rule

Create an Item page when the thing has a model/manual/warranty, needs maintenance or consumables, is costly or safety-relevant, has service history, or must be referenced elsewhere. Keep trivial objects and unverified suggestions inside captures until they meet that threshold.
