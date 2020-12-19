import Head from 'next/head'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import { MasterAdminSidenav, UserAdminHeader } from '../../../components'
import { DepositAttributes, useActivateDepositMutation, useActivateWithdrawalMutation, useCancelDepositMutation, useCancelWithdrawalMutation } from '../../../generated/apolloComponent'
import { withApollo } from '../../../lib/apolloClient'

const Withdrawal = () => {
    const [message, setMessage] = useState("")
    const [status, setStatus] = useState("")
    const [disableButtons, setDisableButtons] = useState(false)

    const [ActivateWithdrawalMutation, { data: ActivateWithdrawalMutationData,
        loading: ActivateWithdrawalMutationLoading,
        error: ActivateWithdrawalMutationError }] = useActivateWithdrawalMutation()

    const [CancelWithdrawalMutation, { data: CancelWithdrawalMutationData,
        loading: CancelWithdrawalMutationLoading,
        error: CancelWithdrawalMutationError }] = useCancelWithdrawalMutation()

    const router = useRouter()
    const withdrawal: DepositAttributes = JSON.parse(router.query.payload as string)

    const activateWithdrawal = async () => {
        await setMessage('')
        ActivateWithdrawalMutation({
            variables: {
                input: {
                    id: withdrawal.id
                }
            }
        }).then(res => {
            console.log(ActivateWithdrawalMutationError);
            setMessage("Withdrawal approved.")
            setStatus("Activated")
            setDisableButtons(true)
            console.log("pending");
        }).catch(err => {
            setMessage("Could not approved withdrawal")
        })
    }
    const cancelDeposit = async () => {
        await setMessage('')
        CancelWithdrawalMutation({
            variables: {
                input: {
                    id: withdrawal.id
                }
            }
        }).then(res => {
            setMessage("Withdrawal Canceled.")
            setDisableButtons(true)
            setStatus("Canceled")
            console.log("cancel");
        }).catch(err => {
            setMessage("Could not Cancel withdrawal")
        })
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
                <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                <meta content="width=device-width, initial-scale=1" name="viewport" />
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
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
                <div className="clearfix"></div>
                <div className="page-container">
                    <MasterAdminSidenav />
                    <div className="page-content-wrapper" >
                        <div className="page-content">
                            <h3 className="page-title">Deposit Request View </h3>
                            <hr />
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="portlet light bordered">
                                        <div className="portlet-title">
                                            <div className="caption font-dark">
                                            </div>
                                            <div className="tools"> </div>
                                        </div>
                                        <div className="portlet-body" style={{ overflow: "hidden" }}>
                                            <div className="row">
                                                <div className="col-md-12">
                                                    <div className="text-center bold">
                                                        <h3>Transaction ID : {withdrawal.slug}</h3>
                                                        {/* <h3>withdrawal Method : Manual BTC</h3> */}
                                                        {/* <h3>Send Amount : 203 - USD</h3> */}
                                                        <h3>Withdrawal Amount : {withdrawal.amount} - USD</h3>
                                                        <h3> name : <p className="btn btn-primary"><i className="fa fa-user"></i> {withdrawal.users.first_name}</p></h3>
                                                        <h3> email : <p className="btn btn-primary"><i className="fa fa-user"></i> {withdrawal.users.email}</p></h3>
                                                        <hr />
                                                        <h3>Status :

                                                        <span className="label label-warning bold uppercase"><i className="fa fa-spinner"></i> {status || withdrawal.status}</span>
                                                        </h3>
                                                        <hr />
                                                        {
                                                            disableButtons ?
                                                                null
                                                                :
                                                                <>
                                                                    <div className="col-md-3 col-md-offset-3">
                                                                        <button type="button" onClick={activateWithdrawal} className="btn btn-success bold uppercase btn-block delete_button"
                                                                            data-toggle="modal" data-target="#DelModal"
                                                                            data-id="88">
                                                                            <i className='fa fa-check'></i> Approve
                                                                        </button>
                                                                    </div>
                                                                    <div className="col-md-3">
                                                                        <button onClick={cancelDeposit} type="button" className="btn btn-danger bold uppercase btn-block cancel_button"
                                                                            data-toggle="modal" data-target="#cancelModal"
                                                                            data-id="88">
                                                                            <i className='fa fa-times'></i> Cancel Payment
                                                                        </button>
                                                                    </div>
                                                                </>
                                                        }
                                                    </div>
                                                </div>
                                            </div>
                                            <hr />
                                            <div className="row">
                                                <div className="col-md-12">
                                                    <h3>Message : {message} </h3><br />

                                                </div>
                                            </div>
                                            <hr />
                                            <div className="row">
                                                <div className="col-md-12">
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            {/* </div><!-- ROW--> */}

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

export default withApollo({ ssr: true })(Withdrawal)
