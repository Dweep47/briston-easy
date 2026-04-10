import { Html, Head, Main, NextScript } from "next/document";
import TagManager from 'react-gtm-module';
import React,{useState,useEffect} from 'react';
export default function Document() {
    useEffect(() => {
        TagManager.initialize({ gtmId: 'GTM-TBB5FT8F' });
    }, []);
  return (
    <Html lang="en">
      <Head />
      <body className="antialiased">
        <noscript>
          <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-TBB5FT8F" height="0" width="0" style={{display:'none',visibility:'hidden'}}></iframe>
        </noscript>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
