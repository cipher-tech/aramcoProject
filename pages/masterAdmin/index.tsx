import Head from 'next/head'
import React, { useEffect, useState } from 'react'
// import { Helmet } from "react-helmet";
import { MasterAdminSidenav, Plan, SideBar, StockPlan, TableComponent } from "../../components/index"
import { DepositAttributes, useActivateDepositMutation, useGetPendingDepositsQuery, useGetUserQuery } from '../../generated/apolloComponent';
import { withApollo } from '../../lib/apolloClient';

const index = () => {
    const [message, setMessage] = useState("")
    const { data, loading: userIsLoading, error: userHasError } = useGetUserQuery()
    const { data: pendingDeposits, loading: depositsIsLoading, error,refetch: refetchPendingDeposits  } = useGetPendingDepositsQuery()
    const [ActivateDepositMutation, {data: ActivateDepositMutationData, 
        loading: ActivateDepositMutationLoading, 
        error: ActivateDepositMutationError }] = useActivateDepositMutation()
    // useEffect(() => {
    //     console.log(pendingDeposits);

    // }, [data,])

    const activateDeposit = async (payload: DepositAttributes) => {
        // console.log(payload);
        await setMessage('')
        await ActivateDepositMutation({
            variables: {
                input: {
                    id: payload.id
                }
            }
        })

        setMessage(ActivateDepositMutationError? "Could not activate deposit" : "Deposit Activated. Plan started")
        await refetchPendingDeposits()
        console.log("pending");
        
    }
    const deleteDeposit = (id) => {
        
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
                <script async src="/admin/assets/admin/js/bootstrap.min.js" type="text/javascript"></script>
                <script async src="/admin/assets/admin/js/bootstrap-hover-dropdown.min.js" type="text/javascript"></script>
                <script async src="/admin/assets/admin/js/jquery.slimscroll.min.js" type="text/javascript"></script>
                <script async src="/admin/assets/admin/js/jquery.blockui.min.js" type="text/javascript"></script>
                <script async src="/admin/assets/admin/js/app.min.js" type="text/javascript"></script>
                <script async src="/admin/assets/admin/js/quick-sidebar.min.js" type="text/javascript"></script>
                <script async src="/admin/assets/admin/js/layout.min.js" type="text/javascript"></script>
                <script async src="/admin/assets/admin/js/datatable.js" type="text/javascript"></script>
                <script async src="/admin/assets/admin/js/datatables.min.js" type="text/javascript"></script>
                <script async src="/admin/assets/admin/js/datatables.bootstrap.js" type="text/javascript"></script>
                <script async src="/admin/assets/admin/js/table-datatables-buttons.min.js" type="text/javascript"></script>
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


                                        <span className="username"> Welcome, thesoftking </span>
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
                                <div className="col-md-12">
                                    <div className="row">
                                        <div className="col-md-12">

                                            <div className="portlet box blue">
                                                <div className="portlet-title">
                                                    <div className="caption">
                                                        <strong><i className="fa fa-line-chart bold uppercase"></i> Main Statistics</strong>
                                                    </div>
                                                    <div className="tools">
                                                        <a href="javascript:;" className="collapse"> </a>
                                                    </div>
                                                </div>
                                                <div className="portlet-body" style={{ overflow: "hidden" }}>
                                                    <div className="col-md-3">
                                                        <div className="dashboard-stat green">
                                                            <div className="visual">
                                                                <i className="fa fa-money"></i>
                                                            </div>
                                                            <div className="details">
                                                                <div className="number">
                                                                    $ <span data-counter="counterup" data-value={data?.getUser.wallet_balance}>0</span>
                                                                </div>
                                                                <div className="desc bold uppercase"> Total User Balance</div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <a href="admin/repeat-history.html">
                                                        <div className="col-md-3">
                                                            <div className="dashboard-stat purple">
                                                                <div className="visual">
                                                                    <i className="fa fa-recycle"></i>
                                                                </div>
                                                                <div className="details">
                                                                    <div className="number">
                                                                        $ <span data-counter="counterup" data-value="0">0</span>
                                                                    </div>
                                                                    <div className="desc  bold uppercase "> Total Earnings </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </a>
                                                    <a href="admin/deposit-history.html">
                                                        <div className="col-md-3">
                                                            <div className="dashboard-stat blue">
                                                                <div className="visual">
                                                                    <i className="fa fa-money"></i>
                                                                </div>
                                                                <div className="details">
                                                                    <div className="number">
                                                                        $  <span data-counter="counterup" data-value="0">0</span>
                                                                    </div>
                                                                    <div className="desc  bold uppercase"> Total Deposit </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </a>
                                                    <a href="admin/withdraw-request-all.html">
                                                        <div className="col-md-3">
                                                            <div className="dashboard-stat red">
                                                                <div className="visual">
                                                                    <i className="fa fa-money"></i>
                                                                </div>
                                                                <div className="details">
                                                                    <div className="number">
                                                                        $ <span data-counter="counterup" data-value="0">0</span>
                                                                    </div>
                                                                    <div className="desc bold uppercase"> Total Withdraw </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                {message}
                                {depositsIsLoading ? "Loading..."
                                    :
                                    <TableComponent title="Deposit Request"
                                        headers={[ "userId","email", "slug", " status ", "amount", "plan", "createdAt"]}
                                        body={pendingDeposits.getPendingDeposits} 
                                        keys={[ "userId","slug","status","amount","plan","createdAt","users"]}
                                        nestedKeys={['email']} 
                                        buttonAction={[activateDeposit, deleteDeposit]}/>
                                }
                            </div>
                            <div className="row">
                                <Plan />
                            </div>
                            <StockPlan />
                            {/* 
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="row">
                                        <div className="col-md-12">

                                            <div className="portlet box blue">
                                                <div className="portlet-title">
                                                    <div className="caption bold uppercase">
                                                        <strong><i className="fa fa-users"></i> User Statistics</strong>
                                                    </div>
                                                    <div className="tools">
                                                        <a href="javascript:;" className="collapse"> </a>
                                                    </div>
                                                </div>
                                                <div className="portlet-body" style={{ overflow: "hidden" }}>
                                                    <a href="admin/manage-user.html">
                                                        <div className="col-md-3">
                                                            <div className="dashboard-stat blue">
                                                                <div className="visual">
                                                                    <i className="fa fa-users"></i>
                                                                </div>
                                                                <div className="details">
                                                                    <div className="number">
                                                                        <span data-counter="counterup" data-value="622">0</span>
                                                                    </div>
                                                                    <div className="desc bold uppercase"> Total User </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </a>
                                                    <a href="admin/show-block-user.html">
                                                        <div className="col-md-3">
                                                            <div className="dashboard-stat red">
                                                                <div className="visual">
                                                                    <i className="fa fa-times"></i>
                                                                </div>
                                                                <div className="details">
                                                                    <div className="number">
                                                                        <span data-counter="counterup" data-value="1">0</span>
                                                                    </div>
                                                                    <div className="desc bold uppercase"> Total Block User </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </a>
                                                    <a href="admin/email-unverified-user.html">
                                                        <div className="col-md-3">
                                                            <div className="dashboard-stat red">
                                                                <div className="visual">
                                                                    <i className="fa fa-envelope-open"></i>
                                                                </div>
                                                                <div className="details">
                                                                    <div className="number">
                                                                        <span data-counter="counterup" data-value="0">0</span>
                                                                    </div>
                                                                    <div className="desc bold uppercase"> Total Email Unverified  </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </a>
                                                    <a href="admin/phone-unverified-user.html">
                                                        <div className="col-md-3">
                                                            <div className="dashboard-stat red">
                                                                <div className="visual">
                                                                    <i className="fa fa-phone"></i>
                                                                </div>
                                                                <div className="details">
                                                                    <div className="number">
                                                                        <span data-counter="counterup" data-value="0">0</span>
                                                                    </div>
                                                                    <div className="desc bold uppercase"> Total Phone Unverified  </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </a>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-md-12">
                                    <div className="row">
                                        <div className="col-md-12">

                                            <div className="portlet box blue">
                                                <div className="portlet-title">
                                                    <div className="caption bold uppercase">
                                                        <strong><i className="fa fa-cloud-download"></i> Deposit Statistics</strong>
                                                    </div>
                                                    <div className="tools">
                                                        <a href="javascript:;" className="collapse"> </a>
                                                    </div>
                                                </div>
                                                <div className="portlet-body" style={{ overflow: "hidden" }}>
                                                    <a href="">
                                                        <div className="col-md-3">
                                                            <div className="dashboard-stat blue">
                                                                <div className="visual">
                                                                    <i className="fa fa-sort-numeric-asc"></i>
                                                                </div>
                                                                <div className="details">
                                                                    <div className="number">
                                                                        <span data-counter="counterup" data-value="9">0</span>
                                                                    </div>
                                                                    <div className="desc bold uppercase"> Deposit Method </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </a>
                                                    <a href="">
                                                        <div className="col-md-3">
                                                            <div className="dashboard-stat blue">
                                                                <div className="visual">
                                                                    <i className="fa fa-sort-numeric-asc"></i>
                                                                </div>
                                                                <div className="details">
                                                                    <div className="number">
                                                                        <span data-counter="counterup" data-value="61">0</span>
                                                                    </div>
                                                                    <div className="desc bold uppercase"> Number of Deposits </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </a>
                                                    <a href="">
                                                        <div className="col-md-3">
                                                            <div className="dashboard-stat blue">
                                                                <div className="visual">
                                                                    <i className="fa fa-cloud-download"></i>
                                                                </div>
                                                                <div className="details">
                                                                    <div className="number">
                                                                        $ <span data-counter="counterup" data-value="926579">0</span>
                                                                    </div>
                                                                    <div className="desc bold uppercase"> Total Deposit </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </a>
                                                    <a href="">
                                                        <div className="col-md-3">
                                                            <div className="dashboard-stat yellow">
                                                                <div className="visual">
                                                                    <i className="fa fa-spinner"></i>
                                                                </div>
                                                                <div className="details">
                                                                    <div className="number">
                                                                        <span data-counter="counterup" data-value="28">0</span>
                                                                    </div>
                                                                    <div className="desc bold uppercase"> Total Deposit Pending</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-md-12">
                                    <div className="row">
                                        <div className="col-md-12">

                                            <div className="portlet box blue">
                                                <div className="portlet-title">
                                                    <div className="caption bold uppercase">
                                                        <strong><i className="fa fa-th"></i> Investment Plan Statistics</strong>
                                                    </div>
                                                    <div className="tools">
                                                        <a href="javascript:;" className="collapse"> </a>
                                                    </div>
                                                </div>
                                                <div className="portlet-body" style={{ overflow: "hidden" }}>
                                                    <a href="">
                                                        <div className="col-md-4">
                                                            <div className="dashboard-stat purple">
                                                                <div className="visual">
                                                                    <i className="fa fa-list"></i>
                                                                </div>
                                                                <div className="details">
                                                                    <div className="number">
                                                                        <span data-counter="counterup" data-value="8">0</span>
                                                                    </div>
                                                                    <div className="desc bold uppercase"> Total Plan </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </a>
                                                    <a href="">
                                                        <div className="col-md-4">
                                                            <div className="dashboard-stat blue">
                                                                <div className="visual">
                                                                    <i className="fa fa-check"></i>
                                                                </div>
                                                                <div className="details">
                                                                    <div className="number">
                                                                        <span data-counter="counterup" data-value="6">0</span>
                                                                    </div>
                                                                    <div className="desc bold uppercase"> Total Active Plan </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </a>
                                                    <a href="">
                                                        <div className="col-md-4">
                                                            <div className="dashboard-stat red">
                                                                <div className="visual">
                                                                    <i className="fa fa-times"></i>
                                                                </div>
                                                                <div className="details">
                                                                    <div className="number">
                                                                        <span data-counter="counterup" data-value="2">0</span>
                                                                    </div>
                                                                    <div className="desc bold uppercase"> Total Deactivate Plan </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </a>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-md-12">
                                    <div className="row">
                                        <div className="col-md-12">

                                            <div className="portlet box red">
                                                <div className="portlet-title">
                                                    <div className="caption bold uppercase">
                                                        <strong><i className="fa fa-cloud-upload"></i> Withdraw Statistics</strong>
                                                    </div>
                                                    <div className="tools">
                                                        <a href="javascript:;" className="collapse"> </a>
                                                    </div>
                                                </div>
                                                <div className="portlet-body" style={{ overflow: "hidden" }}>

                                                    <div className="row">
                                                        <a href="">
                                                            <div className="col-md-4">
                                                                <div className="dashboard-stat purple">
                                                                    <div className="visual">
                                                                        <i className="fa fa-sort-alpha-asc"></i>
                                                                    </div>
                                                                    <div className="details">
                                                                        <div className="number">
                                                                            <span data-counter="counterup" data-value="4">0</span>
                                                                        </div>
                                                                        <div className="desc bold uppercase"> Withdraw Method </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </a>
                                                        <a href="">
                                                            <div className="col-md-4">
                                                                <div className="dashboard-stat blue">
                                                                    <div className="visual">
                                                                        <i className="fa fa-money"></i>
                                                                    </div>
                                                                    <div className="details">
                                                                        <div className="number">
                                                                            $ <span data-counter="counterup" data-value="330702">0</span>
                                                                        </div>
                                                                        <div className="desc bold uppercase"> Withdraw Amount </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </a>
                                                        <a href="">
                                                            <div className="col-md-4">
                                                                <div className="dashboard-stat red">
                                                                    <div className="visual">
                                                                        <i className="fa fa-money"></i>
                                                                    </div>
                                                                    <div className="details">
                                                                        <div className="number">
                                                                            $ <span data-counter="counterup" data-value="96.64">0</span>
                                                                        </div>
                                                                        <div className="desc bold uppercase"> Withdraw Charge </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </a>
                                                    </div>
                                                    <br />
                                                    <div className="row">
                                                        <a href="">
                                                            <div className="col-md-3">
                                                                <div className="dashboard-stat purple">
                                                                    <div className="visual">
                                                                        <i className="fa fa-sort-asc"></i>
                                                                    </div>
                                                                    <div className="details">
                                                                        <div className="number">
                                                                            <span data-counter="counterup" data-value="156">0</span>
                                                                        </div>
                                                                        <div className="desc bold uppercase"> Number of Withdraw </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </a>
                                                        <a href="">

                                                            <div className="col-md-3">
                                                                <div className="dashboard-stat blue">
                                                                    <div className="visual">
                                                                        <i className="fa fa-check-square-o"></i>
                                                                    </div>
                                                                    <div className="details">
                                                                        <div className="number">
                                                                            <span data-counter="counterup" data-value="50">0</span>
                                                                        </div>
                                                                        <div className="desc bold uppercase"> Success Withdraw </div>
                                                                    </div>
                                                                </div>
                                                            </div></a>
                                                        <a href="">
                                                            <div className="col-md-3">
                                                                <div className="dashboard-stat yellow">
                                                                    <div className="visual">
                                                                        <i className="fa fa-spinner"></i>
                                                                    </div>
                                                                    <div className="details">
                                                                        <div className="number">
                                                                            <span data-counter="counterup" data-value="29">0</span>
                                                                        </div>
                                                                        <div className="desc bold uppercase"> Pending Withdraw </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </a>

                                                        <a href="">
                                                            <div className="col-md-3">
                                                                <div className="dashboard-stat red">
                                                                    <div className="visual">
                                                                        <i className="fa fa-times"></i>
                                                                    </div>
                                                                    <div className="details">
                                                                        <div className="number">
                                                                            <span data-counter="counterup" data-value="27">0</span>
                                                                        </div>
                                                                        <div className="desc bold uppercase"> Refunded Withdraw </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </a>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div> */}

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
                {/* <!-- END FOOTER --> */}


                {/* <!-- BEGIN SCRIPTS --> */}
                {/* <Helmet> */}
               
                {/* </Helmet> */}
            </body>

        </>
    )
}

export default withApollo({ ssr: true })(index)