import Head from 'next/head'
import AccountPage from '@/components/pages/account'

export default function Account() {
  return (
    <>
      <Head>
        <title>Admin | Attuned Blog</title>
        <meta name="description" content="The latest from us at Attuned" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AccountPage />
    </>
  )
}