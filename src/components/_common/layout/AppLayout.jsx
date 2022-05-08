import { Box } from '@/components/_common/box'

export const AppLayout = (props) => {

  return <Box css={{ backgroundColor: '$bg_body', minHeight: '100vh' }} {...props} />
}

export default AppLayout
