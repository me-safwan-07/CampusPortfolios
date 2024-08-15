/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // Enables dark mode using the 'class' strategy
  theme: {
    extend: {
      fontSize: {
        'xs': '0.75rem',
      },
      screens: {
        'xs': '480px',
      },
      // You can extend dark mode-specific colors if needed
      colors: {
        darkBackground: '#1a202c',
        darkText: '#f7fafc',
      },
    },
  },
  plugins: [],
}
