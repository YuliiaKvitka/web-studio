
//src/app/layout.js

import '../styles/styles.scss';
import '../styles/base/_globals.scss';
import Head from "next/head";
import Header from "@/components/Header";
import Footer from "@/components/Footer";


export const metadata = {
  title: {
    default: "Studio WEB",
    template: '%s - Studio WEB'
  },
  description: "Studio WEB",
  twitter: {
    card: 'summary_large_image'
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </Head>
      <body >
          
            <Header />
            <main>{children}</main>
            <Footer/>
          
      </body>
    </html>
  );
}

//  https://realfavicongenerator.net/
// https://favicon.io/
