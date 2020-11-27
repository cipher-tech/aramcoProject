import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import styled, { keyframes } from "styled-components";
import { Field, Formik } from 'formik'
import * as Yup from 'yup';

import { InputErrorMessage, Modal, Plan, SideBar, StockPlan, UserAdminHeader, UserStats } from "../../components/index"
import theme from '../../styles/theme';
import { withApollo } from '../../lib/apolloClient';
import { useWithdrawalRequestMutation } from '../../generated/apolloComponent';
import Plans from '../../components/plans/plans';
// import { ReactComponent as Spinner } from "/images/svg/spinner.svg";

const spinnerRotation = keyframes`
    from{
        transform: rotate(0deg);
    }
    to{
        transform: rotate(360deg);
    }
`
const Container = styled.div`
    grid-column: 1/-1; 
    display: grid;
    min-height: 100%;
    min-width: 100%;
    padding: 1.5rem;
    place-items: flex-start;
    background: ${theme.colorLight};
    border-radius: 2rem 0 0 2rem;
    z-index: 30;
    margin-top: 1rem;
    /* position: relative; */
    font-size: 60%;
    *{
        margin-top: 0;
    }
    .modal__container{
        place-items: center;
        background: ${theme.colorLight};
        padding: 2rem 3rem;
        height: max-content;
        align-self: center;
        color: ${theme.colorDark};
        text-align: center;
        position: relative;
        border-radius: 1rem;
        display: grid;
        width: 90%;
        justify-self: center;
        
        .close{
            justify-self: flex-end;
            cursor: pointer;
        }
        img{
            height: 20rem;
            width: 20rem;
        }
        &--text{
            padding: 1rem;
        }
        &-address{
            font-size: ${theme.font.large};
            color: ${theme.colorSecondary};
            width: 90%;
            overflow-x: scroll;
            width: 100%;
            overflow: hidden;
        }
    }
    .loadingSpinner{
        justify-self: center;
        align-self: center;
        text-align: center;
        height: 2rem;
        width: 2rem;
        margin-left: 1rem;
        path{  
            fill: ${theme.colorWhite};
        }
        animation: ${spinnerRotation} 2s infinite;
        /* transform: rotate(40) */
    }
    .modal__container{
        place-items: center;
        background: ${theme.colorLight};
        padding: 2rem 3rem;
        height: max-content;
        align-self: center;
        color: ${theme.colorDark};
        text-align: center;
        position: relative;
        border-radius: 1rem;
        display: grid;
        width: 90%;
        justify-self: center;
        
        .close{
            justify-self: flex-end;
            cursor: pointer;
        }
        img{
            height: 20rem;
            width: 20rem;
        }
        &--text{
            padding: 1rem;
            font-size: ${theme.font.xsmall};
        }
        &-address{
            font-size: ${theme.font.medium};
            color: ${theme.colorSecondary};
            width: 90%;
            overflow-x: scroll;
            width: 100%;
            overflow: hidden;
        }
    }
    .coin{
        grid-column: 1/-1;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(38rem, 1fr));
        width: 100%;
        /* padding: 3rem; */
        align-items: flex-start;
        place-items: center;
        gap: 1rem;
        /* height: 78vh; */
        @media only screen and (max-width: ${(theme.breakPoints.bpSmall2)}) {
           padding: 3rem 0;
           display: flex;
           flex-direction: column-reverse;
        }

        &-options{
            display: grid;
            align-self: flex-start;
            justify-items: center;
            /* grid-template-columns: repeat(auto-fit, minmax(9rem, 1fr)); */
            box-shadow: .3rem .3rem 20px rgba(0,0,0, .3),
                -0.2rem -0.4rem 20px rgba(255,255,255, .3);
            border-radius: 1rem;
            gap: .5rem;
            /* height: 30rem; */
            max-width: 80rem;
            width: 100%;
            padding: 2rem 1rem;
            position: relative;
            margin-top: 8rem;

            .red{
                color: ${theme.colorError} !important;
            }
            .disabled{
                background: #b9b9b9 !important;
            }
            
            
            &__types{
                position: absolute;
                display: grid;
                top: -1rem;
                width: 90%;
                left: 50%;
                transform: translate(-50%, -50%);
                /* height: 10rem; */
                padding: 1rem 1rem;
                border-radius: 1rem;
                background: ${theme.colorPrimary};
                &--container{
                    grid-column: 1/-1;
                    width: 100%;
                    display: grid;
                    align-self: flex-start;
                    justify-items: center;
                    grid-template-columns: repeat(auto-fit, minmax(11rem, 1fr));
                    gap: 1rem 0;
                    h4{
                        color:${theme.colorWhite};
                        place-self: center;
                        font-size: ${theme.font.medium};
                        margin-bottom: 0;
                    }
                    .active{
                        background:  ${theme.colorSecondary};
                    }

                    &--item{
                        display: grid;
                        grid-template-columns: 1fr 2fr;
                        padding: 1rem;
                        align-self: flex-start;
                        justify-self: center;
                        /* width: max-content; */
                        /* border: solid .5px ${(theme.colorWhite)}; */
                        box-shadow: .1rem -.1rem 10px rgba(0,0,0, .2),
                            -0.1rem 0.1rem 10px rgba(255,255,255, .2);
                        color: ${theme.colorWhite};
                        cursor: pointer;
                        font-size: ${theme.font.xsmall};
                        border-radius: 1.5rem;
                        transition: all .2s ease-in-out;
                        &:hover{
                        background:  ${theme.colorSecondary};
                        color: ${theme.colorLight};
                        }
                        
            
                        img{
                            justify-self: center;
                            align-self: center;
                            text-align: center;
                            height: 2rem;
                            width: 2rem;
                        }
                        &--text{
                            padding: 0 1rem;
                            justify-self: center;
                            justify-self: center;
                            align-self: center;
                            text-align: center;
                            text-transform: capitalize;
                            
                            &--rate{
                                margin: 1rem 0;
                                font-size: ${theme.font.medium};
                                font-weight: 500;
                                color: ${theme.colorSecondary}
                            }
                        }
                    }
                    .price{
                        grid-template-columns: 1fr; 
                        margin-left: 1rem;
                    }
                }
            }

            &__card--container{
                grid-column: 1/-1;
                width: 100%;
                display: grid;
                align-self: flex-start;
                justify-items: center;
                grid-template-columns: repeat(auto-fit, minmax(11rem, 1fr));
                gap: 1rem 0;


                &--item{
                    display: grid;
                    grid-template-columns: 1fr 2fr;
                    padding: 1rem;
                    align-self: flex-start;
                    justify-self: center;
                    /* width: max-content; */
                    border: solid 1.5px ${theme.colorPrimary};
                    color: ${theme.colorDark};
                    border-radius: 1.5rem;
                    transition: all .2s ease-in-out;
                    cursor: pointer;
                    &:hover{
                    background:  ${theme.colorSecondary};
                    color: ${theme.colorLight};
                    }
        
                    img{
                        justify-self: center;
                        align-self: center;
                        text-align: center;
                        height: 2rem;
                        width: 2rem;
                    }
                    &--text{
                        padding: 0 1rem;
                        justify-self: center;
                        justify-self: center;
                        align-self: center;
                        text-align: center;
                        
                        &--rate{
                            margin: 1rem 0;
                            font-size: ${theme.font.small};
                            font-weight: 500;
                            color: ${theme.colorSecondary}
                        }
                    }
                }
                .price{
                    grid-template-columns: 1fr; 
                    margin-left: 1rem;
                }
            }

            &__buy-sell{
                grid-column: 1/-1;
                font-size: ${theme.font.xsmall};
                padding: .1rem 2rem;
                /* margin-top: 3rem; */
                transition: all .5s ease;
                display: flex;
                color: ${theme.colorPrimary};
                &--item{
                    padding: .5rem 2rem;
                    font-weight: 500;
                    text-transform: uppercase;
                    cursor: pointer;
                }
                .tab{
                    border-bottom: solid 2px ${(theme.colorPrimary)};
                    transition: all .2s linear;
                }
            }
            
            &__header{
                grid-column: 1/-1;
                font-size: ${theme.font.medium};
                /* padding: 1rem 1rem; */
                /* font-weight: 600; */
                /* margin-top: 1rem; */
                transition: all .5s ease;
                color: ${theme.colorPrimary}
            }

            &__amounts{
                position: relative;
                display: flex;
                &::before{
                content: attr(symbol);
                color: ${theme.colorPrimary};
                position: absolute;
                top: 50%;
                transform: translateY(-50%);
                padding: 0 2rem;
                font-size: ${theme.font.medium};
                }
            }
            &__prices{
                display: flex;
                justify-content: space-evenly;
                grid-column: 1/-1;
                width: 100%;
                font-size: ${theme.font.medium};
                padding: 1rem 1rem;
                font-weight: 600;
                /* margin-top: 1rem; */
                transition: all .5s ease;
                color: ${theme.colorSecondary};

                &--icon{
                    height: 2rem;
                    width: 2rem;
                    margin-left: .5rem;
                    color: ${theme.colorPrimary};
                    path{  
                        fill: ${theme.colorPrimary};
                        box-shadow: -0.2rem -0.4rem 20px rgba(255,255,255, .3),
                            .2rem .4rem 10px rgba(0,0,0, .3);
                    }
                }
            }

            &__group{
				border: none 1px;
				padding: .3rem;
				width: 100%;
				margin: .5rem 0;
            }
            &-attributes{
				grid-column: 1/-1;
				display: flex;
				width: 100%;
				/* min-width: 55rem; */
				justify-content: space-around;
				padding: 1rem 1.5rem;
				margin: 1rem 0;
				box-shadow: .2rem .3rem 10px rgba(0,0,0, .3),
					-0.2rem -0.3rem 20px rgba(255,255,255, .3);
				border-radius: 1.4rem;
				&__item{
					width: 100%;
					text-transform: capitalize;
					text-align: center;
					justify-content: space-around;
                    color: ${theme.colorDark};
				}
	  		}

            &__value{
                margin: 2rem 0 ;
                background: ${theme.colorDark};
                padding: 1.5rem 7.5rem;
                font-size: ${theme.font.medium};
                opacity: .8;
                border-radius: .5rem;
            }
            .input-container{
                margin: .2rem 0 ;
                background: transparent;
                padding: 1rem 2.5rem 1rem 5rem;
                font-size: ${theme.font.medium};
                opacity: .8;
                border: solid 1px ${theme.colorPrimary};
                border-radius: .5rem;

                &::before{
                    content: "$";
                    position: absolute;
                    top: 1.6rem;
                    left: 2.5rem;
                    color: ${theme.colorDark};
                }
            }

            &-paymentOptions{
                padding: 1rem 2rem;
                margin: 1rem;
                box-shadow: -0.2rem -0.4rem 20px rgba(255,255,255, .3),
                    .2rem .4rem 10px rgba(0,0,0, .3);
                background: none;
                border-radius: .4rem;  
                border: none;  
                font-size: ${theme.font.small};
                color: ${theme.colorSecondary};
                /* &:hover{
                } */
                &:focus{
                    outline: none;
                    /* color: ${theme.colorSecondary}; */
                }
            }
            &__acceptedPaymentMethods{
                font-size: ${theme.font.xsmall};
                color: red;
            }
            &__button{
                display: flex;
                padding: 1rem 6rem;
                border-radius: 2rem;
                color: ${theme.colorWhite};
                background: ${theme.colorPrimary};
                border: none;
                font-size: ${theme.font.medium};
                &:active{
                    box-shadow: -0.2rem -0.4rem 20px rgba(255,255,255, .3),
                        .2rem .4rem 10px rgba(0,0,0, .3);
                    /* color: ${theme.colorPrimary}; */
                }
                &:focus{
                    outline: none;
                }
            }
        }
        .amount{
            display: flex;
            justify-content: center;
            width: 100%; 
            
        }
       
        
        &-icon{
            display: grid;
            align-items: center;
            align-items: center;
            justify-items: center;
            height: 100%;
            width: 100%;
            padding: 0rem .1rem;
            transition: all .3s ease-in-out .1s;
            cursor: pointer;
            align-self: center;
           
            svg{
                height: 20rem;
                width: 20rem;
            }
            svg path{  
                fill: white;
                color: white;
            }
        }
        /* img, #icon{
            height: 3rem;
            width: 3rem;
        } */

    }
`;

const Request_Deposit = (props) => {

    const [isLoading, setIsLoading] = useState(false);
    const [isModalActive, setIsModalActive] = useState(false);
    const [message, setMessage] = useState('')
    const [, setIsCopied] = useState(false)
    const [refId, setRefId] = useState('')
    const [withdrawalRequestMutation, { data, loading, error }] = useWithdrawalRequestMutation()
    // useEffect(() => {
    //     console.log(data);
    // }, [data])

    async function copy(type) {
        if (type === "refId") {
            await navigator.clipboard.writeText("Copy refrenceId")
            setIsCopied(true)
            return
        }
        await navigator.clipboard.writeText("Some other text")
        setIsCopied(true)
    }
    const withdrawalSchema = Yup.object().shape({
        amount: Yup.number()
            .required('Required')
    });

    const submit = async (inputs) => {
        await setIsLoading(true)
        await setMessage('')
        withdrawalRequestMutation({
            variables: {
                input: {
                    amount: inputs.amount,
                    userId: "id",
                }
            }
        })
        .then(async response => {
            if (error) return setMessage('Something went wrong, please try again or contact admin')
            if (!loading) await setIsLoading(false)
    
            console.log({response, data});
            setIsModalActive(true)
        })
        .catch( async err => {
            await setIsLoading(false)
            await setMessage('Something went wrong, please try again or contact admin')
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
                
            `}</style>
            <Head>
                <meta charSet="utf-8" />
                <title>Coin Forest - Dashboard</title>
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                <meta content="width=device-width, initial-scale=1" name="viewport" />
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

                <link rel="shortcut icon" href="/admin/assets/images/favicon.png" />
            </Head>

            <body className="page-header-fixed page-sidebar-closed-hide-logo">

                {/* <!-- BEGIN HEADER --> */}
                <UserAdminHeader />
                {/* <!-- END HEADER --> */}


                {/* <!-- BEGIN HEADER & CONTENT DIVIDER --> */}
                <div className="clearfix"></div>
                <div className="page-container">
                    <SideBar />


                    {/* <!-- BEGIN CONTENT --> */}
                    <div className="page-content-wrapper">
                        <div className="page-content">
                            <h3 className="page-title">Dashboard </h3>
                            <hr />

                            {/* <!--  ==================================VALIDATION ERRORS==================================  --> */}
                            {/* <!--  ==================================SESSION MESSAGES==================================  --> */}

                            <UserStats />
                            <Plans />
                            <StockPlan />
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

            </body>

        </>
    )
}

export default withApollo({ ssr: true })(Request_Deposit)

