/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'subtitle': ["Proxima-Nova", "sans"],
        'title': ["amerigo", "sans"],
      },
      fontSize: {
        'buttonFt': "13px",
        'customS':"14px",
        'xsm': "14px",
        'sm': "17px",
        'large':"20px",
        'customL':"26px",
        'customXL':"30px",
        'xl': "40px",
        'xxl': "62px",
      },
      lineHeight: {
        '12': '72px',
      }
    },
  },
  plugins: [
    
  ],
};
