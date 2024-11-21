import { describe, expect, test } from "vitest";
import { humanFileSize } from "./file-size.utils";

describe("file-size.utils", () => {
  test("should convert bytes to human readable format", () => {
    expect(humanFileSize(0)).toBe("0 B");
    expect(humanFileSize(1)).toBe("1 B");
    expect(humanFileSize(1024)).toBe("1 KB");
    expect(humanFileSize(1024 * 1024)).toBe("1 MB");
    expect(humanFileSize(1024 * 1024 * 1024)).toBe("1 GB");
    expect(humanFileSize(1024 * 1024 * 1024 * 1024)).toBe("1 TB");
    expect(humanFileSize(1024 * 1024 * 1024 * 1024 * 1024)).toBe("1 PB");
    expect(humanFileSize(1024 * 1024 * 1024 * 1024 * 1024 * 1024)).toBe("1 EB");
  });
});
