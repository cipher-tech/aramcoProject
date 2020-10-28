import { gql } from "@apollo/client";

export const RegisterMutation = gql`
mutation login($input: Login! ){
  login(input: $input){
    auth_token
  }
}
`