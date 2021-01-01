import React, { Component, useEffect, useState } from 'react'
import styled from 'styled-components'
import { Field, Formik } from 'formik'
import * as Yup from 'yup';
import Head from 'next/head'
import theme from '../styles/theme'
import { InputErrorMessage } from '../components';
import Link from 'next/link';
import { useRouter } from 'next/dist/client/router';

import { withApollo } from '../lib/apolloClient';
import { Login, useLoginMutation } from '../generated/apolloComponent'
// import { ReactComponent as WelcomeSvg } from "../../../images/svgIcons/welcomeSvg.svg"
// import Home from "../../../images/svgIcons/home.svg"
// import lock from "../../../images/svgIcons/lock.svg"
// import envelope from "../../../images/svgIcons/envelope.svg"
// import phoneHandset from "../../../images/svgIcons/phone-handset.svg"

// import { StyledInput } from '../../../components/styledComponents'
// import { FormValidator } from '../../../formValidator'
// import { ValidationMessage } from '../../../validationMessage'
// import { Link } from 'react-router-dom'
// import Axios from 'axios'
// import routes from '../../../navigation/routes'
// import { connect } from 'react-redux'
// import { Modal, PopUpMessage } from '../../../components'


const Container = styled.div`
   grid-column: 1/-1;
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    place-items: center;
    min-height: 100vh;
    /* min-width: 100vh; */
    /* background: ${theme.colorLight}; */
    .login{
        grid-column: 2/6;
        /* height: 60vh; */
        display: grid;
        grid-template-columns: 40% 1fr;
        margin: 5rem 0 ;
        width: 100%;
        box-shadow: .2rem .4rem 10px rgba(0,0,0, .3),
        -0.2rem -0.4rem 10px rgba(255,255,255, .3);
        background: ${theme.colorLight};
        overflow: hidden;
        border-radius: .9rem;
        @media only screen and (max-width: ${theme.breakPoints.bpMedium}) {
            grid-column: 1/-1;
            justify-items: center;
            grid-template-columns: 1fr;
            width: auto;
            /* width: 90%; */
        }

        &__side-left{
            background: ${theme.colorPrimary};
            /* display: grid; */
            padding: 2rem;
            position: relative;
            font-family: ProximaNovaSoftW03-Regular;
            display: flex;
            justify-items: center;
            flex-direction: column;
            justify-content: center;
            /* background-image: url($);
            background-repeat: no-repeat;
            background-position: 104px right; */
            .circle{
                /* display:none; */
                position: absolute;
                height: 14rem;
                width: 14rem;
                right: -10rem;
                top: -10rem;
                background: ${theme.colorWhite};
                border-radius: 50%
            } 
            .circle2{
                /* display:none; */
                position: absolute;
                height: 14rem;
                width: 14rem;
                left: -10rem;
                bottom: -10rem !important;
                background: ${theme.colorWhite};
                border-radius: 50%
            }
            &-title{
                display: flex;
                align-self: center;
                justify-content: center;
                text-align: center;
                font-size: ${theme.font.medium};
                font-weight: 600;
                color: ${theme.colorLight};
                padding-top: 3rem;
                margin-bottom: 3rem;
            }
            &-text{
                display: flex;
                text-align: center;
                justify-content: center;
                align-self: center;
                align-self: center;
                line-height: 2;
                color: ${theme.colorLight};
                font-size: ${theme.font.xxsmall};
            }
            &-button{
                display: flex;

                align-self: center;
                justify-self: center;
                text-align: center;
                justify-content: center;
                padding: .8rem 2.5rem;
                font-size: ${theme.font.xxxsmall};
                border-radius: 10rem;
                border: 1px solid ${theme.colorLight};
                box-shadow: .2rem .4rem 10px rgba(0,0,0, .3),
                -0.2rem -0.4rem 20px rgba(255,255,255, .3);
                background: transparent;
                text-decoration: none;
                cursor: pointer;
                color: ${theme.colorLight};
                /* border: none; */
                margin: 1rem .1rem 4rem .1rem;

                &:active{
                    box-shadow: -0.2rem -0.4rem 20px rgba(255,255,255, .3),
                        .2rem .4rem 10px rgba(0,0,0, .3);
                    color: ${theme.colorPrimary};
                }
                &:focus{
                    outline: none;
                }
            }
            @media only screen and (max-width: ${theme.breakPoints.bpMedium}) {
                display: none
            }
        }
        &__side-right{
            background: ${theme.colorWhite};
            width: 100%;
            display: grid;
            justify-items: center;
            grid-template-rows: 7rem max-content;

            @media only screen and (max-width: ${theme.breakPoints.bpMedium}) {
                padding: 1rem;
                grid-column: 1/-1;
                width: 95%;
                box-shadow: .2rem .4rem 10px rgba(0,0,0, .3),
                -0.2rem -0.4rem 10px rgba(255,255,255, .3);
            }
            &-image{
                display: grid;
                place-self: center
            }
            &-title{
                justify-self: center;
                text-align: center;
                width: 70%;
                color: ${theme.colorPrimary};
                font-size: ${theme.font.xsmall};
                font-weight: 500;
                margin: 1rem 0 2rem;
                @media only screen and (max-width: ${theme.breakPoints.bpMedium}) {
                    width: 100%;
                    text-align: center;
                }
            }
            &-message{
                justify-self: center;
                text-align: left;
                width: 70%;
                color: ${theme.colorRed};
                font-size: ${theme.font.xxxsmall};
                font-weight: 500;
            }
            &-container{
                justify-self: center;
                /* width: auto; */
                display: grid;
                justify-items: center;
                width: 100%;
                &-modal{
                    justify-self: center;
                    background-color: ${theme.colorLight};
                    align-self: center;
                    color: ${theme.colorPrimary} ;
                    padding: 2rem;
                    border-radius: 1rem;
                    width: min-content;
                    &-form{
                        width: 80%;
                    }
                }
            }
            &-form{
                justify-self: center;
                width: 75%;
                display: flex;
                flex-direction: column;
                &-input{
                    border: none;
                    border-bottom: 1px solid black;
                    padding: .8rem .7rem;
                    margin: 1rem;
                }
            }
            &-isSugnedIn{
                justify-self: center;
                text-align: left;
                width: 70%;
                color: ${theme.colorPrimary};
                @media only screen and (max-width: ${theme.breakPoints.bpMedium}) {
                    width: 100%;
                    padding: 2rem;
                    text-align: center;
                }
                &-action{
                    font-weight: 700;
                    text-decoration: none;
                    cursor: pointer;
                    &-red{
                        color: ${theme.colorRed};
                    }
                }
            }
            &-summit{
                display: grid;
                align-self: center;
                justify-self: flex-end;
                text-align: center;
                justify-content: center;
                padding: 1rem 4rem;
                font-size: ${theme.font.xxsmall};
                border-radius: 20rem;
                border: 1px solid ${theme.colorLight};
                box-shadow: .2rem .4rem 10px rgba(0,0,0, .3),
                -0.2rem -0.4rem 20px rgba(255,255,255, .3);
                background: ${theme.colorPrimary};
                color: ${theme.colorLight};
                /* border: none; */
                margin: 1rem 1.5rem;

                &:active{
                    box-shadow: -0.2rem -0.4rem 20px rgba(255,255,255, .3),
                        .2rem .4rem 10px rgba(0,0,0, .3);
                    color: ${theme.colorPrimary};
                }
                &:focus{
                    outline: none;
                }
            }
        }
    }
`

const LoginPage = (props) => {
    const [message, setMessage] = useState('')
    const [ShowContent, setShowContent] = useState(false)
    const [loginMutation, { data, loading, error, }] = useLoginMutation()
    const router = useRouter()

    useEffect(() => {
        setShowContent(true)
    }, [])
    const SignupSchema = Yup.object().shape({
        password: Yup.string()
            .min(6, 'Too Short!')
            .max(30, 'Too Long!')
            .required('Required'),
        email: Yup.string().email('Invalid email').required('Required'),
    });

    const submit = async (inputs: Login) => {
        await setMessage('')
        let response = await loginMutation({
            variables: {
                input: inputs
            },
        })

        if (error) return setMessage('Something went wrong, please try again or contact admin')
        // console.log(inputs, data, response);
        setMessage('login successful.')
        console.log("login>>>>> ", response);

        if (response.data.login.role === "admin") {
            router.push("/masterAdmin")
        } else {
            router.push("/admin")
        }

    }

    return (
        <Container>
            {/* {showpopUpMessage ? <PopUpMessage error={error}> {popUpMessage} <span onClick={() => this.setState({ setShowPopUpMessage: false })}>✖</span> </PopUpMessage> : null} */}

            <div className="login">
                <div className="login__side-left">
                    <div className="circle" />
                    <div className="circle2" />
                    {/* <p className="login__side-left-title">Welcome Back</p> */}
                    <p className="login__side-left-text">
                        Fill in your details to continue
                        </p>
                    <Link href="/signup">
                        <span className="login__side-left-button"> Sign up</span>
                    </Link>
                    {/* <button ></button> */}
                </div>
                <div className="login__side-right">
                    <div className="login__side-right-image">
                        {/* <WelcomeSvg /> */}
                    </div>
                    <div className="login__side-right-title">Login To Account</div>
                    <p className="login__side-right-message">
                        {error ? "Email or password incorrect." : ""}
                        <br />
                        {message}
                    </p>
                    <Formik onSubmit={submit}
                        initialValues={{
                            email: "",
                            password: "",
                        }}
                        validationSchema={SignupSchema}>
                        {({ handleSubmit, errors, touched }) => (

                            <form onSubmit={handleSubmit} className="login__side-right-container" uk-grid="true">
                                <div className="login__side-right-form">
                                    <Field name="email" className="login__side-right-form-input" /* value={email} */
                                        placeholder="Email" type="email" /* icon={envelope} */ />
                                    <InputErrorMessage message={errors.email} field={errors.email} touched={touched.email} />


                                    <Field name="password" className="login__side-right-form-input"
                                        /* value={password} */
                                        placeholder="Password" type="password" /* icon={lock} */ />
                                    <InputErrorMessage message={errors.password} field={errors.password} touched={touched.password} />

                                </div>
                                <p className="login__side-right-isSugnedIn">
                                    Don't have an account?
                                        <span className="login__side-right-isSugnedIn-action">
                                        <Link href="/signup">
                                            <a> Sign up </a>
                                        </Link>
                                    </span>
                                    <br />
                                    {/* Forgot password?
                                        <span className="login__side-right-isSugnedIn-action"> Reset</span> */}
                                    <button className="login__side-right-summit grey" type="submit">
                                        {loading ? "Loading..." : "Login"}
                                    </button>
                                </p>
                            </form>
                        )}
                    </Formik>
                </div>
            </div>
        </Container>
    )
}


export default withApollo({ ssr: true })(LoginPage)
