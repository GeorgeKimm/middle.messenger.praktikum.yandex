import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  resolve: {
    alias: {
      "@app": resolve(__dirname, "src"),
      "@styles-variable": resolve(__dirname, "src/styles/variable.scss"),
    },
  },
  root: resolve(__dirname, "src"),
  build: {
    sourcemap: false,
    outDir: resolve(__dirname, "dist"),
  },
  plugins: [],
  server: {
    port: 3001,
    fs: {
      cachedChecks: false,
    },
  },
});
