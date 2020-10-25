import React from 'react'

const PageLayout: React.FC = (props) => {
  return (
    <div className="page-layout">
      
      <style jsx>{`
        .page-layout {  
          display: grid;    
          grid-template-columns: repeat(10, [col-start] minmax(min-content, 1fr) [col-end] );
        }       
        `}</style>  
        {props.children} 
    </div> 
  )     
}

export default PageLayout