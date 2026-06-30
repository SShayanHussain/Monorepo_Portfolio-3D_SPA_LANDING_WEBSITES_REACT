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
        // Salon Palette: Blush, Cream, soft Gold
        brand: {
          50: "#fdf8f6",
          100: "#fbf0ed",
          200: "#f5dfd9",
          300: "#eac6bc",
          400: "#dfa79a",
          500: "#cd8373", // Blush/Terracotta accent
          600: "#b56658",
          700: "#975246",
          800: "#7e463d",
          900: "#683d36",
        },
        surface: {
          DEFAULT: "#faf7f5", // Creamy white
          50: "#f5f0ec",
          100: "#eee6e0",
          200: "#e5dad2",
        },
        cream: {
          DEFAULT: "#2d2825", // Dark warm brown for text
          10: "#443c39",
          20: "#5a514d",
        }
      },
      fontFamily: {
        display: ["'Cormorant Variable'", "serif"],
        body: ["'Inter Variable'", "sans-serif"],
      },
    },
  },
};
