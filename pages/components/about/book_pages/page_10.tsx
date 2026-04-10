import Image from "next/image";
import React,{useState,useEffect} from "react";

export default function Page10({dispatch,page}:{dispatch:any,page:number}) {
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
       <label className={`book__page book__page--12 ${page>=9?'page_show':''}`} >
                        <div className="book__page-front bv_watermark_r">
                          <div className="page__content df-c">
                            <div className="row">
                              <div className="col-lg-12 z-9">
                                 <div className="box-3">
                                  <h6>Farm Houses</h6>
                                  <p className="box-p">
                                    Escape the city and embrace
                                    serene living surrounded by
                                    nature. Our farmhouses blend
                                    rustic charm with modern luxury
                                    for a life of pure tranquility.
                                  </p>
                              </div>
                              <div className="box-4">
                                  <h6>Resorts</h6>
                                  <p className="box-p">
                                    Where luxury meets nature in
                                      perfect harmony. Our resorts
                                      offer curated experiences
                                      designed to rejuvenate your
                                      mind, body, and soul.</p>
                              </div>
                              <div className="box-5">
                                  <h6>Villas</h6>
                                  <p className="box-p">
                                    Where architecture meets artistry
                                    and every corner reflects your
                                    refined taste. Our villas redefine
                                    luxury living with space, serenity,
                                    and sophistication.
                                  </p>
                              </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="book__page-back logo_watermark_l">
                          <div className="page__content">
                              <div className="row">
                                <div className="col-lg-12">
                                  <h4 className="prom-title">The MBK Promise</h4>
                                </div>
                              </div>
                              <div className="row df-c">
                                <div className="col-lg-8">
                                 <p className="text-p">
                                  <b>Faith in Relationships and Communities:</b><br/>
                                  We believe in faith as the foundation of strong
                                  relationships and thriving communities. In every real estate
                                  journey, we prioritize trust, connection, and a deep
                                  commitment to the people we serve.
                                 </p>
                                </div>
                                <div className="col-lg-4">
                                  <Image src={'/images/profile/P-01.png'} width={768} height={577} alt="The Mbk Promise" />
                                </div>
                              </div>
                              <div className="row df-c">
                                <div className="col-lg-4">
                                 <Image src={'/images/profile/P-02.png'} width={768} height={577} alt="The Mbk Promise" />
                                </div>
                                <div className="col-lg-8">
                                  <p className="text-p">Integrity as our culture: It guides every decision, every
                                  deal, and every client interaction. We build trust through
                                  transparency, honesty, and an unwavering commitment
                                  to doing what's right.
                                  </p>
                                </div>
                              </div>
                              <div className="row df-c">
                                <div className="col-lg-8">
                                 <p className="text-p">Innovation as our constant: Innovation is our constant,
                                    empowering us to deliver smarter, faster, and more
                                    personalized real estate experiences. From cutting-edge
                                    marketing to data-driven decisions, we embrace new ways
                                    to add value for our clients every day.</p>
                                </div>
                                <div className="col-lg-4">
                                      <Image src={'/images/profile/P-03.png'} width={768} height={577} alt="The Mbk Promise" />
                                </div>
                              </div>
                              <div className="row df-c">
                                <div className="col-lg-4">
                                 <Image src={'/images/profile/P-04.png'} width={768} height={577} alt="The Mbk Promise" />
                                </div>
                                <div className="col-lg-8">
                                  <p className="text-p">Luxury as our language: Luxury is our language, spoken
                                  through timeless design, premium finishes, and
                                  exceptional attention to detail. Every space is crafted to
                                  offer not just comfort, but a statement of elegance and
                                  elevated living.</p>
                                </div>
                              </div>
                              <div className="row df-c">
                                <div className="col-lg-8">
                                 <p className="text-p">Legacy is our promise: Building more than homes, we
                                    create enduring value that stands the test of time. Every
                                    project is a commitment to quality, vision, and a lasting
                                    impact on the communities we serve.</p>
                                </div>
                                <div className="col-lg-4">
                                    <Image src={'/images/profile/P-05.png'} width={768} height={577} alt="The Mbk Promise" />
                                </div>
                              </div>
      
                          </div>
                        </div>
                      </label>
      
    </>
  );
}