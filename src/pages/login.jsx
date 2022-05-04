import Head from 'next/head'
import LoginForm from '@/components/_common/forms/login'
import Layout from '@/components/_common/layout'
import Text from '@/components/_common/text'
import { Stack } from '@/components/_common/flex'

export default function Login() {

  const handleLogin = ({ username, password }) => {
    console.log('handleLogin', username, password)
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
        </Stack>
      </Layout>
    </>
  )
}