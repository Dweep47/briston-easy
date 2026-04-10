"use client";
import React,{useRef} from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

export default function ImageSlider() {
    const swiperRef = useRef(null);
  return (
    <>
    <section className="main-slider-two mt-50" >
            <div className="main-slider-two__carousel zoomvilla-owl__carousel owl-carousel owl-theme" >
              <Swiper
                modules={[Autoplay, EffectFade, Pagination]}
                slidesPerView={1}
                loop={true}
                effect="fade"
                autoplay={{
                  delay: 4000,
                  disableOnInteraction: false,
                }}
                pagination={false}
                className="owl-carousel"
                onInit={(swiper) => {
                  swiper.slides[swiper.activeIndex].classList.add('active');
                }}
                onSlideChangeTransitionEnd={(swiper) => {
                  swiper.slides.forEach((slide) =>
                    slide.classList.remove('active')
                  );
                  swiper.slides[swiper.activeIndex].classList.add('active');
                }}
              >
        <SwiperSlide className="active">
        <div className="item ">
                    <div className="main-slider-two__item">
                        <div className="main-slider-two__bg" 
                        style={{ backgroundImage: "url(images/t3.jpg)" }}></div>
                        <div className="container">
                            <div className="row gutter-y-40 align-items-end">
                                <div className="col-xl-8 col-lg-9 col-md-12">
                                    <div className="main-slider-two__content">
                                        <h2 className="main-slider-two__title">Everything You Need, <span> Everywhere</span>  You Look .</h2>
                                        <p className="main-slider-two__text">
                                            The township is designed to be a self-sufficient ecosystem, where every essential service and amenity is within easy reach.
                                        </p>
                                       
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="item">
                    <div className="main-slider-two__item">
                        <div className="main-slider-two__bg" style={{ backgroundImage: "url(images/t4.jpg)" }}></div>
                        <div className="container">
                            <div className="row gutter-y-40 align-items-end">
                                <div className="col-xl-8 col-lg-9 col-md-12">
                                    <div className="main-slider-two__content">
                                        <h2 className="main-slider-two__title">
                                            A Designed for <span>  Connection </span> and Convenience.
                                        </h2>
                                        <p className="main-slider-two__text">
                                            The township fosters a sense of belonging and community, with thoughtfully designed spaces that encourage interaction and engagement among residents.
                                        </p>
                                       
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> 
        </SwiperSlide>
      </Swiper>
                
                

            </div>
    </section>

    </>
  );
}