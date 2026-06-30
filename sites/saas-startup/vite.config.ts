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
        // Chunking that keeps the 3D bundle fully lazy (CLAUDE.md: "3D must
        // never block first paint"):
        //   • three / @react-three/* -> "three" chunk (lazy, named for budgets).
        //   • React, framer-motion, cn utils -> "vendor" (eager essentials).
        //     Pinned explicitly: left unassigned, Rollup co-locates React with
        //     the three chunk and the entry then preloads the 3D bundle.
        //   • Everything else (drei deps: three-stdlib, maath, …) left
        //     UNASSIGNED so Rollup keeps these dynamic-only modules in the lazy
        //     scene chunks. Forcing them to "vendor" creates a vendor->three
        //     static edge that drags the 3D bundle eager again.
        manualChunks(id) {
          if (id.includes("vite/preload-helper")) return "vendor";
          if (!id.includes("node_modules")) return;
          if (id.includes("/three/") || id.includes("@react-three")) {
            return "three";
          }
          if (
            /[\\/](react|react-dom|scheduler|framer-motion|clsx|tailwind-merge)[\\/]/.test(
              id,
            )
          ) {
            return "vendor";
          }
          return;
        },
      },
    },
  },
});
