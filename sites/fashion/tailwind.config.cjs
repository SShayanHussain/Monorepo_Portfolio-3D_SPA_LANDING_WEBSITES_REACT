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
        // Fashion Palette: Editorial and restrained. Ivory/Stone/Near-black.
        brand: {
          50: "#f7f7f5",
          100: "#e6e6e2",
          200: "#d0d0c8",
          300: "#b5b5ab",
          400: "#99998e",
          500: "#808076",
          600: "#66665e",
          700: "#4d4d47",
          800: "#333330",
          900: "#1a1a18",
        },
        surface: {
          DEFAULT: "#f7f7f5", // Soft Ivory
          50: "#ffffff",
          100: "#f0f0ed",
          200: "#e5e5e0",
        },
        cream: {
          DEFAULT: "#111111", // Near-black for sharp contrast
          10: "#222222",
          20: "#333333",
        }
      },
      fontFamily: {
        display: ["'Cormorant Variable'", "serif"],
        body: ["'Inter Variable'", "sans-serif"],
      },
    },
  },
};
