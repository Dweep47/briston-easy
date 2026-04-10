import Image from "next/image";
export default function AdvantageSection() {
  return (
    <>
      
        <section className="about-one section-space" id="about">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="sec-title text-center">
                            <h2 className="sec-title__title bw-split-in-left">
                                Briston is a leading real estate company with a deep commitment to the people we serve.
                            </h2>
                        </div>
                    </div>

                </div>
                <div className="row gutter-y-50">
                    <div className="col-lg-6 wow fadeInLeft" data-wow-duration='1500ms' data-wow-delay='300ms'>
                        <div className="about-one__image">
                            <div className="about-one__image__item">
                                <div className="about-one__image__item__inner hover:shine relative w-full">
                                    {/* <img src="/images/1.jpg" alt="about" loading="lazy" width="100%" className="about-one__image__one" /> */}
                                    <Image 
                                        src="/images/1.jpg" 
                                        alt="About Briston" 
                                        priority
                                        fill
                                        fetchPriority="high"
                                        className="object-cover about-one__image__one"
                                        // height="500"
                                        // width="1175"
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
                                    <h6 className="sec-title__tagline bw-split-in-right">The Briston Advantage </h6>
                                    <span className=""></span>
                                </div>
                                <h3 className="sec-title__title bw-split-in-left">
                                    We are dedicated to creating exceptional spaces that blend modern design, premium quality, and innovative technology, ensuring comfort, style, and functionality for every client.
                                </h3>
                            </div>
                            <p data-wow-duration='1500ms' data-wow-delay='300ms'>
                               Briston Group is a leading real estate solutions company with a deep commitment to the people we serve. We take a dynamic and decisive approach to identifying high-potential property opportunities and transforming them into thriving residential and commercial projects. Our straightforward and effective business model focuses on delivering premium developments and comprehensive real estate services, from concept to completion.
                            </p>
                            <p  className="about-one__text wow fadeInUp" data-wow-duration='1500ms' data-wow-delay='300ms'>
                                Headquartered in India and supported by a strong network of associate firms, we provide world-class real estate consultancy and investment guidance across the globe. In India, we assist investors, developers, and modern homeowners in establishing and expanding their property portfolios. With extensive market knowledge and experience, we guide our clients through every stage of the process, offering tailored solutions to bring their vision to life in the most efficient and impactful way possible.
                            </p>
                            <div className="about-one__features">
                                <ul className="about-one__features__list list-unstyled">
                                    <li className="wow fadeInUp" data-wow-duration="1500ms">
                                        <i className="icon-check-star"></i>
                                        <span>
                                            Modern Design Aesthetics
                                        </span>
                                    </li>
                                    <li className="wow fadeInUp" data-wow-duration="1600ms">
                                        <i className="icon-check-star"></i>
                                        <span>
                                            Premium Quality Materials
                                        </span>
                                    </li>
                                    <li className="wow fadeInUp" data-wow-duration="1700ms">
                                        <i className="icon-check-star"></i>
                                        <span>
                                            Innovative Smart Technology
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
        <section className="catagory-area section-space-bottom">
            <div className="container">
                <div className="row gutter-y-30">
                    <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 wow fadeInUp" data-wow-duration='1500ms' data-wow-delay='100ms'>
                        <div className="catagory-item">
                            <div className="catagory-item__icon">
                                <i className="fa fa-briefcase"></i>
                            </div>
                            <div className="catagory-item__content">
                                <span className="catagory-item__number">25</span>
                                <h3 className="catagory-item__title">Years of Experience</h3>
                            </div>
                            <span className="catagory-item__shape"></span>
                        </div>
                    </div>
                    {/* <!-- <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 wow fadeInUp" data-wow-duration='1500ms' data-wow-delay='300ms'>
                        <div className="catagory-item">
                            <div className="catagory-item__icon">
                                <i className="fa fa-building"></i>
                            </div>
                            <div className="catagory-item__content">
                                <span className="catagory-item__number">315</span>
                                <h3 className="catagory-item__title">Projects  <br> Done</h3>
                            </div>
                            <span className="catagory-item__shape"></span>
                        </div>
                    </div> --> */}
                    <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 wow fadeInUp" data-wow-duration='1500ms' data-wow-delay='500ms'>
                        <div className="catagory-item">
                            <div className="catagory-item__icon">
                                <i className="fa fa-users"></i>
                            </div>
                            <div className="catagory-item__content">
                                <span className="catagory-item__number">25K+</span>
                                <h3 className="catagory-item__title">Satisfied Customers</h3>
                            </div>
                            <span className="catagory-item__shape"></span>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 wow fadeInUp" data-wow-duration='1500ms' data-wow-delay='700ms'>
                        <div className="catagory-item">
                            <div className="catagory-item__icon">
                                <i className="fa fa-award"></i>
                            </div>
                            <div className="catagory-item__content">
                                <span className="catagory-item__number">32</span>
                                <h3 className="catagory-item__title">Awards Winning</h3>
                            </div>
                            <span className="catagory-item__shape"></span>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    </>
  );
}