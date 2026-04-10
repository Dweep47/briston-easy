import Image from "next/image";
import React,{useState,useEffect} from "react";

export default function Page8({dispatch,page}:{dispatch:any,page:number}) {
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
       <label className={`book__page book__page--10 ${page>=7?'page_show':''}`} >
                       <div className="book__page-front logo_watermark_r">
                         <div className="page__content df-c">
                           <div className="row">
                             <div className="col-lg-12 z-9">
                                <div className="award-th">
                                   <span className="text-white z-9 award-txt">70+ Awards with huge media coverage</span>
                                </div>
                                <Image className="m-auto" src={'/images/profile/awards.png'} width={450} height={600} alt="awards" />
                                <Image className="m-auto" src={'/images/profile/awards_logos.png'} width={700} height={300} alt="awards" />
                             </div>
                           </div>
                         </div>
                       </div>
     
                       <div className="book__page-back logo_watermark_l_v">
                         <div className="page__content">
                           <div className="row">
                             <div className="col-lg-12">
                                 <h3 className="txt-th v-h3">Vision, Mission & Core Values</h3>
                             </div>
                             <div className="col-lg-12 pr">
                               <div className="vision_heading">
                                 <span>
                                   <h6>Vision</h6>
                                 </span>
                               </div>
                             </div>
                             <div className="col-lg-12 pr">
                                 <p className="vis-text">
                                   To be India's most trusted and admired luxury real estate
                                   brand, where divine inspiration meets
                                   world-class innovation.
                                   Our vision is to create landmark destinations that embody
                                   prosperity, balance, and timeless beauty, transforming the
                                   way people live, invest, and experience real estate.
                                 </p>
                               </div>
                           </div>
                           <div className="row">
                             <div className="col-lg-12 pr">
                               <div className="vision_heading">
                                 <span>
                                   <h6>Mission</h6>
                                 </span>
                               </div>
                             </div>
                             <div className="col-lg-12 pr">
                               <p className="vis-text">
                                 At MBK Luxury Real Estate Group, our mission is to blend
                                 spirituality with sophistication, delivering developments that
                                 inspire pride and prosperity.
                                 We strive to craft each project
                                 with precision, integrity, and a deep sense of purpose - turning every square foot into a sanctuary of growth,
                                 harmony, and excellence.
                               </p>
                             </div>
                           </div>
     
                           <div className="row">
                             <div className="col-lg-12 pr">
                               <div className="vision_heading">
                                 <span>
                                   <h6>Core Value</h6>
                                 </span>
                               </div>
                             </div>
                             <div className="col-lg-12 pr">
                               <p className="vis-text">
                                <b>Faith and Purpose:</b> Every MBK creation begins with divine
                                 blessings and is guided by a higher purpose that aligns vision
                                 with virtue.
                               </p>
                               <p className="vis-text-2">
                                 <b>Integrity and Trust:</b>
                                 We build relationships as strong as the
                                 structures
                                 we create, grounded in honesty, transparency, and
                                 respect.
                               </p>
                               <p className="vis-text-2">
                                 <b>Innovation and Excellence:</b>
                                 Continuous evolution drives us to
                                 deliver design brilliance, sustainable practices, and globalquality craftsmanship.
                               </p>
                               <p className="vis-text-2">
                                 <b>Prosperity and Growth:</b>          
                                 We believe in creating long-term
                                 value for our clients, partners, and
                                 communities through
                                 ethical and intelligent development. 
                               </p>
                               <p className="vis-text-2">
                                 <b>Legacy and Longevity:</b>          
                                 Our projects are more than properties; they are living legacies designed to inspire generations to come.
                               </p>
                               <p className="vis-text-2">
                                 <b>MBK Luxury Real Estate Group:</b>          
                                  Building a Future Blessed by Faith, Strengthened by Vision, and Defined by Excellence.
                               </p>
                             </div>
                           </div>
                         </div>
                       </div>
                     </label>
    </>
  );
}