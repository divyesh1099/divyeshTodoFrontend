/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gray: {
          900: '#111111',
          800: '#1a1a1a',
          700: '#333333',
          600: '#4d4d4d',
        },
        black: '#000000',
        white: '#ffffff',
      },
    },
  },
  plugins: [],
}
