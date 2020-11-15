import { gql } from "@apollo/client";

export const ActivateWithdrawal = gql`
mutation activateWithdrawal($input: Id){
  activateWithdrawal(input: $input){
    message
    status
  }
}
`