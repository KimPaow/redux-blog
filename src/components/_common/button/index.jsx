import { styled } from '@/theme/stitches.config'

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
        color: '$text_muted',
        backgroundColor: 'none',
        padding: '$2',

        '&:hover': {
          color: '$text_body',
          backgroundColor: 'none',
        },
      },
      solid: {
        color: '$primaryContrast',
        background: 'linear-gradient(92.88deg, rgb(69, 94, 181) 9.16%, rgb(86, 67, 204) 43.89%, rgb(103, 63, 215) 64.72%)',

        '&:hover': {
          boxShadow: '0 0 10px rgb(86, 67, 204)'
        },
      },
    },
  }
})

export default Button;
