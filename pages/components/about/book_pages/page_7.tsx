import Image from "next/image";
import React,{useState,useEffect} from "react";

export default function Page7({dispatch,page}:{dispatch:any,page:number}) {
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
     <label className={`book__page book__page--9 ${page>=6?'page_show':''}`} >
                       <div className="book__page-front logo_watermark_r">
                         <div className="page__content brd-r">
                           <div className="row">
                             <div className="col-lg-7 pr">
                                   <div className="name-r">
                                     <span className="name-ri">Sachin Sharma</span>
                                     <span className="title-ri">Joint Managing Director</span>
                                   </div>
                                   <p className="abt-txt nt ftl-12 text-justify">
                                    <b>Mr. Sachin Sharma</b> is a seasoned professional
                                       with a rich and diverse background in real estate
                                       investment, land development, construction
                                       management, infrastructure development, and
                                       operations. With decades of hands-on
                                       experience and a visionary outlook, he has
                                       played a pivotal role in transforming ideas into
                                       architectural realities that stand as testaments to
                                       precision, sustainability, and excellence. His
                                       technical expertise and executional discipline
                                       ensure that every MBK project upholds the
                                       highest standards of design innovation,
                                       environmental harmony, and structural integrity.
                                       Known for his strategic foresight and practical
                                       insight, Mr. Sharma brings together creativity and
                                       technical mastery to drive MBK’s mission
                                       
                                   </p>
                               </div>
                             <div className="col-lg-5 z-9">
                               <Image className="img-b-r" src={'/images/profile/sachin.jpg'} width={350} height={900} alt="Sachin Sharma" />
                             </div>
                             <div className="col-lg-12">
                                 <p  className="abt-txt exp_r ftl-12 text-justify">
                                   forward. He believes that true leadership in real
                                   estate goes beyond building structures - it lies in
                                   creating ecosystems that enrich lives, inspire communities, and leave a lasting
                                   legacy. His hands-on approach ensures that every detail, from concept to
                                   completion, reflects perfection and purpose. Guided by his belief in meticulous
                                   planning and flawless execution, he leads teams with clarity, commitment, and
                                   collaboration, ensuring seamless integration between architecture, engineering,
                                   and design aesthetics. Under his leadership, MBK has emerged as a symbol of
                                   trust, quality, and forward-thinking development. Each project under his
                                   supervision is a harmonious blend of modern luxury, functional design, and
                                   sustainable innovation, designed to meet the aspirations of today while
                                   anticipating the needs of tomorrow. He emphasizes the importance of green
                                   architecture, energy efficiency, and community-centric layouts, ensuring that
                                   every MBK creation not only stands the test of time but also contributes positively
                                   to its surroundings. Mr. Sharma’s philosophy aligns deeply with MBK’s promise of
                                   perfection, efficiency, and enduring value. He envisions MBK not just as a
                                   developer of luxury spaces, but as a creator of holistic environments that nurture
                                   well-being, foster social connection, and celebrate architectural excellence. His
                                   approach to leadership is rooted in integrity, discipline, and an unrelenting pursuit
                                   of quality, qualities that have shaped MBK’s identity in the competitive world of
                                   real estate. Under his guidance, MBK continues to set new benchmarks in luxury
                                   real estate, consistently creating spaces that inspire, endure, and elevate
                                   lifestyles. From expansive farm estates and modern residential enclaves to
                                   integrated townships and infrastructure projects, his influence can be seen in
                                   MBK’s growing portfolio of iconic developments. Each creation reflects his
                                   unwavering belief that great design is not just about beauty—it’s about balance,
                                   purpose, and sustainability. Through innovation, dedication, and visionary
                                   leadership, Mr. Sachin Sharma has positioned MBK as a name synonymous with
                                   sophistication, sustainability, and timeless elegance—a brand that transforms
                                   every project into a living experience, every structure into a legacy, and every
                                   vision into reality.
                                 </p>
                             </div>    
                           </div>
                         </div>
                       </div>
                        <div className="book__page-back logo_watermark_l">
                         <div className="page__content brd-l">
                             <div className="row">
                               <div className="col-lg-5 z-9">
                                   <Image className="img-b" src={'/images/profile/amit-sir.jpg'} width={350} height={900} alt="Amit Kumar Gehlot" />
                               </div>
                               <div className="col-lg-7 pr">
                                   <div className="name-h">
                                     <span className="name">Amit Kumar Gehlot</span>
                                     <span className="title">Mentor</span>
                                   </div>
                                   <p className="abt-txt nt ft-12 ">
                                     Mr. Amit Kumar Gehlot is widely recognized as one of
                                     the most influential and forward-thinking leaders in
                                     India’s real estate landscape — a visionary whose
                                     depth of understanding and instinct for market
                                     dynamics set him apart from almost anyone in the
                                     industry worldwide. With an illustrious career
                                     spanning over 22 years, he has built a formidable
                                     reputation rooted in integrity, innovation, and impact.
                                     His unmatched foresight and entrepreneurial spirit
                                     have guided landmark ventures in luxury real estate,
                                     sales leadership, and technology-driven property
                                     solutions. As the Founder of MBK Luxury Real Estate
                                     Group, he continues to redefine how people live,
                                     invest, and experience real estate — blending divine
                                     inspiration with world-class professionalism. A
                                     respected name across the industry, Mr. Gehlot is
                                     known for his unwavering commitment, unmatched
                                     credibility, and exceptional goodwill. His deep belief in
                                     customer satisfaction and his promise-keeping
                                     philosophy have earned him enduring relationships
                                     with developers, investors, and clients across 
                                   </p>
                               </div>
                               <div className="col-lg-12">
                                 <p  className="abt-txt exp ft-12 text-justify">
                                   India
                                     and abroad. He is known as a man of his word —
                                     admired for delivering beyond expectations
                                     and for building trust through performance, consistency, and
                                     personal involvement. Over the last 15 years, he has
                                     trained, mentored, and inspired more than 5,000
                                     professionals, shaping the careers of some of the most successful sales and
                                     marketing leaders in Indian real estate. His mentorship style combines discipline with
                                     empowerment, nurturing professionals who lead with purpose and passion. His
                                     outstanding contributions have been recognized with multiple national honors,
                                     including the Times 40 Under 40, Realty+ 40 Under 40, and the Times Excellence
                                     Award. These accolades reflect his leadership, innovation, and enduring influence in
                                     shaping India’s evolving real estate ecosystem. For Mr. Gehlot, real estate is not
                                     merely a business — it is a legacy built on trust, transparency, and transformation.
                                     Guided by faith and driven by purpose, he continues to lead MBK Luxury Real Estate
                                     Group with humility, vision, and clarity, ensuring that every project reflects the
                                     company’s core values of divinity, excellence, and enduring value. Under his
                                     leadership, MBK stands as a symbol of what is possible when integrity meets
                                     innovation and when vision is guided by purpose — a legacy that continues to inspire
                                     the next generation of Indian real estate.
     
                                 </p>
                               </div>
                             </div>
                         </div>
                       </div>
                       
     
                     </label>
    </>
  );
}