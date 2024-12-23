/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
      },
      colors: {
        text: "#504F5E",
        contentText: "#B2B1B6",
        // navText: "#393053",
        navText: "#7285FC",
        navSearchColor: "#F7F8FA",
        activeNavItem: "#81899B",
      },
    },
  },
  plugins: [],
}