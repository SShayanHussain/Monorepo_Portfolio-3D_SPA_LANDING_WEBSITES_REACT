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
        // Law Firm Palette: Deep navy, charcoal, muted gold
        brand: {
          50: "#fdfbf7",
          100: "#f8f3e8",
          200: "#eee2cc",
          300: "#e0caa6",
          400: "#d0af7d",
          500: "#c09455", // Muted Gold accent
          600: "#b07b43",
          700: "#936039",
          800: "#764d33",
          900: "#60402b",
        },
        surface: {
          DEFAULT: "#fdfdfd",
          50: "#f8f9fa",
          100: "#f1f3f5",
          200: "#e9ecef",
        },
        cream: {
          DEFAULT: "#1a1f2c", // Deep Navy / Charcoal
          10: "#2a3241",
          20: "#404b5e",
        }
      },
      fontFamily: {
        display: ["'Playfair Display Variable'", "serif"],
        body: ["'Inter Variable'", "sans-serif"],
      },
    },
  },
};
