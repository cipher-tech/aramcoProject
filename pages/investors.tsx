import React from 'react'
import { Card, CustomFontSize, Foot, Head, InfoImage, NavBar, Plan, Text, UserNav } from '../components'
import theme from '../styles/theme'

const Investors = () => {
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
                        
                    }
                `}</style>
                <div className="main">
                    <UserNav />
                    <NavBar />
                    <Head header="Sabic Aramco" title="Investor overview" image="/images/headerImage.jpg"
                        text="Access our financial reports and ESG content." />
                </div>
                <Text text={`
                    Sabic Aramco is the world’s largest integrated oil and gas company; its upstream operations manages 
                    the Kingdom’s unique hydrocarbon reserve base, optimizing production and maximizing long-term value. 
                    It also operates a strategically integrated global downstream business. Headquartered in the city of Dhahran, 
                    the company operates within the Kingdom and worldwide, and employs around 79,800 people.`} />
                <div className="product">
                    <div className="product-container">
                        <Card image="/images/moreInfo-2.jpg"
                        link="/overview"
                            text="We have built a reputation for unmatched reliability
                        in supplying crude oil to energy markets around the world." />

                        <Card image="/images/cardimg2.png" link="/overview"
                            text="We're the sole supplier of natural gas to Saudi Arabia,
                        the seventh largest natural gas market in the world." />

                        <Card image="/images/cardimg1.jpg" link="/overview"
                            text="We are a preeminent player in the global petrochemicals industry, committed to innovation, growth,
                        and realizing the full potential of every hydrocarbon molecule that we produce." />
                    </div>
                </div>
                <Plan />
                <InfoImage left title="Join our team"
                    subHead="Careers"
                    bgImage="/images/moreInfo-2.jpg"
                    text={`Every day, our multi-national team of more than 70,000 
                        people combines passion, purpose, and performance to achieve 
                        a common objective: unlocking the full potential of the Kingdom’s resources.`}
                    btnLight="FIND OUT MORE"
                />

                <InfoImage left title="Our response to COVID-19"
                    text={`People are our priority. We are securing the health and safety of our workforce and communities and ensuring
                    the continuity of an energy supply upon which the world relies.`}
                    btnLight="FIND OUT MORE" bgImage="/images/productImg2.jpg"
                />
                <Foot />
            </CustomFontSize>
        </>
    )
}

export default Investors