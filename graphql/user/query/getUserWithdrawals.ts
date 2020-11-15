import { gql } from "@apollo/client";

export const getUserWithdrawals = gql`
query getUserWithdrawals{
    getUserWithdrawals{
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