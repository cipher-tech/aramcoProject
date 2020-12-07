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
                            grid-template-columns:  repeat(auto-fit, minmax(38rem, 1fr));
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
                        <Card title="Invest on gas" download={true} collapsible image="/images/moreInfo-2.jpg"
                        link="/overview"
                            text="Our natural gas is a fundamental product used to meet growing domestic energy 
                            demand to power industries such as steel, aluminum, and water desalination. It provides an efficient, cleaner burning energy alternative for 
                            these activities which helps lower emissions. Since our natural gas production yields large quantities of ethane, natural gas liquids 
                            (NGL) and condensate, we supply these as feedstocks for major petrochemical and building materials industries.Providing domestic customers with gas as 
                            a source of energy and as a feedstock has other advantages; it allows us to free up more crude oil for export and other high value applications.
                            Over the years, we have built a comprehensive gas infrastructure in the Kingdom that ensures timely and efficient delivery to our customers." />

                        <Card title="Invest on crude oil" download={true} collapsible image="/images/cardimg2.png" link="/overview"
                            text="Over 80 years of access to largely conventional petroleum reserves, combined with the application of
                            leading industry and proprietary technologies, gives us the ability to consistently drive high value at low cost and to operate efficiently 
                            across high demand product segments.
                            We produce five different grades of crude oil. These are: Arabian Heavy, Arabian Medium, Arabian Light, Arabian Extra Light, 
                            and Arabian Super Light. This gives us the flexibility, guided by our outlook and assessment of future refinery requirements in our markets,
                            to optimize our crude oil production mix to always meet our customer’s needs
                            And we continue to invest in our upstream capabilities to ensure we meet rising demand, well into the future." />

                        <Card title="Invest on refined products" download={true} collapsible image="/images/cardimg1.jpg" link="/overview"
                            text="The company's downstream operations began in 1945 when the Ras Tanura refinery started operations and expanded with the acquisition of an in-Kingdom 
                            refining network from Samarec in 1993. Today, we produce a full slate of quality fuels and lubricants that meet or exceed international quality standards.
                            Our principle refined products include: LPG, naphtha, gasoline, jet fuel/kerosene, diesel, fuel oil, and asphalt. 
                            Our wholly-owned and joint venture refineries are calibrated to use our crude oil grades, gives us dedicated outlets for our crude oil, 
                            and delivery of refined our refined products to the downstream markets we serve.We own and operate three domestic refineries, with a fourth under
                            construction, to supply gasoline, diesel and other products to local 
                            customers and consumers. In addition, we participate in five refineries with international partners in the Kingdom, four of which have integrated chemicals
                            manufacturing capability." />

                        <Card title="Invest on power systems" download={true} collapsible image="/images/heroImg3.jpg" link="/overview"
                            text="Powering our communities with reliable and efficient energy lies at the center of all we do. From pioneering solutions to modern energy 
                            challenges to creating power infrastructure to providing power to industry and families -
                            SAPCO consolidates leading power industry entities to meet our customers’ needs.
                            We are investing in power entities and infrastructure across the Kingdom to build a robust power sector in our pursuit to lead energy supply
                            and services in Saudi Arabia – 
                            such as our joint venture investments with industry leaders.
                            Our operations span energy supply, infrastructure development and operations, expert consultation,
                            and maintenance services. " />

                        <Card title="Invest on chemicals" download={true} collapsible image="/images/productImg1.jpg" link="/overview"
                            text="As today’s fastest growing crude oil demand sector, chemicals presents considerable opportunities for future growth and long-term value creation. 
                            Our chemicals business currently spans the production of basic chemicals such as aromatics, olefins, and polyolefins to more complex products such 
                            as polyols and advanced synthetic rubber. Our chemicals products are found in the many of the items we use every day
                            and serve the needs of industries such as packaging, automotive, footwear and appliances.
                            Through the development of innovative technologies, capacity expansions in the Kingdom, and new investments overseas,
                            we are continuing to invest in the growth of our chemicals business. Capital upgrades are underway to further integrate our refineries
                            with petrochemical operations, which would support the production of more complex, higher-value chemicals and specialty products" />

                        <Card title="petrochemicals" download={true} collapsible image="/images/productImg3.jpg" link="/overview"
                            text="We are a preeminent player in the global petrochemicals industry, committed to innovation, growth,
                        and realizing the full potential of every hydrocarbon molecule that we produce." />
                    </div>
                </div>
                <Plan />
                <InfoImage left title="Join our team"
                    link={"/careers"}
                    subHead="Careers"
                    bgImage="/images/moreInfo-2.jpg"
                    text={`Every day, our multi-national team of more than 70,000 
                        people combines passion, purpose, and performance to achieve 
                        a common objective: unlocking the full potential of the Kingdom’s resources.`}
                    btnLight="FIND OUT MORE"
                />

                <InfoImage left title="Our response to COVID-19" link={"/images/pdfImage.jpg"}
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