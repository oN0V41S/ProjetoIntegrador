/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        card1: '#C0334D',
        card2: '#CA546A',
        card3: '#DB8A98',
      },
      width: {
        64: "64px,",
      },
      height: {
        64: "64px",
      },
      borderRadius:{
        'nm': '10px',
      }
    },
    plugins: [],
  },
};
