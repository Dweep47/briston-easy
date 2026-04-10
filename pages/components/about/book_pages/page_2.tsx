import Image from "next/image";
import React,{useState,useEffect} from "react";

export default function Page2({dispatch,page}:{dispatch:any,page:number}) {
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
       <label className={`book__page book__page--2 ${page>=1?'page_show':''}`} >
                        <div className="book__page-front logo_watermark">
                          <div className="page__content">
                            <div className="row page-pt-6">
                              <div className="col-lg-6 col-sm-12">
                                  <Image src={'/images/profile/home_Image.png'} width={452} height={935} alt="home" />
                              </div>
                              <div className="col-lg-6 col-sm-12 pd-c">
                                <h1 className="page__content-title con-title">Contents</h1>
                                <table className="page__content-table">
                                <tbody>
                                  <tr>
                                    <td align="left">Contemplation</td>
                                    <td align="right">4</td>
                                  </tr>
      
                                  <tr>
                                    <td align="left">Observation</td>
                                    <td align="right">5</td>
                                  </tr>
                                  <tr>
                                  
                                    <td align="left">The MBK Identity</td>
                                    <td align="right">6</td>
                                  </tr>
                                  <tr>
                                    
                                    <td align="left">About us</td>
                                    <td align="right">8</td>
                                  </tr>
                                  <tr>
                                    <td align="left">Message from the Founders</td>
                                    <td align="right">9</td>
                                  </tr>
      
                                  <tr>
                                    <td align="left">Visionaries behind MBK</td>
                                    <td align="right">11</td>
                                  </tr>
                                  <tr>
                                    <td align="left">The Founders</td>
                                    <td align="right">12</td>
                                  </tr>
                                  <tr>
                                    <td align="left">Vision, Mission & Core Values</td>
                                    <td align="right">16</td>
                                  </tr>
                                  <tr>
                                    <td align="left">Business Verticals</td>
                                    <td align="right">18</td>
                                  </tr>
                                  <tr>
                                    <td align="left">The MBK Promise</td>
                                    <td align="right">20</td>
                                  </tr>
                                  <tr>
                                    <td align="left">Corporate Social Responsibility</td>
                                    <td align="right">21</td>
                                  </tr>
                                  <tr>
                                    <td align="left">Sustainability & Design Philosophy</td>
                                    <td align="right">21</td>
                                  </tr>
                                </tbody>
                            </table>
                              </div>
      
                            </div>
                            
                          </div>
                        </div>
                        <div className="book__page-back logo_watermark_l">
                          <div className="page__content">
                              <h2 className="text-1">Contemplation</h2>
                              <h4>
                                How do we measure success beyond numbers?
                                How does one transform success into significance?
                                Is the truest success found in living life your own way?
                              </h4>
                              <h2>or</h2>
                              <h4>
                                Would you choose to follow your heart and truly live?
                                Style your life — where every night feels celestial.
                              </h4>
                            {/* <div className="page__number">3</div> */}
                          </div>
                          <div className="bottom-img">
                            <img src={'/images/profile/mountain_l.png'} />
                          </div>
                        </div>
                      </label>
    </>
  );
}