
export default function AboutSection() {
  return (
    <>
         <section className="about-two mt-50" id="about">
            <div className="container">
                <div className="row align-items-end gutter-y-30">
                    <div className="col-lg-6">
                        <div className="about-two__thumb hover:shine">
                            <img src="/images/t1.jpg" width="1175" alt="image" />
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="about-two__content">
                            <div className="sec-title text-start">
                                <div className="sec-title__top justify-content-start">
                                    <span className="line-left"></span>
                                    <h6 className="sec-title__tagline bw-split-in-right">
                                        A New Era of Urban Living
                                    </h6>
                                    <span className=""></span>
                                </div>
                                <h3 className="sec-title__title bw-split-in-left">
                                    A Complete World, Right at Your Doorstep.
                                </h3>
                            </div>
                            <p className="about-two__text wow fadeInUp" data-wow-duration='1500ms' data-wow-delay='300ms'>
                               Step into a world where life flows effortlessly and every need is just a short walk away. Our meticulously planned township is more than just a place to live—it’s a self-contained universe designed for comfort, convenience, and connection. Sprawling green landscapes blend seamlessly with premium residences, vibrant retail hubs, world-class amenities, and state-of-the-art infrastructure.
                            </p>
                           
                        </div>
                    </div>
                </div>
            </div>
            <div className="about-two__funfact">
                <ul className="about-two__funfact__list list-unstyled">
                    <li className="about-two__funfact__item wow fadeInUp" data-wow-duration='1500ms' data-wow-delay='100ms'>
                        <div className="about-two__funfact__card">
                            <div className="about-two__funfact__card__icon">
                                <i className="icon-buildings"></i>
                            </div>
                            <div className="about-two__funfact__card__content">
                                <h3 className="about-two__funfact__card__count count-box">
                                    <span className="count-text" data-stop="2" data-speed="1500">2</span>
                                    <span>k+</span>
                                </h3>
                                <p className="about-two__funfact__card__text">Building Renovation</p>
                            </div>
                        </div>
                    </li>
                    <li className="about-two__funfact__item wow fadeInUp" data-wow-duration='1500ms' data-wow-delay='300ms'>
                        <div className="about-two__funfact__card">
                            <div className="about-two__funfact__card__icon">
                                <i className="icon-support"></i>
                            </div>
                            <div className="about-two__funfact__card__content">
                                <h3 className="about-two__funfact__card__count count-box">
                                    <span className="count-text" data-stop="3" data-speed="1500">3</span>
                                    <span>k+</span>
                                </h3>
                                <p className="about-two__funfact__card__text">Team Support</p>
                            </div>
                        </div>
                    </li>
                    <li className="about-two__funfact__item wow fadeInUp" data-wow-duration='1500ms' data-wow-delay='500ms'>
                        <div className="about-two__funfact__card">
                            <div className="about-two__funfact__card__icon">
                                <i className="icon-trophy"></i>
                            </div>
                            <div className="about-two__funfact__card__content">
                                <h3 className="about-two__funfact__card__count count-box">
                                    <span className="count-text" data-stop="2" data-speed="1500">2</span>
                                    <span>k+</span>
                                </h3>
                                <p className="about-two__funfact__card__text">Awards Won</p>
                            </div>
                        </div>
                    </li>

                    {/* <!-- <li className="about-two__funfact__item about-two__funfact__item--two wow fadeInRight" data-wow-duration='1500ms' data-wow-delay='500ms'>
                        <div className="house-solituions">
                            <a href="about.html" className="house-solituions__icon"><i className="icon-arrow-up"></i></a>
                            <img src="assets/images/shapes/text-round-1-1.png" alt="image">
                        </div>
                    </li> --> */}
                </ul>
            </div>
          

            {/* <!-- <div className="about-two__shape wow fadeInLeft" data-wow-duration='1500ms' data-wow-delay='500ms'>
                <img src="assets/images/shapes/about-2-2.png" alt="shape">
            </div> --> */}


        </section>

    </>
  );
}