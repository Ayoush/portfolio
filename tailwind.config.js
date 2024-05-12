/** @type {import('tailwindcss').Config} */

const { addDynamicIconSelectors } = require('@iconify/tailwind');
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blue: {
            light: '#03a9f41a',
            DEFAULT: '#03A9F4',
        },
        black: {
            DEFAULT: '#101112',
        },
        gray: {
            light: '#DADADA',
            DEFAULT: '#C2C2C2',
            dark: '#515151',
        },
        white: {
            light: "#F4F8FB",
            DEFAULT: '#FFFFFF',
        }
    },
      fontFamily: {
        "inter": ['Inter', 'sans-serif'],
        "pacifico": ['Pacifico', 'cursive']
      }
    },
  },
  plugins: [
      addDynamicIconSelectors(),
    ],
}

