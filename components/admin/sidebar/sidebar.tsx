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

                        <li className="nav-item">
                            <a href="javascript:;" className="nav-link nav-toggle"><i className="fa fa-university"></i>
                                <span className="title">Deposit</span><span className="arrow"></span></a>
                            <ul className="sub-menu">
                                <li className="nav-item">
                                    <a href="/admin/request_Deposit" className="nav-link nav-toggle"><i className="fa fa-plus"></i>
                                        <span className="title">Request Deposit</span></a>
                                </li>

                                <li className="nav-item">
                                    <a href="admin/pending-deposit.html" className="nav-link nav-toggle"><i className="fa fa-spinner"></i>
                                        <span className="title">Pending Request</span></a>
                                </li>
                                <li className="nav-item">
                                    <a href="admin/request-deposit.html" className="nav-link nav-toggle"><i className="fa fa-history"></i>
                                        <span className="title">Deposit History</span></a>
                                </li>
                            </ul>
                        </li>

                        <li className="nav-item">
                            <a href="javascript:;" className="nav-link nav-toggle"><i className="fa fa-exchange"></i>
                                <span className="title">Withdrawal</span><span className="arrow"></span></a>
                            <ul className="sub-menu">
                                <li className="nav-item">
                                    <a href="/admin/request_withdrawal" className="nav-link nav-toggle"><i className="fa fa-check"></i>
                                        <span className="title">Request Withdraw</span></a>
                                </li>
                                <li className="nav-item">
                                    <a href="admin/withdraw-pending.html" className="nav-link nav-toggle"><i className="fa fa-spinner"></i>
                                        <span className="title">Pending Withdraw</span></a>
                                </li>
                                <li className="nav-item">
                                    <a href="admin/withdraw-request-all.html" className="nav-link nav-toggle"><i className="fa fa-cloud-upload"></i>
                                        <span className="title">Withdraw History</span></a>
                                </li>
                            </ul>
                        </li>
{/* 
                        <li className="nav-item">
                            <a href="javascript:;" className="nav-link nav-toggle"><i className="fa fa-list"></i>
                                <span className="title">Investment Plan</span><span className="arrow"></span></a>
                            <ul className="sub-menu">
                                <li className="nav-item">
                                    <a href="admin/plan-create.html" className="nav-link nav-toggle"><i className="fa fa-plus"></i>
                                        <span className="title">Create New Plan</span></a>
                                </li>
                                <li className="nav-item">
                                    <a href="admin/plan-show.html" className="nav-link nav-toggle"><i className="fa fa-desktop"></i>
                                        <span className="title">View All Plan</span></a>
                                </li>
                            </ul>
                        </li> */}
                        {/* <li className="nav-item">
                            <a href="javascript:;" className="nav-link nav-toggle"><i className="fa fa-users"></i>
                                <span className="title">Manage User</span><span className="arrow"></span></a>
                            <ul className="sub-menu">
                                <li className="nav-item">
                                    <a href="admin/manage-user.html" className="nav-link nav-toggle"><i className="fa fa-desktop"></i>
                                        <span className="title">All Users</span></a>
                                </li>
                                <li className="nav-item">
                                    <a href="admin/show-block-user.html" className="nav-link nav-toggle"><i className="fa fa-user-times"></i>
                                        <span className="title">Block Users</span></a>
                                </li>
                                <li className="nav-item">
                                    <a href="admin/all-verify-user.html" className="nav-link nav-toggle"><i className="fa fa-check"></i>
                                        <span className="title">Verified Users</span></a>
                                </li>
                                <li className="nav-item">
                                    <a href="admin/phone-unverified-user.html" className="nav-link nav-toggle"><i className="fa fa-tty"></i>
                                        <span className="title">Phone Unverified</span></a>
                                </li>
                                <li className="nav-item">
                                    <a href="admin/email-unverified-user.html" className="nav-link nav-toggle"><i className="fa fa-envelope-open"></i>
                                        <span className="title">Email Unverified</span></a>
                                </li>
                            </ul>
                        </li> */}

                    </ul>
                    {/* <!-- END SIDEBAR MENU --> */}
                </div>
            </div>
            {/* <!-- END SIDEBAR --> */}
        </>
    )
}

export default  AdminSidebar