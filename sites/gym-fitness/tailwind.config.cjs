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
        // Gym Fitness Palette: Dark, high contrast, electric neon green/yellow
        brand: {
          50: "#f6ffe5",
          100: "#e9ffc7",
          200: "#d2ff95",
          300: "#afff57",
          400: "#8aff24",
          500: "#65e600", // Electric lime accent
          600: "#4eb800",
          700: "#3a8b00",
          800: "#306e06",
          900: "#2a5c0b",
        },
        surface: {
          DEFAULT: "#0f0f13", // Charcoal dark
          50: "#18181e",
          100: "#22222a",
          200: "#2d2d38",
        },
        cream: {
          DEFAULT: "#ffffff",
          10: "#f8f9fa",
          20: "#e9ecef",
        }
      },
      fontFamily: {
        display: ["'Oswald Variable'", "sans-serif"],
        body: ["'Inter Variable'", "sans-serif"],
      },
    },
  },
};
