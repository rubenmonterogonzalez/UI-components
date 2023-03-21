/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/daisyui/dist/**/*.js",
    "node_modules/react-daisyui/dist/**/*.js",
  ],
  theme: {
    extend: {},
    colors: {
      primary: "#5c6ac4",
      secondary: "#ecc94b",
    },
    fontFamily: {
      sans: ["Open Sans"],
    },
    daisyui: {
      themes: ["light"],
    },
  },
  plugins: [require("daisyui")],
};
