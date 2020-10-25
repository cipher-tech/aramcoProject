import React from 'react'
import { CustomFontSize } from '../components'
import theme from '../styles/theme'
const Home: React.FC = () => {
    return (
            <CustomFontSize>
            <style jsx>{`
            .main{
                grid-column: 1/-1;
                width: 100%;
                font-size: ${theme.font.xxsmall};
                color: ${theme.colorPrimary};
                .navbar{
                    grid-column: 1/-1;
                    width: 100%;          
                    display: flex;
                    justify-content: space-evenly;
                    padding: 1.5rem 2.5rem;
                    box-shadow:  0.3rem 0.3rem .7rem #00000073,
                        -0.3rem -0.3rem .7rem rgba(230, 230, 230, 29%);
                    &-logo{
                        border-radius: 50%;
                    }
                    &-list{
                        display: flex;
                        &__item{
                            padding: 1.5rem 2rem;
                            list-style-type: none;
                        }
                    }   
                }    
                &-content{
                    grid-column: 1/-1;
                    background-image: linear-gradient(270deg,transparent,rgba(0,0,0,.4)), url('/images/headerImage.jpg');
                    background-repeat: no-repeat;
                    height: 50rem;
                    width: 100%;
                    padding: 2rem ;
                    padding-left: 5rem;
                    display: flex;
                    align-content: center;
                    justify-content: center;
                    flex-direction: column;
                    color: ${theme.colorWhite};
                    &-bigText{
                        font-weight: 100;
                        font-size: ${theme.font.xlarge};
                    }
                    &-text{
                        font-weight: 100;
                        padding-bottom: 2rem;
                    }
                        
                    &-link{
                        display: flex;
                        align-content: center;
                        justify-content: center;
                        color: ${theme.colorWhite};
                        padding: 2rem;
                        font-weight: 100;
                        background: ${theme.colorPrimary};
                        align-self: flex-start
                    }
                } 
            }
            .topInfo{
                grid-column: 2/10;
                max-height: 39rem;
                max-width: 100%;
                display: grid;
                grid-template-columns: 2fr 1fr;
                justify-content: space-between;
                margin: 2rem 0;
                &-title{
                    grid-column: 1/-1;
                    justify-self: flex-start;
                    padding: 1rem 0rem;
                    font-size: ${theme.font.large};
                    color: ${theme.colorGrey};
                }
                &-img{
                    align-self: stretch;
                    width: 100%;
                    background-image: linear-gradient(270deg,transparent,rgba(0,0,0,.4)), url('/images/infoImg.jpg');
                    background-repeat: no-repeat;
                    background-size: cover;
                }
                &-container{
                    padding: 2rem;
                    max-width: 40rem;
                    background: ${theme.colorPrimary};
                    color: ${theme.colorWhite};
                    display: flex;
                    flex-direction: column;
                    font-weight: 100;
                    &__subHead{
                        padding: 1rem 0rem;
                    }
                    &__title{
                        padding: 1rem 0rem;
                        font-weight: 100;
                        font-size: ${theme.font.medium};
                    }
                    &__text{
                        padding: 1rem 0rem;
                        font-weight: 100;
                        line-height: 1.4;
                        font-size: ${theme.font.xsmall};
                    }
                    &__button{
                        display: flex;
                        align-content: center;
                        justify-content: center;
                        color: ${theme.colorWhite};
                        padding: 1.5rem 2.5rem;
                        font-weight: 100;
                        background: transparent;
                        align-self: flex-start;
                        border: solid 1px ${theme.colorWhite};
                    }
                }
            }
            .glance{
                grid-column: 2/10;
                max-width: 100%;
                display: grid;
                grid-template-columns: repeat(auto-fill, minmax(30rem,1fr));
                justify-content: space-between;
                gap: 1rem;
                margin: 2rem 0;
                background: linear-gradient(85deg,#84bd00,#007eac);
                &-title{
                    grid-column: 1/-1;
                    justify-self: center;
                    padding: 1rem 1rem;
                    background: #00000057;
                    color: ${theme.colorWhite};
                    font-size: ${theme.font.xxxsmall};
                }
                &-container{
                    padding: 2rem;
                    max-width: 40rem;
                    padding-bottom: 2rem;
                    color: ${theme.colorWhite};
                    display: flex;
                    flex-direction: column;
                    align-content: center;
                    justify-content: center;
                    font-weight: 100;
                    &__subHead{
                        padding: 1rem 0rem;
                        text-align: center;
                    }
                    &__title{
                        text-align: center;
                        padding: 1rem 0rem;
                        font-weight: 100;
                        font-size: ${theme.font.medium};
                    }
                    &__text{
                        padding: 1rem 0rem;
                        font-weight: 100;
                        text-align: center;
                        line-height: 1.4;
                        font-size: ${theme.font.xsmall};
                    }
                    &__button{
                        display: flex;
                        align-content: center;
                        justify-content: center;
                        color: ${theme.colorWhite};
                        padding: 1.5rem 2.5rem;
                        font-weight: 100;
                        background: transparent;
                        align-self: center;
                        border: solid 1px ${theme.colorWhite};
                    }
                }
            }
            .imageInfo{
                grid-column: 1/-1;
                height: 49rem;
                max-width: 100%;
                width: 100%;
                display: grid;
                grid-template-columns: 3fr 2.5fr;
                margin: 0rem 0;
                align-self: stretch;
                justify-items: flex-end;
                background-image: url('/images/moreInfo.jpg');
                background-repeat: no-repeat;
                background-size: cover;
                &:nth-child(2){
                    justify-items: flex-start;
                }
                &-container{
                    grid-column: 2;
                    padding: 2rem;
                    background: rgba(0, 0, 0, 0.555);
                    color: ${theme.colorWhite};
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    font-weight: 100;
                    &__subHead{
                        padding: 1rem 0rem;
                    }
                    &__title{
                        padding: 1rem 0rem;
                        font-weight: 100;
                        font-size: ${theme.font.medium};
                    }
                    &__text{
                        padding: 1rem 0rem;
                        font-weight: 100;
                        line-height: 1.4;
                        font-size: ${theme.font.xsmall};
                    }
                    &__button{
                        display: flex;
                        align-content: center;
                        justify-content: center;
                        color: ${theme.colorWhite};
                        padding: 1.5rem 4.5rem;
                        font-weight: 100;
                        background: transparent;
                        align-self: flex-start;
                        margin: 1rem 0;
                        border: solid 1px ${theme.colorWhite};
                    }
                    .btn-light{
                        background: ${theme.colorPrimary};
                        border: none;
                    }
                }
            }
            .jusLeft{
                grid-template-columns: 2.5fr 3fr;
                background-image: url('/images/moreInfo-2.jpg');
                justify-items: flex-start;
                &-container{
                    grid-column: 1;
                }
            }
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
                <div className="main">
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
                            <li className="navbar-list__item"><a href="/login">Login</a></li>
                            {/* <li className="navbar-list__item">Login</li> */}
                        </ul>

                    </nav>

                    <div className="main-content">
                        <h1 className="main-content-bigText">
                            Diversity and
                    <br /> inclusion
                </h1>
                        <p className="main-content-text">
                            <br /> Learn how D&I is integral to the way we operate.
                </p>
                        <a className="main-content-link" href="/"> LEARN MORE </a>
                    </div>

                </div>
                <div className="topInfo">
                    <h2 className="topInfo-title">Technology development</h2>
                    <div className="topInfo-img" />
                    <div className="topInfo-container">
                        <h3 className="topInfo-container__subHead">IN-HOUSE TECHNOLOGIES</h3>
                        <h2 className="topInfo-container__title">Nonmetallic Solutions</h2>
                        <p className="topInfo-container__text">At Aramco, we are a catalyst for developing technology solutions to address some of the
                        world’s most pressing energy and materials challenges.
                    </p>
                        <button className="topInfo-container__button">Learn More</button>
                    </div>
                </div>

                <div className="glance">
                    <h2 className="glance-title">ARAMCO AT A GLANCE</h2>
                    <div className="glance-container">
                        <h3 className="glance-container__subHead">IN-HOUSE TECHNOLOGIES</h3>
                        <h2 className="glance-container__title">Nonmetallic Solutions</h2>
                        <p className="glance-container__text">At Aramco, we are a catalyst for developing technology 
                    </p>
                        <button className="glance-container__button">Learn More</button>
                    </div>
                    <div className="glance-container">
                        <h3 className="glance-container__subHead">IN-HOUSE TECHNOLOGIES</h3>
                        <h2 className="glance-container__title">Nonmetallic Solutions</h2>
                        <p className="glance-container__text">At Aramco, we are a catalyst technology solutions to
                    </p>
                        <button className="glance-container__button">Learn More</button>
                    </div>
                    <div className="glance-container">
                        <h3 className="glance-container__subHead">IN-HOUSE TECHNOLOGIES</h3>
                        <h2 className="glance-container__title">Nonmetallic Solutions</h2>
                        <p className="glance-container__text">At Aramco, we are a catalyst for technology .
                    </p>
                        <button className="glance-container__button">Learn More</button>
                    </div>
                </div>

                <div className="imageInfo">
                    <div className="imageInfo-container">
                        <h3 className="imageInfo-container__subHead">October 07, 2020</h3>
                        <h2 className="imageInfo-container__title">The Arabian Sun</h2>
                        <p className="imageInfo-container__text">In this week's issue: Aramco’s circular economy in action
                    </p>
                        <button className="imageInfo-container__button btn-light">DOWNLOAD ISSUE (PDF, 7 MB)</button>
                        <button className="imageInfo-container__button">VIEW ALL PUBLICATIONS</button>
                    </div>
                </div>
                <div className="imageInfo jusLeft">
                    <div className="imageInfo-container jusLeft-container">
                        <h2 className="imageInfo-container__title">Our response to COVID-19</h2>
                        <p className="imageInfo-container__text">
                            People are our priority. We are securing the health and safety of our workforce and communities and ensuring
                            the continuity of an energy supply upon which the world relies.
                    </p>
                        <button className="imageInfo-container__button btn-light">FIND OUT MORE</button>
                    </div>
                </div>

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
            </CustomFontSize>
    )
}

export default Home
