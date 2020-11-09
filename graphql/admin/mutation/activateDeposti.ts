import { gql } from "@apollo/client";

export const ActivateDeposit = gql`
    mutation activateDeposit($input: Id){
  activateDeposit(input: $input){
    message
    status
  }
}
`