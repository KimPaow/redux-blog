import Head from 'next/head'
import LoginForm from '@/components/_common/forms/LoginForm'
import Layout from '@/components/_common/layout'
import Text from '@/components/_common/text'
import { Stack } from '@/components/_common/flex'
import Loader from '@/components/_common/loader'
import Card from '@/components/_common/card'

import { useLoginUserMutation } from '@/redux/api/authApi'

export default function Login() {
  const [loginUser, { isLoading, isError, error, isSuccess }] = useLoginUserMutation();

  const handleLogin = async (values) => {
    if (values) {
      await loginUser(values);
    }
  }

  let content = null;

  if (isLoading) {
    content = <Loader />
  } else if (isSuccess) {
    content = <Card status="success"><Text status="success">Login successful!</Text></Card>
  } else if (isError) {
    content = <Card status="error"><Text status="error">{error?.data.message}</Text></Card>
  }

  return (
    <>
      <Head>
        <title>Attuned Blog</title>
        <meta name="description" content="The latest from us at Attuned" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout as="main">
        <Stack gap={4} column css={{ margin: '0 auto', width: '100%', maxWidth: '$8', alignItems: 'stretch' }}>
          <Text h4 as="h1">Login</Text>
          <LoginForm onSubmit={handleLogin} buttonText="Login" css={{ margin: '0 auto' }} />
          {content}
        </Stack>
      </Layout>
    </>
  )
}