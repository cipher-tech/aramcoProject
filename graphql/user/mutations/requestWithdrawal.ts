import { gql } from "@apollo/client";

const RequestWithdrawal = gql`
    mutation withdrawalRequest($input: WithdrawalRequest! ){
        withdrawalRequest(input: $input){
   	        message
  	        status
		    referenceId
        }
    }
`