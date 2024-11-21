import path from "path";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";

export default defineConfig({
  base: "./",
  plugins: [dts()],
  build: {
    lib: {
      name: "@smallstack/utils",
      entry: {
        main: path.resolve(__dirname, "lib/main.ts"),
        string: path.resolve(__dirname, "lib/modules/string/index.ts"),
        number: path.resolve(__dirname, "lib/modules/number/index.ts"),
        object: path.resolve(__dirname, "lib/modules/object/index.ts"),
      },
      fileName: (format, entryName) => `utils.${entryName}.${format}.js`,
    },
  },
  test: {
    globals: true,
    environment: "jsdom",
    include: ["lib/**/*.test.ts"],
    setupFiles: ["./setupTest.js"],
    coverage: {
      provider: "v8",
      include: ["lib/**"],
      exclude: ["node_modules/**"],
      reporter: ["lcov", "clover", "text-summary"],
      reportsDirectory: "coverage",
      // thresholds: {
      //   statements: 100,
      //   branches: 100,
      //   functions: 100,
      //   lines: 100
      // }
    },
  },
});
