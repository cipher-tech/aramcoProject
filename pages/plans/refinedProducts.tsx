import React from 'react'
import { CustomFontSize, Foot, Head, Plan, Text } from '../../components'
import Nav from '../../components/navbar/nav'
import theme from '../../styles/theme'

const RefinedProducts = () => {
    return (
        <>
            <style jsx>{`
                .main{
                    grid-column: 1/-1;
                    width: 100%;
                    font-size: ${theme.font.xxsmall};
                    color: ${theme.colorPrimary};   
                }
            `}</style>
            <CustomFontSize>
                <Nav />
                <Head header="investments" title="Trade on Refined Products"
                    text="The company's downstream operations began in 1945 when the Ras Tanura refinery started operations and expanded with the acquisition of an in-Kingdom 
                    refining network from Samarec in 1993. " image="/images/headerImage.jpg" />

                <Text text={` 
                The company's downstream operations began in 1945 when the Ras Tanura refinery started operations and expanded with the acquisition of an in-Kingdom 
                refining network from Samarec in 1993. Today, we produce a full slate of quality fuels and lubricants that meet or exceed international quality standards.
                Our principle refined products include: LPG, naphtha, gasoline, jet fuel/kerosene, diesel, fuel oil, and asphalt. 
                Our wholly-owned and joint venture refineries are calibrated to use our crude oil grades, gives us dedicated outlets for our crude oil, 
                and delivery of refined our refined products to the downstream markets we serve.We own and operate three domestic refineries, with a fourth under
                construction, to supply gasoline, diesel and other products to local 
                customers and consumers. In addition, we participate in five refineries with international partners in the Kingdom, four of which have integrated chemicals
                manufacturing capability.
                `} />

                <Plan />
                <Foot />
            </CustomFontSize>
        </>
    )
}

export default RefinedProducts
