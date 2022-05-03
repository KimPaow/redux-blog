import { styled } from '@/theme/stitches.config'

export const PageWrapper = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  maxWidth: '$9',
  marginX: 'auto',
  paddingBottom: '$5',
  paddingX: '$3',

  '@sm': {
    paddingBottom: '$6',
    paddingX: '$4',
  },
})

export default PageWrapper;
