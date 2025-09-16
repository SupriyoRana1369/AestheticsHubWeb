const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        aurora: "aurora 60s linear infinite",
      },
      fontFamily: {
        caslon: ['"Libre Caslon Display"', 'serif'],
        goldman: ['"Goldman"', 'sans-serif'],
        dmsans: ['"DM Sans"', 'sans-serif'],
        anton: ['Anton', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
      },
      keyframes: {
        aurora: {
          from: {
            backgroundPosition: "50% 50%, 50% 50%",
          },
          to: {
            backgroundPosition: "350% 50%, 350% 50%",
          },
        },
      },
       screens: {
        'h900': {'raw': '(max-height: 900px)'},
      },
    },
  },
  plugins: [],
}

