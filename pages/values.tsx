import Link from 'next/link'
import React from 'react'
import { Card, CustomFontSize, Foot, Head, InfoImage, NavBar, Text, UserNav } from '../components'
import theme from '../styles/theme'

const Values = () => {
    return (
        <>
            <CustomFontSize>
                <style jsx>{`
                    .main{
                        grid-column: 1/-1;
                        width: 100%;
                        font-size: ${theme.font.xxsmall};
                        color: ${theme.colorPrimary};   
                    }
                    
                    .product{
                        grid-column: 1/-1;
                        justify-items: center;
                        display: grid;
                        padding: 1rem 2rem;
                        &-container{
                            display: grid;
                            width: 100%;
                            justify-content: space-between;
                            grid-template-columns:  repeat(auto-fit, minmax(29rem, 1fr));

                        }
                        &-item{
                            padding: 1rem;
                            display: flex;
                            /* max-width: 45rem; */
                            flex-direction: column;
                            justify-content: space-between;
                            &__img{
                                height: 24rem;
                                max-width: 45rem;
                                overflow: hidden;
                                img{
                                    object-fit: cover;
                                    width: 100%;
                                    height: 100%;
                                }
                            }
                            &__text{
                                text-align: center;
                                width: 90%;
                                align-self: center;
                                justify-self: center;
                                font-size: ${theme.font.medium};
                                padding: 1rem 1rem 3rem;
                                color: ${theme.colorGrey};
                                font-weight: 100;
                            }
                            &__btn{
                                width: 100%;
                                padding: 1.5rem;
                                background: ${theme.colorPrimary};
                                color: ${theme.colorWhite};
                                border: none;
                                font-size: ${theme.font.small};
                                cursor: pointer;
                                &:focus{
                                    outline: none;
                                }
                            }
                        }
                    }
                `}</style>
                <div className="main">
                    <UserNav />
                    <NavBar />
                    <Head header="Creating value" title="Products" image="/images/headerImg.jpg"
                        text="Our diverse and expanding range of products create value." />
                </div>
                <Text text={`From transportation fuels to advanced materials, our diverse and expanding range of
                products create value not only for our customers, but also our company, partners,
                and shareholders.`} />
                <div className="product">
                    <div className="product-container">
                        <Card title="reputation" download={true} image="/images/oil.jpg"
                            link="/overview"
                            text="We have built a reputation for unmatched reliability
                            in supplying crude oil to energy markets around the world." />

                        <Card title="natural gas" download={true} image="/images/productImg2.jpg"
                            link="/overview"
                            text="We're the sole supplier of natural gas to Saudi Arabia,
                            the seventh largest natural gas market in the world." />

                        <Card title="committed" download={true} image="/images/productImg3.jpg"
                            link="/overview"
                            text="We are a preeminent player in the global petrochemicals industry, committed to innovation, growth,
                            and realizing the full potential of every hydrocarbon molecule that we produce." />

                    </div>
                </div>
                <InfoImage left title="Join our team" 
                    link={"/careers"}
                    subHead="Careers"
                    bgImage="/images/moreInfo-2.jpg"
                    text={`Every day, our multi-national team of more than 70,000 
                        people combines passion, purpose, and performance to achieve 
                        a common objective: unlocking the full potential of the Kingdom’s resources.`}
                    btnLight="FIND OUT MORE"
                />
                <Foot />
            </CustomFontSize>
        </>
    )
}

export default Values