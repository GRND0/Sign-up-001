/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "z-rosa": "#d97eb0",
        "z-arancio": "#f2ca80",
        "z-testo-enfasi": "#5f5e5e",
        "z-testo": "#7d7c7c",
      },
      backgroundImage: {
        "z-shake": "../assets/shake.jpg",
        "z-utente" : "../assets/User.png"
      },

      fontFamily: {
        "z-titolo": "Aladin, cursive",
        "z-testi": "Nunito, sans-serif",
      },
    },
  },
  plugins: [],
};
