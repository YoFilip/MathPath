import { blue } from '@mui/material/colors';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/lib/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
      },
      colors: {
        logoTextColor: "#7285FC",
        navItemTextColor: "#504F5E",
        navSearchBgColor: "#F7F8FA",
        inactiveTextColor: "#81899B",
        activeTextColor: "#7285FC",
        blueTextColor: "#7285FC",
        blueBgColor: "#7285FC",

      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}