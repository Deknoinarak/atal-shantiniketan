/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundPosition: {
        "pos-50": "50%",
        "pos-0": "0",
        "pos-100": "100%",
      },
      backgroundSize: {
        "size-200": "200%"
      }
    },
  },
  plugins: [require("flowbite/plugin")],
};
