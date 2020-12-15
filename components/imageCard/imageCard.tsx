import Link from 'next/link'
import React from 'react'
import theme from '../../styles/theme'

const ImageCard = (props) => {
    return (
        <>
            <style jsx>{`
                .imageInfo{
                    grid-column: 1/-1;
                    max-width: 100%;
                    width: 100%;
                    display: flex;
                    margin: 0rem 0;
                    justify-items: flex-end;
                    padding: 1rem 2.5rem;
                    &:nth-child(2){
                        justify-items: flex-start;
                    }
                    @media only screen and (max-width: ${theme.breakPoints.bpLarge}) {
                        flex-direction: column;
                    }
                    .cardImage{
                        max-height: 45rem;
                        max-width: 45rem;
                        width: 50%;
                        @media only screen and (max-width: ${theme.breakPoints.bpSmall}) {
                            width: auto;
                        }
                    }
                    &-container{
                        grid-column: 2;
                        padding: .3rem 2rem;
                        width: 100%;
                        color: ${theme.colorDark};
                        display: flex;
                        flex-direction: column;
                        justify-content: space-between ;
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
                            color: ${theme.colorPrimary};
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
                            background: ${theme.colorPrimary};
                            align-self: flex-start;
                            margin: 1rem 0;
                            border: solid 1px ${theme.colorPrimary};
                        }
                        .btn-light{
                            background: ${theme.colorPrimary};
                            border: none;
                        }
                    }
                }
                .jusLeft{
                    grid-column: 1/-1;
                    display: flex;
                    margin: 0rem 0;
                    flex-flow: row-reverse;
                    justify-items: flex-end;
                    @media only screen and (max-width: ${theme.breakPoints.bpSmall}) {
                        flex-flow: column;
                    } 
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
                <img className="cardImage" src={props.bgImage} alt="img" />
                <div className="imageInfo-container">
                    {props.subHead && <h3 className="imageInfo-container__subHead">{props.subHead}</h3>}
                    {props.title && <h2 className="imageInfo-container__title"> {props.title} </h2>}
                    {props.text && <p className="imageInfo-container__text">{props.text}</p>}
                    {props.btnLight &&
                        <Link href={props.download ? (props.downloadLink || "/pdf/aramcoPdf.pdf") : (props.link || "/overview")}>
                            <a download={props.download ? true : false} className="imageInfo-container__button btn-light">
                                {props.btnLight}
                            </a>
                        </Link>
                        // <Link href={props.link || "/plans/products"}>
                        //     <button >  </button>
                        // </Link>
                    }
                    {props.btn &&
                        <Link href={props.download ? "/pdf/aramcoPdf.pdf" : (props.link || "/overview")}>
                            <a download={props.download ? true : false}
                                className="imageInfo-container__button">{props.btn}</a>
                        </Link>
                    }
                    {props.btn2 &&
                        <Link href={props.download ? "/pdf/aramcoPdf.pdf" : (props.link || "/overview")}>
                            <a download={props.download ? true : false}
                                className="imageInfo-container__button">{props.btn}</a>
                        </Link>
                    }
                </div>
            </div>

        </>
    )
}

export default ImageCard
