import Head from 'next/head'
import React from 'react'
import theme from '../styles/theme'

const Login = () => {
    return (
        <div className="logInMain">
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
                <link rel="stylesheet" href="/assets/css/style.css" />
                <link rel="stylesheet" href="/assets/css/night-mode.css" />
                <link rel="stylesheet" href="/assets/css/framework.css" />

                {/* <!-- icons */}
                {/* ================================================== --> */}
                <link rel="stylesheet" href="/assets/css/icons.css" />
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
                            <h2 className="mb-0">Create new a Account</h2>
                            <p className="bigFont my-2">Fill blank to create new account.</p>
                        </div>
                        <form className="uk-child-width-1-1 uk-grid-small" uk-grid="true">

                            <div>
                                <div className="uk-form-group">
                                    <label className="uk-form-label"> Name</label>

                                    <div className="uk-position-relative w-100">
                                        <span className="uk-form-icon">
                                            <i className="icon-feather-user"></i>
                                        </span>
                                        <input className="bigFont uk-input" type="text" placeholder="Full name" />
                                    </div>

                                </div>
                            </div>
                            <div>
                                <div className="uk-form-group">
                                    <label className="uk-form-label"> Email</label>

                                    <div className="uk-position-relative w-100">
                                        <span className="uk-form-icon">
                                            <i className="icon-feather-mail"></i>
                                        </span>
                                        <input className="bigFont uk-input" type="email" placeholder="name@example.com" />
                                    </div>

                                </div>
                            </div>

                            <div className="uk-width-1-2@s">
                                <div className="uk-form-group">
                                    <label className="uk-form-label"> Password</label>

                                    <div className="uk-position-relative w-100">
                                        <span className="uk-form-icon">
                                            <i className="icon-feather-lock"></i>
                                        </span>
                                        <input className="bigFont uk-input" type="password" placeholder="********" />
                                    </div>

                                </div>
                            </div>
                            <div className="uk-width-1-2@s">
                                <div className="uk-form-group">
                                    <label className="uk-form-label"> Confirm password</label>

                                    <div className="uk-position-relative w-100">
                                        <span className="uk-form-icon">
                                            <i className="icon-feather-lock"></i>
                                        </span>
                                        <input className="bigFont uk-input" type="password" placeholder="********" />
                                    </div>

                                </div>
                            </div>

                            <div>
                                <div className="mt-4 uk-flex-middle uk-grid-small" uk-grid="true">
                                    <div className="uk-width-expand@s">
                                        <p className="bigFont"> Already have an account? <a href="/login">Login</a></p>
                                    </div>
                                    <div className="uk-width-auto@s">
                                        <input type="submit" className="button grey" value="Get Started" />
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            {/* <!-- javaScripts================================================== --> */}
            <Head>
                <script src="/assets/js/jquery-3.3.1.min.js"></script>
                <script src="/assets/js/framework.js"></script>
                <script src="/assets/js/simplebar.js"></script>
                <script src="/assets/js/main.js"></script>
            </Head>
            {/* </body>  */}
        </div>
    )
}

export default Login
