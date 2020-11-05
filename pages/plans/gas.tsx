import React from 'react'
import { CustomFontSize, Foot, Head, Plan, Text } from '../../components'
import Nav from '../../components/navbar/nav'
import theme from '../../styles/theme'

const Gas = () => {
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
                <Head header="investments" title="Trade on gas"
                    text="Our natural gas is a fundamental product used to meet growing domestic energy " image="/images/headerImage.jpg" />

                <Text text={` 
                Our natural gas is a fundamental product used to meet growing domestic energy 
                demand to power industries such as steel, aluminum, and water desalination. It provides an efficient, cleaner burning energy alternative for 
                these activities which helps lower emissions. Since our natural gas production yields large quantities of ethane, natural gas liquids 
                (NGL) and condensate, we supply these as feedstocks for major petrochemical and building materials industries.Providing domestic customers with gas as 
                a source of energy and as a feedstock has other advantages; it allows us to free up more crude oil for export and other high value applications.
                Over the years, we have built a comprehensive gas infrastructure in the Kingdom that ensures timely and efficient delivery to our customers.
                `} />

                <Plan />
                <Foot />
            </CustomFontSize>
        </>
    )
}

export default Gas