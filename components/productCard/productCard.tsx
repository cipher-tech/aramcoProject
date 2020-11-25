import Link from 'next/link'
import React from 'react'
import theme from '../../styles/theme'

interface IProps {
    image: string
    text: string
    link?: string
    download?: boolean
}
const ProductCard = ({ image, text, link, download }: IProps) => {
    return (
        <>
            <style jsx>{`
            .item{
                padding: 1rem;
                display: flex;
                /* max-width: 45rem; */
                justify-content: space-between;
                flex-direction: column;
                &__img{
                    height: 24rem;
                    max-width: 45rem;
                    overflow: hidden;
                    position: relative;
                    &-overlay{
                        position: absolute;
                        height: 100%;
                        width: 100%;
                        background: rgba(0, 0, 0, 0.575);
                    }
                    img{
                        object-fit: cover;
                        width: 100%;
                        height: 100%;
                    }
                }
                &__text{
                    text-align: center;
                    width: 90%;
                    align-self: center;
                    justify-self: center;
                    font-size: ${theme.font.medium};
                    padding: 1rem 1rem 3rem;
                    color: ${theme.colorGrey};
                    font-weight: 100;
                }
                &__btn{
                    width: 100%;
                    padding: 1.5rem;
                    background: ${theme.colorPrimary};
                    color: ${theme.colorWhite};
                    border: none;
                    cursor: pointer;
                    text-align: center;
                    &:focus{
                        outline: none;
                    }
                }
            }
        `}</style>
            <div className="item">
                <div className="item__img">
                    <div className="item__img-overlay" />
                    <img src={image} alt="product img" className="" />
                </div>
                <p className="item__text">
                    {text}
                </p>
                {/* <Link  > */}
                    <a download={download ? true : false } 
                    href={download ? "/pdf/aramcoPdf.pdf" : (link || "/overview")} className="item__btn">Read More</a>
                {/* </Link> */}

            </div>
        </>
    )
}

export default ProductCard
