import React from 'react'
import theme from '../../styles/theme'

function FlowText({text}) {
    return (
        <>
            <style jsx>{`
                .main-Text{
                    grid-column: 1/-1;
                    text-align: center;
                    width: 90%;
                    align-self: center;
                    justify-self: center;
                    font-size: ${theme.font.small};
                    padding: 6.5rem 1rem;
                    color: ${theme.colorGrey};
                    font-weight: 100;
                }
            `}</style>

            <p className="main-Text">
                {text}
            </p>
        </>
    )
}

export default FlowText
