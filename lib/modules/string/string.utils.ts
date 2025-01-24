/** Capitalize the first letter of a string */
export function upperCaseFirst(str: string): string {
  if (!str) return str;
  return str.charAt(0).toUpperCase() + str.slice(1);
}

/** Lowercase the first letter of a string */
export function lowerCaseFirst(str: string): string {
  if (typeof str !== "string") return str;
  return str.charAt(0).toLowerCase() + str.slice(1);
}

/** Converts "HelloWorld" to "hello_world" */
export function camelCaseToSnakeCase(str: string): string {
  return lowerCaseFirst(str).replace(
    /[A-Z]/g,
    (letter) => `_${letter.toLowerCase()}`
  );
}

/** Converts "hello-world" or "hello_world" to "HelloWorld" */
export function snakeCaseToCamelCase(
  str: string,
  lowerCamelCase = false
): string {
  const camelCase = str.replace(/([-_][a-zA-Z])/g, (group) =>
    group.toUpperCase().replace("-", "").replace("_", "")
  );
  if (lowerCamelCase) return lowerCaseFirst(camelCase);
  return upperCaseFirst(camelCase);
}

/** Returns a string based on the current (or given) timestamp */
export function getTimeAsCharacters(timestamp = Date.now()): string {
  return timestamp
    .toString()
    .split("")
    .map((n) => (Number(n) + 10).toString(36))
    .join("");
}

/** returns true if given string is typeof string & not undefined & not null & not '' */
export function isNonEmptyString(str: unknown): boolean {
  return (
    typeof str === "string" &&
    str !== "" &&
    str !== null &&
    str !== undefined &&
    str.trim() !== ""
  );
}

/** returns true if given string is typeof string and equals to "" */
export function isEmptyString(str: unknown): boolean {
  return typeof str === "string" && str === "";
}
