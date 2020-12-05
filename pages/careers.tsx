import React from 'react'
import Link from 'next/link'
import { CustomFontSize, Foot, ImgCard, InfoImage, NavBar, TopInfo, UserNav } from '../components'
import theme from '../styles/theme'
// import gql from 'graphql-tag';
import { withApollo } from '../lib/apolloClient';

const Careers: React.FC = () => {

    return (
        <CustomFontSize>
            <style jsx>{`
            .main{
                grid-column: 1/-1;
                width: 100%;
                font-size: ${theme.font.xxsmall};
                color: ${theme.colorPrimary};   
                &-content{
                    grid-column: 1/-1;
                    background-image: linear-gradient(270deg,transparent,rgba(0,0,0,.4)), url('/images/heroImg3.jpg');
                    background-size: cover;
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
            .whySection{
                grid-column: 1/-1;
                width: 100%;
                display: flex;
                justify-content: center;
                align-items: center;
                margin: 2rem 0;
                flex-direction: column;
                &-container{
                    max-width: 60rem;
                    width: 100%;
                    padding: 2rem 2rem;

                    &__title{
                    font-weight: 100;
                    font-size: ${theme.font.large};
                    width: 100%;
                    text-align: center;
                    color: ${theme.colorPrimary};
                    margin: 1rem;
                    }
                    &__text{
                        color: ${theme.colorDark};
                        text-align: center;
                        font-size: ${theme.font.xsmall};
                    }
                }
                
            }
            .textSection{
                grid-column: 1/-1;
                width: 100%;
                display: flex;
                justify-content: center;
                align-items: center;
                margin: 2rem 0;
                @media only screen and (max-width: ${theme.breakPoints.bpLarge}) {
                    flex-direction: column;
                }
                &-container{
                    width: 100%;
                    padding: 2rem 2rem;

                    &__title{
                    font-weight: 100;
                    font-size: ${theme.font.medium};
                    width: 100%;
                    text-align: left;
                    color: ${theme.colorDark};
                    margin: 1rem;
                    }
                    &__text{
                        color: ${theme.colorDark};
                        font-size: ${theme.font.xsmall};
                        font-weight: 100;
                    }
                    &__btn{
                        display: flex;
                        align-content: center;
                        justify-content: center;
                        color: ${theme.colorPrimary};
                        padding: 1.5rem 4.5rem;
                        font-weight: 100;
                        background: transparent;
                        align-self: flex-start;
                        margin: 1rem 0;
                        border: solid 1px ${theme.colorPrimary};
                    }
                }
                
            }
            
        `}</style>

            <div className="main">
                <UserNav />
                <NavBar />
                <div className="main-content">
                    <p className="main-content-text">
                        <br /> Aramco
                    </p>
                    <h1 className="main-content-bigText">
                        Careers
                    </h1>
                    {/* <a className="main-content-link" href="/overview"> LEARN MORE </a> */}
                </div>

            </div>

            <div className="whySection">
                <div className="whySection-container">
                    <h3 className="whySection-container__title">We are Aramco</h3>
                    <p className="whySection-container__text">
                        Our high-performing employees are drawn by the challenging and
                        rewarding professional opportunities we offer, and by the opportunity to make a
                        positive difference through their work. At Saudi Aramco, we give our people the
                        opportunity to do the work they dreamed of doing and support them in achieving more than they thought possible.
                    </p>
                </div>
            </div>
            <div className="textSection">
                <div className="textSection-container">
                    <h3 className="textSection-container__title">Our energy to the world</h3>
                    <p className="textSection-container__text">
                        We believe in the power of energy to transform lives, enhance
                        communities, advance human progress, and sustain our planet.
                        With global population forecast to increase by two billion over the next
                        25 years, even more energy will be required to meet rising demand.
                        It will take all available sources of energy to fill this need —
                        both legacy and alternative sources. And while alternative energy
                        sources are steadily making advances, they will not be capable of
                        meeting future demand alone. Even as we transition to a low emissions
                        future, hydrocarbon-based energy sources will be counted on to meet
                        the bulk of the world’s energy demand well into the future.
                        We’re committed to driving energy efficiency and addressing the global
                        emissions challenge. And as the world's largest integrated oil and gas
                        company, we believe we are uniquely qualified to make effective contributions to the overall solution.
                    </p>
                </div>
                <div className="textSection-container">
                    <h3 className="textSection-container__title"></h3>
                    <p className="textSection-container__text">
                        We’re a leading producer of the energy and chemicals that drive global
                        commerce and enhance the daily lives of people around the globe.
                        We're explorers at heart. That drive to uncover the next frontier or
                        solve the next great problem lies at the heart of our determination to
                        succeed — and has allowed us to build one of the world’s most important
                        energy and chemicals enterprises. To help ensure optimal future performance,
                        we are focused on delivering greater value, creating additional organizational
                        resilience, enabling continued growth, and developing future-proofing technology solutions.
                        From engineering mega projects to creating industry-changing technologies to launching innovative
                        new products, we have always had a relentless drive to succeed by maximizing the long-term, positive
                        impacts we enable from our resources
                    </p>
                </div>
            </div>

            <ImgCard download title="Explore our career opportunities"
                text="We are a global company with over 70,000 employees. Be part of a diverse global culture, working on 
                challenging projects with dynamic, talented people in a world-class environment.
                Select your region below, and explore the benefits and available opportunities."
                btnLight="DOWNLOAD ISSUE (PDF, 7 MB)"
                btn="VIEW ALL PUBLICATIONS" bgImage="/images/moreInfo-2.jpg"
                btn2="VIEW ALL PUBLICATIONS"
            />

            <div className="textSection">
                <div className="textSection-container">
                    <h3 className="textSection-container__title">A diverse and inclusive company</h3>
                    <p className="textSection-container__text">
                        The dedicated D&I team at Aramco builds on our tradition of celebrating, engaging,
                        and enabling our workforce, supporting the wider strategy to create a vibrant and
                        inclusive company culture for employees in five key areas: Recruitment, Retention,
                        Advancement, Leadership, and D&I Role Models.
                        D&I initiatives are being implemented in all Company work streams, embedding it within
                        employees’ life-cycle phases – from employment to leadership. This way, our diverse and
                        collaborative teams instill our corporate values of integrity, citizenship, accountability,
                        safety, and excellence, allowing them to achieve remarkable results within an ever-changing
                        global market.
                    </p>
                    <button className="textSection-container__btn">LEARN MORE</button>
                </div>
                <div className="textSection-container">
                    <h3 className="textSection-container__title">Investing in our people</h3>
                    <p className="textSection-container__text">
                        Turning great aspirations into reality requires great capabilities. We emphasize
                        continuous development and skill building to drive performance through a wealth of
                        courses, training centers, internships, and mentorship programs.
                        From our newest recruits to our experienced professionals and senior leadership, we offer capacity
                        building programs tailored to help them meet the growing responsibilities linked to our evolving business.
                        Our success is a result of facing challenges head-on with determination, persistence, and innovative thinking,
                        which is made possible through our unique training programs.
                    </p>
                    <button className="textSection-container__btn">LEARN MORE</button>
                </div>
            </div>

            <ImgCard download left title="Explore our career opportunities"
                text="We are a global company with over 70,000 employees. Be part of a diverse global culture, working on 
                challenging projects with dynamic, talented people in a world-class environment.
                Select your region below, and explore the benefits and available opportunities."
                btnLight="DOWNLOAD ISSUE (PDF, 7 MB)"
                btn="VIEW ALL PUBLICATIONS" bgImage="/images/moreInfo-2.jpg"
                btn2="VIEW ALL PUBLICATIONS"
            />

            <InfoImage left title="Our response to COVID-19"
                link="/plans/products"
                text={`People are our priority. We are securing the health and safety of our workforce and communities and ensuring
                    the continuity of an energy supply upon which the world relies.`}
                btnLight="FIND OUT MORE" bgImage="/images/moreInfo-2.jpg"
            />

            <Foot />
        </CustomFontSize>
    )
}

export default withApollo({ ssr: true })(Careers)
