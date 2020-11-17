import { gql } from "@apollo/client";

export const PendingDeposits = gql`
query getAdminWithdrawals{
  getAdminWithdrawals{
    id
    userId
    slug
    status
    amount
    createdAt
  }
}
`