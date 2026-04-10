import Image from "next/image";
import React,{useState,useEffect} from "react";

export default function Page4({dispatch,page}:{dispatch:any,page:number}) {
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
         <label className={`book__page book__page--6 ${page>=3?'page_show':''}`} >
                        <div className="book__page-front logo_watermark_r">
                          <div className="page__content">
                            <div className="row">
                              <div className="col-lg-12">
                                <div className="tdf">
                                    
                                    <span>
                                      <img src={'/images/profile/small_icon.png'} />
                                      The Sacred Geometry of Prosperity
                                    </span>
                                  </div>
                              </div>                        
                            </div>
                            <div className="row pt-2">
                              <div className="col-lg-3">
                                <img src={'/images/profile/emblem.png'} />
                              </div>
                              <div className="col-lg-9 pl-0">
                                <p className="abt-txt-2">The hexagonal emblem at the heart of the MBK logo is inspired by the Shree Yantra
                                    of Goddess Lakshmi, the universal symbol of abundance, harmony, and prosperity.
                                    The six sides represent balance - between heaven and earth, material and spiritual,
                                    creation and continuity. For MBK, this geometry reflects the very foundation of real
                                    estate - structure, symmetry, and growth - all harmoniously aligned with divine
                                    blessings.</p>
                              </div>
                            </div>
                            <div className="row pt-2">
                                <div className="col-lg-12">
                                 <p className="abt-txt-2">
                                  Within the emblem lies the Sun and Moon, drawn from the sacred flag of Shri Dwarkadhish Vishnu Ji,
                                  symbolizing equilibrium and the eternal rhythm of creation. The Sun embodies vision, strength, and
                                  expansion, while the Moon represents calm, grace, and intuition - together, they signify the perfect
                                  balance we strive for in every development we create.
                                  </p> 
                                </div>
                            </div>
                            <div className="row pt-2">
                                <div className="col-lg-12">
                                  <div className="tdf">
                                    <span>
                                      <img src={'/images/profile/small_icon.png'} />
                                      The Colors of Faith and Fortune
                                    </span>
                                  </div>
                              </div>
                              <div className="col-lg-12">
                                <p className="abt-txt-2">
                                  The color palette of the MBK identity carries profound meaning rooted in both spirituality and global
      luxury aesthetics. The Royal Blue reflects Lord Shani Dev's divine energy - a hue that stands for integrity,
      depth, discipline, and trust. It represents our unwavering commitment to ethical excellence and stable
      growth. The Gold gradient signifies the blessings of Lord Kuber, the divine custodian of wealth. It reflects
      prosperity, opulence, and success - values synonymous with MBK's approach to luxury real estate.
      Together, blue and gold form a perfect harmony - the union of faith and fortune, tradition and innovation,
      design and destiny.
      
                                </p>
                              </div>
                            </div>
                            <div className="row pt-2">
                                <div className="col-lg-12">
                                  <div className="tdf">
                                    <span>
                                       <img src={'/images/profile/small_icon.png'} />
                                      A Vision Rooted in Divinity, Driven by Excellence
                                    </span>
                                  </div>
                              </div>
                              <div className="col-lg-12">
                                <p className="abt-txt-2">
                                    At MBK Luxury Real Estate Group, we believe that every structure is more than architecture - it is a
                                    manifestation of vision, energy, and divine intent. Our projects span Residential, Commercial, and
                                    Hospitality segments, each crafted to international standards of design and quality. Yet beyond luxury,
                                    our foundation remains spiritual - guided by divine inspiration and dedicated to creating environments
                                    that nurture prosperity, happiness, and holistic well-being. The MBK emblem serves as our eternal
                                    reminder that real estate, when built with faith and integrity, becomes more than property - it becomes a
                                    legacy of purpose and prosperity.
      
                                </p>
                              </div>
                            </div>
      
                            <div className="row pt-2">
                                <div className="col-lg-12">
                                  <div className="tdf">
                                    <span>
                                      <img src={'/images/profile/small_icon.png'} />
                                      MBK - The Divine Blueprint of Modern Real Estate
                                    </span>
                                  </div>
                              </div>
                              <div className="col-lg-12">
                                <p className="abt-txt-2">
                                    In essence, the MBK identity stands at the intersection of spiritual wisdom and global sophistication. It
      celebrates India's sacred heritage while embracing the precision, innovation, and design sensibilities of
      the modern world. Every color, line, and symbol is a testament to our belief that success is not merely
      constructed - it is consecrated. Under the blessings of Mahakaal, Balaji, Khatu Shyam Ji, Maa Kali, and
      Mahalakshmi, and with the energy of the Sun, Moon, and Kuber, MBK Luxury Real Estate Group continues
      to redefine the meaning of growth - one divine creation at a time.
      
      
                                </p>
                              </div>
                            </div>
                            <div className="d-flex pt-2 abt-footer">
                              <div className="fc">
                                <img src="/images/profile/small_icon_2.png" alt="mbk" />
                                <h6>Guided by blessings.</h6>
                              </div>
                              <div className=" fc">
                                <img src="/images/profile/small_icon_2.png" alt="mbk" />
                                <h6>Built with belief.</h6>
                              </div>
                              <div className=" fc">
                                <img src="/images/profile/small_icon_2.png" alt="mbk" />
                                <h6>Dedicated to excellence.</h6>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="book__page-back logo_watermark_l">
                          <div className="page__content">
                            <div className="row">
                              <div className="col-lg-12 mt-4">
                                <Image className="m-a" src={'/images/profile/MBK_Table.png'} width={400} height={400} alt="" />
                              </div>
                              <div className="col-lg-12 p-0-2">
                                <h3 className="page-heading txt-th">About MBK Luxury Real Estate Group</h3>
                                <p className="abt-txt">
                                  Founded in 2025, MBK Luxury Real Estate Group represents the new era of Indian real estate
                                    excellence where divine inspiration meets global development standards. Established by
                                    three visionary leaders - Amit Kumar Gehlot, Sachin Sharma, and Akshay Khatana - MBK was
                                    born with a mission to redefine luxury living through trust, innovation, and timeless design.
                                    Blessed by Mahakaal Ji, Balaji, Khatu Shyam Ji, and Maa Kali & Shri Vishnu Dwarkadhish Ji.
                                    MBK merges spirituality with sophistication, creating developments that embody prosperity,
                                    faith, and lasting value. At the heart of MBK is a culture shaped by faith, legacy, integrity, and
                                    innovation. These aren’t just words to us — they are principles that influence every decision
                                    we make, every partnership we build, and every detail we execute. We build with conscience,
                                    lead with clarity, and aspire to leave behind not just a portfolio of projects, but a legacy of
                                    excellence. From boutique residences to landmark developments, our work is rooted in
                                    creating timeless value. We approach every project with a blend of artistic vision,
                                    architectural precision, and a deep understanding of what modern lifestyles demand.
                                </p>
                              </div>
                            </div>
      
                          </div>
                        </div>
                      </label>
    </>
  );
}