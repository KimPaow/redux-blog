import Head from 'next/head'
import RegisterForm from '@/components/_common/forms/RegisterForm'
import Layout from '@/components/_common/layout'
import Text from '@/components/_common/text'
import { Stack } from '@/components/_common/flex'
import Loader from '@/components/_common/loader'
import Card from '@/components/_common/card'

import { useRegisterUserMutation } from '@/redux/api/authApi'

export default function Register() {
  const [registerUser, { isLoading, isError, error, isSuccess }] = useRegisterUserMutation();

  const handleRegister = async (values) => {
    if (values) {
      await registerUser(values);
    }
  }

  let content = null;

  if (isLoading) {
    content = <Loader />
  } else if (isSuccess) {
    content = <Card status="success"><Text status="success">User created!</Text></Card>
  } else if (isError) {
    content = <Card status="error"><Text status="error">{error?.data?.message}</Text></Card>
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
          {content}
        </Stack>
      </Layout>
    </>
  )
}