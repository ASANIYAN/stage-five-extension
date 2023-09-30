/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
const defaultTheme = require('tailwindcss/defaultTheme');
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        color1: "#100A42",
        color2: "#141414",
        color3: "rgba(0, 0, 0, 0.75)",
        color4: "#120B48",
        color5: "#F4F6F8",
        color6: "#616163",
        color7: "#1B233D",
        color8: "#434343",
        color9: "#B9C2C8",
        color10: "#B6B3C6",
        color11: "#626262",
        color12: "#F9F9FF",
        color13: "rgba(20, 20, 20, 0.70)",
        color14: "rgba(182, 179, 198, 0.14)",
        color15: "rgba(20, 20, 20, 0.80)",
        color16: "rgba(182, 179, 198, 0.60)",
        color17: "rgba(251, 251, 251, 0.50)",
        color18: "#413C6D",
        color19: "#727272",
        color20: "rgba(231, 231, 237, 0.20)",
        color21: "rgba(0, 0, 0, 0.32)",


      }, 
      screens: {
        'xxxs': '280px',
         // => @media (min-width: 280px) { ... }
        'xxs': '320px',
         // => @media (min-width: 320px) { ... }
        'xs': '480px',
         // => @media (min-width: 480px) { ... }
        's': '576px',
         // => @media (min-width: 576px) { ... }
        '840': '840px',
         // => @media (min-width: 840px) { ... }
        '1100': '1100px',
         // => @media (min-width: 1100px) { ... }
        ...defaultTheme.screens
      }, 
    },
  },
  plugins: [],
}

