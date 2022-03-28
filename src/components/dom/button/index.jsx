import { styled } from '@/theme'

export const Button = styled('button', {
  fontSize: '$body',
  lineHeight: 'inherit',
  padding: '$2 $3',
  borderRadius: '$md',
  transition: 'background-color 0.25s ease-in-out',
  color: '$white_alpha800',
  textAlign: 'center',

  variants: {
    fluid: {
      false: {
        minWidth: '$6'
      }
    },
    type: {
      text: {
        fontSize: '$2',
        color: '$white_alpha900',
        backgroundColor: 'none',
        padding: '0',

        '&:hover': {
          color: '$primary500',
          backgroundColor: 'none',
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
