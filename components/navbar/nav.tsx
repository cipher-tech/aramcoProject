import Link from 'next/link'
import React from 'react'
import theme from '../../styles/theme'

const Nav = () => {
    return (
        <>
            <style jsx>{`
                .navbar{
                    grid-column: 1/-1;
                    width: 100%;          
                    display: flex;
                    justify-content: space-evenly;
                    padding: 1.5rem 2.5rem;
                    box-shadow:  0.3rem 0.3rem .7rem #00000073,
                        -0.3rem -0.3rem .7rem rgba(230, 230, 230, 29%);
                    @media only screen and (max-width: ${theme.breakPoints.bpLarge}) {
                        display: none; 
                    } 
                    &-logo{
                        border-radius: 50%;
                    }
                    &-list{
                        display: flex;
                        &__item{
                            color: ${theme.colorPrimary};
                            padding: 1.5rem 2rem;
                            list-style-type: none;
                            font-size: ${theme.font.xxsmall};
                            cursor: pointer;
                        }
                    }
                }  
            `}</style>
            <nav className="navbar">
                <img className="navbar-logo" src="/images/logo.png" alt="logo" />
                <ul className="navbar-list">
                    <li className="navbar-list__item">Who we are</li>
                    <li className="navbar-list__item">Creating value</li>
                    <li className="navbar-list__item">Making a difference</li>
                    <li className="navbar-list__item">Partnering with us</li>
                    <li className="navbar-list__item">Investors</li>
                </ul>
                <ul className="navbar-list">
                    <li className="navbar-list__item">
                        <Link href="/login">
                            <a>Login</a>
                        </Link>
                    </li>
                    {/* <li className="navbar-list__item">Login</li> */}
                </ul>

            </nav>
        </>
    )
}

export default Nav
