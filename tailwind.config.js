/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

export default withMT({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#096A2E",
        secondary: "#00B207",
        "light-gray": "#DADCE0",
        "dark-gray": "#222",
        red: {
          error: "#EA4B48",
          chip: "#EA4B4833"
        },
        green :{
          900: "#002603",
          800: "#173B1A",
          700: "#2B572E",
          600: "#406B42",
          500: "#618062",
          400: "#7A997C",
          300: "#96B297",
          200: "#B4CCB4",
          100: "#DAE5DA",
          50: "#EDF2EE",
          chip: "#20B52633"
        },
        sky: {
          50: "#f0f9ff",
          100: "#e0f2fe",
          200: "#bae6fd",
          300: "#7dd3fc",
          400: "#38bdf8",
          500: "#0ea5e9",
          600: "#0284c7",
          700: "#0369a1",
          800: "#075985",
          900: "#0c4a6e",
        },
      },
    },
    fontFamily: {
      sans: ["Poppins", "sans-serif"],
    },
  },
  plugins: [import("@tailwindcss/forms")],
});
