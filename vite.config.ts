import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      components: path.resolve(__dirname, "./src/components"),
      ui: path.resolve(__dirname, "./src/components/ui"),
      data: path.resolve(__dirname, "./src/data"),
      assets: path.resolve(__dirname, "./src/assets"),
      services: path.resolve(__dirname, "./src/services"),
    },
  },
  plugins: [react()],
  base: '/p_ioji/'
});
