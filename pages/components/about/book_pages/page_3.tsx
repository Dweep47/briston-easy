import Image from "next/image";
import React,{useState,useEffect} from "react";

export default function Page3({dispatch,page}:{dispatch:any,page:number}) {
  const [loading,setLoading]=useState(true);
  useEffect(()=>{
    setLoading(false);
  },[]);
  if(loading){
    return (
      <>
       <label className="book__page book__page--4 th-bg d-flex justify-content-center align-items-center">
          <h6>Loading ...</h6>
       </label>
      </>
    )
  }

  return (
    <>
       <label className={`book__page book__page--5 ${page>=2?'page_show':''}`} >
                  <div className="book__page-front logo_watermark_r">
                    <div className="page__content">
                      <h2 className="text-1">Observation</h2>
                        <h4>
                          Experience wellness and vitality amid nature’s
                          serenity, surrounded by luxury, accessibility,
                          and peace — your true sanctuary awaits.
                        </h4>
                        <h2>or</h2>
                        <h4>
                          Find a home that mirrors your individuality —
                          where every moment is a celebration of life.
                        </h4>
                        {/* <div className="page__number">4</div> */}
                    </div>
                    <div className="bottom-img">
                        <img src={'/images/profile/mountain_r.png'} />
                    </div>
                  </div>
                  <div className="book__page-back logo_watermark_l">
                    <div className="page__content ext-pd">
                      <div className="row">
                        <div className="col-lg-4">
                          <img  src="/images/profile/mahadev.png"/>
                          <span className="mbk-t">M</span>
                        </div>
                        <div className="col-lg-4">
                          <img  src="/images/profile/balaji.png"/>
                          <span className="mbk-t">B</span>
                        </div>
                        <div className="col-lg-4">
                          <img  src="/images/profile/khatushyam_ji.png"/>
                          <span className="mbk-t">K</span>
                        </div>
                      </div>
                      <div className="row">
                          <div className="col-lg-12 pt-2">
                              <h3 className="abt-hd">The Spirit and Symbolism Behind The MBK Identity</h3>
                              <p className="abt-txt"><b>Where Divine Inspiration Meets Timeless Design</b></p>
                              <p className="abt-txt">At MBK Luxury Real Estate Group, our identity is not just a mark - it is a philosophy, a divine
                                confluence of spirituality, vision, and purpose. The name MBK is derived from sacred
                                inspirations, symbolizing the eternal blessings and guiding forces that shape our journey in
                                the world of real estate. Every element of our emblem - from its sacred geometry to its colors
                                and symbols - has been thoughtfully chosen to reflect our ethos of growth, prosperity, and
                                excellence.
                              </p>
                              <p className="abt-txt">
                                  <b>Each letter of MBK draws its strength from revered deities, representing protection, prosperity, and progress:</b>
                              </p>
                          </div>
                      </div>
                      <div className="row">
                        <div className="col-lg-12">
                            <div className="tdf">
                              <span>
                                <img src={'/images/profile/small_icon.png'} />
                                The Divine Foundation of MBK
                              </span>
                            </div>
                        </div>
                        <div className="col-lg-12">
                          <p className="abt-txt">
                            <b>M stands for Mahakaal Ji</b> - the eternal embodiment of Lord Shiva, symbolizing
                                transformation, resilience, and the power to build foundations that transcend time.
                                Mahakaal's energy inspires us to create spaces that are strong, enduring, and spiritually
                                grounded.
                          </p>
                            <p className="abt-txt"><b>B stands for Balaji</b> - invoking the divine blessings of Salasar Balaji, Mehndipur Balaji, and
                                Bageshwar Balaji. Balaji represents devotion, protection, and unwavering success —
                                virtues that guide our work ethic and define our relationship with clients and stakeholders.
                                </p>
                          <p className="abt-txt">
                            <b>K stands for Khatu Shyam Ji and Maa Kali</b> - embodiments of courage, victory, and divine
                            energy. They inspire us to overcome challenges with faith and fortitude while ensuring that
                            every MBK creation carries the essence of positivity, power, and purpose.

                          </p>
                        </div>
                        <p className="abt-txt pt-2">
                          Together, these divine forces form the spiritual cornerstone of MBK - guiding us as we design, develop, and deliver extraordinary real estate experiences.
                        </p>
                      </div>
                        {/* <div className="page__number">5</div> */}
                    </div>
                  </div>
                </label>
    </>
  );
}