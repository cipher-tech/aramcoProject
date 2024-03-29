import { gql } from "@apollo/client";

export const RegisterMutation = gql`
mutation login($input: Login! ){
  login(input: $input){
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