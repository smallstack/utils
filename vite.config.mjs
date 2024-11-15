import path from "path";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";

export default defineConfig({
  base: "./",
  plugins: [dts({ insertTypesEntry: true })],
  build: {
    lib: {
      entry: path.resolve(__dirname, "lib/main.ts"),
      name: "@smallstack/utils",
      fileName: (format) => `utils.${format}.js`,
    },
  },
});
