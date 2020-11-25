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
                        
                    }
                `}</style>
                <div className="main">
                    <UserNav />
                    <NavBar />
                    <Head header="" title="Who we are" image="/images/overview.jpg"
                        text="A category all of our own" />
                </div>
                <Text text={`Ranked among the world's largest petrochemicals manufacturers,SABIC is a public company based in Riyadh, Sabic Arabia. 
                    70% of the Company's shares are owned by Sabic Aramco, with the remaining 30% publicly traded on the Sabic stock exchange. 
                    Aramco previously announced the successful completion of its share acquisition of a 70% stake in Sabic Basic 
                    Industries Corporation (SABIC) from the Public Investment Fund (PIF), 
                    the sovereign wealth fund of Sabic Arabia, for a total purchase price of SAR 259.125 billion (US$ 69.1 
                    equating to SAR 123.39 price per share. equating to SAR 123.39 price per share.The merge saw that a new company SABIC-ARAMCO emerged and this made the 
                    MBS declare that Aramco would be privatized with a goal of issuing 5 percent of its equity to the public to raise $100 billion. 
                    The funds would be earmarked for transfer to the PIF to use in its investment strategy of buying high-tech, non-oil related firms locally and 
                    overseas to diversify the Sabic economy. The privatization effort turned out to be much more complicated than expected, 
                    as the financial markets insisted that Aramco provide full disclosure of all its activities, assets, liabilities, profits, 
                    and losses, a mammoth task for a company with sales of over $355 billion, numerous joint ventures, and without any previously published data. 
                    This prospectus provides investors with audited statements on financial results and on oil reserves and goes a 
                    long way towards satisfying investors.

                    In late November 2019, Sabic Aramco issued a second prospectus with updated information on its own figures and those of SABIC. 
                    It then decided to limit the IPO to 1.5 percent of the capital, down from the original 5 percent announced in 2016. Furthermore, 
                    Sabic Aramco decided to float shares only on the Tadawul stock market in Riyadh. This decision came on the heels of intense criticism of the Kingdom 
                    in the international press for numerous issues, ranging from a perceived overvaluation of the company to the country’s human rights record. 
                    The placement of shares proceeded on the Tadawul exchange at the price of SAR32 ($8.53) per share. The company successfully raised $25.6 billion,
                    but it will not attempt to raise more from the international markets for the time being.`} />
                <div className="product">
                    <div className="product-container">
                        <Card image="/images/cardimg1.jpg"
                            text="We have built a reputation for unmatched reliability
                        in supplying crude oil to energy markets around the world." />

                        <Card image="/images/cardimg2.png"
                            text="We're the sole supplier of natural gas to Sabic Arabia,
                        the seventh largest natural gas market in the world." />

                        <Card image="/images/cardimg4.jpg"
                            text="We are a preeminent player in the global petrochemicals industry, committed to innovation, growth,
                        and realizing the full potential of every hydrocarbon molecule that we produce." />
                    </div>
                </div>
                <InfoImage left title="Planet"
                    subHead="Planet"
                    bgImage="/images/heroImg.jpg"
                    text={`As our business operations expand, so do the initiatives we undertake 
                    to ensure we leave an enduring legacy of protecting the planet we all inhabit..`}
                    btnLight=""
                />
                <InfoImage title="Careers"
                    subHead="Join our team"
                    bgImage="/images/heroImg2.jpg"
                    text={`Every day, our multi-national team of more than 70,000 people combines passion, purpose, 
                    and performance to achieve a common objective: unlocking the full potential of the Kingdom’s resources.`}
                    btnLight=""
                />
                {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" version="1.1" role="img" aria-labelledby="at-svg-email-9" style={{ fill: "rgb(255, 255, 255)", width: "24px", height: "24px" }}>
                    <title id="at-svg-email-9">Email</title>
                    <g>
                        <g fill-rule="evenodd"></g>
                        <path d="M27 22.757c0 1.24-.988 2.243-2.19 2.243H7.19C5.98 25 5 23.994 5 22.757V13.67c0-.556.39-.773.855-.496l8.78 5.238c.782.467 1.95.467 2.73 0l8.78-5.238c.472-.28.855-.063.855.495v9.087z" />
                        <path d="M27 9.243C27 8.006 26.02 7 24.81 7H7.19C5.988 7 5 8.004 5 9.243v.465c0 .554.385 1.232.857 1.514l9.61 5.733c.267.16.8.16 1.067 0l9.61-5.733c.473-.283.856-.96.856-1.514v-.465z" />
                    </g>
                </svg> */}
                <Foot />
            </CustomFontSize>
        </>
    )
}

export default Values