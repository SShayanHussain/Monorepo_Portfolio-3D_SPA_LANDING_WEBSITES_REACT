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
        // Home Services Palette: Charcoal, Wood, Burnt Orange
        brand: {
          50: "#fff8f3",
          100: "#ffeedf",
          200: "#ffddc1",
          300: "#ffc298",
          400: "#ff9c65",
          500: "#f97316", // Confident Burnt Orange
          600: "#ea580c",
          700: "#c2410c",
          800: "#9a3412",
          900: "#7c2d12",
        },
        surface: {
          DEFAULT: "#ffffff",
          50: "#f9fafb",
          100: "#f3f4f6",
          200: "#e5e7eb", // Light stone
        },
        cream: {
          DEFAULT: "#1f2937", // Charcoal/Dark Slate
          10: "#374151",
          20: "#4b5563",
        }
      },
      fontFamily: {
        display: ["'Outfit Variable'", "sans-serif"],
        body: ["'Outfit Variable'", "sans-serif"],
      },
    },
  },
};
