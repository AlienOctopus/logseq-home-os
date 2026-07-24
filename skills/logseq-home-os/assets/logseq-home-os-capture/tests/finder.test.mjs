import assert from "node:assert/strict";
import test from "node:test";

import {
  filterFinderRecords,
  finderRecord,
  normalizeSearchText,
  stripLegacyMarker,
} from "../src/finder.mjs";

const records = [
  finderRecord({
    uuid: "microwave",
    title: "🟢 Microwave — KitchenAid KMHC319LSS00 · Kitchen · Home",
    kind: "HM Item",
  }),
  finderRecord({
    uuid: "refrigerator",
    title: "Refrigerator — LG LFXS29766S∕00 · Kitchen · Home",
    kind: "HM Item",
  }),
  finderRecord({
    uuid: "kitchen",
    title: "📍 Home · Kitchen",
    kind: "HM Space",
  }),
  finderRecord({
    uuid: "home",
    title: "🏠 Home",
    kind: "HM Home",
  }),
];

test("legacy record markers are presentation-only", () => {
  assert.equal(stripLegacyMarker("🟢 🟢 Microwave"), "Microwave");
  assert.equal(stripLegacyMarker("Microwave"), "Microwave");
});

test("item records expose a human primary label and structured detail", () => {
  assert.deepEqual(
    {
      title: records[0].title,
      sourceTitle: records[0].sourceTitle,
      primary: records[0].primary,
      detail: records[0].detail,
      kindLabel: records[0].kindLabel,
    },
    {
      title: "Microwave — KitchenAid KMHC319LSS00 · Kitchen · Home",
      sourceTitle: "🟢 Microwave — KitchenAid KMHC319LSS00 · Kitchen · Home",
      primary: "Microwave",
      detail: "KitchenAid KMHC319LSS00 · Kitchen · Home",
      kindLabel: "Appliance or equipment",
    },
  );
});

test("finder search returns only matching canonical records", () => {
  assert.deepEqual(filterFinderRecords(records, "microwave").map((record) => record.uuid), ["microwave"]);
  assert.deepEqual(filterFinderRecords(records, "kitchenaid").map((record) => record.uuid), ["microwave"]);
  assert.deepEqual(filterFinderRecords(records, "kitchen").map((record) => record.uuid), [
    "kitchen",
    "microwave",
    "refrigerator",
  ]);
});

test("exact ordinary-name matches rank first", () => {
  const similarlyNamed = [
    ...records,
    finderRecord({
      uuid: "microwave-manual",
      title: "Home · Kitchen · Microwave manual",
      kind: "HM Document",
    }),
  ];
  assert.deepEqual(
    filterFinderRecords(similarlyNamed, "microwave").map((record) => record.uuid),
    ["microwave", "microwave-manual"],
  );
});

test("search normalization is punctuation and diacritic tolerant", () => {
  assert.equal(normalizeSearchText("Café / LFXS29766S∕00"), "cafe lfxs29766s 00");
});
