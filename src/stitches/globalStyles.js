import { globalCss } from '@/theme';
import styleReset from "./reset";

export const globalStyles = globalCss({
  ...styleReset,
  "#__next": {
    height: "100%"
  },
  ":first-of-type": {
    marginTop: "unset"
  },
  "*, *:after, *:before": {
    boxSizing: "border-box",
    overflowWrap: "break-word"
  },
  html: {
    backgroundColor: '$bg_body',
    color: '$text_body',
    fontFamily: '$body',
    fontSize: "10px",
    height: "100%",
    left: "0",
    lineHeight: 1,
    objectFit: "cover",
    top: "0",
    width: "100%",
    overscrollBehavior: "none"
  },
  body: {
    fontSize: "1.6rem",
    height: "100%",
    left: "0",
    objectFit: "cover",
    top: "0",
    width: "100%",
    '-webkit-font-smoothing': 'antialiased',
    'text-rendering': 'optimizeLegibility',
    overscrollBehavior: "none"
  },
  img: {
    maxWidth: "100%",
    opacity: 0,
    transition: "opacity 0.4s ease",
    verticalAlign: "middle",

    "&[src]": { opacity: 1 },
  },
  button: {
    background: "none",
    border: "none",
    color: "inherit",
    cursor: "pointer",
    outline: "none",
  },
  "*": {
    maxWidth: '$content'
  },
  "html, body, canvas, div, header, nav, main, section, article, figure, figcaption, picture, video, iframe, footer":
  {
    maxWidth: "none",
  },
  "h1, h2, h3, h4, h5": {
    color: '$text_headline',
    fontWeight: '$heading',
    lineHeight: '$heading',
  },
  "hr": {
    marginBlockStart: '0',
    marginBlockEnd: '0',
    marginInlineStart: '0',
    marginInlineEnd: '0',
  },
  "*::selection": {
    textShadow: "none",
    backgroundColor: "$text_highlight_bg",
    color: "$text_highlight_color"
  },
});
