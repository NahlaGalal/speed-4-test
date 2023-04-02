/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        mainColor: "#6c98a2",
        errorColor: "#fa4248",
        brownColor: "#958a7e",
        lightGreyColor: "#f7f5ef",
        greyColor: "#fbf9f4"
      },
      fontFamily: {
        Somar: "Somar, sans-serif",
        Montserrat: "Montserrat, sans-serif"
      }
    },
  },
  plugins: [],
};

