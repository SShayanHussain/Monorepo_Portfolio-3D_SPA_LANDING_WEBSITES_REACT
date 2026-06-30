import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"),
    },
  },
  build: {
    rollupOptions: {
      output: {
        // Keep the 3D chunk identifiable for lighthouse budget checks.
        manualChunks(id) {
          if (id.includes("three") || id.includes("@react-three")) {
            return "three";
          }
        },
      },
    },
  },
});
