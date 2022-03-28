import { styled } from '@/theme'

export const Divider = styled('hr', {
  width: '$5',
  height: '1px',
  border: 0,
  background: '$text_muted',
})

const BaseText = styled('span', {
  fontSize: 'inherit',
  color: 'inherit',
  lineHeight: 'inherit',
  transition: 'color 0.3s ease-in-out',

  variants: {
    width: {
      content: {
        maxWidth: '$content'
      }
    },
    align: {
      center: {
        textAlign: 'center'
      }
    },
    color: {
      muted: {
        color: '$text_muted',
      },
      body: {
        color: '$text_body',
      },
      headline: {
        color: '$text_headline',
      },
    },
    caption: {
      true: {
        fontSize: '$3',
        fontFamily: '$body',
        fontWeight: '$body',
        lineHeight: 'normal',
      }
    },
    label: {
      true: {
        fontSize: '$1',
        fontFamily: '$body',
        fontWeight: '$body',
        lineHeight: '$body',
      }
    },
    display: {
      large: {
        fontSize: '$8',
        fontFamily: '$heading',
        lineHeight: '$heading',
        fontWeight: '$heading',
        textTransform: 'uppercase',
        '@sm': {
          fontSize: '$12',
        },
        '@md': {
          fontSize: '$14',
        },
        '@lg': {
          fontSize: '$16',
        },
      },
      medium: {
        fontSize: '$7',
        fontFamily: '$heading',
        lineHeight: '$heading',
        fontWeight: '$heading',
        textTransform: 'uppercase',
        '@sm': {
          fontSize: '$10',
        },
        '@md': {
          fontSize: '$12',
        },
        '@lg': {
          fontSize: '$14',
        },
      }
    },
    preamble: {
      true: {
        fontSize: '$4',
        fontFamily: '$body',
        lineHeight: 'normal',
        fontWeight: '$body',

        '@sm': {
          fontSize: '$preamble',
          lineHeight: '$body',
        },
      }
    },
    body: {
      true: {
        fontSize: '$3',
        fontFamily: '$body',
        lineHeight: '$body',
        fontWeight: '$body',
        maxWidth: '70ch',

        '@sm': {
          fontSize: '$body',
        },
      }
    },
    quote: {
      true: {
        fontSize: '$2',
        fontFamily: '$body',
        lineHeight: '$body',
        fontWeight: '$body',
      }
    },
    h1: {
      true: {
        textTransform: 'uppercase',
        fontSize: '$h1',
        fontFamily: '$heading',
        fontWeight: '$heading',
        lineHeight: '$heading',
      }
    },
    h2: {
      true: {
        textTransform: 'uppercase',
        fontSize: '$h2',
        fontFamily: '$heading',
        fontWeight: '$heading',
        lineHeight: '$heading',
      }
    },
    h3: {
      true: {
        textTransform: 'uppercase',
        fontSize: '$h3',
        fontFamily: '$heading',
        fontWeight: '$heading',
        lineHeight: '$heading',
      }
    },
    h4: {
      true: {
        textTransform: 'uppercase',
        fontSize: '$h4',
        fontFamily: '$heading',
        fontWeight: '$heading',
        lineHeight: '$heading',
      }
    },
    h5: {
      true: {
        textTransform: 'uppercase',
        fontSize: '$h5',
        fontFamily: '$heading',
        fontWeight: '$heading',
        lineHeight: '$heading',
      }
    },
  }
})

export const Text = ({ h1, h2, h3, h4, h5, h6, body, quote, css, ...props }) => {
  if (!props.children) {
    return null
  };

  let as = "span";
  const _props = { h1, h2, h3, h4, h5, h6, body, quote }

  // properly apply the correct tag - span by default
  if (!props.as) {
    if (h1) {
      as = "h1"
    } else if (h2) {
      as = "h2"
    } else if (h3) {
      as = "h3"
    } else if (h4) {
      as = "h4"
    } else if (h5) {
      as = "h5"
    } else if (h6) {
      as = "h6"
    } else if (body) {
      as = "p"
    } else if (quote) {
      as = "blockquote"
    }
  }

  return <BaseText as={props.as || as} h1={h1} h2={h2} css={css} {..._props} {...props} />;
};

export default Text;
