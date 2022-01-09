import React from 'react';
import { Helmet } from 'react-helmet';

export default function helmet() {
  return (
    <Helmet>
      <meta charSet="utf-8" />
      <title>Zaige Project</title>
      <link rel="stylesheet" href="//cdn.jsdelivr.net/npm/normalize.css@8.0.1/normalize.min.css" />
      <link rel="stylesheet" href="//fonts.googleapis.com/css2?family=Arvo&family=Noto+Sans+SC&display=swap" />
      {/* <!-- Global site tag (gtag.js) - Google Analytics --> */}
      <script async src="https://www.googletagmanager.com/gtag/js?id=G-Y2R988VBRG" />
      <script>
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag() { dataLayer.push(arguments); }
          gtag('js', new Date());
  
          gtag('config', 'G-Y2R988VBRG');
        `}
      </script>
    </Helmet>
  );
}
