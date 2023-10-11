/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        regular: ["Proxima-Nova", "sans"],
        bold: ["Amerigo", "sans"],
      },
      fontSize: {
        buttonFt: "13px",
        xsm: "14px",
        sm: "17px",
        xl: "22px",
        "2xl": "1.563rem",
        "3xl": "1.953rem",
        "4xl": "2.441rem",
        "5xl": "3.052rem",
      },
    },
  },
  plugins: [],
};
