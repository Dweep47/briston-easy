"use client";
import Image from "next/image";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

export default function BestProject() {
    const swiperRef = useRef(null);

    const images = [
        "/images/16.jpg",
        "/images/2.jpg",
        "/images/3.jpg",
        "/images/4.jpg",
        "/images/5.jpg",
        "/images/7.jpg",
        "/images/9.jpg",
        "/images/13.jpg",
        "/images/farm-house-1.jpg",
    ];

    const [open, setOpen] = useState(false);
    const [photoIndex, setPhotoIndex] = useState(0);

    return (
        <>
            <section className="best-project-one section-space-top">
                <div className="sec-title text-center">
                    <div className="sec-title__top justify-content-center">
                        <span className="line-left"></span>
                        <h6 className="sec-title__tagline bw-split-in-right">
                            OUR AMENITIES & LIFESTYLE
                        </h6>
                        <span className="line-right"></span>
                    </div>
                    <h3 className="sec-title__title bw-split-in-left">
                        Premium Amenities Focused on Wellness, Leisure, and Culinary Experiences
                    </h3>
                </div>

                <div className="best-project-one__carousel owl-carousel zoomvilla-owl__carousel owl-carousel owl-theme wow fadeInUp">
                    <Swiper
                        modules={[Autoplay, EffectFade, Pagination, Navigation]}
                        spaceBetween={20}
                        centeredSlides={true}
                        breakpoints={{
                            320: { slidesPerView: 1 },
                            640: { slidesPerView: 2 },
                            1024: { slidesPerView: 3 },
                            1440: { slidesPerView: 3 },
                        }}
                        loop={true}
                        effect="scroll"
                        autoplay={{
                            delay: 4000,
                            disableOnInteraction: false,
                        }}
                        pagination={false}
                        navigation={{
                            nextEl: ".owl-next",
                            prevEl: ".owl-prev",
                        }}
                        onInit={(swiper) => {
                            swiper.navigation.init();
                            swiper.navigation.update();
                            swiper.slides[swiper.activeIndex].classList.add("active");
                            swiper.slides[swiper.activeIndex].classList.add("center");
                        }}
                        onSlideChangeTransitionEnd={(swiper) => {
                            swiper.slides.forEach((slide) => {
                                slide.classList.remove("active");
                                slide.classList.remove("center");
                            });
                            swiper.slides[swiper.activeIndex].classList.add("active");
                            swiper.slides[swiper.activeIndex].classList.add("center");
                        }}
                    >
                        {images.map((src, index) => (
                            <SwiperSlide
                                key={src}
                                className={index === 0 ? "active center" : ""}
                            >
                                <div className="item">
                                    <div
                                        className="best-project-one__item"
                                        onClick={() => {
                                            setPhotoIndex(index);
                                            setOpen(true);
                                        }}
                                        style={{ cursor: "pointer" }}
                                    >
                                        <Image
                                            src={src}
                                            alt="image"
                                            width={500}
                                            height={500}
                                        />
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}

                        <button className="owl-prev" type="button">
                            <i className="icon-angle-small-right"></i>
                        </button>
                        <button className="owl-next" type="button">
                            <i className="icon-angle-small-right"></i>
                        </button>
                    </Swiper>
                </div>

                <Lightbox
                    open={open}
                    close={() => setOpen(false)}
                    index={photoIndex}
                    slides={images.map((src) => ({ src }))}
                />
            </section>
        </>
    );
}