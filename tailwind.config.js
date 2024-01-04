/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#096a2e",
        secondary: "#00B207",
        "light-gray": "#dadce0",
        "dark-gray": "#222",
        "green-900": "#002603",
        "green-800": "#173B1A",
        "green-700": "#2B572E",
        "green-600": "#406B42",
        "green-500": "#618062",
        "green-400": "#7A997C",
        "green-300": "#96B297",
        "green-200": "#B4CCB4",
        "green-100": "#DAE5DA",
        "green-50": "#EDF2EE",
      },
    },
  },
  plugins: [import("@tailwindcss/forms")],
};
