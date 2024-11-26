import { describe, expect, test } from "vitest";
import {
  camelCaseToSnakeCase,
  getTimeAsCharacters,
  lowerCaseFirst,
  snakeCaseToCamelCase,
  upperCaseFirst,
} from "./string.utils";

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

describe("lowerCaseFirst", () => {
  test("should return an empty string when input is an empty string", () => {
    expect(lowerCaseFirst("")).toBe("");
    expect(lowerCaseFirst(undefined as any)).toBe(undefined);
  });

  test("should lowercase the first letter of a single character string", () => {
    expect(lowerCaseFirst("A")).toBe("a");
  });

  test("should lowercase the first letter of a multiple character string", () => {
    expect(lowerCaseFirst("Hello")).toBe("hello");
  });

  test("should return the same string if the first character is already lowercase", () => {
    expect(lowerCaseFirst("hello")).toBe("hello");
  });

  test("should handle strings with special characters correctly", () => {
    expect(lowerCaseFirst("!Hello")).toBe("!Hello");
    expect(lowerCaseFirst("123Hello")).toBe("123Hello");
  });

  test("should handle strings with leading whitespace correctly", () => {
    expect(lowerCaseFirst(" Hello")).toBe(" Hello");
  });
});

describe("camelCaseToSnakeCase", () => {
  test("should convert camelCase to snake_case", () => {
    expect(camelCaseToSnakeCase("helloWorld")).toBe("hello_world");
  });

  test("should handle strings with special characters correctly", () => {
    expect(camelCaseToSnakeCase("helloWorld!")).toBe("hello_world!");
    expect(camelCaseToSnakeCase("helloWorld123")).toBe("hello_world123");
  });

  test("should handle strings with leading whitespace correctly", () => {
    expect(camelCaseToSnakeCase(" helloWorld")).toBe(" hello_world");
  });
});

describe("snakeCaseToCamelCase", () => {
  test("should convert snake_case to camelCase", () => {
    expect(snakeCaseToCamelCase("hello_world")).toBe("HelloWorld");
  });

  test("should convert snake_case to lowerCamelCase", () => {
    expect(snakeCaseToCamelCase("hello_world", true)).toBe("helloWorld");
  });

  test("should handle strings with special characters correctly", () => {
    expect(snakeCaseToCamelCase("hello_world!")).toBe("HelloWorld!");
    expect(snakeCaseToCamelCase("hello_world123")).toBe("HelloWorld123");
  });

  test("should handle strings with leading whitespace correctly", () => {
    expect(snakeCaseToCamelCase(" hello_world")).toBe(" helloWorld");
  });
});

describe("getTimeAsCharacters", () => {
  test("should return a string based on the given timestamp", () => {
    const timestamp = 1732608080598;
    expect(getTimeAsCharacters(timestamp)).toBe("bhdcgaiaiafji");
  });
});
