import { describe, expect, test } from "vitest";
import { upperCaseFirst } from "./string.utils";

describe("upperCaseFirst", () => {
  test("should return an empty string when input is an empty string", () => {
    expect(upperCaseFirst("")).toBe("");
  });

  test("should capitalize the first letter of a single character string", () => {
    expect(upperCaseFirst("a")).toBe("A");
  });

  test("should capitalize the first letter of a multiple character string", () => {
    expect(upperCaseFirst("hello")).toBe("Hello");
  });

  test("should return the same string if the first character is already capitalized", () => {
    expect(upperCaseFirst("Hello")).toBe("Hello");
  });

  test("should handle strings with special characters correctly", () => {
    expect(upperCaseFirst("!hello")).toBe("!hello");
    expect(upperCaseFirst("123hello")).toBe("123hello");
  });

  test("should handle strings with leading whitespace correctly", () => {
    expect(upperCaseFirst(" hello")).toBe(" hello");
  });
});
