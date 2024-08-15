/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'main' : {
          DEFAULT : '#7366FF'
        },
        'secondary': {
          DEFAULT : '#FD17BC'
        }
      },

    },
  },
  plugins: [],
}

