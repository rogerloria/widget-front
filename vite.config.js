// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: "./src/main.jsx", // <== Volvemos a usar main.jsx
      name: "WhatsAppWidget",
      fileName: "widget",
      formats: ["iife"], // widget.iife.js
    },
  },
});
