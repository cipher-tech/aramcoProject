import Router from 'next/router';
import React from 'react'
import { logout } from '../graphql/user/mutations/logout';
import { withApollo } from '../lib/apolloClient';
import { MyContext } from '../lib/interface/context';

const Logout = (props) => {
    console.log(props.log);
    return null
}
export default withApollo({ ssr: true })(Logout)

// export const getStaticProps = async ({apolloClient}: MyContext) => {
//     await apolloClient.mutate({mutation: logout})
//     // Router.push("/login")
//     return {
//         props: {
//             log: "lll"
//         }
//     }
// }