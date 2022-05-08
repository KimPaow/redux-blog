import Layout from '@/components/_common/layout'
import Stack from '@/components/_common/flex/stack'
import Text from '@/components/_common/text'
import useProtectedPage from '@/utils/hooks/useProtectedPage'

export const AdminPage = () => {
  const isAllowed = useProtectedPage(['user', 'admin'])

  return isAllowed ? (
    <Layout as="main">
      <Stack gap={[4, 4, 5]} column>
        <Text h1>Account Page</Text>
        <Text body>This page is protected and only accessible for users that are logged in</Text>
      </Stack>
    </Layout>
  ) : null
}

export default AdminPage
