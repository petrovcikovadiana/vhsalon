/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./docs/*.{html,js}"],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "960px",
      xl: "1200px",
      "2xl": "1440px",
    },
    extend: {
      fontFamily: {
        joan: ['"Joan"', "serif"],
        macondo: ['"Macondo"', "cursive"],
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
        massageBg: "#212121",
        massageText: "#A8907B",
        massageCard: "#2C2C2E",
        vlastaNav: "#AA9980",
        barberText: "#CE9C61",
        decentGrey: "#606060",
      },
    },
  },
  plugins: [],
};
