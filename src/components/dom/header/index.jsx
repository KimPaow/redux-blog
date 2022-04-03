import Stack from "@/components/dom/flex/stack"
import { styled } from '@/stitches/stitches.config'

export const Header = styled(Stack, {
  paddingY: '$4',
  marginBottom: '$4',
  borderBottom: '1px solid $text_muted',

  '@sm': {
    marginBottom: '$5',
  }
})

export default Header