import path from "path";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";

export default defineConfig({
  plugins: [dts({ rollupTypes: true })],
  build: {
    sourcemap: true,
    lib: {
      entry: path.resolve(__dirname, "lib/main.ts"),
      name: "@smallstack/utils",
      fileName: (format) => `utils.${format}.js`,
    },
  },
});
