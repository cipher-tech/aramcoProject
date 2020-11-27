import Head from 'next/head'
import { useRouter } from 'next/router'
import React from 'react'
import { MasterAdminSidenav, UserStats } from '../../../components'
import { User } from '../../../generated/apolloComponent'
import { withApollo } from '../../../lib/apolloClient'

const ViewUser = () => {
    const router = useRouter()
    const user: User = JSON.parse(router.query.payload as string)
    return (
        <>
            <Head>
                <meta charSet="utf-8" />
                <title>Coin Forest - User Details</title>
                <meta http-equiv="X-UA-Compatible" content="IE=edge" />
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

            </Head>
            <body className="page-header-fixed page-sidebar-closed-hide-logo">

                {/* <!-- BEGIN HEADER & CONTENT DIVIDER --> */}
                <div className="clearfix"></div>
                <div className="page-container">
                    <MasterAdminSidenav />
                   
                    <div className="page-content-wrapper" >
                        <div className="page-content">
                            <h3 className="page-title">User Details </h3>
                            <hr />
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="portlet blue box">
                                        <div className="portlet-title">
                                            <div className="caption font-dark">
                                                <strong>User Details</strong>
                                            </div>
                                            <div className="tools"> </div>
                                        </div>
                                        <div className="portlet-body" style={{ "overflow": "hidden" }}>

                                            <div className="col-md-3">
                                                <div className="portlet box blue">
                                                    <div className="portlet-title">
                                                        <div className="caption uppercase bold">
                                                            <i className="fa fa-user"></i> PROFILE </div>
                                                    </div>
                                                    <div className="portlet-body text-center" style={{ "overflow": "hidden" }}>
                                                        <img src=" https://coinforest.net/assets/images/user-default.png " className="img-responsive propic" alt="Profile Pic" />

                                                        <hr /><h4 className="bold">Email : {user.email}</h4>
                                                        <h4 className="bold">Name : {user.first_name}</h4>
                                                        <h4 className="bold">Phone No : {user.phone_no}</h4>
                                                        <h4 className="bold">BALANCE : {user.wallet_balance || 0} USD</h4>
                                                        <hr />
                                                        <p>
                                                            <strong>Created At : {new Date(user.createdAt).toDateString()}</strong> <br />
                                                        </p>
                                                        <hr />
                                                        <p>
                                                        <strong>Created At : {new Date(user.updatedAt).toDateString()}</strong> <br />
                                        <br />
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-9">
                                                <div className="row">

                                                    <div className="col-md-12">
                                                        <UserStats />
                                                    </div>

                                                    {/* <div className="col-md-12">
                                                        <div className="portlet box blue-ebonyclay">
                                                            <div className="portlet-title">
                                                                <div className="caption uppercase bold">
                                                                    <i className="fa fa-cogs"></i> Operations </div>
                                                            </div>
                                                            <div className="portlet-body">
                                                                <div className="row">

                                                                    <div className="col-md-6 uppercase">
                                                                        <a href="#" className="btn btn-primary btn-lg btn-block"> <i className="fa fa-money"></i> add / substruct balance  </a>
                                                                    </div>

                                                                    <div className="col-md-6 uppercase">
                                                                        <a href="#" className="btn btn-success btn-lg btn-block"><i className="fa fa-envelope-open"></i> Send Email</a>
                                                                    </div>


                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div> */}

                                                    {/* <div className="col-md-12">
                                                        <div className="portlet box green">
                                                            <div className="portlet-title">
                                                                <div className="caption uppercase bold">
                                                                    <i className="fa fa-cog"></i> Update Profile </div>
                                                            </div>
                                                            <div className="portlet-body">

                                                                <form action="https://coinforest.net/admin/user-details-update" method="post">

                                                                    <input type="hidden" name="_token" value="OCl8x8d98S7hjLSXcnPA5ZLExRWkUGrlQBxhtpfb" />

                                                                    <input type="hidden" name="user_id" value="625" />
                                                                    <div className="row uppercase">

                                                                        <div className="col-md-4">
                                                                            <div className="form-group">
                                                                                <label className="col-md-12"><strong>Name</strong></label>
                                                                                <div className="col-md-12">
                                                                                    <input className="form-control input-lg" name="name" value="Wajid Muhammad" type="text" />
                                                                                </div>
                                                                            </div>
                                                                        </div>

                                                                        <div className="col-md-4">
                                                                            <div className="form-group">
                                                                                <label className="col-md-12"><strong>Email</strong></label>
                                                                                <div className="col-md-12">
                                                                                    <input className="form-control input-lg" name="email" value="wajidpathan000@gmail.com" type="text" />
                                                                                </div>
                                                                            </div>
                                                                        </div>

                                                                        <div className="col-md-4">
                                                                            <div className="form-group">
                                                                                <label className="col-md-12"><strong>Phone</strong></label>
                                                                                <div className="col-md-12">
                                                                                    <input className="form-control input-lg" name="phone" value="03018972224" type="text" />
                                                                                </div>
                                                                            </div>
                                                                        </div>


                                                                    </div>
                                                                   

                                                                    <br /><br />
                                                                    <div className="row uppercase">


                                                                        <div className="col-md-4">
                                                                            <div className="form-group">
                                                                                <label className="col-md-12"><strong>STATUS</strong></label>
                                                                                <div className="col-md-12">
                                                                                    <input data-toggle="toggle" checked data-onstyle="success" data-size="large" data-offstyle="danger" data-on="Active" data-off="Blocked" data-width="100%" type="checkbox" name="status" />
                                                                                </div>
                                                                            </div>
                                                                        </div>

                                                                        <div className="col-md-4">
                                                                            <div className="form-group">
                                                                                <label className="col-md-12"><strong>EMAIL VERIFICATION</strong></label>
                                                                                <div className="col-md-12">
                                                                                    <input data-toggle="toggle" checked data-onstyle="success" data-size="large" data-offstyle="danger" data-on="Verified" data-off="Not Verified" data-width="100%" type="checkbox" name="email_verify" />
                                                                                </div>
                                                                            </div>
                                                                        </div>

                                                                        <div className="col-md-4">
                                                                            <div className="form-group">
                                                                                <label className="col-md-12"><strong>PHONE VERIFICATION</strong></label>
                                                                                <div className="col-md-12">
                                                                                    <input data-toggle="toggle" checked data-onstyle="success" data-size="large" data-offstyle="danger" data-on="Verified" data-off="Not Verified" data-width="100%" type="checkbox" name="phone_verify" />
                                                                                </div>
                                                                            </div>
                                                                        </div>

                                                                    </div>
                                                                   

                                                                    <br /><br />

                                                                    <div className="row">
                                                                        <div className="col-md-12">
                                                                            <button type="submit" className="btn blue btn-block btn-lg">UPDATE</button>
                                                                        </div>
                                                                    </div>
   
                                                                </form>

                                                            </div>
                                                        </div>
                                                    </div> */}


                                                </div>
                                            </div>
                                            {/* <!-- col-9 --> */}

                                        </div>
                                    </div>

                                </div>
                            </div>
                            {/* <!-- ROW--> */}





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

            </body>

        </>
    )
}

export default withApollo({ssr: true})(ViewUser)
