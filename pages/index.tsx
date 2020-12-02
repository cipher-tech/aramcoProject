import React from 'react'
import Link from 'next/link'
import { CustomFontSize, Foot, InfoImage, NavBar, TopInfo, UserNav } from '../components'
import theme from '../styles/theme'
// import gql from 'graphql-tag';
import { withApollo } from '../lib/apolloClient';
// import { useQuery } from '@apollo/client';

// const ALL_CHARACTERS = gql`
//     {
//         helloWorld
//     }
// `;
const Home: React.FC = () => {
    // const { loading, error, data } = useQuery(ALL_CHARACTERS);
    // if (error) return <h1>Error</h1>;
    // if (loading) return <h1>Loading...</h1>;
    // console.log(data);

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
            
        `}</style>

            <div className="main">
                <UserNav />
                <NavBar />
                <div className="main-content">
                    <h1 className="main-content-bigText">
                        Diversity and
                    <br /> inclusion
                </h1>
                    <p className="main-content-text">
                        <br /> Learn how D&I is integral to the way we operate.
                </p>
                    <a className="main-content-link" href="/overview"> LEARN MORE </a>
                </div>

            </div> 

            <TopInfo />
            
            <div className="glance">
                <h2 className="glance-title">ARAMCO AT A GLANCE</h2>
                <div className="glance-container">
                    <h3 className="glance-container__subHead">IN-HOUSE TECHNOLOGIES</h3>
                    <h2 className="glance-container__title">Nonmetallic Solutions</h2>
                    <p className="glance-container__text">At Aramco, we are a catalyst for developing technology
                    </p>
                    <Link  href="/pdf/aramcoPdf.pdf">
                        <a download className="glance-container__button">Learn More</a>
                    </Link>
                    
                </div>
                <div className="glance-container">
                    <h3 className="glance-container__subHead">IN-HOUSE TECHNOLOGIES</h3>
                    <h2 className="glance-container__title">Nonmetallic Solutions</h2>
                    <p className="glance-container__text">At Aramco, we are a catalyst technology solutions to
                    </p>
                     <Link href="/pdf/aramcoPdf.pdf">
                        <a download className="glance-container__button">Learn More</a>
                    </Link>
                </div>
                <div className="glance-container">
                    <h3 className="glance-container__subHead">IN-HOUSE TECHNOLOGIES</h3>
                    <h2 className="glance-container__title">Nonmetallic Solutions</h2>
                    <p className="glance-container__text">At Aramco, we are a catalyst for technology .
                    </p>
                     <Link href="/pdf/aramcoPdf.pdf">
                        <a download className="glance-container__button">Learn More</a>
                    </Link>
                </div>
            </div>

            <InfoImage  download subHead="October 07, 2020" title="The Arabian Sun"  
                text="In this week's issue: Aramco’s circular economy in action"
                btnLight="DOWNLOAD ISSUE (PDF, 7 MB)" 
                btn="VIEW ALL PUBLICATIONS" bgImage="/images/moreInfo-2.jpg"
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

export default withApollo({ ssr: true })(Home)
