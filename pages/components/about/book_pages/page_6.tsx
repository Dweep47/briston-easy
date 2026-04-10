import Image from "next/image";
import React,{useState,useEffect} from "react";

export default function Page6({dispatch,page}:{dispatch:any,page:number}) {
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
       <label className={`book__page book__page--8 ${page>=5?'page_show':''}`} >
                        <div className="book__page-front watermark_v_r">
                          <div className="page__content df-c">
                            <div className="row">
                              <div className="col-lg-12 z-9">
                                  <h2 className="page-heading-h2">“Visionaries behind MBK”</h2>
                                  <div className="txt-box">
                                      <p>
                                        <b>MBK Luxury Real Estate Group</b> is founded
                                        by <b>Amit Kumar Gehlot, Sachin Sharma, and
                                        Akshay Khatana</b> — three visionaries with a
                                        combined experience of more than 45 years
                                        across financial services, real estate,
                                        technology, land development construction
                                        and Project Management. Their leadership
                                        unites strategy, experience, and faith, driving
                                        MBK’s mission to create luxury spaces that
                                        reflect prosperity, purpose, and perfection.
                                      </p>
                                  </div>
                              </div>
                            </div>
                          </div>
                        </div>
      
                       
                      <div className="book__page-back logo_watermark_l">
                          <div className="page__content brd-l">
                              <div className="row">
                                <div className="col-lg-5 z-9">
                                    <Image className="img-b" src={'/images/profile/akshay.jpg'} width={350} height={900} alt="Akshay Khatana" />
                                </div>
                                <div className="col-lg-7 pr">
                                    <div className="name-h">
                                      <span className="name">Akshay Khatana</span>
                                      <span className="title">Managing Director</span>
                                    </div>
                                    <p className="abt-txt nt ftl-12 ">
                                      <b>Mr. Akshay Khatana</b> brings youthful energy, modern
                                      design sensibility, and strategic foresight to MBK’s
                                      leadership. A new-age thinker with a deep
                                      understanding of the evolving real estate landscape,
                                      he combines innovation with practicality to redefine
                                      how luxury living is envisioned and experienced. With
                                      a strong background in real estate land development,
                                      investment, and business strategy, Mr. Khatana has
                                      been instrumental in identifying high-potential
                                      opportunities and aligning them with 
                                    </p>
                                </div>
                                <div className="col-lg-12">
                                  <p  className="abt-txt exp ftl-12 text-justify">
                                     MBK’s long-term vision for sustainable and transformative growth. His
                                      entrepreneurial mindset and creative foresight have
                                      enabled MBK to expand its horizons and adapt to the
                                      changing aspirations of modern buyers. He believes
                                      that true luxury lies in a balance of design excellence,
                                      functionality, and emotional connection. This
                                      philosophy is reflected in every MBK project — where
                                      contemporary architecture meets cultural depth, 
                                      and where aesthetics are seamlessly integrated with comfort, technology, and
                                      sustainability. His leadership ensures that MBK is not only a brand that builds
                                      properties but one that crafts experiences and legacies. Mr. Khatana’s approach to
                                      leadership is collaborative, transparent, and driven by innovation. He continuously
                                      encourages his teams to challenge convention, think creatively, and push
                                      boundaries — resulting in developments that stand out for their originality and
                                      enduring value. His ability to combine global design trends with Indian sensibilities
                                      has become a hallmark of MBK’s architectural identity. Each project developed
                                      under his guidance reflects an attention to detail that prioritizes the human
                                      experience, offering spaces that inspire pride, harmony, and belonging. Under his
                                      visionary leadership, MBK continues to strengthen its position as a new-generation
                                      developer that embodies both luxury and purpose. He emphasizes the importance
                                      of environmentally responsible design, integrating green technologies, waterpositive systems, and nature-driven planning into every project. His focus on
                                      sustainability ensures that MBK’s developments not only elevate lifestyles but also
                                      contribute positively to communities and the environment. Mr. Khatana’s forwardthinking approach has redefined MBK’s core philosophy — that real estate is not
                                      merely about construction, but about creating spaces that tell stories, nurture wellbeing, and inspire connection. His deep understanding of consumer aspirations
                                      enables MBK to anticipate future trends, ensuring that every development remains
                                      timeless and relevant for generations. Through his leadership, MBK has become
                                      synonymous with innovation, trust, and transformative growth. Each project under
                                      his direction sets new benchmarks in luxury, design innovation, and sustainability,
                                      reaffirming MBK’s commitment to excellence. He envisions MBK as a global brand
                                      that reflects India’s progressive spirit while preserving its rich heritage — a company
                                      that builds not just landmarks, but lasting impressions. Driven by his passion,
                                      precision, and progressive mindset, Mr. Akshay Khatana continues to guide MBK
                                      toward a future defined by luxury with purpose, architecture with emotion, and
                                      development with vision — shaping the next chapter of real estate in India through
                                      creativity, responsibility, and innovation.
      
                                  </p>
                                </div>
                              </div>
                          </div>
                        </div>
                      </label>
    </>
  );
}