import { useDispatch } from 'react-redux'
import { useRouter } from 'next/router'

import { setSearchQuery } from '@/redux/slices/searchSlice'

import Stack from "@/components/_common/flex/stack"
import UserMenu from '@/components/_common/usermenu'
import Search from '@/components/_common/search'
import { Link } from '@/components/_common/links'
import { styled } from '@/theme/stitches.config'

export const HeaderContainer = styled(Stack, {
  paddingY: '$4',
  marginBottom: '$4',
  borderBottom: '1px solid $text_muted',
  alignItems: 'center',

  '@sm': {
    marginBottom: '$5',
  }
})

const handleSubmitSearch = ({ page, router, dispatch, event }) => {
  event.preventDefault()
  dispatch(setSearchQuery(event?.target?.elements?.search?.value))

  if (page !== 1 || router.route !== '/') {
    router.push('/', null, { shallow: true })
  }
}

export const Header = () => {
  const dispatch = useDispatch()
  const router = useRouter()
  const page = Number(router?.query?.page) || 1

  return <HeaderContainer gap={4}>
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
  </HeaderContainer>
}

export default Header