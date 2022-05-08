import { useSelector, useDispatch } from 'react-redux'
import {
  Menu,
  MenuList,
  MenuButton,
  MenuLink,
  MenuItem
} from "@reach/menu-button";
import VisuallyHidden from '@reach/visually-hidden'

import { Link } from '@/components/_common/links'
import Avatar from '@/components/_common/avatar'
import Text from "@/components/_common/text"
import ClientOnly from '@/components/_common/client-only'
import { styled, keyframes } from "@/theme/stitches.config"
import { selectUserData } from '@/redux/slices/userSlice'
import { useIsAuthenticated } from '@/utils/hooks/useIsAuthenticated'
import { Stack } from '@/components/_common/flex'
import { logout } from '@/redux/slices/userSlice'

const slideDown = keyframes({
  '0%': {
    opacity: 0,
    transform: 'translateY(-10px)',
  },
  '100%': {
    opacity: 1,
    transform: 'translateY(0)',
  }
});

const StyledMenuButton = styled(MenuButton, {
  padding: 0,
  display: 'flex',
  gap: '$2',
  alignItems: 'center'
})

const StyledMenuList = styled(MenuList, {
  color: '$text_body',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'stretch',
  gap: '$2',
  whiteSpace: 'nowrap',
  backgroundColor: '$bg_body',
  outline: 'none',
  fontSize: '85%',
  borderWidth: '1px',
  borderStyle: "solid",
  borderColor: '$card_border',
  borderRadius: '$sm',
  padding: '$2',
  marginTop: '$2',

  '[role="menuitem"]': {
    padding: '$2 $3',
    borderRadius: '$sm',

    '&:hover': {
      backgroundColor: '$card_bg',
    }
  },

  '&.slide-down[data-reach-menu-list], &.slide-down[data-reach-menu-items]': {
    animation: `${slideDown} 200ms ease`,
  }
})

const navItems = [
  {
    label: 'Admin',
    path: '/admin',
    allowedRoles: ['admin']
  },
  {
    label: 'Account',
    path: '/account',
    allowedRoles: ['user', 'admin']
  },
  {
    label: 'Settings',
    path: '/settings',
    allowedRoles: ['user', 'admin']
  },
  {
    label: 'Users',
    path: '/users',
    allowedRoles: ['admin']
  },
]

const AuthenticatedMenu = () => {
  const dispatch = useDispatch()
  const userData = useSelector(selectUserData)
  const { firstName } = userData || {}

  return <ClientOnly as={Menu}>
    <StyledMenuButton>
      <Avatar
        aria-hidden
        size="md"
        css={{ backgroundImage: "url('/avatar.jpeg')" }}
      />
      <VisuallyHidden>Menu</VisuallyHidden>
      <Text body aria-hidden="true">{firstName}</Text>
    </StyledMenuButton>
    <StyledMenuList className="slide-down">
      <MenuItem onSelect={() => dispatch(logout())}>Logout</MenuItem>
      {navItems.map((navItem, i) => (
        navItem.allowedRoles.includes(userData?.role) ? (
          <Link as={MenuLink} to={navItem.path} key={i}>{navItem.label}</Link>
        ) : null
      ))}
    </StyledMenuList>
  </ClientOnly>
}

const UnauthenticatedMenu = () => {
  return <ClientOnly as={Stack} align="center">
    <Link underline to="/register">Register</Link>
    <Text css={{ marginX: '$3' }}>|</Text>
    <Link underline to="/login">Login</Link>
  </ClientOnly>
}

export const UserMenu = () => {
  const isAuthenticated = useIsAuthenticated()

  if (isAuthenticated) {
    return <AuthenticatedMenu />
  }

  return (
    <UnauthenticatedMenu />
  )
}

export default UserMenu
