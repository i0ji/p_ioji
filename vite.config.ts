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
      declarations: "src/declarations",
      assets: "/src/assets",
      data: "/src/data",
      styles: "/src/styles",
      src: ".",
    },
  },
  server: {
    hmr: true,
  },
});
