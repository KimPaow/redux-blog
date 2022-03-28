import { createStitches } from '@stitches/react';
import colors from '@/stitches/colors'

export const {
  config,
  theme,
  media,
  styled,
  css,
  globalCss,
  keyframes,
  createTheme,
  getCssText,
} = createStitches({
  media: {
    sm: '(min-width: 768px)',
    md: '(min-width: 1024px)',
    lg: '(min-width: 1440px)',
  },
  theme: {
    colors: {
      text_body: "$black_alpha700",
      text_body_inverted: "$white_alpha700",
      text_muted: "$black_alpha400",
      text_sand: "hsla(30, 33%, 75%, 0.7)",
      text_sun: "hsla(47, 80%, 63%, 0.7)",
      text_water: "hsla(223, 80%, 63%, 0.7)",

      text_headline: "$text_body",
      text_link: "$text_body",
      text_highlight_bg: "$text_water",
      text_highlight_color: "$text_body_inverted",

      bg_paper: "hsla(33, 13%, 86%, 1.0)",
      bg_water: "hsla(212, 11%, 70%, 1.0)",
      bg_woods: "hsla(95, 7%, 67%, 1.0)",
      bg_sand: "hsla(30, 33%, 75%, 1.0)",
      bg_sunset: "hsla(28, 62%, 58%, 1.0)",
      bg_sun: "hsla(47, 80%, 58%, 1.0)",
      bg_body: "$bg_woods",

      card_bg: "$bg_sunset",
      card_border: "$white_alpha50",

      primary50: "#e2f8ed",
      primary100: "#b8eed3",
      primary200: "#86e3b6",
      primary300: "#3fd898",
      primary400: "#00ce81",
      primary500: "#00c36c",
      primary600: "#00b360",
      primary700: "#00a053",
      primary800: "#008f47",
      primary900: "#0F2B29",

      ...colors
    },
    // margin padding
    space: {
      0: "0",
      1: "0.4rem",
      2: "0.8rem",
      3: "1.6rem",
      4: "3.2rem",
      5: "6.4rem",
      6: "12.8rem",
      7: "25.6rem",
      8: "51.2rem",
      header: "$7",
      full: '100%'
    },
    // width height
    sizes: {
      0: "0",
      1: "0.4rem",
      2: "0.8rem",
      3: "1.6rem",
      4: "3.2rem",
      5: "6.4rem",
      6: "12.8rem",
      7: "25.6rem",
      8: "51.2rem",
      9: "102.4rem",
      10: "204.8rem",
      content: "1370px",
      full: '100%'
    },
    fonts: {
      body: 'Charter,  system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
      heading: '"Ivy Mode",  system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
      navlink: '"Ivy Mode",  system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
      monospace: '"JetBrains Mono", "SF Mono", Menlo, monospace, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
    },
    fontSizes: {
      1: "1.2rem",
      2: "1.4rem",
      3: "1.6rem",
      4: "1.8rem",
      5: "2.0rem",
      6: "2.4rem",
      7: "2.8rem",
      8: "3.2rem",
      9: "4.0rem",
      10: "4.8rem",
      11: "5.6rem",
      12: "6.4rem",
      13: "7.2rem",
      14: "8.0rem",
      15: "9.6rem",
      16: "11.2rem",
      17: "12.8rem",
      18: "14.4rem",
      19: "16rem",
      20: "17.6rem",
      h1: "$12",
      h2: "$10",
      h3: "$8",
      h4: "$6",
      h5: "$5",
      preamble: "2.4rem",
      body: "2.0rem",
      code: "1.5rem"
    },
    fontWeights: {
      heading: 400,
      body: 400,
      link: 400,
      monospace: 400,
      medium: 500,
      bold: 700,
    },
    lineHeights: {
      body: '32px',
      heading: 1.2,
      monospace: 1.4,
      code: 1.4,
    },
    letterSpacings: {},
    zIndices: {
      noise: 80,
      noscript: 70,
      kbar: 65,
      preloader: 60,
      navigation: 50,
      navigationBg: 47,
      overlay: 45,
      content: 40,
      subcontent: 30,
      canvas: -1,
    },
    radii: {
      xs: "0.15rem",
      sm: "0.3rem",
      md: "0.5rem",
      lg: "1rem",
      xl: "100rem",
      full: "100%",
    },
    borderWidths: {},
    borderStyles: {},
    shadows: {},
    transitions: {},
  },
  utils: {
    // Abbreviated margin properties
    marginX: (value) => ({
      marginLeft: value,
      marginRight: value,
    }),
    marginY: (value) => ({
      marginTop: value,
      marginBottom: value,
    }),
    paddingX: (value) => ({
      paddingLeft: value,
      paddingRight: value,
    }),
    paddingY: (value) => ({
      paddingTop: value,
      paddingBottom: value,
    }),

    // A property for applying width/height together
    size: (value) => ({
      width: value,
      height: value,
    }),

    // A property to apply linear gradient
    linearGradient: (value) => ({
      backgroundImage: `linear-gradient(${value})`,
    }),
  },
});

export const darkTheme = createTheme('dark-theme', {
  colors: {
  },
});

export const lightTheme = createTheme('light-theme', {
  colors: {
  },
});
