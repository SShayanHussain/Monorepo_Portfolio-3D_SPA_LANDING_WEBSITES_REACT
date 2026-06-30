/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [require("../../tailwind.preset.cjs")],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "../../packages/ui/src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // Body: Inter. Display: Sora — a clean geometric sans with weight, per
        // the PRD's "trustworthy and established, not trendy-startup" direction.
        sans: ["'Inter Variable'", "system-ui", "sans-serif"],
        display: ["'Sora Variable'", "system-ui", "sans-serif"],
      },
      colors: {
        // PRD palette: cool neutrals (stone/slate from Tailwind defaults) with a
        // single confident accent. Chose deep green over navy to differentiate
        // from the law-firm site (navy/burgundy).
        brand: {
          50: "#eef5f2",
          400: "#3f9079",
          500: "#1f6f5c", // primary deep green accent → --brand-accent
          600: "#175546",
          700: "#10463a",
        },
        // Warm-neutral page surfaces (a touch warmer than pure slate).
        canvas: {
          DEFAULT: "#faf9f6", // page background (stone-ish cream)
          100: "#f2f0ea",
          200: "#e7e3da",
        },
        ink: {
          DEFAULT: "#1c2522", // near-black with a green undertone
          muted: "#5b665f",
        },
      },
    },
  },
};
