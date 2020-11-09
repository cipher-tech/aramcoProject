import { gql } from "@apollo/client";

export const PendingDeposits = gql`
query getPendingDeposits{
  getPendingDeposits{
    id
    userId
    slug
    status
    amount
    plan
    createdAt
    users{
      id
      email
      first_name
    }
  }
}
`