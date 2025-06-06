/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    screens: {
      sm: "300px",
      md: "400px",
      lg: "880px",
      tablet: "1024px",
    },
    extend: {
      fontFamily: {
        // poppins fonts
        PoppinsBlack: "PoppinsBlack",
        PoppinsBlackItalic: "PoppinsBlackItalic",
        PoppinsBold: "PoppinsBold",
        PoppinsBoldItalic: "PoppinsBoldItalic",
        PoppinsExtraBold: "PoppinsExtraBold",
        PoppinsExtraBoldItalic: "PoppinsExtraBoldItalic",
        PoppinsExtraLight: "PoppinsExtraLight",
        PoppinsExtraLightItalic: "PoppinsExtraLightItalic",
        PoppinsItalic: "PoppinsItalic",
        PoppinsLight: "PoppinsLight",
        PoppinsLightItalic: "PoppinsLightItalic",
        PoppinsMedium: "PoppinsMedium",
        PoppinsMediumItalic: "PoppinsMediumItalic",
        PoppinsRegular: "PoppinsRegular",
        PoppinsSemiBold: "PoppinsSemiBold",
        PoppinsSemiBoldItalic: "PoppinsSemiBoldItalic",
        PoppinsThin: "PoppinsThin",
        PoppinsThinItalic: "PoppinsThinItalic",
      },
 
      colors: {
        primary: "#23AA49",
        primaryShopper: "#0080DC",
        soundery: "#009E5F",
        regularText: "#777777",
        skipButtonBG: "#F0F0F0",
        darkViolet: "#5802D0",
        orange: "#D08802",
        darkGreen: "#9B53FF",
        redDeep: "#FF5151",
        redWhite: "#FF8585",

        
        deepBlue50: "#E8EAED",
        deepBlue75: "#A0A8B6",
        deepBlue100: "#788498",
        deepBlue200: "#3E4F6B",
        deepBlue300: "#172B4D",
        deepBlue400: "#101E36",
        brand400: "#405658",
 
        success600: "#5BB659",
 
        Warning500: "#EAD852",
        base: "#FFF",
 
        danger600: "#DC3545",
        danger50: "#FEF2F2",
 
        black50: "#F6F6F6",
        black60: "#FFFFFF99",
        black100: "#E7E7E7",
        black200: "#D1D1D1",
        black400: "#888888",
        black500: "#5D5D5D",
        black600: "#5D5D5D",
        black800: "#454545",
        black900: "#333333",
        black950: "#262626",
        black1000: "#1D1929",
 
        white50: "#F6F6F6",
        white60: "rgba(255, 255, 255, 0.6)",
        white100: "rgba(217, 217, 217, 1)",
        white200: "#D1D1D1",
        white400: "#888888",
        white500: "#5D5D5D",
        white600: "#5D5D5D",
        white800: "#454545",
        white900: "#333333",
        white1000: "#1D1929",
      },
    },
  },
};