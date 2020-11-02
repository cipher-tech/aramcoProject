import React from 'react'
import { CustomFontSize, Foot, Head, InfoImage, NavBar, Text } from '../components'
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
                            grid-template-columns:  repeat(auto-fit, minmax(22rem, 45rem));

                        }
                        &-item{
                            padding: 1rem;
                            display: flex;
                            /* max-width: 45rem; */
                            flex-direction: column;
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
                                cursor: pointer;
                                &:focus{
                                    outline: none;
                                }
                            }
                        }
                    }
                `}</style>
                <div className="main">
                    <NavBar />
                    <Head header="Creating value" title="Products" image="/images/headerImage.jpg"
                        text="Our diverse and expanding range of products create value." />
                </div>
                <Text text={`From transportation fuels to advanced materials, our diverse and expanding range of
                products create value not only for our customers, but also our company, partners,
                and shareholders.`} />
                <div className="product">
                    <div className="product-container">
                        <div className="product-item">
                            <div className="product-item__img">
                                <img src="/images/moreInfo-2.jpg" alt="product img" className="" />
                            </div>
                            <p className="product-item__text">
                                We have built a reputation for unmatched reliability
                                in supplying crude oil to energy markets around the world.
                            </p>
                            <button className="product-item__btn">READ More</button>
                        </div>
                        <div className="product-item">
                            <div className="product-item__img">
                                <img src="/images/moreInfo-2.jpg" alt="product img" className="" />
                            </div>
                            <p className="product-item__text">
                                We have built a reputation for unmatched reliability
                                in supplying crude oil to energy markets around the world.
                        </p>
                            <button className="product-item__btn">READ More</button>
                        </div>
                        <div className="product-item">
                            <div className="product-item__img">
                                <img src="/images/moreInfo-2.jpg" alt="product img" className="" />
                            </div>
                            <p className="product-item__text">
                                We have built a reputation for unmatched reliability
                                in supplying crude oil to energy markets around the world.
                        </p>
                            <button className="product-item__btn">READ More</button>
                        </div>
                    </div>
                </div>
                <InfoImage left title="Join our team"
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