import Link from 'next/link'
import React from 'react'
import styled from 'styled-components';
import { UserNav } from '../..'
import theme from '../../../styles/theme';

const AdminSidebar = () => {
    return (
        <>
            {/* <UserNav /> */}
            <div className="page-sidebar-wrapper">
                <div className="page-sidebar navbar-collapse collapse">
                    <ul className="page-sidebar-menu  page-header-fixed " data-keep-expanded="false" data-auto-scroll="true" data-slide-speed="200" style={{ paddingTop: "20px" }}>
                        <li className="sidebar-toggler-wrapper hide">
                            <div className="sidebar-toggler"></div>
                        </li>
                        <li className="nav-item start">
                            <a href="/admin" className="nav-link ">
                                <img src="/images/svg/home.svg" alt="svg icon" /> &nbsp;
                                <span className="title">Dashboard</span>
                            </a>
                        </li>
                        <li className="nav-item start">
                            <Link href="/admin/selectPlan" >
                                <a className="nav-link nav-toggle">
                                    <img src="/images/svg/envelope.svg" alt="svg icon" /> &nbsp;
                                    <span className="title">Make Deposit</span>
                                </a>
                            </Link>
                        </li>
                        <li className="nav-item start">
                            <Link href="/admin/pending_deposits" >
                                <a className="nav-link nav-toggle">
                                    <img src="/images/svg/hourglass.svg" alt="svg icon" /> &nbsp;
                                    <span className="title">Pending Request</span>
                                </a>
                            </Link>

                        </li>
                        <li className="nav-item start">
                            <Link href="/admin/deposits">
                                <a className="nav-link nav-toggle">
                                    <img src="/images/svg/database.svg" alt="svg icon" />&nbsp;
                                    <span className="title">Deposit History</span>
                                </a>
                            </Link>

                        </li>
                        <li className="nav-item start">
                            <Link href="/admin/request_withdrawal">
                                <a className="nav-link nav-toggle">
                                    <img src="/images/svg/envelope.svg" alt="svg icon" />&nbsp;
                                    <span className="title">Request Withdraw</span>
                                </a>
                            </Link>

                        </li>
                        <li className="nav-item start">
                            <Link href="/admin/pending_withdrawals">
                                <a className="nav-link nav-toggle">
                                <img src="/images/svg/hourglass.svg" alt="svg icon" />&nbsp;
                                    <span className="title">Pending Withdraw</span>
                                </a>
                            </Link>
                        </li>
                        <li className="nav-item start">
                            <Link href="/admin/withdrawals">
                                <a className="nav-link nav-toggle">&nbsp;
                                    <img src="/images/svg/database.svg" alt="svg icon" />&nbsp;
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