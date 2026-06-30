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
      colors: {
        // Real Estate Palette: Cool neutrals (stone, slate) with deep green accent
        brand: {
          50: "#f0fdf4",
          100: "#dcfce7",
          200: "#bbf7d0",
          300: "#86efac",
          400: "#4ade80",
          500: "#22c55e",
          600: "#16a34a",
          700: "#15803d",
          800: "#166534",
          900: "#14532d", // Confident deep green
        },
        surface: {
          DEFAULT: "#f8fafc", // Cool stone/slate white
          50: "#f1f5f9",
          100: "#e2e8f0",
          200: "#cbd5e1",
        },
        cream: {
          DEFAULT: "#0f172a", // Very dark slate/navy
          10: "#1e293b",
          20: "#334155",
        }
      },
      fontFamily: {
        display: ["'Plus Jakarta Sans Variable'", "sans-serif"],
        body: ["'Plus Jakarta Sans Variable'", "sans-serif"],
      },
    },
  },
};
