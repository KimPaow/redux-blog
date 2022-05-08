import { Box } from '@/components/_common/box'
import { useGetCsurfTokenQuery } from '@/redux/api/authApi'

export const AppLayout = (props) => {
  useGetCsurfTokenQuery()

  return <Box css={{ backgroundColor: '$bg_body', minHeight: '100vh' }} {...props} />
}

export default AppLayout
