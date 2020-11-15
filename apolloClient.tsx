import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import fetch from 'isomorphic-unfetch';
import { createHttpLink } from '@apollo/client';
import { onError } from "apollo-link-error";
import { isBrowser } from './lib/isBrowser';
import Router from 'next/router';
export default function createApolloClient(initialState, ctx) {
    const link = createHttpLink({
        uri: '/graphql',
        credentials: 'same-origin'
    });

    const errorLink = onError(({ graphQLErrors, networkError }) => {
        if (graphQLErrors) {
            graphQLErrors.forEach(({ message, locations, path }) => {
                console.log(
                    `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
                )
                if(isBrowser && message.includes("Not Authorized")){
                    return Router.replace("/login")
                }
            }
            )};
        if (networkError) console.log(`[Network error]: ${networkError}`);
    });
    //   const client = new ApolloClient({
    //     cache: new InMemoryCache(),
    //     link,
    //   });
    // The `ctx` (NextPageContext) will only be present on the server.
    // use it to extract auth headers (ctx.req) or similar.
    return new ApolloClient({
        ssrMode: Boolean(ctx),
        link: errorLink.concat(new HttpLink({
            uri: 'http://localhost:8000/graphql', // Server URL (must be absolute)
            credentials: 'include', // Additional fetch() options like `credentials` or `headers`
            fetch,
        })),
        cache: new InMemoryCache().restore(initialState),
    });
}