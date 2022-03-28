import { styled } from '@/theme'
import NextLink from 'next/link'

const BaseLink = styled('a', {
  color: '$text_link',
  cursor: 'pointer',
  display: 'inline-block',
  fontWeight: '$link',
  justifySelf: 'flex-start',
  lineHeight: 'inherit',
  outline: "none",
  position: 'relative',
  textDecoration: "none",
  transition: 'color 0.2s',
  zIndex: "$content",

  variants: {
    navlink: {
      true: {
        textTransform: 'uppercase',
        fontFamily: '$navlink',
        color: '$text_body'
      }
    },
    active: {
      true: {
        color: '$text_body'
      }
    },
    disabled: {
      true: {
        color: '$text_muted',
        backgroundColor: 'none',
        pointerEvents: 'none',
        '&:hover': {
          backgroundColor: 'none'
        }
      }
    },
    pagination: {
      true: {
        padding: '$2',
        borderRadius: '$md',
        color: '$text_muted',

        '&:hover': {
          backgroundColor: '$primary500',
          color: '$text_body'
        }
      }
    },
    underline: {
      true: {
        lineHeight: '$body',
        '&::after': {
          content: '""',
          position: 'absolute',
          height: '0.1ch',
          bottom: '0',
          left: '0',
          right: '100%',
          backgroundColor: 'currentColor',
          transition: 'right 0.2s ease-in-out',
          willChange: 'right',
        },

        '&:hover': {
          '&::after': {
            right: 0,
          }
        }
      }
    },
  }
})

export const Link = ({ onClick, href, to, children, scroll = false, ...props }) => {

  return <NextLink
    onClick={onClick}
    href={to || href}
    target={href ? '_blank' : '_self'}
    scroll={scroll}
    passHref
  >
    <BaseLink {...props}>{children}</BaseLink>
  </NextLink>;
};

export default Link;
