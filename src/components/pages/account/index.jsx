import { useSelector } from 'react-redux'

import Layout from '@/components/_common/layout'
import Stack from '@/components/_common/flex/stack'
import Text from '@/components/_common/text'
import Loader from '@/components/_common/loader'
import Card from '@/components/_common/card'
import useProtectedPage from '@/utils/hooks/useProtectedPage'

import { selectUserData } from '@/redux/slices/userSlice'
import { useSetUserRoleMutation } from '@/redux/api/userApi'

export const AdminPage = () => {
  const isAllowed = useProtectedPage(['user', 'admin'])
  const userData = useSelector(selectUserData)

  const [setUserRole, { isLoading, isError, error, isSuccess }] = useSetUserRoleMutation();

  let content = null;

  if (isLoading) {
    content = <Loader />
  } else if (isSuccess) {
    content = <Card status="success"><Text body status="success">Role update successful! You have to log out and back in for changes to take effect.</Text></Card>
  } else if (isError) {
    content = <Card status="error"><Text body status="error">{error?.data.message}</Text></Card>
  }

  return isAllowed ? (
    <Layout as="main">
      <Stack gap={[4, 4, 5]} column>
        <Text h1>Account Page</Text>
        <Text body>This page is protected and only accessible for users that are logged in</Text>
        <Stack column gap={2} css={{ maxWidth: '500px' }}>
          <select
            disabled={isLoading}
            defaultValue={userData?.role}
            onChange={e => setUserRole({ role: e.target.value })}
          >
            <option value="user">User</option>
            <option value="admin">Admin</option>
          </select>
          {content}
        </Stack>
      </Stack>
    </Layout>
  ) : null
}

export default AdminPage
