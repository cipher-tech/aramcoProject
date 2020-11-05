import Head from 'next/head'
import React from 'react'

const PageLayout: React.FC = (props) => {
  return (
    <div className="page-layout">
      <Head>

        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* <!-- Favicon --> */}
        <link href="/assets/images/favicon.png" rel="icon" type="image/png" />

        {/* <!-- CSS  */}
        {/* ================================================== --> */}
        {/* <link rel="stylesheet" href="/assets/css/style.css" />
        <link rel="stylesheet" href="/assets/css/night-mode.css" />
        <link rel="stylesheet" href="/assets/css/framework.css" /> */}

        {/* <!-- icons */}
        {/* ================================================== --> */}
        <link rel="stylesheet" href="/assets/css/icons.css" />
        <script src="/assets/js/main.js"></script>
      </Head>
      <style jsx>{`
        .page-layout {  
         
        }       
        `}</style>
      {props.children}
    </div>
  )
}

export default PageLayout