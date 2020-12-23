import { gql } from "@apollo/client";

export const DeleteUser = gql`
mutation deleteUser($input: Id){
  deleteUser(input: $input){
    message
    status
  }
}
`