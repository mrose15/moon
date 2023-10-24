/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
const defaultTheme = require("tailwindcss/defaultTheme");

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      slate: colors.slate,
    },
    extend: {
      fontFamily: {
        sans: ['"Titillium Web"', ...defaultTheme.fontFamily.sans],
      },
      boxShadow: {
        "3xl": "0 0 60px 0 rgba(255, 255, 255, 0.8);",
      },
    },
  },
  plugins: [],
};
