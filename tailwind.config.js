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
          DEFAULT: '#F5A623',
          light: '#FBBF24',
          dark: '#D4880A',
        },
        steel: {
          DEFAULT: '#0B1629',
          light: '#142240',
          muted: '#1E3557',
        },
        cream: '#F0F6FF',
        smoke: '#E4EDF8',
      },
      fontFamily: {
        playfair: ['"Playfair Display"', 'serif'],
        dm: ['"DM Sans"', 'sans-serif'],
        mono: ['"DM Mono"', 'monospace'],
        price: ['"Space Grotesk"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
