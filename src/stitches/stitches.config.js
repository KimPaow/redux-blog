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
      ...colors,

      text_body: "$white_alpha700",
      text_body_inverted: "$black_alpha700",
      text_muted: "$white_alpha400",
      text_headline: "$white_alpha900",
      text_link: "$text_body",
      text_highlight_bg: "$primary400",
      text_highlight_color: "$text_body",

      bg_body: "#060606",

      card_bg: "$white_alpha100",
      card_bg_disabled: "$white_alpha100",
      card_bg_hover: "$white_alpha200",
      card_border: "$white_alpha50",

      primary50: "$violet50",
      primary100: "$violet100",
      primary200: "$violet200",
      primary300: "$violet300",
      primary400: "$violet400",
      primary500: "$violet500",
      primary600: "$violet600",
      primary700: "$violet700",
      primary800: "$violet800",
      primary900: "$violet900",
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
      body: 'Inter,  system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
      heading: 'Inter,  system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
      navlink: 'Inter,  system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
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
      preamble: "$4",
      body: "$3",
      code: "1.5rem"
    },
    fontWeights: {
      heading: 800,
      body: 400,
      link: 400,
      monospace: 400,
      medium: 500,
      bold: 700,
    },
    lineHeights: {
      body: 1.6,
      heading: 1.36,
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
