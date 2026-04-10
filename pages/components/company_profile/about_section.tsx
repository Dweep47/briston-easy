import Image from "next/image";
export default function AboutSection() {
  return (
    <>
           <section className="about-one section-space" id="about">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="sec-title text-center">
                            <h2 className="sec-title__title bw-split-in-left">
                                Welcome to Briston
                            </h2>
                        </div>
                    </div>
                </div>
                <div className="row gutter-y-50">
                    <div className="col-lg-6 wow fadeInLeft" data-wow-duration='1500ms' data-wow-delay='300ms'>
                        <div className="about-one__image">
                            <div className="about-one__image__item">
                                <div className="about-one__image__item__inner hover:shine">
                                    {/* <img src="/images/21.jpg" alt="about" width="100%" className="about-one__image__one" /> */}
                                    <Image 
                                        src="/images/MBK-Website_About_Us.jpg" 
                                        alt="About Briston" 
                                        priority
                                        fetchPriority="high"
                                        className="object-cover"
                                        height="500"
                                        width="650"
                                    />
                                </div>
                               
                            </div>
                            {/* <!-- <div className="about-one__image__item-two hover:shine">
                                <img src="assets/images/a2.jpg" alt="about" height="430" width="335" className="about-one__image__one">
                            </div> --> */}
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="about-one__content">
                            <div className="sec-title text-start">
                                <div className="sec-title__top justify-content-start">
                                    <span className="line-left"></span>
                                    <h6 className="sec-title__tagline bw-split-in-right">
                                        Who We Are
                                    </h6>
                                    <span className=""></span>
                                </div>
                                <h3 className="sec-title__title bw-split-in-left">
                                    Our Vision and Mission
                                </h3>
                            </div>
                            <p className="about-one__text wow fadeInUp" data-wow-duration='1500ms' data-wow-delay='300ms'>
                                Briston is a leading real estate development company in India, specializing in luxury residential projects. With a commitment to excellence and innovation, we create iconic living spaces that redefine urban living. Our portfolio includes prestigious developments like in India, offering world-class amenities and unparalleled lifestyle experiences.
                            </p>
                            
                            <div className="about-one__features">
                                <ul className="about-one__features__list list-unstyled">
                                    <li className="wow fadeInUp" data-wow-duration="1500ms">
                                        <i className="icon-check-star"></i>
                                        <span>
                                            Customer-Centric Approach
                                        </span>
                                    </li>
                                    <li className="wow fadeInUp" data-wow-duration="1600ms">
                                        <i className="icon-check-star"></i>
                                        <span>
                                            Sustainable Development Practices
                                        </span>
                                    </li>
                                    <li className="wow fadeInUp" data-wow-duration="1700ms">
                                        <i className="icon-check-star"></i>
                                        <span>
                                            Innovation and Excellence
                                        </span>
                                    </li>
                                </ul>

                            </div>
                            {/* <!-- <div className="about-one__btn">
                                <a href="about.html" className="zoomvilla-btn">More <i className="icon-angle-small-right"></i></a>
                            </div> --> */}
                        </div>
                    </div>
                </div>
            </div>
            
        </section>
    </>
  );
}