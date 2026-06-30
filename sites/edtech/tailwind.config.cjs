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
        // EdTech Palette: Warm, confident, human
        brand: {
          50: "#fff7ed",
          100: "#ffedd5",
          200: "#fed7aa",
          300: "#fdba74",
          400: "#fb923c",
          500: "#f97316", // Warm Coral / Amber
          600: "#ea580c",
          700: "#c2410c",
          800: "#9a3412",
          900: "#7c2d12",
        },
        surface: {
          DEFAULT: "#faf9f6", // Off-white warm
          50: "#ffffff",
          100: "#f5f5f4",
          200: "#e7e5e4",
        },
        cream: {
          DEFAULT: "#1c1917", // Warm charcoal
          10: "#292524",
          20: "#44403c",
        }
      },
      fontFamily: {
        display: ["'Outfit Variable'", "sans-serif"],
        body: ["'Outfit Variable'", "sans-serif"],
      },
    },
  },
};
