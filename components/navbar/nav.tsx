import Link from 'next/link'
import React from 'react'
import theme from '../../styles/theme'
import styled from "styled-components"

const Container = styled.div`
    .navbar{
    grid-column: 1/-1;
    width: 100%;          
    display: flex;
    justify-content: space-between;
    padding: 1.5rem 2.5rem;
    box-shadow:  0.3rem 0.3rem .7rem #00000073,
        -0.3rem -0.3rem .7rem rgba(230, 230, 230, 29%);
        position: relative;
    @media only screen and (max-width: ${theme.breakPoints.bpLarge}) {
        display: none; 
    } 
    &-logo{
        /* border-radius: 50%; */
    }
    &-list{
        display: flex;
        &__item{
            display: flex;
            align-items: center;
            color: ${theme.colorPrimary};
            padding: .5rem 2rem;
            list-style-type: none;
            
            font-size: ${theme.font.xxsmall};
            cursor: pointer;
            transition: all .1s ease-in-out;
            /* position: relative; */
            &:hover{
                color: ${theme.colorWhite};
                background: ${theme.colorPrimary};
                border-bottom: solid thin ${theme.colorPrimary};
            }
            &:hover > .navbar-list__item--dropDown{
                bottom: -22.5rem ;
            }
            &--dropDown{
                cursor: default;
                position: absolute;
                bottom: 24.5rem ;
                left: 0;
                color: ${theme.colorWhite};
                /* padding: 3rem 3rem; */
                width: 100%;
                background-color:  #056386 /* ${theme.colorPrimary} */ ;
                display: grid;
                grid-template-columns: 2fr 3fr;
                justify-items: space-around;
                &-options{
                    display: flex;
                    flex-direction: column;
                    justify-content: space-evenly;
                    height: 100%;
                    padding: 7rem 3rem;
                    /* background-color: #00a3e0; */
                    &__item{
                        /* padding: 3rem; */
                        font-size: ${theme.font.medium};
                        margin-bottom: 2rem;
                        display: flex;
                        flex-direction: column;
                        span{
                            font-size: ${theme.font.xxxsmall};
                        }
                    }
                }
                &-info{
                    background: #016d94;
                    width: 100%;
                    padding: 3rem 3rem;
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 0 1rem;
                    font-weight: 100;
                    align-items: flex-start;
                    &__title{
                        grid-column: 1/-1;
                        font-weight: 500;
                        margin-bottom: 1.5rem;
                        text-transform: capitalize;
                        font-size: ${theme.font.medium};
                    }
                    &__text{
                        line-height: 1.3;
                        display: flex;
                        flex-direction: column;
                        justify-content: space-evenly;
                        span{
                            &:nth-child(1){
                                font-size: ${theme.font.small};
                                margin-bottom: 1.5rem;
                            }
                            &:nth-child(2){
                                font-size: ${theme.font.xxxsmall};
                            }
                            li{
                                list-style-position: inside;
                                a{
                                    font-size: ${theme.font.xxxsmall};
                                }
                            } 
                        }
                        a{
                            margin-top: 1.5rem;
                            ${theme.font.small};
                        }
                    }
                }
            }
        }
    }
}
`

const Nav = () => {
    return (
        <Container>
            <div className="navbar">
                <img className="navbar-logo" src="/images/logo.png" alt="logo" />
                <ul className="navbar-list">
                    <li className="navbar-list__item">
                    <a className="navbar-list__item--link" href="/overview">Who we are</a>
                        <div className="navbar-list__item--dropDown">
                            <div className="navbar-list__item--dropDown-options">
                                <p className="navbar-list__item--dropDown-options__item">
                                    Overview
                                    <span>A category all of our own</span>
                                </p>
                            </div>
                            <div className="navbar-list__item--dropDown-info">
                                <h3 className="navbar-list__item--dropDown-info__title">Featured Content</h3>
                                <p className="navbar-list__item--dropDown-info__text">
                                    <span>
                                        Who we are:
                                    </span>
                                    <span>
                                        Ranked among the world's largest petrochemicals manufacturers,
                                        SABIC is a public company based in Riyadh, Sabic Arabia.
                                    </span>
                                    <a href="/overview">Read More</a>
                                </p>
                            </div>
                        </div>
                    </li>
                    <li className="navbar-list__item">
                    <a className="navbar-list__item--link" href="/values">Creating value</a>
                       
                        <div className="navbar-list__item--dropDown">
                            <div className="navbar-list__item--dropDown-options">
                                <p className="navbar-list__item--dropDown-options__item">
                                    Creating value
                                    <span>Our diverse and expanding range of products</span>
                                </p>
                            </div>
                            <div className="navbar-list__item--dropDown-info">
                                <h3 className="navbar-list__item--dropDown-info__title">Featured Content</h3>
                                <p className="navbar-list__item--dropDown-info__text">
                                    <span>
                                        Values:
                                    </span>
                                    <span>
                                        From transportation fuels to advanced materials, our diverse and
                                        expanding range of products create value not only for our customers, but also our company.
                                    </span>
                                    <a href="/values">Read More</a>
                                </p>
                            </div>
                        </div>
                    </li>
                    {/* <li className="navbar-list__item">Making a difference</li> */}
                    <li className="navbar-list__item">
                        <a className="navbar-list__item--link" href="/plans/products">Partnering with us</a>
                        <div className="navbar-list__item--dropDown">
                            <div className="navbar-list__item--dropDown-options">
                                <p className="navbar-list__item--dropDown-options__item">
                                    Partnering with us.
                                    <span>Explore Our stocks and shares</span>
                                </p>
                            </div>

                            <div className="navbar-list__item--dropDown-info">
                                <h3 className="navbar-list__item--dropDown-info__title">Become A Partner</h3>
                                <p className="navbar-list__item--dropDown-info__text">
                                    <span>
                                        Become A Customer:
                                    </span>
                                    <span>
                                        Sabic Aramco is the world’s largest integrated oil and gas company.
                                    </span>
                                    <a href="/plans/products">Read More</a>
                                </p>
                                <p className="navbar-list__item--dropDown-info__text">
                                    <span>
                                        Become A Supplier:
                                    </span>
                                    <span>
                                        Being an energy leader in a world of changing energy demand,
                                        we embrace our role to find effective energy solutions.
                                    </span>
                                    <a href="/suppliers">Read More</a>
                                </p>
                            </div>


                        </div>
                    </li>
                    <li className="navbar-list__item">
                        <a className="navbar-list__item--link" href="/investors">Investors</a>

                        <div className="navbar-list__item--dropDown">
                            <div className="navbar-list__item--dropDown-options">
                                <p className="navbar-list__item--dropDown-options__item">
                                    Investors
                                    {/* <br/> */}
                                    <span>Explore Our Investment Plans</span>
                                </p>
                                {/* <p className="navbar-list__item--dropDown-options__item">
                                    Product
                                    <span>small text</span>
                                </p> */}
                            </div>

                            <div className="navbar-list__item--dropDown-info">
                                <h3 className="navbar-list__item--dropDown-info__title">Become an Investor</h3>
                                <p className="navbar-list__item--dropDown-info__text">
                                    <span>
                                        Invest In Products:
                                    </span>
                                    <span>
                                        Aramco previously announced the successful completion of its share acquisition of a 70%
                                        stake in Basic Industries Corporation from the Public Investment Fund.
                                    </span>
                                    <a href="/investors">Read More</a>
                                </p>
                                <div className="navbar-list__item--dropDown-info__text">
                                    <span>
                                        Become an Investor:
                                    </span>
                                    <span>
                                        <ul>
                                            <li>
                                                <a href="/plans/products">Invest on Gas</a>
                                            </li>
                                            <li>
                                                <a href="/plans/products">Invest on Oil</a>
                                            </li>
                                            <li>
                                                <a href="/plans/products">Invest on Chemicals</a>
                                            </li>

                                        </ul>
                                    </span>
                                    <a href="/investors">Read More</a>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
                <ul className="navbar-list">
                    <li className="navbar-list__item">
                        {/* <Link > */}
                            <a href="/login">Login | &nbsp; </a>
                            <a href="/signup"> Register</a>
                        {/* </Link> */}
                    </li>
                    {/* <li className="navbar-list__item">Login</li> */}
                </ul>

            </div>
        </Container>
    )
} 

export default Nav
