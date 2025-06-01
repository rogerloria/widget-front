// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: "./src/mountWidget.jsx", // <- el archivo que monta el widget automáticamente
      name: "WhatsAppWidget",
      fileName: "widget",
      formats: ["iife"],
    },
  },
});

