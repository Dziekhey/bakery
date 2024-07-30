/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        body: "Josefin Sans, sans-serif",
        dancing: "Dancing Script, cursive"
      },
      colors: {
        tuatara: '#353535',
        supernova: '#FBC400',
        pink: '#FBC5C5',
        light_pink: '#fee5e5'
      }
    },
  },
  plugins: [],
}