import transit from "transit-js";

const keyword = (value) => transit.keyword(String(value).replace(/^:/, ""));
const uuid = (value) => transit.uuid(value);

export function buildSchemaImport(properties, classes = []) {
  const propertyEntries = [];
  for (const property of properties) {
    const spec = [
      keyword("block/title"), property.title,
      keyword("build/keep-uuid?"), true,
      keyword("logseq.property/type"), keyword(property.type),
      keyword("db/cardinality"), keyword(`db.cardinality/${property.cardinality}`),
      keyword("logseq.property/ui-position"), keyword("properties"),
    ];
    if (property.blockUuid) spec.push(keyword("block/uuid"), uuid(property.blockUuid));
    if (property.propertyClasses?.length) {
      spec.push(keyword("build/property-classes"), property.propertyClasses.map(keyword));
    }
    if (property.choices?.length) {
      spec.push(
        keyword("build/closed-values"),
        property.choices.map((choice) => transit.map([
          keyword("uuid"), uuid(choice.uuid),
          keyword("value"), choice.value,
        ])),
      );
    }
    propertyEntries.push(keyword(property.ident), transit.map(spec));
  }

  const classEntries = [];
  for (const classSpec of classes) {
    const spec = [
      keyword("block/title"), classSpec.title,
      keyword("block/uuid"), uuid(classSpec.blockUuid),
      keyword("build/keep-uuid?"), true,
    ];
    if (classSpec.extends?.length) {
      spec.push(keyword("build/class-extends"), classSpec.extends.map(keyword));
    }
    if (classSpec.properties?.length) {
      spec.push(keyword("build/class-properties"), classSpec.properties.map(keyword));
    }
    classEntries.push(keyword(classSpec.ident), transit.map(spec));
  }

  const root = [keyword("properties"), transit.map(propertyEntries)];
  if (classEntries.length) root.push(keyword("classes"), transit.map(classEntries));
  return transit.writer("json").write(transit.map(root));
}

export function readSchemaImport(payload) {
  return transit.reader("json").read(payload);
}
