import Link from 'next/link'
import React from 'react'
import theme from '../../styles/theme'

const Footer = () => {
    return (
        <>
            <style jsx>{`
            .footer{
                margin-top: 0;
                border: none;
                grid-column: 1/-1;
                width: 100%;
                display: grid;
                grid-template-columns: repeat(auto-fill, minmax(30rem, 1fr));
                padding: 2rem 2rem;
                justify-items: center;
                gap: 1rem;
                background: ${theme.colorDark};
                color: ${theme.colorWhite};
                @media only screen and (max-width: ${theme.breakPoints.bpSmall}) {
                    justify-items: flex-start;
                } 
                &-column{
                    display: flex;
                    flex-direction: column;
                    &__title{
                        font-size: ${theme.font.medium};
                        padding: 2rem 2rem 1.5rem 0rem;
                        font-weight: 300;
                        width: max-content;
                        border-bottom: solid thin ${theme.colorWhite};
                    }
                    &-list{
                        list-style-type: none;
                        &__item{
                            font-size: ${theme.font.xxxsmall};
                            padding: 1rem 0;
                            img{
                                height: 5rem;
                                width: 5rem;
                                margin: 1rem
                            }
                        }
                    }
                }
                p{
                    place-self: center;
                }
            }    
        `}</style>
            <footer className="footer">
                <div className="footer-column">
                    <h3 className="footer-column__title">Site information</h3>
                    <ul className="footer-column-list">
                        <li className="footer-column-list__item">
                            <Link href="/" >
                                <a className="topInfo-container__button">Home </a>
                            </Link>
                        </li>
                        <li className="footer-column-list__item">
                            <Link href="/overview" >
                                <a className="topInfo-container__button">Who are we </a>
                            </Link>
                        </li>
                        <li className="footer-column-list__item">
                            <Link href="/investors" >
                                <a className="topInfo-container__button">Investors </a>
                            </Link>
                        </li>
                        <li className="footer-column-list__item">
                            <Link href="/plans/products" >
                                <a className="topInfo-container__button">Partnering with us </a>
                            </Link>
                        </li>
                        <li className="footer-column-list__item">
                            <Link href="/login" >
                                <a className="topInfo-container__button">Login </a>
                            </Link>
                        </li>
                    </ul>
                </div>

                <div className="footer-column">
                    <h3 className="footer-column__title">Contact Us</h3>
                    <ul className="footer-column-list">
                        <li className="footer-column-list__item">
                            <img src="/images/telegram.png" alt="next" />
                            <img src="/images/mail.png" alt="next" />
                        </li>
                    </ul>
                </div>
                <p>© 2020 Saudi Arabian Oil Co.</p>
            </footer>
        </>
    )
} 

export default Footer
