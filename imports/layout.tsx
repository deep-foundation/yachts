'use client'

import React from 'react';
import { Navbar } from '../components/navigation';
import { Footer } from '../components/footer';


// export const metadata: Metadata = {
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


export default function RootLayout({
  children,
}:{
  children: React.ReactNode;
}) {

  // React.useEffect(() => {
  //   Remove the server-side injected CSS.
  //   const jssStyles = document.querySelector('#jss-server-side');
  //   if (jssStyles) {
  //     jssStyles.parentElement?.removeChild(jssStyles);
  //   }
  // }, []);

  return (<>
      <Navbar/>
        <main>{children}</main>
      <Footer />
    </>
  )
};
