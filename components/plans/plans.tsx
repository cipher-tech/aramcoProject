import React from 'react'
import styled from 'styled-components'
import theme from '../../styles/theme'
// import { Heading } from '..'
import PlanCard from './planCard'

const Container = styled.div`
    /* background: blue; */
    color: #3e416d;
    grid-column: 1/-1;
    display: grid;
    padding: 5rem 0 ;
    /* height: 10rem; */

    &::selection {
        background: rgb(38, 16, 80);
        color: #fff;
        text-shadow: none;
    }
    .section-title{
        h1{
            display: flex;
            width: 100%;
            justify-content: center;
            font-size: ${theme.font.large};
            color: ${theme.colorPrimary};  
            font-size: 35px;
            font-weight: 600;
        }
    }
    .pricing-plans-container{
        margin-top: .729166667in;
        background: white;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));
        border-radius: .041666667in;
        /* font-family: gotham-rounded !important; */
        font-size: 15px;
        font-weight: 300;
        line-height: 1.8;
        -webkit-text-size-adjust: 100%;
        color: #29303b; 
    }
`
export interface IPlan {
    name: string
    range: [number, number]
    rate?: number
    duration?: number
    recommended?: boolean
    text?: string
}
export const planInfo: Array<IPlan> = [
    {
        name: "gas",
        range: [100_000, 2_000_000],
        rate: 35,
        duration: 30
    },
    {
        name: "crude oil",
        range: [100_000, 5_000_000],
        rate: 35,
        duration: 30,
        // recommended: true
    },
    {
        name: " refined products",
        range: [10_000, 1_000_000],
        rate: 25,
        duration: 30
    },
    {
        name: "power systems",
        range: [5_000, 200_000],
        rate: 10,
        duration: 30
    },
    // {
    //     name: " chemicals",
    //     range: [15_000, 500_000],
    //     rate: 10,
    //     duration: 30
    // },
]
 const Plans = (props) => {
    return (
        <Container >

            {/* <Heading dark={props.dark} title="Pricing Plans" /> */}

            <div className="section-title">
                <h1> Trading Plans </h1>
            </div>

            <div className="pricing-plans-container">

                {/* <!-- Plan --> */}
                {planInfo.map((item: IPlan, index) => (
                    <PlanCard key={index} info={item}  />
                )
                )}
               
            </div>
        </Container>
    )
}

export default Plans
