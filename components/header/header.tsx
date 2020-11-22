import React from 'react'
import theme from '../../styles/theme'

const Header = ({ header, title, text, image }) => {
    return (
        <>
            <style jsx>{`
                .main-content{
                    grid-column: 1/-1;
                    height: 50rem;
                    width: 100%;
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    align-items: center;
                    justify-items: center;
                    color: ${theme.colorWhite};
                    &__left{
                        height: 100%;
                        width: 100%;
                        display: flex;
                        flex-direction: column;
                        place-content: center;
                        background-color: ${theme.colorPrimary};
                        padding: 2rem;
                        &-txtContainer{
                            width: max-content;
                            align-self: center;
                        }
                    }
                    &-bigText{
                        align-self: center;
                        font-weight: 400;
                        font-size: ${theme.font.xlarge};
                        span{
                            font-size: calc(${theme.font.xlarge} + 1rem);
                        }
                    }
                    &-text{
                        align-self: center;
                        font-weight: 100;
                        padding-bottom: 2rem;
                        font-size: ${theme.font.xsmall};
                    }
                    &__right{
                        background-image: linear-gradient(270deg,transparent,rgba(0,0,0,.4)), url(${image});
                        background-size: cover;
                        align-self: stretch;
                        width: 100%;
                    }
                }     
            `}</style>
            <div className="main-content">
                <div className="main-content__left">
                    <div className="main-content__left-txtContainer">
                        <h1 className="main-content-bigText">
                            {header}
                            <br />
                            <span>{title}</span>
                        </h1>
                        <p className="main-content-text">
                            <br />
                            {text}
                        </p>
                    </div>
                </div>
                <div className="main-content__right">
                </div>
            </div>
        </>
    )
}

export default Header
