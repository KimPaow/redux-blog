import { useDispatch } from 'react-redux'
import { useRouter } from 'next/router'

import { styled } from '@/theme/stitches.config'
import Header from '@/components/_common/header'
import UserMenu from '@/components/_common/usermenu'
import Search from '@/components/_common/search'
import { Link } from '@/components/_common/links'

import { setSearchQuery } from '@/features/search/searchSlice'

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

const handleSubmitSearch = ({ page, router, dispatch, event }) => {
  event.preventDefault()
  dispatch(setSearchQuery(event?.target?.elements?.search?.value))

  if (page !== 1 || router.route !== '/') {
    router.push('/', null, { shallow: true })
  }
}

export const Layout = ({ children, ...props }) => {
  const dispatch = useDispatch()
  const router = useRouter()
  const page = Number(router?.query?.page) || 1

  return <Wrapper {...props}>
    <Header gap={4}>
      <Link underline to="/">Home</Link>
      <Search
        onSubmit={(event) => handleSubmitSearch({ event, page, router, dispatch })}
        css={{
          flex: 1,
          marginLeft: 'auto',

          '@sm': {
            flexGrow: '0'
          }
        }}
      />
      <UserMenu />
    </Header>
    {children}
  </Wrapper>
}

export default Layout;
