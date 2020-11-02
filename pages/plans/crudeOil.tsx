import React from 'react'
import { CustomFontSize, Foot, Head, Plan, Text } from '../../components'
import Nav from '../../components/navbar/nav'
import theme from '../../styles/theme'

const CrudOil = () => {
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
                <Head header="investments" title="Trade on Crude Oil"
                    text="Over 80 years of access to largely conventional petroleum reserves, combined with the application of
                    leading industry " image="/images/headerImage.jpg" />

                <Text text={` 
                Over 80 years of access to largely conventional petroleum reserves, combined with the application of
                leading industry and proprietary technologies, gives us the ability to consistently drive high value at low cost and to operate efficiently 
                across high demand product segments.
                We produce five different grades of crude oil. These are: Arabian Heavy, Arabian Medium, Arabian Light, Arabian Extra Light, 
                and Arabian Super Light. This gives us the flexibility, guided by our outlook and assessment of future refinery requirements in our markets,
                to optimize our crude oil production mix to always meet our customer’s needs
                And we continue to invest in our upstream capabilities to ensure we meet rising demand, well into the future.
                `} />

                <Plan />
                <Foot />
            </CustomFontSize>
        </>
    )
}

export default CrudOil
