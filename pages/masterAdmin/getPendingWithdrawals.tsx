import Head from 'next/head'
import React, { useEffect, useState } from 'react'
// import { Helmet } from "react-helmet";
import { MasterAdminSidenav, Plan, SideBar, StockPlan, TableComponent } from "../../components/index"
import { DepositAttributes, useActivateWithdrawalMutation, useDeleteWithdrawalRequestMutation, useGetPendingDepositsQuery, useGetPendingWithdrawalsQuery, useGetUserQuery } from '../../generated/apolloComponent';
import { withApollo } from '../../lib/apolloClient';

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


    const Withdrawal = async (payload: DepositAttributes) => {
        // console.log(payload);
        await setMessage('')
        await WithdrawalMutation({
            variables: {
                input: {
                    id: payload.id
                }
            }
        })

        setMessage(WithdrawalMutationError ? "Could not activate deposit" : "deposit Activated. Plan started")
        await refetchPendingWithdrawal()
        console.log("pending");
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

        setMessage(deleteWithdrawalMutationError ? "Could not activate deposit" : "deposit Activated. Plan started")
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
                <title>Coin Forest - Dashboard</title>
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

                <link rel="shortcut icon" href="/admin/assets/images/favicon.png" />

                <script async src="/admin/assets/admin/js/jquery.counterup.min.js" type="text/javascript"></script>
                <script async src="/admin/assets/admin/js/demo.min.js" type="text/javascript"></script>
                <script async src="/admin/assets/admin/js/jquery.min.js" type="text/javascript"></script>
                <script async src="/admin/assets/admin/js/jquery.slimscroll.min.js" type="text/javascript"></script>
                <script defer src="/admin/assets/admin/js/datatable.js" type="text/javascript"></script>
                <script async src="/admin/assets/admin/js/bootstrap.min.js" type="text/javascript"></script>
                <script async src="/admin/assets/admin/js/bootstrap-hover-dropdown.min.js" type="text/javascript"></script>
                <script async src="/admin/assets/admin/js/jquery.blockui.min.js" type="text/javascript"></script>
                <script async src="/admin/assets/admin/js/datatables.bootstrap.js" type="text/javascript"></script>
                <script async src="/admin/assets/admin/js/app.min.js" type="text/javascript"></script>
                <script async src="/admin/assets/admin/js/quick-sidebar.min.js" type="text/javascript"></script>
                <script async src="/admin/assets/admin/js/layout.min.js" type="text/javascript"></script>
                <script src="/admin/assets/admin/js/datatables.min.js" type="text/javascript"></script>
                <script src="/admin/assets/admin/js/table-datatables-buttons.min.js" type="text/javascript"></script>
                <script async src="/admin/assets/admin/js/sweetalert.min.js"></script>
                <script async src="/admin/assets/admin/js/jquery.waypoints.min.js" type="text/javascript"></script>
            </Head>

            <body className="page-header-fixed page-sidebar-closed-hide-logo">

                {/* <!-- BEGIN HEADER --> */}
                <div className="page-header navbar navbar-fixed-top" style={{ backgroundColor: "#2C4065" }}>
                    <div className="page-header-inner " style={{ backgroundColor: "#2C4065" }}>


                        {/* <!-- BEGIN LOGO --> */}
                        <div className="page-logo">
                            <a href="">
                                <img src="/admin/assets/images/logo.png" className="logo-default" alt="-" style={{ filter: "brightness(0) invert(1)", width: "150px", height: "45px" }} />

                            </a>

                            <div className="menu-toggler sidebar-toggler" style={{ backgroundColor: "#2C4065" }}></div>
                        </div>
                        {/* <!-- END LOGO --> */}


                        {/* <!-- BEGIN RESPONSIVE MENU TOGGLER --> */}
                        <a href="javascript:;" className="menu-toggler responsive-toggler" data-toggle="collapse" data-target=".navbar-collapse"> </a>

                        <div className="top-menu" style={{ backgroundColor: "#2C4065" }}>
                            <ul className="nav navbar-nav pull-right" style={{ backgroundColor: "#2C4065" }}>
                                <li className="dropdown dropdown-user">
                                    <a href="javascript:;" className="dropdown-toggle" data-toggle="dropdown" data-hover="dropdown" data-close-others="true">


                                        <span className="username"> |</span>
                                        <i className="fa fa-angle-down"></i>
                                    </a>
                                    <ul className="dropdown-menu dropdown-menu-default">

                                        <li><a href="admin-change-password.html"><i className="fa fa-cogs"></i> Change Password </a>
                                        </li>
                                        <li><a href="/admin"><i className="fa fa-sign-out"></i> Log Out </a></li>

                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                {/* <!-- END HEADER --> */}


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


                            <div className="row">
                                {message}
                                {withdrawalIsLoading ? "Loading..."
                                    :
                                <TableComponent title="deposit Request"
                                    headers={["userId", "email", "slug", " status ", "amount", "createdAt"]}
                                    body={pendingWithdrawal.getPendingWithdrawals}
                                    keys={["userId", "users", "slug", "status", "amount", "createdAt",]}
                                    nestedKeys={['email']}
                                    buttonAction={[Withdrawal, deleteWithdrawal]} />
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