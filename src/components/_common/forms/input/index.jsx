import { styled } from "@/theme"

export const Input = styled('input', {
  border: '1px solid $card_bg',
  background: '$card_bg',
  padding: '$3 $3',
  borderRadius: '$md',
  color: '$text_body',

  '&:placeholder': {
    color: '$text_muted'
  }
})

export default Input
