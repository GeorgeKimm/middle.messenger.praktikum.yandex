import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  root: resolve(__dirname, "src/"),
  build: {
    sourcemap: false,
    outDir: resolve(__dirname, "dist/"),
  },
  plugins: [],
  server: {
    port: 3001,
  },
});
