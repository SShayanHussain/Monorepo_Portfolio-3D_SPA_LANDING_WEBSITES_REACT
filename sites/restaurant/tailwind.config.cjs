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
        // Body font is Inter (from preset). Display font is Playfair Display.
        display: ["'Playfair Display Variable'", "serif"],
      },
      colors: {
        // PRD Palette: Warm, low-saturation. Terracotta, charcoal, cream.
        brand: {
          400: "#e07a5f", // lighter terracotta
          500: "#c75c43", // primary terracotta
          600: "#a94831", // darker terracotta
        },
        surface: {
          DEFAULT: "#2d2a26", // charcoal
          50: "#36332e",
          100: "#3f3c36",
          200: "#48453f",
          300: "#55514b",
        },
      },
    },
  },
};
