import '../styles/globals.css'
import { Layout } from "../components/index"
import { ApolloProvider } from '@apollo/client'
import { useApollo } from '../lib/apolloClient'

function MyApp({ Component, pageProps }) {
  const apolloClient = useApollo(pageProps.initialApolloState)
  return (
    <ApolloProvider client={apolloClient}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ApolloProvider>
  )
}

export default MyApp
