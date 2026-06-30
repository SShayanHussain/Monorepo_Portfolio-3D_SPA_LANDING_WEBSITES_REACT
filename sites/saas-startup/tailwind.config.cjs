/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [require("../../tailwind.preset.cjs")],
  content: [
    "./index.html",
    "./src/**/*.{ts,tsx}",
    // Shared UI source — Vite transpiles it, so Tailwind must scan it.
    "../../packages/ui/src/**/*.{ts,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        // SaaS palette: dark mode-first, electric violet accent.
        brand: {
          50: "#f3f0ff",
          100: "#e9e3ff",
          200: "#d5ccff",
          300: "#b5a3ff",
          400: "#9171ff",
          500: "#7c3aed", // primary accent (electric violet)
          600: "#6d28d9",
          700: "#5b21b6",
          800: "#4c1d95",
          900: "#3b0f7a",
        },
        surface: {
          DEFAULT: "#0a0a0f",
          50: "#111118",
          100: "#18181f",
          200: "#1f1f2a",
          300: "#2a2a38",
        },
      },
      fontFamily: {
        display: ["Inter Variable", "Inter", "system-ui", "sans-serif"],
        body: ["Inter Variable", "Inter", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [
    // Override the shared brand-accent token for this niche.
    function brandOverride({ addBase }) {
      addBase({
        ":root": {
          "--brand-accent": "#7c3aed",
          "--brand-accent-contrast": "#ffffff",
        },
      });
    },
  ],
};
