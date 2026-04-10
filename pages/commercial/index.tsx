"use client";
import { useEffect } from "react";
import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import Head from "next/head";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

import Header from "../components/header";
import Footer from "../components/footer";
import VideoSection from "../components/commercial/video_section";
import ModernLivingSection from "../components/commercial/modern_living_section";
import AboutSection from "../components/commercial/about_section";

export default function Home() {
 useEffect(() => {
    (async () => {
      if (typeof window !== "undefined") {
        const WOW = (await import("wowjs")).WOW;
        new WOW({ live: false }).init();
      }
    })();
  }, []);
  return (
    <>
      <Head>
        <meta name="color-scheme" content="light" />
        <title>Briston Commercial Projects | Premium Offices & Workspaces</title>
        <meta name="description" content="Discover Briston commercial projects featuring modern office spaces, business hubs and high-value commercial developments in prime city locations."></meta>
        <meta name="keywords" content="Briston commercial projects, office spaces India, business hubs, commercial property India, premium workspaces, corporate offices"></meta>
        <link rel="preconnect" href="https://fonts.googleapis.com/" />
        <link rel="preconnect" href="https://fonts.gstatic.com/" />
        <link href="https://fonts.googleapis.com/css2?family=Figtree:ital,wght@0,300..900;1,300..900&amp;display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Readex+Pro:wght@160..700&amp;family=Saira:ital,wght@0,100..900;1,100..900&amp;display=swap" rel="stylesheet" />
      </Head>
    <div className="page-wrapper">
      <Header />
      <VideoSection />
      <ModernLivingSection />
      <AboutSection />
      <Footer />
    </div>
     
    </>
  );
}