import React from 'react'
import { CustomFontSize, Foot, Head, Plan, StockPlan, Text } from '../../components'
import Nav from '../../components/navbar/nav'
import theme from '../../styles/theme'

const Chemicals = () => {
    return (
        <>
            <style jsx>{`
                .main{
                    grid-column: 1/-1;
                    width: 100%;
                    font-size: ${theme.font.xsmall};
                    color: ${theme.colorPrimary};   
                }
            `}</style>
            <CustomFontSize>
                <Nav />
                <Head header="investments" title="Trade on Chemicals"
                    text="As today’s fastest growing crude oil demand sector, chemicals presents considerable opportunities for future growth and long-term value creation." image="/images/headerImage.jpg" />

                <Text text={` 
               As today’s fastest growing crude oil demand sector, chemicals presents considerable opportunities for future growth and long-term value creation. 
               Our chemicals business currently spans the production of basic chemicals such as aromatics, olefins, and polyolefins to more complex products such 
               as polyols and advanced synthetic rubber. Our chemicals products are found in the many of the items we use every day
               and serve the needs of industries such as packaging, automotive, footwear and appliances.
               Through the development of innovative technologies, capacity expansions in the Kingdom, and new investments overseas,
               we are continuing to invest in the growth of our chemicals business. Capital upgrades are underway to further integrate our refineries
               with petrochemical operations, which would support the production of more complex, higher-value chemicals and specialty products. 
                `} />

                <Plan />
                <StockPlan />
                <Foot />
            </CustomFontSize>
        </>
    )
}

export default Chemicals