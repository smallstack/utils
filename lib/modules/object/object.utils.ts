/** returns true for `{}` */
export function isEmptyObject(obj: any): boolean {
  if (
    obj === null ||
    obj === undefined ||
    typeof obj !== "object" ||
    Array.isArray(obj)
  )
    return false;
  return Object.keys(obj).length === 0;
}

/**
 * Removes null and undefined values recursively from an object
 */
export function removeNullish<T>(
  obj: T,
  options: {
    removeEmptyStrings?: boolean;
    removeEmptyObjects?: boolean;
    removeEmptyArrays?: boolean;
  } = {
    removeEmptyStrings: false,
  }
): T {
  if (obj === undefined || obj === null) return obj;
  for (const key in obj) {
    if (typeof obj[key] === "object")
      obj[key] = removeNullish(obj[key], options);
    if (
      Array.isArray(obj[key]) &&
      (obj[key] as []).length === 0 &&
      options?.removeEmptyArrays === true
    )
      delete obj[key];
    if (
      obj[key] === null ||
      obj[key] === undefined ||
      (options?.removeEmptyStrings === true && (obj[key] as unknown) === "") ||
      (options?.removeEmptyObjects === true && isEmptyObject(obj[key]))
    )
      delete obj[key];
  }
  return obj;
}
