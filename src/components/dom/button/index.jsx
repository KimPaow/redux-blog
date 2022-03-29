import { styled } from '@/theme'

export const Button = styled('button', {
  fontSize: '$body',
  lineHeight: 'inherit',
  padding: '$2 $3',
  borderRadius: '$md',
  transition: 'background-color 0.25s ease-in-out, box-shadow 0.15s ease-in-out',
  color: '$white_alpha800',
  textAlign: 'center',

  '&:focus': {
    boxShadow: '0 0 0 2px $colors$primary400'
  },

  variants: {
    fluid: {
      false: {
        minWidth: '$6'
      }
    },
    style: {
      text: {
        fontSize: '$2',
        color: '$text_body',
        backgroundColor: 'none',
        padding: '0',

        '&:hover': {
          color: '$primary500',
          backgroundColor: 'none',
        },

        '&:focus': {
          boxShadow: 'none'
        },
      },
      solid: {
        backgroundColor: '$primary600',

        '&:hover': {
          backgroundColor: '$primary700'
        },
      },
    },
  }
})

export default Button;
