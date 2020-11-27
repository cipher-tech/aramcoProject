import { gql } from "apollo-boost";

export const cancelWithdrawal = gql`
    mutation cancelWithdrawal($input: Id){
        cancelWithdrawal(input: $input){
            message
            status
        }
    }
`