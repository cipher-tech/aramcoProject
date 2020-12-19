import React, { useEffect, useState } from 'react'
import styled, { keyframes } from 'styled-components'
import { MasterAdminSideMenu, UserNav } from '..'
import theme from '../../styles/theme'

const rotate = keyframes`
    from {
        transform: rotate(0deg) scale(1)
    }
    /* 10%{
        transform: rotate(0deg) scale(1)
    }
    50%{
        transform: rotate(180deg) scale(1.2)
    }
    60%{
        transform: rotate(180deg) scale(1.2)
    } */
    to{
        transform: rotate(360deg) scale(1.1)
    }
`
const Container = styled.div`
    width: 100%;
    @media only screen and (max-width: ${theme.breakPoints.bpLarge}) {
        display: none; 
    }
`
const Loader = styled.div`
    display: flex;
    place-content: center;
    position: fixed;
    align-items: center;
    z-index: 2000;
    top: 0;
    background-color: #ffffff;
    width: 100%;
    height: 100%;
    span{
        font-size: 7rem;
        transition: all 1s 0s linear;
        animation: 2s ${rotate} linear infinite reverse   ;
    }
`
const AdminHeader = () => {
    const [showLoader, setShowLoader] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setShowLoader(false)
        }, 1500)
        
    }, )
    return (
        <>
            {showLoader && <Loader className="loader">
                <span>⏳</span>
            </Loader>
            }
            <MasterAdminSideMenu />
            {/* <Container className="page-header navbar navbar-fixed-top" style={{ backgroundColor: "#2C4065" }}>
            </Container> */}
        </>
    )
}
//     {/* <!-- BEGIN LOGO --> */}
//     <div className="page-header-inner " style={{ backgroundColor: "#2C4065" }}>
//     <div className="page-logo">
//         {/* <a href="">
//             <img src="/admin/assets/images/logo.png" className="logo-default" alt="-" style={{ filter: "brightness(0) invert(1)", width: "150px", height: "45px" }} />
//         </a> */}
//         <div className="menu-toggler sidebar-toggler" style={{ backgroundColor: "#2C4065" }}></div>
//     </div>
//     {/* <!-- END LOGO --> */}

//     {/* <!-- BEGIN RESPONSIVE MENU TOGGLER --> */}
//     <a href="javascript:;" className="menu-toggler responsive-toggler" data-toggle="collapse" data-target=".navbar-collapse"> </a>

//     {/* <div className="top-menu" style={{ backgroundColor: "#2C4065" }}>
//         <ul className="nav navbar-nav pull-right" style={{ backgroundColor: "#2C4065" }}>
//             <li className="dropdown dropdown-user">
//                 <a href="" className="dropdown-toggle" data-toggle="dropdown" data-hover="dropdown" data-close-others="true">


//                     <span className="username"> Sabic Aramco</span>
//                     <i className="fa fa-angle-down"></i>
//                 </a>
//                 <ul className="dropdown-menu dropdown-menu-default">

//                     <li><a href="admin-change-password.html"><i className="fa fa-cogs"></i> Change Password </a>
//                     </li>
//                     <li><a href="/admin"><i className="fa fa-sign-out"></i> Log Out </a></li>

//                 </ul>
//             </li>
//         </ul>
//     </div> */}
// </div>

export default AdminHeader
