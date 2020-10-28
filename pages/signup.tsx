import { Field, Formik } from 'formik'
import * as Yup from 'yup';
import Head from 'next/head'
import React, { useState } from 'react'

import { withApollo } from '../lib/apolloClient';
import { Plans, Register, useRegisterMutation } from '../generated/apolloComponent'
import theme from '../styles/theme'
import { InputErrorMessage } from '../components';

const SignupSchema = Yup.object().shape({
    first_name: Yup.string()
        .min(2, 'Too Short!')
        .max(30, 'Too Long!')
        .required('Required'),
    last_name: Yup.string()
        .min(2, 'Too Short!')
        .max(30, 'Too Long!')
        .required('Required'),
    phone_no: Yup.string()
        .min(11, 'Too Short!')
        .max(30, 'Too Long!')
        .required('Required'),
    // plan: Yup.string()
    //     .required('Required'),
    coin_address: Yup.string()
        .min(6, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    password: Yup.string()
        .min(6, 'Too Short!')
        .max(30, 'Too Long!')
        .required('Required'),
    email: Yup.string().email('Invalid email').required('Required'),
});

const SignUp = () => {
    const [message, setMessage] = useState('')
    const [registerMutation, { data, loading, error }] = useRegisterMutation()

    const submit = async (inputs: Register) => {
        await setMessage('')
        let response = await registerMutation({
            variables: {
                input: inputs
            },
        })
        if (error) return setMessage('Something went wrong, please try again or contact admin')
        console.log(data, response);
        setMessage('registration successful.')
    }
    return (
        <div className="logInMain">
            <Head>
                {/* <!-- Basic Page Needs */}
                {/* ================================================== --> */}
                <title>Sign up</title>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="description" content="Login" />

                {/* <!-- Favicon --> */}
                <link href="/assets/images/favicon.png" rel="icon" type="image/png" />

                {/* <!-- CSS  */}
                {/* ================================================== --> */}
                <link rel="stylesheet" href="/assets/css/style.css" />
                <link rel="stylesheet" href="/assets/css/night-mode.css" />
                <link rel="stylesheet" href="/assets/css/framework.css" />

                {/* <!-- icons */}
                {/* ================================================== --> */}
                <link rel="stylesheet" href="/assets/css/icons.css" />
                <script src="/assets/js/main.js"></script>
            </Head>

            {/* <body> */}
            <style jsx>{`
                .logInMain{
                        grid-column: 1/-1;
                    }
                .bigFont{
                    font-size: ${theme.font.xxsmall} ;
                    color: currentColor;
                }
                `}</style>
            {/* <!-- Content */}
            {/* ================================================== --> */}
            <div id="mainReg" uk-height-viewport="expand: true" className="uk-flex uk-flex-middle">
                <div className="uk-width-1-3@m uk-width-1-2@s m-auto">
                    <div className="uk-card-default p-6 rounded">
                        <div className="my-4 uk-text-center">
                            <h2 className="mb-0">Create a new Account</h2>
                            <p className="my-2">Fill blank to create new account.</p>
                            <p className="text-success small">{message}</p>
                        </div>

                        <Formik onSubmit={submit}
                            initialValues={{
                                first_name: "",
                                last_name: "",
                                email: "",
                                phone_no: "",
                                password: "",
                                plan: Plans.Beginners,
                                coin_address: "",
                            }} validationSchema={SignupSchema}>
                            {({ handleSubmit, errors, touched }) => (
                                <form onSubmit={handleSubmit} className="uk-child-width-1-1 uk-grid-small" uk-grid="true">
                                    <div className="uk-width-1-2@s">
                                        <div className="uk-form-group">
                                            <label className="uk-form-label"> First Name</label>

                                            <div className="uk-position-relative w-100">
                                                <span className="uk-form-icon">
                                                    <i className="icon-feather-user"></i>
                                                </span>
                                                <Field name="first_name" placeholder="First Name" className="uk-input" />
                                            </div>
                                        </div>
                                        <InputErrorMessage message={errors.first_name} field={errors.first_name} touched={touched.first_name} />
                                    </div>
                                    <div className="uk-width-1-2@s">
                                        <div className="uk-form-group">
                                            <label className="uk-form-label"> Last Name</label>

                                            <div className="uk-position-relative w-100">
                                                <span className="uk-form-icon">
                                                    <i className="icon-feather-user"></i>
                                                </span>
                                                <Field name="last_name" placeholder="last Name" className="uk-input" />
                                            </div>
                                        </div>
                                        <InputErrorMessage message={errors.last_name} field={errors.last_name} touched={touched.last_name} />
                                    </div>

                                    <div className="uk-width-1-2@s">
                                        <div className="uk-form-group">
                                            <label className="uk-form-label"> Email</label>

                                            <div className="uk-position-relative w-100">
                                                <span className="uk-form-icon">
                                                    <i className="icon-feather-mail"></i>
                                                </span>
                                                <Field name="email" placeholder="Email" className="uk-input" />
                                                {/* <input className="bigFont uk-input" type="email" placeholder="name@example.com" /> */}
                                            </div>

                                        </div>
                                        <InputErrorMessage message={errors.email} field={errors.email} touched={touched.email} />

                                    </div>
                                    <div className="uk-width-1-2@s">
                                        <div className="uk-form-group">
                                            <label className="uk-form-label"> PhoneNumber</label>

                                            <div className="uk-position-relative w-100">
                                                <span className="uk-form-icon">
                                                    <i className="icon-feather-mail"></i>
                                                </span>
                                                <Field name="phone_no" placeholder="Phone Number" className="uk-input" />
                                                {/* <input className="bigFont uk-input" type="email" placeholder="name@example.com" /> */}
                                            </div>

                                        </div>
                                        <InputErrorMessage message={errors.phone_no} field={errors.phone_no} touched={touched.phone_no} />
                                    </div>
                                    <div className="uk-width-1-2@s">
                                        <div className="uk-form-group">
                                            <label className="uk-form-label"> Password</label>

                                            <div className="uk-position-relative w-100">
                                                <span className="uk-form-icon">
                                                    <i className="icon-feather-mail"></i>
                                                </span>
                                                <Field name="password" placeholder="********" type="password" className="uk-input" />
                                                {/* <input className="bigFont uk-input" type="email" placeholder="name@example.com" /> */}
                                            </div>

                                        </div>
                                        <InputErrorMessage message={errors.password} field={errors.password} touched={touched.password} />
                                    </div>

                                    <div className="uk-form-group">
                                        <label className="uk-form-label"> Coin address</label>

                                        <div className="uk-position-relative w-100">
                                            <span className="uk-form-icon">
                                                <i className="icon-feather-mail"></i>
                                            </span>
                                            <Field name="coin_address" placeholder="Coin Address" className="uk-input" />
                                            {/* <input className="bigFont uk-input" type="email" placeholder="name@example.com" /> */}
                                        </div>

                                    </div>
                                    <InputErrorMessage message={errors.coin_address} field={errors.coin_address} touched={touched.coin_address} />

                                    <div>
                                        <div className="mt-4 uk-flex-middle uk-grid-small" uk-grid="true">
                                            <div className="uk-width-expand@s">
                                                <p className=""> Already have an account? <a href="/login">Login</a></p>
                                            </div>
                                            <div className="uk-width-auto@s">
                                                {
                                                    Object.keys(errors).length ?
                                                        <p className="button color">
                                                            {loading ? "Loading" : "Get Started"}
                                                        </p>
                                                        :
                                                        <button className="button grey" type="submit">
                                                            {loading ? "Loading" : "Get Started"}
                                                        </button>
                                                        }
                                                {/* <input type="submit" className="button grey" value="Get Started" /> */}
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            )}
                        </Formik>

                    </div>
                </div>
            </div >

            {/* <!-- javaScripts================================================== --> */}
            < Head >
                <script src="/assets/js/jquery-3.3.1.min.js"></script>
                <script src="/assets/js/framework.js"></script>
                <script src="/assets/js/simplebar.js"></script>

            </Head >
            {/* </body>  */}
        </div >
    )
}

export default withApollo({ ssr: true })(SignUp)
