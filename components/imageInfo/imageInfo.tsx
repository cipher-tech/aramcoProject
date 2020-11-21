import Link from 'next/link'
import React from 'react'
import theme from '../../styles/theme'

const ImageInfo = (props) => {
    return (
        <>
            <style jsx>{`
                .imageInfo{
                    grid-column: 1/-1;
                    height: 49rem;
                    max-width: 100%;
                    width: 100%;
                    display: grid;
                    grid-template-columns: 3fr 2.5fr;
                    margin: 0rem 0;
                    align-self: stretch;
                    justify-items: flex-end;
                    background-image: url(${props.bgImage});
                    background-repeat: no-repeat;
                    background-size: cover;
                    &:nth-child(2){
                        justify-items: flex-start;
                    }
                    &-container{
                        grid-column: 2;
                        padding: 2rem;
                        width: 100%;
                        background: rgba(0, 0, 0, 0.555);
                        color: ${theme.colorWhite};
                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                        font-weight: 100;
                        @media only screen and (max-width: ${theme.breakPoints.bpSmall}) {
                            grid-column: 1/-1;
                        } 
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
                            padding: 1.5rem 4.5rem;
                            font-weight: 100;
                            background: transparent;
                            align-self: flex-start;
                            margin: 1rem 0;
                            border: solid 1px ${theme.colorWhite};
                        }
                        .btn-light{
                            background: ${theme.colorPrimary};
                            border: none;
                        }
                    }
                }
                .jusLeft{
                    grid-template-columns: 2.5fr 3fr;
                    background-image: url(${props.bgImage});
                    justify-items: flex-end;
                    &:nth-child(1){
                        justify-items: flex-start;
                    }
                    .imageInfo-container{
                        grid-column: 1;
                        @media only screen and (max-width: ${theme.breakPoints.bpSmall}) {
                            grid-column: 1/-1;
                        } 
                    }
                }
            `}</style>
            <div className={`imageInfo ${props.left ? " jusLeft" : ""}`}>
                <div className="imageInfo-container">
                    {props.subHead && <h3 className="imageInfo-container__subHead">{props.subHead}</h3>}
                    {props.title && <h2 className="imageInfo-container__title"> {props.title} </h2>}
                    {props.text && <p className="imageInfo-container__text">{props.text}</p>}
                    {props.btnLight &&
                        <Link href={props.link || "/plans/products"}>
                            <button className="imageInfo-container__button btn-light"> {props.btnLight} </button>
                        </Link>}
                    {props.btn &&
                        <Link href="/overview">
                            <button className="imageInfo-container__button"> {props.btn} </button>
                        </Link>
                    }
                </div>
            </div>

        </>
    )
}

export default ImageInfo
