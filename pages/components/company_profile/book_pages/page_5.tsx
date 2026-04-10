import Image from "next/image";
import React,{useState,useEffect} from "react";

export default function Page5({dispatch,page}:{dispatch:any,page:number}) {
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
      <label className={`book__page book__page--7 ${page>=4?'page_show':''}`} >
                        <div className="book__page-front logo_watermark_r">
                          <div className="page__content">
                           <div className="row">
                              <div className="col-lg-12 mt-4">
                                <Image className="m-a" src={'/images/profile/signature.png'} width={400} height={400} alt="" />
                              </div>
                              <div className="col-lg-12 p-0-2">
                                <h3 className="page-heading txt-th">Message from the Founders</h3>
                                <p className="abt-txt">
                                  At MBK, we don’t just build projects — we build possibilities, emotions, and experiences that
                                  last a lifetime. Real estate, for us, transcends the conventional notion of concrete and glass.
                                  It’s a sacred responsibility — to shape environments where people thrive, families grow, and
                                  communities come alive. Every project is a manifestation of our belief that true luxury lies not
                                  just in aesthetics, but in the harmony between purpose and progress. With more than four
                                  decades of combined experience in the real estate and development space, MBK is driven by
                                  a clear mission: to redefine Indian luxury real estate by setting new standards in quality,
                                  transparency, and visionary design. We believe that every square foot we develop must carry
                                  meaning — grounded in trust, elevated by innovation, and guided by integrity. As we look to
                                  the future, we remain committed to shaping communities that reflect the aspirations of a new
                                  India — sophisticated, sustainable, and soulfully designed. Because at MBK, we don’t just
                                  create spaces to live in. We will create places to belong. Our commitment is to deliver not just
                                  homes, but elevated living experiences — spaces that inspire, nurture, and endure.
                                </p>
                              </div>
                            </div>
                              
                          </div>
                        </div>
                        <div className="book__page-back watermark_v_l">
                          <div className="page__content">
                              <h2 className="text-1">Page 9</h2>
                          </div>
                        </div>
                      </label>
      
    </>
  );
}