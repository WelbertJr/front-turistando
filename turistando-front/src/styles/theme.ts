export default {
  breakpoints: {
    mobile: "320px",
    tabletPortrait: "768px",
    tabletLandscape: "1024px",
    desktop: "1224px",
    ultraWide: "1600px",
  },
  border: {
    radius: "0.4rem",
  },
  font: {
    family: {
      roboto: "Roboto",
      comfortaa: "Comfortaa",
      merriweather: "Merriweather",
    },
    weight: {
      regular: 400,
      bold: 700,
    },
    fontStyle: {
      normal: "normal",
    },
    sizes: {
      xxxsmall: "0.8rem",
      xxsmall: "1rem",
      xsmall: "1.2rem",
      small: "1.4rem",
      medium: "1.6rem",
      large: "2rem",
      xlarge: "2.4rem",
      xxlarge: "2.6rem",
      big: "3.2rem",
      xbig: "3.6rem",
      huge: "4rem",
      xhuge: "4.8rem",
      xxhuge: "5.6rem",
    },
  },
  colors: {
    turistandoWhite: "#ffffff",
    turistandoYellow: "#f6a600",
    turistandoBlue: "#003867",
    turistandoBlack: "#000000",
    turistandoTertiary05: "#e9ecf4",
    turistandoTertiaryPrimary: "#002375",
    black100: "#000000",
    white: "#ffffff",
  },
  spacings: {
    xxxsmall: "0.4rem",
    xxsmall: "0.8rem",
    xsmall: "1rem",
    small: "1.2rem",
    medium: "1.6rem",
    large: "2.4rem",
    xlarge: "3.2rem",
    xxlarge: "4rem",
    huge: "4.8rem",
    xhuge: "6.4rem",
    xxhuge: "7.1rem",
    xxxhuge: "22.7rem",
  },
} as const;
