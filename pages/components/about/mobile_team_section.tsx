import React,{useState,useEffect} from 'react';
export default function MobileTeamSection() {
const [isShow, setIsShow] = useState(false);
  return (
    <>
            <section className="team-one section-space bg-gray">
            <div className="container">
                <div className="sec-title text-center">
                    <div className="sec-title__top justify-content-center">
                        <span className="line-left"></span>
                        <h6 className="sec-title__tagline bw-split-in-right">Founders</h6>
                        <span className="line-right"></span>
                    </div>
                    <h3 className="sec-title__title bw-split-in-left">
                        Meet Our Visionary Founders
                    </h3>
                </div>
                <div className="row gutter-y-30 ">
                    <div className="col-lg-4 col-md-6 ">
                        <div className="team-card wow fadeInUp" data-wow-duration='1500ms' data-wow-delay='00ms'>
                            <div className="team-card__image">
                                <img src="/images/amit-sir-small.jpg" alt="Amit Kumar" />
                            </div>
                            <div className="team-card__content">
                                <div className="team-card__content__inner" onClick={()=>{setIsShow(!isShow)}}>
                                    <span className="team-card__social"></span>
                                    <div className="team-card__info">
                                        <h3 className="team-card__name">Amit Kumar Gehlot</h3>
                                        {/* <p className="team-card__designation"><b>Chairman</b></p> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 ">
                        <div className={`team-card wow fadeInUp ${isShow?'':'hide'}`} data-wow-duration='1500ms' data-wow-delay='00ms'>
                            <h4>Leader With Unparalleled Record Of Success.</h4>
                           <p>
                                Amit Kumar Gehlot, the visionary founder of Briston Group, has been instrumental in shaping the real estate landscape of India. With a passion for excellence and a commitment to quality, he has led the company to become a leader in luxury residential development. Under his guidance, Briston Group has delivered iconic projects that redefine urban living, setting new standards in design and innovation.
                            </p>
                            <p>
                                Amit's leadership is characterized by a customer-centric approach, ensuring that every project meets the highest standards of quality and sustainability. His dedication to creating exceptional living spaces has earned Briston Group a reputation for excellence in the industry. 
                                With a focus on innovation and a deep understanding of market trends, Amit continues to drive the company's success, making Briston Group a trusted name in real estate development.
                            </p>
                            <p>
                                I began my career as a junior probationary officer in 2004 with Standard Chartered Finance Ltd. I have worked in various sectors in different domains, and I have also been CEO of North Park Technologies India and CEO of BuyProperty.com. I have led Favista.com as Director and Head of Sales and Marketing also played a prominent role in acquisition of Favista.com by ColdWell Banker India and become the Sales Head of New entity. By 2017. I have been associated with many real estate companies in India and abroad, and I have been a part of many successful projects. I have also been a part of many successful projects in the real estate sector, including the development of luxury residential projects in India. 
                            </p>
                        </div>
                    </div>
                </div>
                
               
            </div>
        </section>

    </>
  );
}