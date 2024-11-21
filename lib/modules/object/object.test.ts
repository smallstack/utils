import { describe, expect, test } from "vitest";
import { isEmptyObject, removeNullish } from "./object.utils";

describe("ObjectUtils", () => {
  test("can detect if an object is empty", () => {
    expect(isEmptyObject("")).toBeFalsy();
    expect(isEmptyObject(undefined)).toBeFalsy();
    expect(isEmptyObject(null)).toBeFalsy();
    expect(isEmptyObject([])).toBeFalsy();
    expect(isEmptyObject({ hello: "world" })).toBeFalsy();
    expect(isEmptyObject({})).toBeTruthy();
  });

  test("can use removeNullish to remove nullish values", () => {
    expect(
      removeNullish(
        { address: { geoJson: { coordinates: [] } } },
        { removeEmptyArrays: true, removeEmptyObjects: true }
      )
    ).toEqual({});
  });
});
