import Link from "next/link";
import React,{useState,useEffect} from 'react';
import { usePathname } from "next/navigation";
export default function Header() {
const [isOpen, setIsOpen] = useState(false);
const [expanded, setExpanded] = useState(false);
const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    console.log("Pathname:", pathname);
    return () => window.removeEventListener("scroll", handleScroll);
    
  }, []);
  return (
    <>
         <header className={`main-header main-header--one sticky-header sticky-header--normal ${scrolled ? "sticky-header--cloned active" : ""}`}>
            <div className="main-header__bottom">
                <div className="container-fluid">
                    <div className="main-header__inner">
                        <div className="main-header__logo logo-retina">
                            <Link href="/">
                                <img src="images/logo.png" alt="Briston Group Logo" />
                                {/* Briston */}
                            </Link>
                        </div>
                        <div className="main-header__middle">
                            <nav id="nav" className="main-header__nav main-menu">
                                <ul className="main-menu__list">
                                    <li className={pathname === "/" ? "current" : ""}>
                                        <Link href="/">Home</Link>
                                    </li>
                                    <li className={pathname === "/residential" ? "current" : ""}>
                                        <Link href="/residential">Residential</Link>
                                    </li>
                                     <li className={pathname === "/commercial" ? "current" : ""}>
                                        <Link href="/commercial">Commercial</Link>
                                    </li>
                                     <li className={pathname === "/retail" ? "current" : ""}>
                                        <Link href="/retail">Retail</Link>
                                    </li>
                                    <li className={pathname === "/township" ? "current" : ""}>
                                        <Link href="/township">Township</Link>
                                    </li>
                                    {/* <!-- <li>
                                        <a href="./wellness.html">Wellness Concept</a>
                                    </li> --> */}
                                     <li className={pathname === "/about-us" ? "current" : ""}>
                                        <Link href="/about-us">About Us</Link>
                                    </li>
                                    {/* <li className={pathname === "/company-profile" ? "current" : ""}>
                                        <Link href="/company-profile">Company Profile</Link>
                                    </li> */}
                                    <li className={pathname === "/contact-us" ? "current" : ""}>
                                        <Link href="/contact-us">Contact Us</Link>
                                    </li>
                                </ul>
                            </nav>
                            <div className="main-header__middle__right">
                                <div className="mobile-nav__btn mobile-nav__toggler" onClick={()=>setExpanded(true)}>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </div>
                            </div>
                        </div>
                        <div className="main-header__right">
                            <a href="#" className="main-header__laptop-menu header-right-sidebar__toggler" onClick={(e)=>{e.preventDefault();setIsOpen(true);}}><i className="icon-laptop-menu" aria-hidden="true"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </header>

    <div className={`mobile-nav__wrapper ${expanded ? "expanded" : ""}`}>
        <div className="mobile-nav__overlay mobile-nav__toggler" onClick={()=>setExpanded(false)}></div>
        <div className="mobile-nav__content">
            <span className="mobile-nav__close mobile-nav__toggler" onClick={()=>setExpanded(false)}><i className="fa fa-times"></i></span>
            <div className="logo-box">
                <img src="/images/logo.png" alt="Briston Group Logo" width="200" height="85" />
            </div>
            <div className="mobile-nav__container">
                <ul className="main-menu__list">
                    <li className={pathname === "/" ? "current" : ""}>
                        <Link href="/">Home</Link>
                    </li>
                    <li className={pathname === "/residential" ? "current" : ""}>
                        <Link href="/residential">Residential</Link>
                    </li>
                    <li className={pathname === "/commercial" ? "current" : ""}>
                        <Link href="/commercial">Commercial</Link>
                    </li>
                    <li className={pathname === "/retail" ? "current" : ""}>
                        <Link href="/retail">Retail</Link>
                    </li>
                    <li className={pathname === "/township" ? "current" : ""}>
                        <Link href="/township">Township</Link>
                    </li>
                    <li className={pathname === "/about-us" ? "current" : ""}>
                        <Link href="/about-us">About Us</Link>
                    </li>
                     {/* <li className={pathname === "/company-profile" ? "current" : ""}>
                        <Link href="/company-profile">Company Profile</Link>
                    </li> */}
                    <li className={pathname === "/contact-us" ? "current" : ""}>
                        <Link href="/contact-us">Contact Us</Link>
                    </li>
                </ul>
            </div>
            <ul className="mobile-nav__contact list-unstyled">
                <li>
                    <span className="mobile-nav__contact__icon"><i className="fa fa-envelope"></i></span>
                    <a href="mailto:info@briston.co.in">info@briston.co.in</a>
                </li>
                <li>
                    <span className="mobile-nav__contact__icon"><i className="fa fa-phone-alt"></i></span>
                    <a href="tel:+919871354814">+91 9871354814</a>
                </li>
            </ul>
            {/* <!-- <div className="social-links">
                <a href="https://facebook.com/"><i className="fab fa-facebook-f" aria-hidden="true"></i></a>
                <a href="https://x.com/"><i className="fab fa-twitter" aria-hidden="true"></i></a>
                <a href="https://linkedin.com/"><i className="fab fa-linkedin-in" aria-hidden="true"></i></a>
                <a href="https://google.com/"><i className="fab fa-google" aria-hidden="true"></i></a>
            </div> --> */}
            <div className="social-links">
               <a href="https://www.facebook.com/bristonworld" target="_blank"><i className="fab fa-facebook-f" aria-hidden="true"></i><span className="sr-only">Facebook</span></a>
                <a href="https://www.youtube.com/@bristonworld" target="_blank"><i className="fab fa-youtube"></i> <span className="sr-only">Youtube</span></a>
                <a href="https://www.instagram.com/bristonworld" target="_blank"><i className="fab fa-instagram" aria-hidden="true"></i><span className="sr-only">Instagram</span></a>
                <a href="https://www.linkedin.com/company/bristonworld"  target="_blank"><i className="fab fa-linkedin-in" aria-hidden="true"></i><span className="sr-only">Linkedin</span></a>
            </div>
        </div>
    </div>

    <div className={`header-right-sidebar ${isOpen ? "isActive" : ""}`}>
        <div className="header-right-sidebar__overlay header-right-sidebar__toggler" onClick={()=>setIsOpen(false)}></div>
        <div className="header-right-sidebar__content">
            <span className="header-right-sidebar__close header-right-sidebar__toggler" onClick={()=>setIsOpen(false)}><i className="fa fa-times"></i></span>
            <div className="header-right-sidebar__logo-box">
                <img src="/images/logo.png" alt="Briston Logo" width="200" height="85" />
            </div>
            <div className="header-right-sidebar__container">
                <div className="header-right-sidebar__container__about">
                    <h3 className="header-right-sidebar__container__title">  
                        About Briston
                    </h3>
                    <p className="header-right-sidebar__container__text"> 
                        Briston is a leading real estate development company in India, specializing in luxury residential projects. With a commitment to excellence and innovation, we create iconic living spaces that redefine urban living. Our portfolio includes prestigious developments like in India, offering world-class amenities and unparalleled lifestyle experiences. 
                    </p>
                </div>
                <div className="header-right-sidebar__container__contact">
                    <h3 className="header-right-sidebar__container__title">Contact Us</h3>
                    <ul className="header-right-sidebar__container__list list-unstyled">
                        <li className="header-right-sidebar__container__list__item">
                            <div className="header-right-sidebar__container__icon">
                                <i className="fas fa-envelope"></i>
                            </div>
                            <div className="header-right-sidebar__container__list__content">
                                <span className="header-right-sidebar__container__list__title">send email</span>
                                <a href="mailto:info@briston.co.in">info@briston.co.in</a>
                            </div>
                        </li>
                        <li className="header-right-sidebar__container__list__item">
                            <div className="header-right-sidebar__container__icon">
                                <i className="icon-phone-call"></i>
                            </div>
                            <div className="header-right-sidebar__container__list__content">
                                <span className="header-right-sidebar__container__list__title">Call agent</span>
                                <a href="tel:+919871354814">+91 9871354814</a>
                            </div>
                        </li>
                    </ul>
                </div>
              
            </div>
        </div>
    </div>
 
    </>
  );
}