/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'selector',
  theme: {
    extend: {
      fontFamily: {
        vazir: ["'vazir'", 'sans-serif']
      },
      colors: {
        'main': {
          DEFAULT: '#7366FF'
        },
        'secondary': {
          DEFAULT: '#FD17BC'
        }
      },

    },
    container: {
      center: true,
      padding: '1rem'
    },

    plugins: [],
  }
}