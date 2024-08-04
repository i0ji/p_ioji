import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "./",
  build: {
    assetsInlineLimit: 0,
    outDir: "dist",
    minify: true,
  },
  resolve: {
    alias: {
      components: "/src/components",
      assets: "/src/assets",
      pages: "/src/pages",
      styles: "/src/styles",
      src: ".",
      declarations: "/src/declarations"
    },
  },
  server: {
    hmr: true,
  },
});
