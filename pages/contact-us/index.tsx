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
import HeroSection from "../components/hero_section";
import Services from "../components/services";
import VideoSection from "../components/video_section";
import AboutSection from "../components/about_section";
import MainSlider from "../components/main_slider";
import AdvantageSection from "../components/advantage_section";
import Testimonials from "../components/testimonials";
import BestProject from "../components/best_project_section";
import TopHeader from "../components/contact/top_header";
import Form from "../components/contact/form";
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
        <title>Contact MBK India | Reach Out for Sales & Project Enquiries</title>
        <meta name="description" content="Get in touch with MBK India for project details, sales enquiries, collaborations and investment opportunities across residential and commercial segments."></meta>
        <meta name="keywords" content="Contact MBK India, project enquiries, real estate contact India, sales enquiry, property enquiries"></meta>
        <link rel="preconnect" href="https://fonts.googleapis.com/" />
        <link rel="preconnect" href="https://fonts.gstatic.com/" />
        <link href="https://fonts.googleapis.com/css2?family=Figtree:ital,wght@0,300..900;1,300..900&amp;display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Readex+Pro:wght@160..700&amp;family=Saira:ital,wght@0,100..900;1,100..900&amp;display=swap" rel="stylesheet" />
      </Head>
    <div className="page-wrapper">
      <Header />
      <TopHeader />
      <Form />
      <Footer />
    </div>
     
    </>
  );
}