"use client";
import { useEffect } from "react";
import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import Head from "next/head";

import Header from "./components/header";
import Footer from "./components/footer";
import HeroSection from "./components/hero_section";
import Services from "./components/services";
import VideoSection from "./components/video_section";
import AboutSection from "./components/about_section";
import MainSlider from "./components/main_slider";
import AdvantageSection from "./components/advantage_section";
import Testimonials from "./components/testimonials";
import BestProject from "./components/best_project_section";
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
        <title>Briston  | Premium Real Estate Developers for Luxury Projects in India</title>
        <meta name="description" content="Briston delivers luxury residential, commercial, retail and township projects with premium design, quality construction and exceptional value."></meta>
        <meta name="keywords" content="Briston, real estate developer India, luxury projects India, residential projects, commercial projects, retail developments, township projects, premium real estate"></meta>
        <link rel="preconnect" href="https://fonts.googleapis.com/" />
        <link rel="preconnect" href="https://fonts.gstatic.com/" />
        <link href="https://fonts.googleapis.com/css2?family=Figtree:ital,wght@0,300..900;1,300..900&amp;display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Readex+Pro:wght@160..700&amp;family=Saira:ital,wght@0,100..900;1,100..900&amp;display=swap" rel="stylesheet" />
      </Head>
    <div className="page-wrapper">
      <Header />
    <HeroSection />

<section className="relative overflow-visible">
  <div className="absolute inset-0 -z-10">
    <img
      src="/images/img/final background.png"
      alt="Scenic background"
      className="h-auto w-full"
    />
    <div className="absolute inset-0 bg-black/20" />
  </div>

  <div className="relative z-20 -mt-24 md:-mt-32 lg:-mt-40">
    <Services />
  </div>

  <VideoSection />
  <AboutSection />
</section>
      <MainSlider />
      <AdvantageSection />
      <Testimonials />
      <BestProject />
      <Footer />
    </div>
     
    </>
  );
}