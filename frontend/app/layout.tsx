"use client";

import { Inter } from "next/font/google";
import "./globals.css";
import Head from "next/head";
import React from "react";
import NavbarWelcome from "./components/NavbarWelcome1";
import { InfoProvider } from "../app/store/contextApi"



const inter = Inter({ subsets: ["latin"] });


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (

    <html lang="tr" suppressHydrationWarning={true} >

      <Head>
        <title>Title</title>
        <meta name='description' content='Description' />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        
      </Head>
      <body style={{ fontFamily: 'Jockey One, sans-serif'}} className={inter.className}>
      <InfoProvider>
      <div>
      <NavbarWelcome />
          {children}
        </div>
      
      </InfoProvider>
      </body>

    </html>

  );
}