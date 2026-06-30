/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [require("../../tailwind.preset.cjs")],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "../../packages/ui/src/**/*.{js,ts,jsx,tsx}", // Scan the shared UI package for classes
  ],
  theme: {
    extend: {
      colors: {
        // Dental Clinic Palette: Cool, clean, clinical-but-warm
        // primary: Soft Mint / Sage Green
        brand: {
          50: "#f2f7f5",
          100: "#e0ede7",
          200: "#c2dcd2",
          300: "#9ec4b6",
          400: "#7aa999",
          500: "#5d8e7d", // Base primary
          600: "#487063",
          700: "#3a5b51",
          800: "#304b43",
          900: "#293e38",
        },
        // background/text mapping
        surface: {
          DEFAULT: "#ffffff", // Clean white background
          50: "#f8f9fa",
          100: "#f1f3f5",
          200: "#e9ecef",
        },
        cream: {
          DEFAULT: "#212529", // Dark charcoal for text (not pure black)
          10: "#343a40",
          20: "#495057",
        }
      },
      fontFamily: {
        sans: ["'Nunito Variable'", "sans-serif"],
        display: ["'Nunito Variable'", "sans-serif"],
        body: ["'Nunito Variable'", "sans-serif"],
      },
    },
  },
};
