
import Image from "next/image";
import { useState } from "react";
export default function HeroSection() {
    // const [imgSrc, setImgSrc] = useState('https://res.cloudinary.com/dudmhx45w/image/upload/v1757941326/15_qxfrm2.jpg');
   
    const [imgSrc, setImgSrc] = useState(' https://res.cloudinary.com/dudmhx45w/image/upload/v1765868761/home_banner_ouvpxj.webp');
    // const [imgSrc, setImgSrc] = useState('/images/bnanner01.jpg');
  return (
    <>
        
  <section className="hero">
      
      {/* Background Video (UNCHANGED) */}
      <video
        className="hero-video"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/images/vid/hero-2.mp4" type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="hero-overlay" />

      {/* Content */}
      <div className="hero-content">
       <h1 className="hero-title">
  Build Fast. Build Smart. Build Briston.
</h1>
        <p className="hero-subtitle">
          Discover the future of living with our smart homes, designed to enhance your lifestyle with cutting-edge technology and unparalleled comfort.
        </p>

        <div className="hero-actions">
          <button className="btn-primary">Explore Properties</button>
          <button className="btn-secondary">Get in Touch</button>
        </div>

        <p className="hero-trust">
          Trusted by 100,000+ families
        </p>
      </div>
    </section>
    </>
  );
}