import Image from "next/image";
import React,{useState,useEffect} from "react";

export default function Page9({dispatch,page}:{dispatch:any,page:number}) {
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
       <label className={`book__page book__page--11 ${page>=8?'page_show':''}`} >
                  <div className="book__page-front logo_watermark_r_v">
                    <div className="page__content no-content"></div>
                  </div>
                  <div className="book__page-back bv_watermark_l">
                    <div className="page__content">
                        <div className="box-1">
                            <h6>Hospitality</h6>
                            <p className="box-p">Blending world-class service with contemporary design. We
                                  redefine hospitality through
                                  innovation, comfort, and
                                  personalized experiences</p>
                        </div>
                        <div className="box-2">
                            <h6>Lands</h6>
                            <p className="box-p">
                                Own a piece of earth where
                                dreams take root. Land gives
                                you space to build, breathe, and
                                belong.
                            </p>
                        </div>
                        <div className="last-box">
                          <h5 className="box-title">Business Verticals</h5>
                          <p className="box-p">Luxury Residential Developments – Crafting exclusive villas, gated
                            communities, and farm estates for refined living. Commercial Real
                            Estate – Creating premium office and retail spaces with superior
                            design and functionality. Hospitality and Resort Living – Developing
                            world-class resort-style communities that blend nature and
                            wellness. Land Development and Investment – Managing strategic
                            land acquisitions and master-planned developments.
                            </p>
                        </div>
                    </div>
                  </div>
                </label>
    </>
  );
}