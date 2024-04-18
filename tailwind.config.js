/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bg1: "#EEEEEE",
        nav: "#222831",
        hover: "#00ADB5",
        secondery: "#393E46",
      },
    },
  },
  plugins: [],
};