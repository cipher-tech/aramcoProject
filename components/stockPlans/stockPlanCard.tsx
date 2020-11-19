import React, { useState } from 'react'
import styled from 'styled-components'
import theme from '../../styles/theme'
import IPlan  from './stockPlans'
// import { FormValidator } from '../../formValidator'
// import { StyledInput } from '../styledComponents'
// import { ValidationMessage } from '../../validationMessage'
// import lock from "../../images/svgIcons/lock.svg"
// import { PopUpMessage } from '..'
// import Axios from 'axios'
// import routes from '../../navigation/routes'

const Container = styled.div`
    box-shadow: .1rem .2rem 1.3rem rgba(0,0,0,.1),
    -.2rem -.1rem 1.3rem rgba(150,150,150,.1);
    display: flex;
    align-content: stretch;
    .pricing-plan{
        justify-content: space-between;
        display: flex;
        flex-direction: column;
        padding-left: .364583333in;
        padding-top: .364583333in;
        padding-right: 12.75pt;
        padding-bottom: .364583333in;
        position: relative;
        flex: 1;

        h3{
            font-size: 1.375pc;
            font-weight: 600;
            line-height: 1.4;
            margin: 0 0 15px 0;
            color: ${theme.colorPrimary};
            text-transform: capitalize;
            text-transform: capitalize;
        }
        &--info{
            font-size: 1.175pc;
            text-transform: capitalize;
            margin: 0;
            &-range{
                font-size: 1.375pc;
                font-weight: 600;
                color: ${theme.colorPrimary};
            }
        }
        .uk-switcher{
            margin: 0;
            padding:0;
            list-style: none;

            .uk-active{
                display: list-item;
                text-align: -webkit-match-parent;
            }
            .pricing-plan-label{
                margin: 16.5pt 0 0 0;
                padding: 11.25pt;
                line-height: .25in;
                text-align: center;
                font-size: 18px;
                border-radius: 3pt;
                background: #f6f6f6;

                strong{
                    line-height: 1.87pc;
                    margin-right: 3.75pt;
                    font-weight: 700;
                    font-size: 24pt;
                }
            }
        }
        .pricing-plan-features{
            strong{
                margin-top: .3125pc;
                display: inline-block;
                line-height: 18pt;
                margin-bottom: 3.75pt;
                font-weight: 600;
                color: #333;
            }
            ul{
                margin: 0;
                padding: 0;

                li{
                    padding: 2.25pt 0 2.25pt 0;
                    line-height: .25in;
                    display: block;
                }
            }
        }
        .btns{
            font-weight: 600;
            border-radius: 5px;
            line-height: 28px;
            text-align: center;
            padding: 4.5pt 0 ;
            margin: .9375pc 0 0 0;
            display: inline-block;
            box-shadow: 0 3pt 12px rgba(102, 103, 107, .1);
            border: 1.125pt solid #3e416d;
            width: 100%;
            text-decoration: none;
            cursor: pointer;
            color: #3e416d;

        }
    }
    .recommended{
        box-shadow: 0 0pt 33.75pt rgba(0, 0, 0, .09);
        margin: 2rem 11.25pt 0 11.25pt;
        padding: .364583333in 26.25pt;
        flex: 1;
        position: relative;
        .recommended-badge{
            position: absolute;
            color: #fff;
            background: #3e416d;
            text-align: center;
            left:0;
            top: -.46875in;
            line-height: 2.8125pc;
            font-weight: 600;
            height: 45px;
            width: 100%;
            border-radius: 4px .041666667in 0 0;
        }
    }
`

// interface props: Array<IPlan> {
//     info: 
// }
const StockPlanCard = ({ info }) => {
    const [showInput, setShowInput] = useState(false)
    // const [amount, setAmount] = useState("")
    // const [popUpMessage, setPopUpMessage] = useState(null)
    // const [showpopUpMessage, setShowPopUpMessage] = useState(false)
    // const [hasError, setHasError] = useState(false)


    const submit = async () => {
        const id = JSON.parse(localStorage.getItem("userInfo")).user.id
    }
    const toggleShowInput = () => {
        setShowInput(!showInput)
    }
    return ( 
        <Container>
            <div className={`pricing-plan ${info.recommended}`}>
                {/* {showpopUpMessage ? <PopUpMessage error={hasError}> {popUpMessage} <span onClick={() => setShowPopUpMessage(false)}>✖</span> </PopUpMessage> : null} */}
                {info.recommended ? <div className="recommended-badge">Recommended</div> : ""}
                <h3>{info.name}</h3>
                <p className="pricing-plan--info"> 
                    {info.name} <br/>
                    <span className="pricing-plan--info-range">
                         ${`${info.range[0]} - $${info.range[1]}`} 
                    </span> makes
                </p>
                <ul className="uk-switcher" id="change-plan">
                    <li>
                        <div className="pricing-plan-label">{info.text}</div>
                    </li>

                </ul>
                <div className="pricing-plan-features">
                    {/* <strong>Features of the {info.name} Plan</strong> */}
                    <ul>
                        {/* <li>
                            Calculation procedures: {info.range[0]} multiplied by {(info.rate).toFixed(1)}% will give you
                            ${(info.range[0] * (info.rate/100) ).toFixed(1)}, which will subsequently earn you 
                            ${+info.range[0] + ( info.range[0] * (info.rate/100) )} every {info.duration} {info.duration === 1? `day`: "days"}.
                        </li> */}
                        {/* <li>Exercise files </li>
                            <li>Interactive tools</li>
                            <li>On-demand learning</li> */}
                    </ul>
                </div>
                <button onClick={toggleShowInput} className="btns">Purchase Plan</button>

                {/* {showInput ? <FormValidator buttonClass="rate-summit"
                classname=" rate-div "
                data={state} rules={rules}
                submit={submit}>
                <StyledInput name="amount" updatedValue={setAmount} value={state.amount}
                    placeHolder="Amount" type="number" icon={lock} />
                <ValidationMessage field="amount" />
            </FormValidator> : ""} */}
            </div>
        </Container>
    )
}

export default StockPlanCard
