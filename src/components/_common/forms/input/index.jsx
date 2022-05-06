import { styled } from "@/theme"

export const Input = styled('input', {
  border: 'none',
  outline: 'none',
  boxShadow: '0 0 0 1px $colors$card_border',
  background: '$card_bg',
  padding: '$3 $3',
  borderRadius: '$md',
  color: '$text_body',
  fontSize: '$body',
  fontWeight: '$medium',

  '&:placeholder': {
    color: '$text_muted',
    fontWeight: '$medium',
  },

  '&:focus': {
    boxShadow: '0 0 0 1px $colors$primary400',
    border: 'none',
  }
})

export default Input
