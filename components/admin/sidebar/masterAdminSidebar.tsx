import Link from 'next/link'
import React from 'react'

const MasterAdminSidebar = () => {
    return (
        <>
            <div className="page-sidebar-wrapper">
                <div className="page-sidebar navbar-collapse collapse">


                    <ul className="page-sidebar-menu  page-header-fixed " data-keep-expanded="false" data-auto-scroll="true" data-slide-speed="200" style={{ paddingTop: "20px" }}>
                        <li className="sidebar-toggler-wrapper hide">
                            <div className="sidebar-toggler"></div>
                        </li>


                        <li className="nav-item start">
                            <a href="/masterAdmin" className="nav-link ">
                                <img src="/images/svg/home.svg" alt="svg icon" /> &nbsp;
                                <span className="title">Dashboard</span>
                            </a>
                        </li>
                        <li className="nav-item start">
                            <Link href="/masterAdmin/deposit/pending_deposits" >
                                <a className="nav-link nav-toggle">
                                    <img src="/images/svg/hourglass.svg" alt="svg icon" /> &nbsp;
                                    <span className="title">Pending Deposits</span>
                                </a>
                            </Link>
                        </li>
                        <li className="nav-item ">
                            <Link href="/masterAdmin/deposit/deposit_history">
                                <a className="nav-link nav-toggle">
                                    <img src="/images/svg/database.svg" alt="svg icon" />&nbsp;
                                    <span className="title">Deposit History</span>
                                </a>
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link href="/masterAdmin/withdrawals/getPendingWithdrawals">
                                <a className="nav-link nav-toggle">
                                    <img src="/images/svg/hourglass.svg" alt="svg icon" /> &nbsp;
                                    <span className="title">Pending Withdraw</span>
                                </a>
                            </Link>

                        </li>
                        <li className="nav-item">
                            <Link href="/masterAdmin/withdrawals/withdrawal_history">
                                <a className="nav-link nav-toggle">
                                    <img src="/images/svg/database.svg" alt="svg icon" />&nbsp;
                                    <span className="title">Withdraw History</span>
                                </a>
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link href="/masterAdmin/users/users">
                                <a className="nav-link nav-toggle">
                                    <img src="/images/svg/layers.svg" alt="svg icon" />&nbsp;
                                    <span className="title">All Users</span>
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

export default MasterAdminSidebar