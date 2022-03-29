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
    pagination: {
      true: {
        padding: '$2',
        borderRadius: '$md',
        color: '$text_body',

        '&:hover': {
          background: 'linear-gradient(92.88deg, rgb(69, 94, 181) 9.16%, rgb(86, 67, 204) 43.89%, rgb(103, 63, 215) 64.72%)',
          color: '$primaryContrast'
        },

        '&:focus': {
          boxShadow: '0 0 0 1px $colors$primary400'
        },
      }
    },
    disabled: {
      true: {
        color: '$text_muted',
        backgroundColor: 'transparent',
        cursor: 'not-allowed',

        '&:hover': {
          color: '$text_muted',
          backgroundColor: 'transparent'
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
    active: {
      true: {
        color: '$primary500'
      }
    },
  }
})

const handleClick = (e, onClick, disabled) => {
  if (disabled) {
    e.preventDefault()
    return
  }
  onClick && onClick()
}

export const Link = ({ onClick, disabled, href, to, children, scroll = false, ...props }) => {

  return <NextLink
    href={to || href}
    target={href ? '_blank' : '_self'}
    scroll={scroll}
    passHref
  >
    <BaseLink
      onClick={(e) => handleClick(e, onClick, disabled)} aria-disabled={disabled} disabled={disabled} {...props}>{children}</BaseLink>
  </NextLink>;
};

export default Link;
