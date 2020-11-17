import { gql } from "@apollo/client";

export const getAdminStats = gql`
    query getAdminStats{
    getAdminStats{
        totalBalance
		totalEarnings
		totalDeposits
		totalWithdrawal
    }
}
`