import React, { useEffect, useState } from 'react'
import Head from 'next/head';

import { SideBar, TableComponent, UserAdminHeader, UserStats } from "../../components/index"
import theme from '../../styles/theme';
import { withApollo } from '../../lib/apolloClient';
import { useGetPendingDepositsQuery} from '../../generated/apolloComponent';
// import { ReactComponent as Spinner } from "/images/svg/spinner.svg";

const Pending_Deposit = (props) => {
    const { data, loading, error } = useGetPendingDepositsQuery()
    if(loading) return "Loading..."
    if(error) return "An error ocurred"
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

                <script src="/admin/assets/admin/js/demo.min.js" type="text/javascript"></script>
                <script src="/admin/assets/admin/js/jquery.min.js" type="text/javascript"></script>
                <script src="/admin/assets/admin/js/bootstrap.min.js" type="text/javascript"></script>
                <script src="/admin/assets/admin/js/bootstrap-hover-dropdown.min.js" type="text/javascript"></script>
                <script src="/admin/assets/admin/js/jquery.slimscroll.min.js" type="text/javascript"></script>
                <script src="/admin/assets/admin/js/jquery.blockui.min.js" type="text/javascript"></script>
                <script src="/admin/assets/admin/js/app.min.js" type="text/javascript"></script>
                <script src="/admin/assets/admin/js/quick-sidebar.min.js" type="text/javascript"></script>
                <script src="/admin/assets/admin/js/layout.min.js" type="text/javascript"></script>
                <script src="/admin/assets/admin/js/datatable.js" type="text/javascript"></script>
                <script src="/admin/assets/admin/js/datatables.min.js" type="text/javascript"></script>
                <script src="/admin/assets/admin/js/datatables.bootstrap.js" type="text/javascript"></script>
                <script src="/admin/assets/admin/js/table-datatables-buttons.min.js" type="text/javascript"></script>
                <script src="/admin/assets/admin/js/sweetalert.min.js"></script>
                <script src="/admin/assets/admin/js/jquery.waypoints.min.js" type="text/javascript"></script>
                <script src="/admin/assets/admin/js/jquery.counterup.min.js" type="text/javascript"></script>
            </Head>

            <body className="page-header-fixed page-sidebar-closed-hide-logo">
                {/* <!-- BEGIN HEADER --> */}
                <UserAdminHeader />
                {/* <!-- END HEADER --> */}


                {/* <!-- BEGIN HEADER & CONTENT DIVIDER --> */}
                <div className="clearfix"></div>
                <div className="page-container">
                    <SideBar />


                    {/* <!-- BEGIN CONTENT --> */}
                    <div className="page-content-wrapper">
                        <div className="page-content">
                            <h3 className="page-title">Dashboard </h3>
                            <hr />

                            {/* <!--  ==================================VALIDATION ERRORS==================================  --> */}
                            {/* <!--  ==================================SESSION MESSAGES==================================  --> */}

                            <UserStats />

                            <div className="row">
                                {/* {message} */}
                                {loading ? "Loading..."
                                    :
                                    <TableComponent title="Pending Deposit Request"
                                        headers={["userId", "email", "slug", " status ", "amount", "plan", "createdAt"]}
                                        body={data.getPendingDeposits || [{}]}
                                        keys={["userId", "users","slug", "status", "amount", "plan", "createdAt", ]}
                                        nestedKeys={['email']}
                                    />
                                }
                            </div>
                        </div>
                    </div>
                    {/* <!-- END CONTENT --> */}
                </div>

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

export default withApollo({ ssr: true })(Pending_Deposit)

