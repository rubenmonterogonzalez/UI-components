/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      primary: "#5c6ac4",
      secondary: "#ecc94b",
    },
    fontFamily: {
      sans: ["Open Sans"],
    },
  },
  plugins: [],
};
