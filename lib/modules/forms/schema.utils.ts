export function getSchemaForPath(schema: any, path: string): any {
  // split the path into an array of keys
  const keys = path.split(".");
  let current = schema;
  for (const key of keys) {
    if (!current.properties) {
      return undefined;
    }
    current = current.properties[key];
  }
  return current;
}
