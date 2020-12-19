import Head from 'next/head'
import '../styles/globals.css'
import '../styles/login.css'
import { Layout } from "../components/index"

function MyApp({ Component, pageProps }) {
  const AddAdminHeader = Component.Tags ? Component.Tags : React.Fragment;
  return (
    <>
      <Head>
        <link rel="stylesheet" href="/assets/css/style.css" />
      </Head>  
      <Layout>
        {/* <AddAdminHeader> */}
        <Component {...pageProps} />
        {/* </AddAdminHeader> */}
      </Layout>
    </>
  )
}

export default MyApp
