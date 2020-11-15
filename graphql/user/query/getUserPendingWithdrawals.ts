import { gql } from "@apollo/client";

export const getUserPendingWithdrawals = gql`
query getUserPendingWithdrawals{
    getUserPendingWithdrawals{
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