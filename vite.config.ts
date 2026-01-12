import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { defineConfig } from "vite";

export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      components: path.resolve(__dirname, "./src/components"),
      ui: path.resolve(__dirname, "./src/components/ui"),
      data: path.resolve(__dirname, "./src/data"),
      assets: path.resolve(__dirname, "./src/assets"),
      services: path.resolve(__dirname, "./src/services"),
      store: path.resolve(__dirname, "./src/store"),
      pages: path.resolve(__dirname, "./src/pages"),
    },
  },
  plugins: [react(), tailwindcss()],
  base: "/p_ioji/",
});
