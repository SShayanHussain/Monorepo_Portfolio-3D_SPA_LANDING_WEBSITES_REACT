/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "../../packages/ui/src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // B2B Logistics: Steel gray, navy, safety orange
        surface: {
          DEFAULT: '#0F172A', // Slate 900
          100: '#1E293B',     // Slate 800
          200: '#334155',     // Slate 700
        },
        brand: {
          DEFAULT: '#F97316', // Orange 500 (Safety orange)
          100: '#FFEDD5',
          200: '#FDBA74',
          300: '#FB923C',
          400: '#EA580C',
        },
        textMain: '#F8FAFC',
        textMuted: '#94A3B8'
      },
      fontFamily: {
        display: ['"Barlow Condensed"', 'sans-serif'],
        body: ['"Roboto"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
