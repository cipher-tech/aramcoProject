import React from 'react'
import { CustomFontSize, Foot, Head, Plan, Text } from '../../components'
import Nav from '../../components/navbar/nav'
import theme from '../../styles/theme'

const PowerSystems = () => {
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
                <Head header="investments" title="Trade on Power Systems"
                    text="Powering our communities with reliable and efficient energy lies at the center of all we do." image="/images/headerImage.jpg" />

                <Text text={` 
                Powering our communities with reliable and efficient energy lies at the center of all we do. From pioneering solutions to modern energy 
                challenges to creating power infrastructure to providing power to industry and families -
                SAPCO consolidates leading power industry entities to meet our customers’ needs.
                We are investing in power entities and infrastructure across the Kingdom to build a robust power sector in our pursuit to lead energy supply
                and services in Saudi Arabia – 
                such as our joint venture investments with industry leaders.
                Our operations span energy supply, infrastructure development and operations, expert consultation,
                and maintenance services. 
                `} />

                <Plan />
                <Foot />
            </CustomFontSize>
        </>
    )
}

export default PowerSystems

