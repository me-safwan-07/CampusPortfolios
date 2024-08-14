/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        'xs': '0.75rem',
      },
      screens: {
        'xs': '480px'
      }
    },
  },
  plugins: [],
}

