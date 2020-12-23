import Head from 'next/head'
import React, { useEffect, useState } from 'react'
import postscribe from 'postscribe';

const PageLayout = (props) => {
  // const [showPostscribe, setShowPostscribe] = useState(false)
  return (
    <div className="page-layout">
      <Head>

        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link href="/admin/assets/admin/css/font-awesome.min.css" rel="stylesheet" type="text/css" />
        {/* <!-- Favicon --> */}
        <link href="logo.png" rel="icon" type="image/png" />

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

      <Head>
        <script dangerouslySetInnerHTML={{
          __html: `
var Tawk_API=Tawk_API||{ }, Tawk_LoadStart=new Date();
  (function(){
  var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
  s1.async=true;
  s1.src='https://embed.tawk.to/5fe20f2fdf060f156a8f5ca3/1eq5gmkhn';
  s1.charset='UTF-8';
  s1.setAttribute('crossorigin','*');
  s0.parentNode.insertBefore(s1,s0);
  })();
` }} />
      </Head>
    </div>
  )
}

export default PageLayout