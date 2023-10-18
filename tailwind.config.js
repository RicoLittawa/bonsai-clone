/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        subtitle: ["Proxima-Nova", "sans"],
        title: ["amerigo", "sans"],
      },
      fontSize: {
        buttonFt: "13px",
        xsm: "14px",
        sm: "17px",
        large:"20px",
        xl: "40px",
      },
    },
  },
  plugins: [],
};
