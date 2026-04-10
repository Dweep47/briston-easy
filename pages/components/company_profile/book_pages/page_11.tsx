import Image from "next/image";
import React,{useState,useEffect} from "react";

export default function Page11({dispatch,page}:{dispatch:any,page:number}) {
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
     
                <label className={`book__page book__page--13 ${page>=10?'page_show':''}`} >
                  <div className="book__page-front logo_watermark_r">
                    <div className="page__content mt-4">
                      <div className="row df-c">
                        <div className="col-lg-6">
                          <h4 className="prom-title-1">Corporate Social Responsibility</h4>
                          <p className="text-p">
                              MBK believes in giving back to society.
                              Through education, healthcare, and
                              environmental initiatives, MBK strives to
                              uplift communities and build a more
                              sustainable future for all.
                          </p>
                        </div>
                        <div className="col-lg-6">
                          <Image src={'/images/profile/P-06.png'} width={768} height={577} alt="The Mbk Promise" />
                        </div>
                      </div>
                      <div className="row df-c">
                        <div className="col-lg-6">
                          <h4 className="prom-title-1">Sustainability & Design Philosophy</h4>
                          <p className="text-p">
                              MBK’s design philosophy combines
                              modern architecture with environmental
                              consciousness. Every project uses
                              energy-efficient systems, green
                              landscapes, and water-positive designs,
                              ensuring minimal environmental impact
                              and maximum comfort.
                          </p>
                        </div>
                        <div className="col-lg-6">
                          <Image src={'/images/profile/P-07.png'} width={768} height={577} alt="The Mbk Promise" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="book__page-back full-page">
                    <Image src="/images/profile/01(565x800).jpg" alt="MBK" width={565} height={801}/>
                  </div>
                </label>
    </>
  );
}