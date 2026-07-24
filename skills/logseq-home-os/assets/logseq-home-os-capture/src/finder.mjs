const LEGACY_MARKERS = ["🏠", "📍", "⚙️", "🟢", "📄"];

export const FINDER_KINDS = Object.freeze([
  { tag: "HM Home", label: "Home", order: 0 },
  { tag: "HM Space", label: "Room or area", order: 1 },
  { tag: "HM System", label: "Home system", order: 2 },
  { tag: "HM Item", label: "Appliance or equipment", order: 3 },
  { tag: "HM Document", label: "Manual or record", order: 4 },
]);

export function stripLegacyMarker(value) {
  let title = String(value ?? "").trim();
  let changed = true;
  while (changed) {
    changed = false;
    for (const marker of LEGACY_MARKERS) {
      if (!title.startsWith(marker)) continue;
      title = title.slice(marker.length).trimStart();
      changed = true;
      break;
    }
  }
  return title;
}

export function finderRecord({ uuid, title, kind }) {
  const sourceTitle = String(title ?? "").trim();
  const cleanTitle = stripLegacyMarker(sourceTitle);
  const parts = cleanTitle.split(" · ").map((part) => part.trim()).filter(Boolean);
  let primary = parts.at(-1) || cleanTitle || "Untitled record";
  let detailParts = parts.slice(0, -1);

  if (kind === "HM Item" && cleanTitle.includes(" — ")) {
    const [objectName, identityAndLocation] = cleanTitle.split(/\s+—\s+/, 2);
    const identityParts = String(identityAndLocation ?? "")
      .split(" · ")
      .map((part) => part.trim())
      .filter(Boolean);
    primary = objectName.trim() || primary;
    detailParts = identityParts;
  }

  const definition = FINDER_KINDS.find((candidate) => candidate.tag === kind)
    ?? { tag: kind, label: "Home record", order: FINDER_KINDS.length };
  const detail = detailParts.join(" · ") || definition.label;

  return {
    uuid: String(uuid ?? ""),
    sourceTitle,
    title: cleanTitle,
    kind,
    kindLabel: definition.label,
    kindOrder: definition.order,
    primary,
    detail,
    searchText: normalizeSearchText([cleanTitle, primary, detail, definition.label].join(" ")),
  };
}

export function normalizeSearchText(value) {
  return String(value ?? "")
    .normalize("NFKD")
    .replace(/\p{Diacritic}/gu, "")
    .toLocaleLowerCase()
    .replace(/[^\p{Letter}\p{Number}]+/gu, " ")
    .trim();
}

function finderScore(record, query) {
  const primary = normalizeSearchText(record.primary);
  const title = normalizeSearchText(record.title);
  if (!query) return 100 + record.kindOrder;
  if (primary === query) return 0;
  if (primary.startsWith(query)) return 10;
  if (title.startsWith(query)) return 20;
  if (primary.includes(query)) return 30;
  return 40;
}

export function filterFinderRecords(records, query) {
  const normalizedQuery = normalizeSearchText(query);
  const tokens = normalizedQuery.split(" ").filter(Boolean);
  return records
    .filter((record) => tokens.every((token) => record.searchText.includes(token)))
    .sort((left, right) => (
      finderScore(left, normalizedQuery) - finderScore(right, normalizedQuery)
      || left.kindOrder - right.kindOrder
      || left.primary.localeCompare(right.primary)
      || left.detail.localeCompare(right.detail)
    ));
}
