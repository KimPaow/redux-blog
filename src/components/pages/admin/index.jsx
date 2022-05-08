import Layout from '@/components/_common/layout'
import Stack from '@/components/_common/flex/stack'
import Text from '@/components/_common/text'
import useProtectedPage from '@/utils/hooks/useProtectedPage'

export const AdminPage = () => {
  const isAllowed = useProtectedPage(['admin'])

  return isAllowed ? (
    <Layout as="main">
      <Stack gap={[4, 4, 5]} column>
        <Text h1>Admin Page</Text>
        <Text body>This page is protected and only accessible for users with the role &apos;admin&apos;</Text>
      </Stack>
    </Layout>
  ) : null
}

export default AdminPage
