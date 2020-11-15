import { gql } from "@apollo/client";

export const getUserPendingDeposits = gql`
query getUserPendingDeposits{
    getUserPendingDeposits{
        id
        userId
        slug
        status
        amount
        plan
        createdAt
    }
}
`