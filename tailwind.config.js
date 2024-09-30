/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        joan: ['"Joan"', "serif"],
      },

      colors: {
        background: "#212123",
        goldenYellow: "#C7A676",
        textGrey: "#797979",
        lightBlack: "#2C2C2E",
        textWhite: "#F0F0F0",
        copyright: "#A1A1A1",
        lineGrey: "#ffffff1a",
        beautyBg: "#ECE2DD",
        beautyText: "#D25C33",
        beautyFooter: "#F0DAD1",
      },
    },
  },
  plugins: [],
};
