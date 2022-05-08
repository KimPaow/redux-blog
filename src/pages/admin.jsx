import Head from 'next/head'
import AdminPage from '@/components/pages/admin'

export default function Home() {
  return (
    <>
      <Head>
        <title>Admin | Attuned Blog</title>
        <meta name="description" content="The latest from us at Attuned" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AdminPage />
    </>
  )
}