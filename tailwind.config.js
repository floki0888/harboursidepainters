/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0A2342',
        secondary: '#C19E6A',
        accent: '#1D6F86',
      },
    },
  },
  plugins: [],
};