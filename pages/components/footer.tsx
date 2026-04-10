import Link from "next/link";
export default function Footer() {
  return (
    <>
         <footer className="main-footer mt-0">
            <div className="main-footer__top">
                <div className="container">
                    <div className="row gutter-y-50">
                        <div className="col-md-4 col-lg-4 col-xl-4 wow fadeInUp" data-wow-delay="00ms">
                            <div className="footer-widget footer-widget--about">
                                <Link href="/" className="footer-widget__logo">
                                   <img src="images/logo.png" alt="Briston Group Logo" />
                                    {/* Briston */}
                                </Link>
                               
                                <div className="footer-widget__social-links">
                                    <a href="https://www.facebook.com/bristonworld" target="_blank"><i className="fab fa-facebook-f" aria-hidden="true"></i><span className="sr-only">Facebook</span></a>
                                    <a href="https://www.youtube.com/@bristonworld" target="_blank"><i className="fab fa-youtube"></i> <span className="sr-only">Youtube</span></a>
                                    <a href="https://www.instagram.com/bristonworld" target="_blank"><i className="fab fa-instagram" aria-hidden="true"></i><span className="sr-only">Instagram</span></a>
                                    <a href="https://www.linkedin.com/company/bristonworld"  target="_blank"><i className="fab fa-linkedin-in" aria-hidden="true"></i><span className="sr-only">Linkedin</span></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-lg-4 col-xl-4 wow fadeInUp" data-wow-delay="100ms">
                            <div className="footer-widget footer-widget--links">
                                <h2 className="footer-widget__title">Quick Links</h2>
                                <ul className="list-unstyled footer-widget__links">
                                    <li>
                                        <i className="fas fa-circle"></i>
                                        <Link href="/">Home</Link>
                                    </li>
                                    <li>
                                        <i className="fas fa-circle"></i>
                                        <Link href="/residential">Residential</Link>
                                    </li>
                                     <li>
                                        <i className="fas fa-circle"></i>
                                        <Link href="/commercial">Commercial</Link>
                                    </li>
                                     <li>
                                        <i className="fas fa-circle"></i>
                                        <Link href="/retail">Retail</Link>
                                    </li>
                                    <li>
                                        <i className="fas fa-circle"></i>
                                        <Link href="/township">Township</Link>
                                    </li>
                                     <li>
                                        <i className="fas fa-circle"></i>
                                        <Link href="/about-us">About Us</Link>
                                    </li>
                                    <li>
                                        <i className="fas fa-circle"></i>
                                        <Link href="/contact-us">Contact Us</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-4 col-lg-4 col-xl-4 wow fadeInUp">
                             <div className="footer-widget footer-widget--links">
                                 <h2 className="footer-widget__title">Address</h2>
                                 <p className="footer-widget__text">Briston India Pvt. Ltd.</p>
                                <p className="footer-widget__text">
                                    Unit No-203, 2nd floor, Tower- A,<br/>
                                    Spazedge Towers, sector-47, <br/>
                                    Sohna Road, Gurugram, Haryana,<br/>
                                    India , Pin- 122018
                                </p> 
                             </div>
                        </div>
                    </div>
                    <div className="row pt-4">
                        <div className="col-12">
                            <p className="footer-widget__text"> 
                               Briston is a leading real estate development company in India, specializing in luxury residential projects. With a commitment to excellence and innovation, we create iconic living spaces that redefine urban living. Our portfolio includes prestigious developments like in India, offering world-class amenities and unparalleled lifestyle experiences. 
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="main-footer__bottom  wow fadeInUp th-color-2" data-wow-delay="00ms">
                <div className="container">
                    <div className="main-footer__bottom__inner">
                        <p className="main-footer__copyright"> &copy; Copyright <span className="dynamic-year"></span> Briston India Private Limited.</p>
                         {/* <ul className="main-footer__bottom__list list-unstyled">
                            <li><Link href="/contact">Contact Us</Link></li>
                        </ul>  */}
                    </div>
                </div>
            </div>
            <div className="main-footer__shape-one">
                <img src="images/footer-1-2.png" alt="image" />
            </div>
            <div className="main-footer__shape-two">
                <img src="images/footer-1-1.png" alt="image" />
            </div>
        </footer>
    </>
  );
}