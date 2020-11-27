import { gql } from "apollo-boost";

export const cancelDeposit = gql`
        mutation cancelDeposit($input: Id){
        cancelDeposit(input: $input){
            message
            status
        }
    }
`