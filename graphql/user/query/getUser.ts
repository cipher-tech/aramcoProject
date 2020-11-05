import { gql } from "@apollo/client"

export const GetUser = gql`
query getUser{
    getUser{
      id
      first_name
      last_name
      email
      phone_no
      password
      status
      coin_address
      wallet_balance
      plan
      role
      slug
      auth_token
      createdAt
      updatedAt
    }
  }
`