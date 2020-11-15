import { gql } from "@apollo/client";

export const getUserDeposits = gql`
query getUserDeposits{
    getUserDeposits{
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