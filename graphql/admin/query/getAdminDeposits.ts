import { gql } from "@apollo/client";

export const PendingDeposits = gql`
query getAdminDeposits{
  getAdminDeposits{
    id
    userId
    slug
    status
    amount
    createdAt
  }
}
`