import { styled } from '@/theme/stitches.config'

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
    status: {
      error: {
        color: '$red500',
      }
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
        fontSize: '$h1',
        fontFamily: '$heading',
        fontWeight: '$heading',
        lineHeight: '$heading',
      }
    },
    h2: {
      true: {
        fontSize: '$h2',
        fontFamily: '$heading',
        fontWeight: '$heading',
        lineHeight: '$heading',
      }
    },
    h3: {
      true: {
        fontSize: '$h3',
        fontFamily: '$heading',
        fontWeight: '$heading',
        lineHeight: '$heading',
      }
    },
    h4: {
      true: {
        fontSize: '$h4',
        fontFamily: '$heading',
        fontWeight: '$heading',
        lineHeight: '$heading',
      }
    },
    h5: {
      true: {
        fontSize: '$h5',
        fontFamily: '$heading',
        fontWeight: '$heading',
        lineHeight: '$heading',
      }
    },
  }
})

export const Text = (props) => {
  if (!props.children) {
    return null
  };

  let as = props.as;

  // properly apply the correct tag - span by default
  // this is syntactic sugar, else you'd have to apply both 
  // the style variant and the matching prop every time 
  if (!as) {
    if (props.h1) {
      as = "h1"
    } else if (props.h2) {
      as = "h2"
    } else if (props.h3) {
      as = "h3"
    } else if (props.h4) {
      as = "h4"
    } else if (props.h5) {
      as = "h5"
    } else if (props.h6) {
      as = "h6"
    } else if (props.body) {
      as = "p"
    } else if (props.quote) {
      as = "blockquote"
    }
  }

  return <BaseText as={as} {...props} />;
};

export default Text;
