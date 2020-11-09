import { gql } from "@apollo/client";

export const RequestDeposit = gql`
    mutation depositRequest($input: DepositRequest! ){
        depositRequest(input: $input){
            message
            status
            referenceId
        }
    }
`