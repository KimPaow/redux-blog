import Head from 'next/head'
import RegisterForm from '@/components/_common/forms/register'
import Layout from '@/components/_common/layout'
import Text from '@/components/_common/text'
import { Stack } from '@/components/_common/flex'

export default function Register() {
  const handleRegister = ({ username, password }) => {
    console.log('handleRegister', username, password)
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
          <Text h4 as="h1">Register</Text>
          <RegisterForm onSubmit={handleRegister} buttonText="Register" css={{ margin: '0 auto' }} />
        </Stack>
      </Layout>
    </>
  )
}