import { Html, Head, Main, NextScript } from 'next/document';
import { ColorModeScript } from '@chakra-ui/react';
import theme from '@deep-foundation/deepcase/imports/theme/theme';


// const metadata: Metadata = {
//   title: 'Deep Foundation',
//   authors: [{ name: 'Deep Foundation' }, { name: 'Deep Foundation', url: 'https://deep.foundation' }],
//   keywords: ['Deep Foundation', 'React', 'JavaScript'],
//   applicationName: 'Deep Foundation',
//   description: 'Deep Foundation',
//   icons: {
//     icon: 'image/png',
//     shortcut: 'image/png',
//     apple: '/apple-touch-icon.png',
//     other: {
//       rel: 'apple-touch-icon-precomposed',
//       url: '/apple-touch-icon-precomposed.png',
//     },
//   },
//   manifest: '/site.webmanifest',
//   viewport: {
//     width: 'device-width',
//     initialScale: 1,
//     minimumScale: 1,
//   },
//   category: 'technology',
//   alternates: {
//     canonical: '/',
//     // languages: {
//     //   'en-US': '/en-US',
//     //   'de-DE': '/de-DE',
//     // },

//   },
//   openGraph: {
//     images: '/logo_n.svg',
//   },

// }


export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link href="https://fonts.googleapis.com/css2?family=Ysabeau+SC:wght@1;100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
        {/* <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-DC5RRWLRNV"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-DC5RRWLRNV');
            `,
          }}
        /> */}
        {/* <script src="https://gftruj.github.io/hand.tracking.controls.extras/dist/aframe-hand-tracking-controls-extras.js"></script>
        <script src="https://gftruj.github.io/hand.tracking.controls.extras/components/dist/hand-tracking-controls-extras-components.js"> </script> */}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
