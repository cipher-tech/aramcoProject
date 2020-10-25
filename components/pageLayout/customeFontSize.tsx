import React from 'react'

const CustomFontSize: React.FC = ({children}) => {
    return (
        <div id="main">
            <style jsx>{`
				#main {
                    grid-column: 1/-1;
                    width: 100%;
                    display: grid;    
                    grid-template-columns: repeat(10, [col-start] minmax(min-content, 1fr) [col-end] );
                }
               
			`}</style>
            <style jsx global>{`
                html{
                    font-size: 62.5%; 
                }
            `}</style>
                {children}
        </div>
    )
}

export default CustomFontSize
