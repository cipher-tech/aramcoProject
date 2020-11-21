import Link from 'next/link'
import React from 'react'
import theme from '../../styles/theme'

const TopInfo = () => {
    return (
        <>
            <style jsx>{`
                .topInfo{
                    grid-column: 2/10;
                    max-width: 100%;
                    display: grid;
                    grid-template-columns: 3fr 2fr;
                    justify-content: space-between;
                    margin: 2rem 0;
                    @media only screen and (max-width: ${theme.breakPoints.bpLarge}) {
                        grid-column: 1/-1;
                    };
                    @media only screen and (max-width: ${theme.breakPoints.bpSmall}) {
                        grid-template-columns: 1fr;
                    } 
                    &-title{
                        grid-column: 1/-1;
                        justify-self: flex-start;
                        padding: 1rem 1rem;
                        font-size: ${theme.font.large};
                        color: ${theme.colorGrey};
                    }
                    &-img{
                        align-self: stretch;
                        width: 100%;
                        background-image: linear-gradient(270deg,transparent,rgba(0,0,0,.4)), url('/images/infoImg.jpg');
                        background-repeat: no-repeat;
                        background-size: cover;
                        @media only screen and (max-width: ${theme.breakPoints.bpSmall}) {
                            display: none;
                        } 
                    }
                    &-container{
                        padding: 2rem;
                        background: ${theme.colorPrimary};
                        color: ${theme.colorWhite};
                        display: flex;
                        flex-direction: column;
                        font-weight: 100;
                        &__subHead{
                            padding: 1rem 0rem;
                        }
                        &__title{
                            padding: 1rem 0rem;
                            font-weight: 100;
                            font-size: ${theme.font.medium};
                        }
                        &__text{
                            padding: 1rem 0rem;
                            font-weight: 100;
                            line-height: 1.4;
                            font-size: ${theme.font.xsmall};
                        }
                        &__button{
                            display: flex;
                            align-content: center;
                            justify-content: center;
                            color: ${theme.colorWhite};
                            padding: 1.5rem 2.5rem;
                            font-weight: 100;
                            background: transparent;
                            align-self: flex-start;
                            border: solid 1px ${theme.colorWhite};
                        }
                    }
                }    
        `}</style>
            <div className="topInfo">
                <h2 className="topInfo-title">Technology development</h2>
                <div className="topInfo-img" />
                <div className="topInfo-container">
                    <h3 className="topInfo-container__subHead">IN-HOUSE TECHNOLOGIES</h3>
                    <h2 className="topInfo-container__title">Nonmetallic Solutions</h2>
                    <p className="topInfo-container__text">At Aramco, we are a catalyst for developing technology solutions to address some of the
                    world’s most pressing energy and materials challenges.
                    </p>
                    <Link href="/overview" >
                        <a className="topInfo-container__button">Learn More </a>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default TopInfo
