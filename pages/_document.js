import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
        <title>Flats for Sale in Kottayam | 2BHK & 3BHK Apartments in Kottayam | Desai Homes</title>
        <meta name="description" content="Ready to Occupy Flats in Kottayam for Sale | Newly Launched Flats in Kottayam at Price 41 Lakhs Onwards | 2BHK & 3BHK Flats for Sale at Low Cost in Kottayam | Desai Homes Kottayam" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="https://desaihomes.in/dd-diamondpark/favicon.gif" sizes="any" />

        <script
          dangerouslySetInnerHTML={{
            __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-WTDXCRD6');
    `
          }}
        />
      </Head>


      <body>


        <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-WTDXCRD6"
          height="0" width="0" style={{ display: "none", visibility: "hidden" }}></iframe></noscript>
        <Main />
        <NextScript />

      </body>
    </Html>
  )
}