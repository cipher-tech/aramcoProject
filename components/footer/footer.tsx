import React from 'react'
import theme from '../../styles/theme'

const Footer = () => {
    return (
        <>
        <style jsx>{`
            .footer{
                grid-column: 1/-1;
                width: 100%;
                display: grid;
                grid-template-columns: repeat(auto-fill, minmax(30rem, 1fr));
                padding: 2rem 2rem;
                justify-items: center;
                gap: 1rem;
                background: ${theme.colorDark};
                color: ${theme.colorWhite};
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
                        }
                    }
                }
            }    
        `}</style>
            <footer className="footer">
                <div className="footer-column">
                    <h3 className="footer-column__title">Site information</h3>
                    <ul className="footer-column-list">
                        <li className="footer-column-list__item">COOKIE NOTICES</li>
                        <li className="footer-column-list__item">PRIVACY STATEMENT</li>
                        <li className="footer-column-list__item">TERMS AND CONDITIONS</li>
                        <li className="footer-column-list__item">SCAM AND FRAUD ALERT</li>
                        <li className="footer-column-list__item">SITEMAP</li>
                    </ul>
                </div>
                <div className="footer-column">
                    <h3 className="footer-column__title">Other websites</h3>
                    <ul className="footer-column-list">
                        <li className="footer-column-list__item">SEARCH ALL NEWS</li>
                        <li className="footer-column-list__item">LATEST NEWS</li>
                        <li className="footer-column-list__item">PUBLICATIONS</li>
                        <li className="footer-column-list__item">SPEECHES</li>
                        <li className="footer-column-list__item">MEDIA GALLERY</li>
                        <li className="footer-column-list__item">CONTACTS AND RESOURCES</li>
                    </ul>
                </div>
                <div className="footer-column">
                    <h3 className="footer-column__title">News & Media</h3>
                    <ul className="footer-column-list">
                        <li className="footer-column-list__item"> ARAMCO ENTREPRENEURSHIP CENTER</li>
                        <li className="footer-column-list__item">ARAMCO TRADING COMPANY</li>
                        <li className="footer-column-list__item">KING ABDULAZIZ CENTER FOR WORLD CULTURE (ITHRA)</li>
                        <li className="footer-column-list__item">IKTVA</li>
                        <li className="footer-column-list__item">SAUDI ARAMCO ENERGY VENTURES</li>
                        <li className="footer-column-list__item">GLOBAL DIRECTORY</li>
                    </ul>
                </div>

                <div className="footer-column">
                    <h3 className="footer-column__title">Social media</h3>
                    <ul className="footer-column-list">
                        <li className="footer-column-list__item">SEARCH ALL NEWS</li>
                        <li className="footer-column-list__item">LATEST NEWS</li>
                        <li className="footer-column-list__item">PUBLICATIONS</li>
                        <li className="footer-column-list__item">SPEECHES</li>
                        <li className="footer-column-list__item">MEDIA GALLERY</li>
                        <li className="footer-column-list__item">CONTACTS AND RESOURCES</li>
                    </ul>
                </div>
                <p>© 2020 Saudi Arabian Oil Co.</p>
            </footer>
        </>
    )
}

export default Footer
