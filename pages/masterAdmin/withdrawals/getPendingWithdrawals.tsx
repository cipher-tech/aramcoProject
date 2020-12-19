import Head from 'next/head'
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
// import { Helmet } from "react-helmet";
import { MasterAdminSidenav, MasterAdminStatsCard, Plan, SideBar, StockPlan, TableComponent, UserAdminHeader } from "../../../components/index"
import { DepositAttributes, useActivateWithdrawalMutation, useDeleteWithdrawalRequestMutation, useGetPendingDepositsQuery, useGetPendingWithdrawalsQuery, useGetUserQuery } from '../../../generated/apolloComponent';
import { withApollo } from '../../../lib/apolloClient';

const index = () => {
    const [message, setMessage] = useState("")
    const { data, loading: userIsLoading, error: userHasError } = useGetUserQuery()
    const { data: pendingWithdrawal, loading: withdrawalIsLoading, error, refetch: refetchPendingWithdrawal } = useGetPendingWithdrawalsQuery()
    const [WithdrawalMutation, { data: WithdrawalMutationData,
        loading: WithdrawalMutationLoading,
        error: WithdrawalMutationError }] = useActivateWithdrawalMutation()

    const [deleteWithdrawalMutation, { data: deleteWithdrawalMutationData,
        loading: deleteWithdrawalMutationLoading,
        error: deleteWithdrawalMutationError }] = useDeleteWithdrawalRequestMutation()

    const router = useRouter()
    const Withdrawal = async (payload: DepositAttributes) => {

        router.push({
            pathname: "/masterAdmin/withdrawals/withdrawal",
            query: { payload: JSON.stringify(payload) }
        })
        // await setMessage('')
        // await WithdrawalMutation({
        //     variables: {
        //         input: {
        //             id: payload.id
        //         }
        //     }
        // })

        // setMessage(WithdrawalMutationError ? "Could not activate deposit" : "deposit Activated. Plan started")
        // await refetchPendingWithdrawal()
        // console.log("pending");
    }
    const deleteWithdrawal = async (payload) => {
        await setMessage('')
        await deleteWithdrawalMutation({
            variables: {
                input: {
                    id: payload.id
                }
            }
        })

        setMessage(deleteWithdrawalMutationError ? "Could not activate deposit" : "Withdrawal deleted")
        await refetchPendingWithdrawal()
        console.log("pending");
    }

    return (
        <>
            <style jsx>{`
                .page-title{
                    font-weight:bold;
                    text-transform: uppercase;
                }
                td,th{
                    font-weight: bold;
                }
                .panel-body.no-side-padding{
                    padding-left: 0;
                    padding-right: 0;
                }
                .dashboard-stat .desc.small14, .small14{
                    font-size: 14px;
                }
                .dashboard-stat .desc.small13, .small13{
                    font-size: 13px;
                }
                .small12{
                    font-size: 12px;
                }
            `}</style>
            <Head>
                <meta charSet="utf-8" />
                <title>Sabic-Aramco</title>
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                <meta content="width=device-width, initial-scale=1" name="viewport" />
                <meta content="" name="description" />
                <meta content="" name="author" />

                {/* <!-- ASSETS --> */}
                <link href="css.css?family=Open+Sans:400,300,600,700&subset=all" rel="stylesheet" type="text/css" />
                <link href="/admin/assets/admin/css/font-awesome.min.css" rel="stylesheet" type="text/css" />
                <link href="/admin/assets/admin/css/simple-line-icons.min.css" rel="stylesheet" type="text/css" />
                <link href="/admin/assets/admin/css/bootstrap.min.css" rel="stylesheet" type="text/css" />
                <link href="/admin/assets/admin/css/uniform.default.css" rel="stylesheet" type="text/css" />
                <link href="/admin/assets/admin/css/components-rounded.min.css" rel="stylesheet" id="style_components" type="text/css" />
                <link href="/admin/assets/admin/css/jquery.fileupload.css" rel="stylesheet" type="text/css" />

                <link href="/admin/assets/admin/css/jquery.fileupload-ui.css" rel="stylesheet" type="text/css" />
                <link href="/admin/assets/admin/css/plugins.min.css" rel="stylesheet" type="text/css" />
                <link href="/admin/assets/admin/css/layout.min.css" rel="stylesheet" type="text/css" />
                <link href="/admin/assets/admin/css/darkblue.min.css" rel="stylesheet" type="text/css" id="style_color" />
                <link href="/admin/assets/admin/css/custom.min.css" rel="stylesheet" type="text/css" />
                <link href="/admin/assets/admin/css/datatables.min.css" rel="stylesheet" type="text/css" />
                <link href="/admin/assets/admin/css/datatables.bootstrap.css" rel="stylesheet" type="text/css" />
                {/* <!-- END ASSETS --> */}

                <link rel="stylesheet" type="text/css" href="/admin/assets/admin/css/sweetalert.css" />

                <link rel="shortcut icon" href="/images/logo.png" />
            </Head>

            <body className="page-header-fixed page-sidebar-closed-hide-logo">
                <UserAdminHeader />
                {/* <!-- BEGIN HEADER & CONTENT DIVIDER --> */}
                <div className="clearfix"></div>
                <div className="page-container">

                    <MasterAdminSidenav />

                    {/* <!-- BEGIN CONTENT --> */}
                    <div className="page-content-wrapper">
                        <div className="page-content">
                            <h3 className="page-title">Dashboard </h3>
                            <hr />

                            {/* <!--  ==================================VALIDATION ERRORS==================================  --> */}
                            {/* <!--  ==================================SESSION MESSAGES==================================  --> */}
                            {/* <!-- BEGIN HEADER --> */}
                            <MasterAdminStatsCard />
                            {/* <!-- END HEADER --> */}

                            <div className="row">
                                {message}
                                {withdrawalIsLoading ? "Loading..."
                                    :
                                    <TableComponent title="Withdrawal Request"
                                        headers={["userId", "email", "slug", " status ", "amount", "createdAt"]}
                                        body={pendingWithdrawal.getPendingWithdrawals}
                                        keys={["userId", "users", "slug", "status", "amount", "createdAt",]}
                                        nestedKeys={['email']}
                                        buttonAction={[Withdrawal, deleteWithdrawal]}
                                        buttonText={["View", "Delete"]}
                                    />
                                }
                            </div>
                        </div>
                    </div>
                    {/* <!-- END CONTENT --> */}
                </div>
                {/* <!-- END CONTAINER --> */}


                {/* <!-- BEGIN FOOTER --> */}
                <div className="page-footer">
                    <div className="page-footer-inner"> 2020 All Copyright &copy; Reserved. </div>
                    <div className="scroll-to-top">
                        <i className="icon-arrow-up"></i>
                    </div>
                </div>
            </body>

        </>
    )
}

export default withApollo({ ssr: true })(index)