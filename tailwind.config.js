/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      stone: colors.stone,
    },
    extend: {
      boxShadow: {
        "3xl":
          "0 0 60px 0 rgba(255, 255, 255, 0.8), inset -100px 10px 80px 20px #080707, 0 0 45px 10px rgba(255, 255, 255, 0.54), inset 0 0 10px 0 #D3BFBF;",
      },
    },
  },
  plugins: [],
};
