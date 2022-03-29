import { styled } from '@/theme'

export const PageWrapper = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  maxWidth: '$9',
  marginX: 'auto',
  paddingBottom: '$5',

  '@sm': {
    paddingBottom: '$6'
  }
})

export default PageWrapper;
