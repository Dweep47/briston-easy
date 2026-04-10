"use client";
import { useEffect, useState } from "react";
import { Geist, Geist_Mono } from "next/font/google";
import Head from "next/head";
import Header from "../components/header";
import Footer from "../components/footer";
import TopHeader from "../components/about/top_header";
import AboutSection from "../components/about/about_section";
import TeamSection from "../components/about/team_section";
import MobileTeamSection from "../components/about/mobile_team_section";


import { useMediaQuery } from 'react-responsive';


export default function Home() {
   const isMobile = useMediaQuery({ maxWidth: 768 });
  //console.log(isMobile,'isMobile');
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
       <title>About Briston | Leading Developer of Luxury Real Estate Projects</title>
        <meta name="description" content="Learn about Briston legacy in real estate development, delivering premium projects built on innovation, quality, trust and customer excellence."></meta>
        <meta name="keywords" content="About Briston, real estate company India, real estate developers, luxury builders India, company profile Briston"></meta>
        <link rel="preconnect" href="https://fonts.googleapis.com/" />
        <link rel="preconnect" href="https://fonts.gstatic.com/" />
        <link href="https://fonts.googleapis.com/css2?family=Figtree:ital,wght@0,300..900;1,300..900&amp;display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Readex+Pro:wght@160..700&amp;family=Saira:ital,wght@0,100..900;1,100..900&amp;display=swap" rel="stylesheet" />
      </Head>
    <div className="page-wrapper">
      <Header />
      <TopHeader />
      <AboutSection />
      {/* {!isMobile && <ProfileSection />}
      {isMobile && <TeamSection />} */}
      {!isMobile &&<TeamSection />}
      {isMobile && <MobileTeamSection />}
      <Footer />
    </div>
     
    </>
  );
}