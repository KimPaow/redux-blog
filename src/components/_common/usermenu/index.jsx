// import "@reach/menu-button/styles.css";
import {
  Menu,
  MenuList,
  MenuButton,
  MenuLink,
} from "@reach/menu-button";
import VisuallyHidden from '@reach/visually-hidden'
import { Link } from '@/components/_common/links'
import Avatar from '@/components/_common/avatar'
import { styled, keyframes } from "@/theme/stitches.config";

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

export const UserMenu = () => {

  const handleClick = (e) => {
    e.preventDefault()
    console.log('avatar click')
  }

  return (
    <>
      <Menu>
        <StyledMenuButton>
          <Avatar
            aria-hidden
            onClick={handleClick}
            size="md"
            css={{ backgroundImage: "url('/avatar.jpeg')" }}
          />
          <VisuallyHidden>Menu</VisuallyHidden>
        </StyledMenuButton>
        <StyledMenuList className="slide-down">
          <Link as={MenuLink} to="register">Register</Link>
          <Link as={MenuLink} to="login">Login</Link>
        </StyledMenuList>
      </Menu>
    </>
  )
}

export default UserMenu
