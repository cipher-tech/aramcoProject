import { gql } from "@apollo/client";

export const getPendingWithdrawals = gql`
query getPendingWithdrawals{
  getPendingWithdrawals{
    id
    userId
    slug
    status
    amount
    createdAt
    users{
      id
      email
      first_name
  	}
  }
}
`