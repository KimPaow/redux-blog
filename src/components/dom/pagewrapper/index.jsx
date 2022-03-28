import { styled } from '@/theme'

export const PageWrapper = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  maxWidth: '$9',
  marginX: 'auto',
  paddingY: '$5',

  '@sm': {
    paddingY: '$7'
  }
})

export default PageWrapper;
