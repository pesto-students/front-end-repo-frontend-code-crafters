/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#096a2e",
        secondary: "#0b7c36",
        "light-gray": "#dadce0",
        "dark-gray": "#222",
      },
    },
  },
  plugins: [import("@tailwindcss/forms")],
};
