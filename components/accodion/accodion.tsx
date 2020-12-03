import React, { useState } from 'react'

import styled from 'styled-components'
import { useSpring, animated } from 'react-spring'
import theme from '../../styles/theme'

const Container = styled.div`
    grid-column: 1/-1;
    align-items: center;
    display: grid;
    /* height: 20rem; */
    align-self: center;
    justify-self: flex-start;
    place-self: flex-start;
    width: 100%;
    .faq{
        display: grid;
        justify-self: flex-start;
        align-self: center;
        grid-column: 1/-1;
        width: 100%;
        background: ${theme.colorLight};
       
        &__title{
            display: flex;
            width: 100%;
            align-content: center;
            justify-content: space-between;
            padding: 2rem 3.5rem;
            background: #cdcff618;
            color: ${theme.colorPrimary};
            font-size: ${theme.font.medium};

        }
        &__body{
            color: ${theme.colorDark};
            /* padding: 4rem 15%; */
            line-height: 1.5;
            font-size: ${theme.font.xsmall};
            overflow: hidden;
            overflow-y: scroll;
            /* height: 0px; */
            &-info{
                display: flex;
                border-bottom: dashed 3px ${theme.colorDark};
                margin: 1rem 0;
                padding: 1rem 0;
                @media only screen and (max-width: ${theme.breakPoints.bpLarge}) {
                   flex-direction: column;
                   justify-content: center;
                } 
                &--img{
                    align-self: center;
                    height: 190px;
                    /* object-fit: contain; */
                    width: 100%;
                    max-width: 30rem;
                    @media only screen and (max-width: ${theme.breakPoints.bpLarge}) {
                        align-self: center;
                        margin: 1rem 0;
                    } 
                }
                &--text{
                    align-self: center;
                    text-align: left;
                    padding: 0 1.5rem;
                    &__span{
                        display: block;
                        color: ${theme.colorPrimary};
                        width: 100%;
                        text-align: center;
                    }
                }
            }
        }
    }
`
export default function Accodion(props) {
    const [toggleBody, setToggleBody] = useState(false)

    const spring = useSpring({
        height: toggleBody ? "350px" : "0px",
        padding: toggleBody ? '30px' : "0px",
    })
    return (
        <Container>
            <div className="faq">
                <p className="faq__title" onClick={() => setToggleBody(!toggleBody)}>
                    <span className="faq__title-text">
                        {props.title}
                    </span>
                    <span className="faq__title-icon">+</span>
                </p>
                <animated.div style={{ height: spring.height, padding: spring.padding }} className="faq__body">
                    {
                        !props.profile ? props.text :
                            props.profileInfo.map((item, index) => (
                                <div key={index} className="faq__body-info">
                                    <img className="faq__body-info--img" src={item.image || "/images/bod2.jpeg"} alt="icon" />
                                    <p className="faq__body-info--text">
                                        <span className="faq__body-info--text__span">{item.title} </span>
                                        <br />
                                        {item.text}
                                    </p>
                                </div>
                            ))
                    }

                </animated.div>
            </div>
        </Container >
    )
}
