import React, { useEffect, useState } from 'react'
import { Field, Formik } from 'formik'
import * as Yup from 'yup';
import Head from 'next/head'
import Link from 'next/link';
import { useRouter } from 'next/dist/client/router';

import { withApollo } from '../lib/apolloClient';
import { Login, useLoginMutation } from '../generated/apolloComponent'
import theme from '../styles/theme'
import { InputErrorMessage } from '../components';

const SignupSchema = Yup.object().shape({
    password: Yup.string()
        .min(6, 'Too Short!')
        .max(30, 'Too Long!')
        .required('Required'),
    email: Yup.string().email('Invalid email').required('Required'),
});

const LoginPage = () => {
    const [message, setMessage] = useState('')
    const [ShowContent, setShowContent] = useState(false)
    const [loginMutation, { data, loading, error }] = useLoginMutation()
    const router = useRouter()

    useEffect(() => {
        setShowContent(true)
    }, [])
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
        console.log("login>>>>> ",response);

        if (response.data.login.role === "admin") {
            router.push("/masterAdmin")   
        } else {
            router.push("/admin")   
        }

    }
    // if (!ShowContent) return <p>Loading</p>
    return (
        <>
            <Head>
                {/* <!-- Basic Page Needs */}
                {/* ================================================== --> */}
                <title>Login</title>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="description" content="Login" />

                {/* <!-- Favicon --> */}
                <link href="/images/logo.png" rel="icon" type="image/png" />

                {/* <!-- CSS  */}
                {/* ================================================== --> */}
                {/* <link rel="stylesheet" href="/assets/css/style.css" /> */}
                {/* <link rel="stylesheet" href="/assets/css/night-mode.css" /> */}
                {/* <link rel="stylesheet" href="/assets/css/framework.css" /> */}

                {/* <!-- icons */}
                {/* ================================================== --> */}
                <link rel="stylesheet" href="/assets/css/icons.css" />

                <script src="/assets/js/jquery-3.3.1.min.js"></script>
                {/* <script async src="/assets/js/main.js"></script> */}
                {/* <script async src="/assets/js/framework.js"></script> */}
                <script async src="/assets/js/simplebar.js"></script>
            </Head>

            {/* <body> */}
            <style jsx>{`
                .logInMain{
                        grid-column: 1/-1;
                        min-height: 100vh
                    }
                .bigFont{
                    font-size: ${theme.font.xxsmall} ;
                    color: currentColor;
                }
                .mainReg{
                    min-height: 100vh;
                    align-items: center;
                    display: flex;
                    background: #edeff0;
                    justify-content: center;
                    &-container{
                        max-width: 100%;
                        background: white;
                        &__div{
                            background: #fff;
                            color: #666;
                            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.08);
                            padding: 2.5rem;
                            border-radius: 6pt;
                            &--text{
                                text-align: center !important;
                                margin: 1.5rem 0 ;
                                h2{
                                    margin-bottom: 0 !important;
                                    font-size: 27px;
                                    font-weight: 600;   
                                    color: #3e416d;
                                    text-transform: capitalize;
                                    margin: 0 0 15px 0;
                                }
                                .small{
                                    font-size: 1.6rem;
                                    margin: .5rem;
                                }
                                p{
                                    font-size: 1.6rem;
                                    color: currentColor;
                                    margin: .5rem;
                                }
                            }
                            &--form{
                                margin-left: -15px;
                                .w-100{
                                    width: 100%;
                                }
                                .uk-position-relative{
                                    position: relative;
                                }
                                & > * {
                                    padding-left: 15px;
                                }
                                &-input{
                                    margin-bottom: 15px;
                                    label{
                                        color: #3e416d;
                                        font-size: 15px;
                                        margin-bottom: 5px;
                                        display: block;
                                        font-weight: 600;
                                    }
                                }
                                .button{
                                    padding: 1rem 1rem;
                                    background:#3e416d;
                                    border: none;
                                    border-radius: .5rem;
                                    color: white;
                                }
                            }
                        }
                    }
                }
                `}</style>
            {/* <!-- Content */}
            {/* ================================================== --> */}
            <div id="mainReg" uk-height-viewport="expand: true" className="uk-flex mainReg uk-flex-middle">
                <div className="mainReg-container uk-width-1-3@m uk-width-1-2@s m-auto">
                    <div className="mainReg-container__div uk-card-default p-6 rounded">
                        <div className="mainReg-container__div--text my-4 uk-text-center">
                            <h2 className="mb-0">Welcome Back</h2>
                            <p className="bigFont my-2">Login to manage your account.</p>
                            <p className="text-success small">{error ? "Email or password incorrect." : ""}</p>
                            <p className="text-success small">{message}</p>
                        </div>
                        <Formik onSubmit={submit}
                            initialValues={{
                                email: "",
                                password: "",
                            }}
                            validationSchema={SignupSchema}>
                            {({ handleSubmit, errors, touched }) => (
                                <form onSubmit={handleSubmit} className="mainReg-container__div--form uk-child-width-1-1 uk-grid-small" uk-grid="true">
                                    <div>
                                        <div className="mainReg-container__div--form-input uk-form-group">
                                            <label className="uk-form-label"> Email</label>

                                            <div className="uk-position-relative w-100">
                                                <span className="uk-form-icon">
                                                    <i className="icon-feather-mail"></i>
                                                </span>
                                                <Field name="email" className="uk-input" type="email" placeholder="name@example.com" />
                                            </div>
                                            <InputErrorMessage message={errors.email} field={errors.email} touched={touched.email} />
                                        </div>
                                    </div>

                                    <div className="uk-child-width-1-1">
                                        <div className="uk-form-group">
                                            <label className="uk-form-label"> Password</label>

                                            <div className="uk-position-relative w-100">
                                                <span className="uk-form-icon">
                                                    <i className="icon-feather-lock"></i>
                                                </span>
                                                <Field name="password" className="uk-input" type="password" placeholder="********" />
                                            </div>
                                            <InputErrorMessage message={errors.password} field={errors.password} touched={touched.password} />

                                        </div>
                                    </div>

                                    <div>
                                        <div className="mt-4 uk-flex-middle uk-grid-small" uk-grid="true">
                                            <div className="uk-width-expand@s">
                                                <p className=""> Don't have account
                                                    <Link href="/signup">
                                                        <a> Sign up</a>
                                                    </Link>
                                                </p>
                                            </div>
                                            <div className="uk-width-auto@s">
                                                <button className="button grey" type="submit">
                                                    {loading ? "Loading" : "Login"}
                                                </button>
                                                {/* <input type="submit" className="button grey" value="LogIn" /> */}
                                            </div>
                                        </div>
                                    </div>

                                </form>
                            )}
                        </Formik>
                    </div>
                </div>
            </div>

            {/* <!-- javaScripts================================================== --> */}
            {/* </body>  */}
        </>
    )
}

export default withApollo({ ssr: true })(LoginPage)
