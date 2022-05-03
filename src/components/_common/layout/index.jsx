import { Box } from '@/components/_common/box'

const Dom = ({ children, ...props }) => {
  return (
    <Box data-domlayout {...props}>
      {children}
    </Box>
  )
}

export default Dom
