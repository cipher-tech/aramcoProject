import { gql } from "@apollo/client";

export const DeleteWithdrawalRequest =gql`
mutation DeleteWithdrawalRequest($input: Id){
  deleteWithdrawalRequest(input: $input){
    message
    status
  }
}
`