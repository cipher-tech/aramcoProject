import Link from 'next/link'
import React from 'react'

const AdminSidebar = () => {
    return (
        <>
            <div className="page-sidebar-wrapper">
                <div className="page-sidebar navbar-collapse collapse">


                    <ul className="page-sidebar-menu  page-header-fixed " data-keep-expanded="false" data-auto-scroll="true" data-slide-speed="200" style={{ paddingTop: "20px" }}>
                        <li className="sidebar-toggler-wrapper hide">
                            <div className="sidebar-toggler"></div>
                        </li>


                        <li className="nav-item start">
                            <a href="/admin" className="nav-link ">
                                <i className="icon-home"></i><span className="title">Dashboard</span>
                            </a>
                        </li>

                        <li className="nav-item start">
                            <Link href="/admin/selectPlan" >
                                <a className="nav-link nav-toggle"><i className="fa fa-plus"></i>
                                    <span className="title">Make Deposit</span>
                                </a>
                            </Link>
                        </li>
                        <li className="nav-item start">
                            <Link href="/admin/pending_deposits" >
                                <a className="nav-link nav-toggle"><i className="fa fa-spinner"></i>
                                    <span className="title">Pending Request</span>
                                </a>
                            </Link>

                        </li>
                        <li className="nav-item start">
                            <Link href="/admin/deposits">
                                <a className="nav-link nav-toggle"><i className="fa fa-history"></i>
                                    <span className="title">Deposit History</span>
                                </a>
                            </Link>

                        </li>
                        <li className="nav-item start">
                            <Link href="/admin/request_withdrawal">
                                <a className="nav-link nav-toggle"><i className="fa fa-check"></i>
                                    <span className="title">Request Withdraw</span>
                                </a>
                            </Link>

                        </li>
                        <li className="nav-item start">
                            <Link href="/admin/pending_withdrawals">
                                <a className="nav-link nav-toggle"><i className="fa fa-spinner"></i>
                                    <span className="title">Pending Withdraw</span>
                                </a>
                            </Link>
                        </li>
                        <li className="nav-item start">
                            <Link href="/admin/withdrawals">
                                <a className="nav-link nav-toggle"><i className="fa fa-cloud-upload"></i>
                                    <span className="title">Withdraw History</span>
                                </a>
                            </Link>
                        </li>
                    </ul>
                    {/* <!-- END SIDEBAR MENU --> */}
                </div>
            </div>
            {/* <!-- END SIDEBAR --> */}
        </>
    )
}

export default AdminSidebar