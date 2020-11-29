import Link from 'next/link'
import React, { useState } from 'react'
import theme from '../../styles/theme'

interface IProps {
    title?: string
    image: string
    text: string
    link?: string
    download?: boolean
    collapsible?: boolean
}
const ProductCard = ({ image, text, link, download, title,collapsible }: IProps) => {
    const [expand, setExpand] = useState(false)
    return (
        <>
            <style jsx>{`
            .item{
                padding: 1rem;
                display: flex;
                /* max-width: 45rem; */
                justify-content: space-between;
                flex-direction: column;
                align-items: center;
                transition: all .5s linear;
                &__img{
                    height: 24rem;
                    max-width: 45rem;
                    overflow: hidden;
                    position: relative;
                    display: grid;
                    &-overlay{
                        position: absolute;
                        height: 100%;
                        width: 100%;
                        background: rgba(0, 0, 0, 0.575);
                    }
                    &-title{
                        position: absolute;
                        place-self: center;
                        font-size: ${theme.font.medium};
                        color: ${theme.colorWhite};
                        text-transform: capitalize;
                        z-index: 2;
                    }
                    img{
                        object-fit: cover;
                        width: 100%;
                        height: 100%;
                    }
                }
                &__text{
                    text-align: center;
                    width: 95%;
                    align-self: center;
                    justify-self: center;
                    font-size: ${theme.font.small};
                    padding: 1rem 1rem 2rem;
                    color: ${theme.colorGrey};
                    font-weight: 100;
                    transition: all .5s linear;
                }
                &__btn{
                    width: 100%;
                    max-width: 45rem;
                    padding: 1.5rem;
                    background: ${theme.colorPrimary};
                    color: ${theme.colorWhite};
                    border: none;
                    cursor: pointer;
                    font-size: ${theme.font.small};
                    text-align: center;
                    &:focus{
                        outline: none;
                    }
                }
            } 
        `}</style>
            <div className="item">
                <div className="item__img">
                    <h3 className="item__img-title"> {title} </h3>
                    <div className="item__img-overlay" />
                    <img src={image} alt="product img" className="" />
                </div>
                <p className="item__text">
                    {expand? text : text.substr(0,90)}
                </p>
                {/* <Link  > */}
                {
                    collapsible ?
                        <button className="item__btn" onClick={() => setExpand(!expand)}> Read More</button>
                        :
                        <a download={download ? true : false}
                            href={download ? "/pdf/aramcoPdf.pdf" : (link || "/overview")} className="item__btn">Read More</a>
                }
                {/* </Link> */}

            </div>
        </>
    )
}

export default ProductCard
