/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#010851",
        secondary: "#83EA57",
        tartiary: "#707070",
        pink: "ee9ae5",
      },
      boxShadow: {
        "3xl": "0px 10px 50px rgba(0,0,0,0.15)",
      },
    },
  },
  plugins: [],
};
