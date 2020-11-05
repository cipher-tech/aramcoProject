import React from 'react'
import styled from 'styled-components'
import theme from '../../styles/theme'
// import { Heading } from '..'
import PlanCard from './stockPlanCard'

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
    range?: [number, number]
    recommended?: boolean
    type?: string
    text?: string
}
export const stockInfo: Array<IPlan> = [
    {
        name: "large cap stock",
        range: [1_000_000, Infinity],
        type: "stock",
        text: "buy large stock cap stocks (start price) $1,000,000 "
    },
    {
        name: "Small cap stock",
        range: [100_000, Infinity],
        type: "stock",
        text: "Buy small cap stocks (start price) $100,000"
        // recommended: true
    },
    {
        name: " mid cap stocks",
        range: [50_000, Infinity],
        type: "stock",
        text: "buy mid cap stocks (start price) 50,000"
    },
    {
        name: "blue chip stocks",
        range: [1_000, Infinity],
        type: "stock",
        text: `blue chip stocks (Berkshire Hathaway, AbbVie, Alibaba Group Holding,Johnson & Johnson,Facebook,
            British American Tobacco,McDonald's Corp,Duke Energy Corp)-(start price) $1000`
    },
]

export const sharesInfo: Array<IPlan> = [
    {
        name: "redeemable shares",
        range: [100_000, Infinity],
        type: "share",
        text: "buy redeemable shares (start price) 100,000"
    },
    {
        name: "Equity shares",
        range: [1_000_000, Infinity],
        type: "share",
        text: "buy Equity shares (start price) 1,000,000"
    },
]
const StockPlans = (props) => {
    return (
        <Container >

            {/* <Heading dark={props.dark} title="Pricing Plans" /> */}

            <div className="section-title">
                <h1> Stocks Plans </h1>
            </div>

            <div className="pricing-plans-container">

                {/* <!-- Plan --> */}
                {stockInfo.map((item: IPlan, index) => (
                    <PlanCard key={index} info={item} />
                )
                )}

            </div>
            <div className="section-title">
                <h1> Shares Plans </h1>
            </div>

            <div className="pricing-plans-container">

                {/* <!-- Plan --> */}
                {sharesInfo.map((item: IPlan, index) => (
                    <PlanCard key={index} info={item} />
                )
                )}

            </div>
        </Container>
    )
}

export default StockPlans
