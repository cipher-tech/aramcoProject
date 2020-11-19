import React, { useState, useContext } from 'react'
import styled from "styled-components";
import { useSpring, animated } from 'react-spring';
import Link from 'next/link';
import theme from '../../styles/theme';
// import routes from '../../navigation/routes';
// import logo from "../../images/logo.svg"
// import { ReactComponent as MenuIcon } from "../../images/svgIcons/menu.svg"
// import { ContextData } from '../../context/contextData';

const Container = styled.div`
    display: grid;
    grid-column: 1/-1;
    grid-template-rows: min-content;
    /* grid-template-columns: repeat(2, minmax(40rem, 1fr)); */
    /* height: auto; */
    background: ${theme.colorPrimary};
    /* width: ; */
    /* height: 90vh; */
    position: relative;
    .navbar-mobile{
        position: fixed;
        top: 0rem;
        right: 0rem;
        display: grid;
        align-items: center;
        place-items: center;
        padding: 2rem;
        z-index: 1200;
        display: none; 
        @media only screen and (max-width: ${theme.breakPoints.bpLarge}) {
            display: grid; 
        }
        &__icon{
            display: grid;
            align-items: center;
            place-items: center;
            align-self: center;
            height: 4rem;
            width: 4rem;
            padding: 0rem .1rem;
            transition: all .3s ease-in-out .1s;
            z-index: 1300;
            cursor: pointer;
            justify-self: ${props => props.sidenavIsOpen ? "center" : "flex-start"};

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
            /* background: linear-gradient(to bottom , ${theme.colorPrimary} 40% ,  ${theme.colorSecondary} ) ; */
            /* transform: scale(0); */
        }
    }
    .navbar-mobile__list{
        position: fixed;
        top: 50%;
        /* left: -50%; */
        /* width: 25rem; */
        transform: translate(-50%, -50%);
        list-style: none;
        z-index: 1203;
        display: flex;
        flex-direction: column;
        &--item{
            text-transform: capitalize;
            padding: 1rem 3rem;
            margin: 1rem 0;
            width: max-content;
            align-self: center;
            cursor: pointer;
            text-align: center;
            background-image: linear-gradient(125deg,  transparent 50%,  ${theme.colorSecondary} 50% ) ;
            font-size: ${theme.font.xsmall};
            transition: all .4s ease-in-out .1s;
            background-size: 230%;
            color: ${theme.colorWhite};
            text-decoration: none;

            &:hover{
                background-position: 100%;
                transform: translateX(1rem);
            }
        }            

    }


    .navbar{  
        background: ${theme.colorPrimary};
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


const UserNavbarComponent = (props) => {

    const [mobileNavIsOpen, setMobileNavIsOpen] = useState(!true)
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
        left: mobileNavIsOpen ? "50%;" : "-50%"
    })
    return (!props.show ?
        <Container>

            <div className="navbar-mobile">
                <p className="navbar-mobile__icon" onClick={toggleMobileNav}> ⬜</p>
                <animated.div style={{ transform: spring.transform }} className="navbar-mobile__overlay"></animated.div>
            </div>
            <animated.ul style={{ left: springMove.left }} onClick={toggleMobileNav} className="navbar-mobile__list">
                <Link href={"/"}>
                    <a className="navbar-mobile__list--item">
                        home
                    </a>
                </Link>
                <Link href={"/overview"}>
                    <a className="navbar-mobile__list--item">
                        Who we are
                    </a>
                </Link>
                <Link href={"/values"}>
                    <a className="navbar-mobile__list--item">
                        Creating value
                    </a>
                </Link>
                <Link href={"/plans/products"}>
                    <a className="navbar-mobile__list--item">
                        Partnering with us
                    </a>
                </Link>
                <Link href={"/investors"}>
                    <a className="navbar-mobile__list--item">
                        Investors
                    </a>
                </Link>
            </animated.ul>
        </Container> : null
    )
}

export default UserNavbarComponent
