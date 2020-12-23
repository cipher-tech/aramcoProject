import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import styled, { keyframes } from "styled-components";
import { Field, Formik } from 'formik'
import * as Yup from 'yup';

import { InputErrorMessage, Modal, Plan, SideBar, StockPlan, UserAdminHeader, UserStats } from "../../components/index"
import theme from '../../styles/theme';
import { withApollo } from '../../lib/apolloClient';
import { useWithdrawalRequestMutation } from '../../generated/apolloComponent';
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
    .coin{
        box-shadow: -0.2rem -0.4rem 20px rgba(255,255,255, .3),
            .2rem .4rem 10px rgba(0,0,0, .3);
        padding: 2rem;
        justify-self: center;
        &-options__types--container-h4{
            font-weight: bold;
        }
        &-options__header{

        }
        .input-container{
                margin: .2rem 0 ;
                background: transparent;
                padding: 1rem 2.5rem 1rem 5rem;
                font-size: ${theme.font.medium};
                opacity: .8;
                border: solid 1px ${theme.colorPrimary};
                border-radius: .5rem;
                @media only screen and (max-width: ${(theme.breakPoints.bpSmall)}) {
                font-size: ${theme.font.xxxsmall};
                padding: 1rem 2.5rem 1rem 1rem;
            }

                &::before{
                    content: "$";
                    position: absolute;
                    top: 1.6rem;
                    left: 2.5rem;
                    color: ${theme.colorDark};
                }
            }
        &-options__button{
                display: flex;
                padding: 1rem 3rem;
                border-radius: 2rem;
                color: ${theme.colorWhite};
                background: ${theme.colorPrimary};
                border: none;
                font-size: ${theme.font.xxsmall};
                @media only screen and (max-width: ${(theme.breakPoints.bpSmall)}) {
                font-size: ${theme.font.xxxsmall};
            }
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
`;

const Request_Deposit = (props) => {

    const [isLoading, setIsLoading] = useState(false);
    const [isModalActive, setIsModalActive] = useState(false);
    const [message, setMessage] = useState('')
    const [, setIsCopied] = useState(false)
    const [refId, setRefId] = useState('')
    const [withdrawalRequestMutation, { data, loading, error }] = useWithdrawalRequestMutation()
    const [showContent, setShowContent] = useState(false)
    useEffect(() => {
        // console.log(data, "network stats>>>", networkStatus);
        setTimeout(() => {
            setShowContent(true)
        }, 1500)
    })

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
                if (error) return setMessage(response.errors[0].message)
                if (!loading) await setIsLoading(false)

                console.log({ response, data });
                setIsModalActive(true)
            })
            .catch(async err => {
                await setIsLoading(false)
                console.table(err.message.replace("GraphQL error:", ""))
                await setMessage(err.message.replace("GraphQL error:", ""))
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
                <title>Sabic-Aramco</title>
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

                <link rel="shortcut icon" href="/images/logo.png" />
            </Head>
            {showContent &&
                <body className="page-header-fixed page-sidebar-closed-hide-logo">
                    <UserAdminHeader />
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

                                {/* {showpopUpMessage ? (
                                <PopUpMessage error={hasError}>
                                    {" "}
                                    {popUpMessage}{" "}
                                    <span onClick={() => setShowPopUpMessage(false)}>✖</span>{" "}
                                </PopUpMessage>
                            ) : null} */}
                                <Container hidden={false}>
                                    <Modal isActive={isModalActive}>
                                        <div className="modal__container">
                                            <span
                                                role="img"
                                                aria-label="img"
                                                className="close"
                                                onClick={() => setIsModalActive(false)}
                                            >
                                                ❌
                                        </span>
                                            {/* <img src="/images/qrcode.png" alt="" /> */}

                                            <p className="modal__container--text">
                                                Withdrawal request placed Successfully
                                        </p>

                                            <p className="modal__container-address">
                                                {/* Refrence ID : {data?.withdrawalRequest?.referenceId} */}
                                                {/* <button onClick={() => copy("address")}> copy</button> */}
                                            </p>

                                            <p className="modal__container--text">
                                                Payment will be made to your bitcoin address with in the next 3 working days. <br />
                                            </p>
                                        </div>
                                    </Modal>
                                    {/* <div className="loadingScreen"/> */}
                                    <div className="coin">
                                        <div className="coin-options">
                                            <div className="coin-options__types">
                                                <div className="coin-options__types--container">
                                                    <h4 className="coin-options__types--container-h4">Request Withdrawal</h4>
                                                </div>
                                            </div>
                                            <p>{message} </p>

                                            <h5 className="coin-options__header">
                                                Enter an amount to withdraw
                                        </h5>

                                            <Formik onSubmit={submit}
                                                initialValues={{
                                                    amount: "",
                                                }}
                                                validationSchema={withdrawalSchema}>
                                                {({ handleSubmit, errors, touched }) => (
                                                    <form onSubmit={handleSubmit}>
                                                        <div>
                                                            <span className="coin-options__amounts">
                                                                <Field
                                                                    name="amount"
                                                                    type="number"
                                                                    className="coin-options__value input-container"
                                                                    placeholder="Enter Value"
                                                                />
                                                            </span>
                                                            <InputErrorMessage message={errors.amount} field={errors.amount} touched={touched.amount} />
                                                        </div>
                                                        <button type="submit" className={`coin-options__button`}>
                                                            Continue
                                                        {isLoading ? <img src="/images/svg/spinner.svg" className="loadingSpinner" /> : null}
                                                        </button>
                                                    </form>
                                                )}
                                            </Formik>
                                        </div>

                                    </div>
                                </Container>

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
            }
        </>
    )
}

export default withApollo({ ssr: true })(Request_Deposit)

