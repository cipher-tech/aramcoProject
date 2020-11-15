import React from 'react'

const AdminHeader = () => {
    return (
        <>
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
        </>
    )
}

export default AdminHeader
