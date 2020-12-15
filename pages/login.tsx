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
        console.log(inputs, data, response);
        setMessage('login successful.')
        router.push("/admin")

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
                <link href="/assets/images/favicon.png" rel="icon" type="image/png" />

                {/* <!-- CSS  */}
                {/* ================================================== --> */}
                {/* <link rel="stylesheet" href="/assets/css/style.css" /> */}
                {/* <link rel="stylesheet" href="/assets/css/night-mode.css" /> */}
                <link rel="stylesheet" href="/assets/css/framework.css" />

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
                    &-container{
                        max-width: 100%;
                        background: white;
                    }
                }
                `}</style>
            {/* <!-- Content */}
            {/* ================================================== --> */}
            <div id="mainReg" uk-height-viewport="expand: true" className="uk-flex mainReg uk-flex-middle">
                <div className="mainReg-container uk-width-1-3@m uk-width-1-2@s m-auto">
                    <div className="uk-card-default p-6 rounded">
                        <div className="my-4 uk-text-center">
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
                                <form onSubmit={handleSubmit} className="uk-child-width-1-1 uk-grid-small" uk-grid="true">
                                    <div>
                                        <div className="uk-form-group">
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
