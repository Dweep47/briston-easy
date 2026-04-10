
"use client";
import Image from "next/image";
import React,{useRef} from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Pagination,Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";
export default function GallerySection() {
     const swiperRef = useRef(null);
  return (
    <>
         <section className="best-project-one section-space-top">
                   <div className="sec-title text-center">
                       <div className="sec-title__top justify-content-center">
                           <span className="line-left"></span>
                           <h6 className="sec-title__tagline bw-split-in-right">OUR AMENITIES & LIFESTYLE</h6>
                           <span className="line-right"></span>
                       </div>
                       <h3 className="sec-title__title bw-split-in-left">Premium Amenities Focused on Wellness, Leisure, and Culinary Experiences</h3>
                   </div>
                   <div className="best-project-one__carousel owl-carousel zoomvilla-owl__carousel owl-carousel owl-theme wow fadeInUp" 
                   
                   // data-wow-duration='1500ms' data-wow-delay='300ms'
       
                   >
                       <Swiper
                           modules={[Autoplay, EffectFade, Pagination,Navigation]}
                          // slidesPerView={3}
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
                           //autoplay={false}
                           pagination={false}
                           navigation={{
                               nextEl: ".owl-next",
                               prevEl: ".owl-prev",
                           }}
                           //className="owl-carousel"
                           onInit={(swiper) => {
                               swiper.navigation.init();
                               swiper.navigation.update();
                               swiper.slides[swiper.activeIndex].classList.add('active');
                               swiper.slides[swiper.activeIndex].classList.add('center');
                           }}
                           onSlideChangeTransitionEnd={(swiper) => {
                             swiper.slides.forEach((slide) => {
                               slide.classList.remove('active');
                               slide.classList.remove('center');
                             });
                             swiper.slides[swiper.activeIndex].classList.add('active');
                             swiper.slides[swiper.activeIndex].classList.add('center');
                           }}
                       >
                        <SwiperSlide className="active center">
                           <div className="item">
                               <div className="best-project-one__item">
                                   <Image src="/images/16.jpg" alt="image" width={500} height={500}/>
                                   {/* <div className="best-project-one__item__popup">
                                       <a href="images/16.jpg" className="img-popup"><i className="icon-zoom-1"></i></a>
                                   </div> */}
                               </div>
                           </div>
                       </SwiperSlide>   
       
                       <SwiperSlide>
                           <div className="item">
                               <div className="best-project-one__item">
                                   <Image src="/images/2.jpg" alt="image" width={500} height={500}/>
                                   {/* <div className="best-project-one__item__popup">
                                       <a href="images/2.jpg" className="img-popup"><i className="icon-zoom-1"></i></a>
                                   </div> */}
                               </div>
                           </div>
                       </SwiperSlide>
       
                       <SwiperSlide>
                           <div className="item">
                               <div className="best-project-one__item">
                                   <Image src="/images/3.jpg" alt="image" width={500} height={500}/>
                                   {/* <div className="best-project-one__item__popup">
                                       <a href="images/3.jpg" className="img-popup"><i className="icon-zoom-1"></i></a>
                                   </div> */}
                               </div>
                           </div>
                       </SwiperSlide>
       
                       <SwiperSlide>
                           <div className="item">
                               <div className="best-project-one__item">
                                   <Image src="/images/4.jpg" alt="image" width={500} height={500}/>
                                   {/* <div className="best-project-one__item__popup">
                                       <a href="images/4.jpg" className="img-popup"><i className="icon-zoom-1"></i></a>
                                   </div> */}
                               </div>
                           </div>
                       </SwiperSlide>
       
                       <SwiperSlide>
                           <div className="item">
                               <div className="best-project-one__item">
                                   <Image src="/images/5.jpg" alt="image" width={500} height={500}/>
                                   {/* <div className="best-project-one__item__popup">
                                       <a href="images/5.jpg" className="img-popup"><i className="icon-zoom-1"></i></a>
                                   </div> */}
                               </div>
                           </div>
                       </SwiperSlide>
       
                       {/* <SwiperSlide>
                           <div className="item">
                               <div className="best-project-one__item">
                                   <Image src="/images/6.jpg" alt="image" width={500} height={500}/>
                                   <div className="best-project-one__item__popup">
                                       <a href="images/6.jpg" className="img-popup"><i className="icon-zoom-1"></i></a>
                                   </div>
                               </div>
                           </div>
                       </SwiperSlide> */}
       
                       <SwiperSlide>
                           <div className="item">
                               <div className="best-project-one__item">
                                   <Image src="/images/7.jpg" alt="image" width={500} height={500}/>
                                   {/* <div className="best-project-one__item__popup">
                                       <a href="images/7.jpg" className="img-popup"><i className="icon-zoom-1"></i></a>
                                   </div> */}
                               </div>
                           </div>
                       </SwiperSlide>
       
                       <SwiperSlide>
                           <div className="item">
                               <div className="best-project-one__item">
                                   <Image src="/images/9.jpg" alt="image" width={500} height={500}/>
                                   {/* <div className="best-project-one__item__popup">
                                       <a href="images/9.jpg" className="img-popup"><i className="icon-zoom-1"></i></a>
                                   </div> */}
                               </div>
                           </div>
                       </SwiperSlide>
       
                       <SwiperSlide>
                           <div className="item">
                               <div className="best-project-one__item">
                                   <Image src="/images/13.jpg" alt="image" width={500} height={500}/>
                                   {/* <div className="best-project-one__item__popup">
                                       <a href="images/13.jpg" className="img-popup"><i className="icon-zoom-1"></i></a>
                                   </div> */}
                               </div>
                           </div>
                       </SwiperSlide>
       
                       <SwiperSlide>                
                           <div className="item">
                               <div className="best-project-one__item">
                                   <Image src="/images/farm-house-1.jpg" alt="image" width={500} height={500} />
                                   {/* <div className="best-project-one__item__popup">
                                       <a href="images/farm-house-1.jpg" className="img-popup"><i className="icon-zoom-1"></i></a>
                                   </div> */}
                               </div>
                           </div>
                       </SwiperSlide>
                           <button className="owl-prev">
                              <i className="icon-angle-small-right"></i>
                           </button>
                           <button className="owl-next">
                               <i className="icon-angle-small-right"></i>
                           </button>
                   </Swiper>
                   </div>
                   {/* {isOpen && (
                       <Lightbox
                       mainSrc={images[photoIndex]}
                       nextSrc={images[(photoIndex + 1) % images.length]}
                       prevSrc={images[(photoIndex + images.length - 1) % images.length]}
                       onCloseRequest={() => setIsOpen(false)}
                       onMovePrevRequest={() =>
                           setPhotoIndex((photoIndex + images.length - 1) % images.length)
                       }
                       onMoveNextRequest={() =>
                           setPhotoIndex((photoIndex + 1) % images.length)
                       }
                       />
                   )} */}
               </section>
    </>
  );
}