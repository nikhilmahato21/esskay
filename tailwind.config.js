/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          DEFAULT: '#E8A400',
          light: '#F5BC2E',
          dark: '#C88C00',
        },
        steel: {
          DEFAULT: '#1C1C1E',
          light: '#2C2C2E',
          muted: '#3A3A3C',
        },
        cream: '#F5F5F3',
        smoke: '#EBEBEB',
      },
      fontFamily: {
        playfair: ['"Playfair Display"', 'serif'],
        dm: ['"DM Sans"', 'sans-serif'],
        mono: ['"DM Mono"', 'monospace'],
      },
    },
  },
  plugins: [],
}
