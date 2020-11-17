import { gql } from "@apollo/client";

export const getUserStats = gql`
    query getUserStats{
    getUserStats{
        totalBalance
		totalEarnings
		totalDeposits
		activePlan
    }
}
`