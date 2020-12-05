import React from 'react'
import { Card, CustomFontSize, DropAccodion, Foot, Head, InfoImage, NavBar, Text, UserNav } from '../components'
import theme from '../styles/theme'

const Values = () => {
    type overviewInfo = {
        title: string
        image: string
        text: string
    }
  
    const people: overviewInfo[] = [
        {
            title: "Yousef Abdullah Al-Benyan",
            image: "/images/bod2.jpeg",
            text: `Mr. Yousef Abdullah Al-Benyan is the Vice Chairman and CEO of SABIC and a member of the Investment Committee.
                Mr. Al-Benyan holds a Bachelor’s degree in Economics and a Master’s degree in Industrial Management.
                In addition, he has received several specialized courses in Executive Management`
        },
        {
            title: " Mr. Amin H. Nasser",
            image: "/images/bod3.jpeg",
            text: `Mr. Amin H. Nasser has been President and Chief Executive Officer of Saudi Aramco since 2015.
            He has served in a number of leadership positions at Saudi Aramco, including as Senior Vice President for Upstream.
            Mr. Nasser has a Bachelor’s degree in Petroleum Engineering from King Fahd University of Petroleum and Minerals,
            and has completed the Senior Executive Program at Columbia University.`
        },
        {
            title: "HE Mohammed A. Al-Jadaan",
            image: "/images/bod4.jpeg",
            text: `HE Mohammed A. Al-Jadaan is currently Minister of Finance for Saudi Arabia, acting Minister of Economy and 
            Planning and a member of the Saudi Council of Ministers. He also serves as a member of the 
            Council for Economic and Development Affairs of Saudi Arabia. He also serves as a member of a \
            number of international boards, including the Boards of Governors of the International Monetary Fund and the World Bank.
            HE Al-Jadaan has a degree in Islamic Economics from Imam Muhammad bin Saud Islamic University, 
            and a degree in Legal Studies from the Institute of Public Administration, Riyadh.`
        },
        {
            title: "HE Mohammad M. Al-Tuwaijri",
            image: "/images/bod5.jpeg",
            text: `HE Mohammad M. Al-Tuwaijri is an advisor to the Saudi Royal Court in a Minister Rank, 
            a Member of the Council of Economic and Development Affairs, a Board Member of the Public 
            Investment Fund and Chairman of its Investment Committee. He has previously been the Minister of 
            Economy and Planning of Saudi Arabia. Previously, he served as Vice Chairman and CEO of HSBC’s Global 
            Banking & Markets, Middle East & North Africa (MENA), and as Managing Director of JP Morgan Chase Bank, Saudi Arabia.`
        },
        {
            title: "Mr. Andrew N. Liveris",
            image: "/images/bod6.jpeg",
            text: `Mr. Andrew N. Liveris is Chairman of the Board of Lucid Motors, Deputy Chairman of the Board of Worley Parsons, a member 
            of the Board of Directors of IBM Corporation and on the Board of Trustees of the King Abdullah University of Science and Technology.
            He formerly served as Chairman and CEO of The Dow Chemical Company, and was a member of the Board of Directors of DowDuPont Inc. and of Citigroup Inc.`
        },
        {
            title: "HE Yasir Othman Al-Rumayyan",
            image: "/images/bod1.jpeg",
            text: `HE Yasir Othman Al-Rumayyan is the Chairman of Saudi Aramco’s Board of Directors and the Governor of the Public Investment Fund.
            He also serves as an advisor to the General Secretariat of the Council of Ministers, the Chairman of the Saudi Decision Support 
            Center, and a Board member of Uber Technologies, Inc. and ARM Limited.`
        },
    ]
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

                    .faq__main{
                        grid-column: 1/-1;
                        display: grid;
                        font-size: ${theme.font.medium};
                        background: ${theme.colorLight};
                        box-shadow: -0.2rem -0.4rem 20px rgba(255,255,255, .3),
                            .2rem .4rem 10px rgba(0,0,0, .3);
                        height: auto;
                        margin: 2rem 0;
                        align-self: flex-start;
                        &-header{
                            color: ${theme.colorDark};
                            padding: 1.5rem 2.5rem;
                        }

                    }
                `}</style>
                <div className="main">
                    <UserNav />
                    <NavBar />
                    <Head header="" title="Who we are" image="/images/overview.jpg"
                        text="A category all of our own" />
                </div>
                <Text text={`Ranked among the world's largest petrochemicals manufacturers, Aramco is a public company based in Riyadh, Sabic Arabia. 
                    70% of the Company's shares are owned by Sabic , with the remaining 30% publicly traded on the Sabic stock exchange. 
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
                        <div className="faq__main">
                            <h2 className="faq__main-header">More About Us</h2>

                            <DropAccodion title="Our Corporate Governance:" text="Our comprehensive corporate governance structure shapes who we are and how we are seen by the world; more than that, it guides our actions and ensures we uphold the highest professional and ethical business standards.
                            From the diverse experience of our Board and Corporate Management team, to our regular reporting and independent auditing practices, our robust corporate governance ensures transparency, effective oversight and accountability at all levels of operation.
                            Our comprehensive corporate governance structure shapes who we are and how we are seen by the world; more than that, it guides our actions and ensures we uphold the highest professional and ethical business standards.
                            Our corporate management team members possess deep-domain knowledge and expertise across our company and the industry. They embody the company’s high performance culture and uphold our corporate values while leading the attainment of our business objectives." />

                            <DropAccodion profile profileInfo={people} title="Board Of Directors" text="Additional investments allow to increase the number of transactions executed on the Forex market. This will have the effect of increasing the overall profitability of the company. The investors in turn will receive certain percentage of profit depending on the chosen plan and the amount of funds invested." />

                            <DropAccodion title="Ethics And Governance" text="Our ethics and compliance principles are deeply embedded 
                            within our corporate culture and form the basis for a suite of policies, 
                            codes and guidelines that guide and inform our employees as they implement the company’s business strategy.
                            These same components shape our compliance programs which serve as the benchmark against which we measure our 
                            performance and that of our partners — contractors, consultants, suppliers, affiliates and joint ventures within the Kingdom of Saudi Arabia and abroad." />
                        </div>

                    </div>
                </div>
                <InfoImage left title="Planet"
                    subHead="Planet"
                    bgImage="/images/heroImg.jpg"
                    text={`As our business operations expand, so do the initiatives we undertake 
                    to ensure we leave an enduring legacy of protecting the planet we all inhabit..`}
                    download
                    btnLight="FIND OUT MORE"
                />
                <InfoImage title="Careers"
                    download
                    subHead="Join our team"
                    bgImage="/images/heroImg2.jpg"
                    text={`Every day, our multi-national team of more than 70,000 people combines passion, purpose, 
                    and performance to achieve a common objective: unlocking the full potential of the Kingdom’s resources.`}
                    btnLight="FIND OUT MORE"
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