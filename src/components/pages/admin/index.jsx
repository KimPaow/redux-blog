import Layout from '@/components/_common/layout'
import Stack from '@/components/_common/flex/stack'
import Text from '@/components/_common/text'
import Loader from '@/components/_common/loader'
import Card from '@/components/_common/card'

import useProtectedPage from '@/utils/hooks/useProtectedPage'

import { useGetAllUsersQuery } from '@/redux/api/userApi'

export const AdminPage = () => {
  const isAllowed = useProtectedPage(['admin'])

  const {
    data,
    isLoading,
    isSuccess,
    isError,
    error
  } = useGetAllUsersQuery()

  let content = null

  if (isLoading) {
    content = <Loader css={{ minHeight: '75vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }} />
  } else if (isSuccess) {
    content = data?.users?.map(({ _id, firstName, lastName }) => <Text key={_id}>{`${firstName} ${lastName}`}</Text>)
  } else if (isError) {
    content = <Card status="error"><Text body status="error">{JSON.stringify(error, null, 2)}</Text></Card>
  }

  return isAllowed ? (
    <Layout as="main">
      <Stack gap={[3, 4]} column>
        <Text h1>Admin Page</Text>
        <Text body>This page is protected and only accessible for users with the role &apos;admin&apos;</Text>
        <Text h3>All users:</Text>
        <Stack column gap={3}>{content}</Stack>
      </Stack>
    </Layout>
  ) : null
}

export default AdminPage
