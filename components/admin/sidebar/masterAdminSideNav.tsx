import React, { useState, useContext } from 'react'
import styled from "styled-components";
import { useSpring, animated } from 'react-spring';
import Link from 'next/link';
import theme from '../../../styles/theme';
import { useRouter } from 'next/router';

const Container = styled.div`
    display: grid;
    grid-column: 1/-1;
    grid-template-rows: min-content;
    background: rgb(44, 64, 101); /* ${theme.colorPrimary}; */
    z-index: 1990;
    /* width: ; */
    /* height: 90vh; */
    position: relative;
    .navContainer{
        position: relative;
        width: 100%;
    }
    .navbar-mobile{
        /* position: absolute; */
        top: 0rem;
        background: rgb(44, 64, 101); /* ${theme.colorPrimary}; */
        /* right: 3rem; */
        justify-content: space-between;
        width: 100%;
        align-items: center;
        place-items: center;
        padding: 0 2rem;
        z-index: 1990;
        display: none; 
        @media only screen and (max-width: ${theme.breakPoints.bpxLarge}) {
            display: flex; 
        }
        &__logo{
            display: grid;
            align-items: center;
            place-items: center;
            align-self: center;
            height: 4rem;
            width: 4rem;
            margin: 0;
            padding: 0rem .1rem;
            transition: all .3s ease-in-out .1s;
            z-index: 1300;
            cursor: pointer;
            img{
                height: 2.5rem;
            }

            path{
                height: 100%;
                fill: white;
                color: white;
            }
        }
        &__icon{
            display: grid;
            align-items: center;
            place-items: center;
            align-self: center;
            height: 4rem;
            /* width: 4rem; */
            padding: 0rem .1rem;
            transition: all .3s ease-in-out .1s;
            z-index: 1300;
            cursor: pointer;
            img{
                height: 2.5rem;
            }

            path{
                height: 100%;
                fill: white;
                color: white;
            }
        }
        &__overlay{
            content: "";
            position: fixed;
            top: 3rem;
            right: 3rem;
            height: 2rem;
            width: 2rem;
            border-radius: 50%;
            background: #000000e3;
            /* background: linear-gradient(to bottom , ${theme.colorDark} 40% ,  ${theme.colorSecondary} ) ; */
            /* transform: scale(0); */
        }
    }

    .navbar-mobile__list{
        background: #4a4a4a;
        /* height: 100%; */
        background: rgb(44, 64, 101); /* ${theme.colorPrimary}; */
        padding: 1rem;
        position: fixed;
        /* top: 50%; */
        /* left: -50%; */
        /* width: 25rem; */
        /* transform: translate(-50%, -50%); */
        width: 100%;
        list-style: none;
        z-index: 1203;
        display: flex;
        flex-direction: column;
        @media only screen and (min-width: ${theme.breakPoints.bpMedium}) {
            /* max-width: 40rem;
            width: 40rem; */
        }
        &--item{
            &:first-child{
                background: none;
            }
            text-transform: capitalize;
            padding: 1.5rem 3rem;
            /* margin: 1rem 0; */
            width: max-content;
            align-self: center;
            cursor: pointer;
            text-align: left;
            background: ${theme.colorDark};
            width: 100%;
            font-size: ${theme.font.xsmall};
            transition: all .4s ease-in-out .1s;
            background-size: 230%;
            color: ${theme.colorWhite};
            text-decoration: none;
            /* border-top: solid 1px #ffffff2e; */
            
            &:hover{
                background-position: 100%;
                transform: translateX(1rem);
            }
        }            

    }


    .navbar{  
        background: ${theme.colorDark};
        grid-column: 1/-1;
        display: grid;
        /* height: 6rem; */
        background: transparent;
        grid-template-columns: max-content 1fr max-content;
        z-index: 1000;

        &-logo {
            justify-items: flex-start;
            height: 5rem;
            width: 5rem;
            margin: 1rem 2rem;
            border-radius: 50%;
            overflow: hidden;

            &--img{
                height: 100%;
                width: 100%;
                object-fit: fill;
            }
        }

        &-list{
            display: flex;
            justify-content: center;
            justify-self: center;
            align-content: center;
            align-self: center;
            width: 100%;
            padding-right: 4rem; 
            @media only screen and (max-width: ${theme.breakPoints.bpLarge}) {
                display: none; 
            }

            .divider{
                border-left: solid 1px  ${theme.colorWhite};
            }
            &-item , a{
                display: flex;
                position: relative;
                justify-content: center;
                text-align: center;
                padding: 1rem 2rem;
                list-style-type: none;
                height: 100%;
                width: max-content;
                color: ${theme.colorWhite};
                text-decoration: none;
                cursor: pointer;
                @media only screen and (max-width: ${theme.breakPoints.bpLarge}) {
                    font-size: ${theme.font.large}
                }
                &::before{
                    display: flex;
                    content: " ";
                    justify-content: center;
                    position: absolute;
                    bottom: .2rem;
                    width: 0%;
                    height: .2rem;
                    transition: all .3s ease-in;
                    background: ${theme.colorSecondary};
                }

                &:hover::before{
                    width: 65%;
                }
            }
        }
       
    }
`

const UserAdminNavbarComponent = (props) => {

    const [mobileNavIsOpen, setMobileNavIsOpen] = useState(!true)
    const router = useRouter()
    // const loginSignUpContext = useContext(ContextData)
    const toggleMobileNav = () => {
        setMobileNavIsOpen(!mobileNavIsOpen)
    }
    // const closeMobileNav = () => {
    //     setMobileNavIsOpen(false)
    // }
    const spring = useSpring({
        transform: mobileNavIsOpen ? "scale(170)" : "scale(0)"
    })
    const springMove = useSpring({
        top: mobileNavIsOpen ? "8%" : "-400%"
    })
    console.log(router) //temp1.route.startsWith("/admin")
    const UserLinks = [
        {
            route: "/admin",
            name: "Dashboard"
        },
        {
            route: "/admin/deposits",
            name: "Request Deposits"
        },
        {
            route: "/admin/pending_deposits",
            name: "pending_deposits"
        },
        {
            route: "/admin/pending_withdrawals",
            name: "pending_withdrawals"
        },
        {
            route: "/admin/request_withdrawal",
            name: "request_withdrawal"
        },
        {
            route: "/admin/selectPlan",
            name: "selectPlan"
        },
        {
            route: "/admin/withdrawals",
            name: "withdrawals"
        },

    ]
    const AdminLinks = [
        {
            route: "/masterAdmin",
            name: "Dashboard"
        },
        {
            route: "/masterAdmin/deposit/deposit_history",
            name: "Deposits"
        },
        {
            route: "/masterAdmin/deposit/pending_deposits",
            name: "pending_deposits"
        },
        {
            route: "/masterAdmin/withdrawals/getPendingWithdrawals",
            name: "Pending Withdrawals"
        },
        {
            route: "/masterAdmin/withdrawals/withdrawal_history",
            name: "withdrawal history"
        },
        {
            route: "/masterAdmin/users/users",
            name: "All users"
        },
       
    ]
    return (!props.show ?
        <Container>

            <div className="navContainer">
            <div className="navbar-mobile">
                <p className="navbar-mobile__logo" onClick={toggleMobileNav}>
                    <img src="/images/logo.png" alt="next" />
                </p>
                <p className="navbar-mobile__icon" onClick={toggleMobileNav}>
                    <img src="/images/menuIcon.svg" alt="next" />
                    {/* ⬛ */}
                </p>
                {/* <animated.div style={{ transform: spring.transform }} className="navbar-mobile__overlay"></animated.div> */}
            </div>
            </div>
            <animated.ul style={{ top: springMove.top }} onClick={toggleMobileNav} className="navbar-mobile__list">
                <div className="navbar-mobile__list--item">
                    {/* <p className="navbar-mobile__list--item--toggle" onClick={toggleMobileNav}> X </p> */}
                </div>
                {
                    router.route.startsWith("/admin") ?
                        UserLinks.map((item, index) => (
                            <Link key={index + 913} href={item.route}>
                                <a className="navbar-mobile__list--item">
                                    {item.name}
                                </a>
                            </Link>
                        ))
                        :
                        AdminLinks.map((item, index) => (
                            <Link key={index + 992773} href={item.route}>
                                <a className="navbar-mobile__list--item">
                                    {item.name}
                                </a>
                            </Link>
                        ))
                }


                {/* <Link href={"/admin/deposits"}>
                    <a className="navbar-mobile__list--item">
                        deposits
                    </a>
                </Link>
                <Link href={"/admin/pending_deposits"}>
                    <a className="navbar-mobile__list--item">
                        pending_deposits
                    </a>
                </Link>
                <Link href={"/admin/pending_withdrawals"}>
                    <a className="navbar-mobile__list--item">
                        pending_withdrawals
                    </a>
                </Link>
                <Link href={"/admin/request_withdrawal"}>
                    <a className="navbar-mobile__list--item">
                        request_withdrawal
                    </a>
                </Link>
                <Link href={"/admin/selectPlan"}>
                    <a className="navbar-mobile__list--item">
                        selectPlan
                    </a>
                </Link>
                <Link href={"/admin/withdrawals"}>
                    <a className="navbar-mobile__list--item">
                        withdrawals
                    </a>
                </Link> */}
            </animated.ul>
        </Container> : null
    )
}

export default UserAdminNavbarComponent
