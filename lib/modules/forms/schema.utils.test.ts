import { describe, expect, test } from "vitest";
import { getSchemaForPath } from "./schema.utils";

describe("Schema Utils", () => {
  test("should get schemas for sub paths", () => {
    const schema = {
      type: "object",
      properties: {
        name: {
          type: "string",
        },
        address: {
          type: "object",
          properties: {
            street: {
              type: "string",
            },
            city: {
              type: "string",
            },
          },
        },
      },
    };

    expect(getSchemaForPath(schema, "name")).toEqual({ type: "string" });
    expect(getSchemaForPath(schema, "address")).toEqual({
      type: "object",
      properties: {
        street: {
          type: "string",
        },
        city: {
          type: "string",
        },
      },
    });
    expect(getSchemaForPath(schema, "address.street")).toEqual({
      type: "string",
    });
    expect(getSchemaForPath(schema, "address.city")).toEqual({
      type: "string",
    });
  });

  test("should return undefined for invalid paths", () => {
    const schema = {
      type: "object",
      properties: {
        name: {
          type: "string",
        },
        address: {
          type: "object",
          properties: {
            street: {
              type: "string",
            },
            city: {
              type: "string",
            },
          },
        },
      },
    };

    expect(getSchemaForPath(schema, "invalid")).toEqual(undefined);
    expect(getSchemaForPath(schema, "address.invalid")).toEqual(undefined);
    expect(getSchemaForPath({type:"object"}, "address")).toEqual(undefined);
  });
});
