import { Box } from '@/components/dom/box'

const Dom = ({ children, ...props }) => {
  return (
    <Box data-domlayout {...props}>
      {children}
    </Box>
  )
}

export default Dom
