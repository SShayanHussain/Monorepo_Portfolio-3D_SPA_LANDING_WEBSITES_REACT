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
        // Minimalist editorial palette: off-white background, deep charcoal text
        surface: {
          DEFAULT: '#fafafa',
          100: '#f4f4f4',
          200: '#ebebeb',
        },
        brand: {
          DEFAULT: '#111111',
          100: '#222222',
          200: '#444444',
          300: '#666666',
          400: '#888888',
        }
      },
      fontFamily: {
        // 'Playfair Display' for names/wordmarks, 'Inter' for UI/small copy
        display: ['"Playfair Display Variable"', 'serif'],
        body: ['"Inter Variable"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
