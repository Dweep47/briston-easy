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
import VideoSection from "../components/township/video_section";
import AboutSection from "../components/township/about_section";
import ImageSlider from "../components/township/image_slider";
import GallerySection from "../components/township/gallery_section";
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
        <title>MBK India Townships | Integrated Lifestyle & Mixed-Use Communities</title>
        <meta name="description" content="Explore MBK India’s integrated townships featuring residential, commercial and retail zones with modern amenities for holistic lifestyle living."></meta>
        <meta name="keywords" content="MBK India township projects, integrated townships India, mixed-use communities, residential townships, large-scale developments"></meta>
        <link rel="preconnect" href="https://fonts.googleapis.com/" />
        <link rel="preconnect" href="https://fonts.gstatic.com/" />
        <link href="https://fonts.googleapis.com/css2?family=Figtree:ital,wght@0,300..900;1,300..900&amp;display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Readex+Pro:wght@160..700&amp;family=Saira:ital,wght@0,100..900;1,100..900&amp;display=swap" rel="stylesheet" />
      </Head>
    <div className="page-wrapper">
      <Header />
        <VideoSection />
        <AboutSection />
        <ImageSlider />
        <GallerySection />
      <Footer />
    </div>
     
    </>
  );
}