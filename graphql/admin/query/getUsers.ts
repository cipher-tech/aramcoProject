import { gql } from "@apollo/client";

export const getUsers = gql`
    query getUsers{
    getUsers{
    	id
     	first_name
     	email
    	phone_no
    	plan
    	coin_address
    }
}
`