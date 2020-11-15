import { gql } from "@apollo/client";

export const DeleteDepositRequest = gql`
mutation deleteDepositRequest($input: Id){
  deleteDepositRequest(input: $input){
    message
    status
  }
}
`