import { styled } from '@stitches/react'

export const Input = styled('input', {
  border: 'none',
  padding: '$2 $3',
  fontSize: '$body',
  fontFamily: '$body',
  color: '$text_body',
  outline: 'none',
  borderRadius: '$md',
  backgroundColor: '$card_bg',
  transition: 'box-shadow 0.15s ease-in-out, background-color 0.15s ease-in-out',

  '&:hover': {
    backgroundColor: '$card_bg_hover',
    boxShadow: '0 0 0 1px $colors$card_border'
  },

  '&:focus': {
    boxShadow: '0 0 0 1px $colors$primary400'
  },

  '&:disabled': {
    color: '$text_muted',
    backgroundColor: '$card_bg_disabled',
    cursor: 'not-allowed',

    '&:hover': {
      backgroundColor: '$card_bg_disabled',
      boxShadow: 'none'
    },
  },
})

export default Input
