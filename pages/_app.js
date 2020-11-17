import Head from 'next/head'
import '../styles/globals.css'
import { Layout } from "../components/index"

function MyApp({ Component, pageProps }) {
  const AddAdminHeader = Component.Tags ? Component.Tags : React.Fragment;
  return (
    <Layout>
      {/* <AddAdminHeader> */}
        <Component {...pageProps} />
      {/* </AddAdminHeader> */}
    </Layout>
  )
}

export default MyApp
