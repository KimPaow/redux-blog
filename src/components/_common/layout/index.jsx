import { styled } from '@/theme/stitches.config'
import Header from '@/components/_common/header'

export const Wrapper = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  maxWidth: '$9',
  marginX: 'auto',
  paddingBottom: '$5',
  paddingX: '$3',
  color: '$text_body',

  '@sm': {
    paddingBottom: '$6',
    paddingX: '$4',
  },
})

export const Layout = ({ children, ...props }) => {
  return <Wrapper {...props}>
    <Header />
    {children}
  </Wrapper>
}

export default Layout;
