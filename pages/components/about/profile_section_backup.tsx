import Image from "next/image";
import React,{useState,useEffect,useReducer} from "react";
import FirstPage from "./book_pages/first_page";
import LastPage from "./book_pages/last_page";

function reducer(state:any, action:any) {
  const pages = [1,2,3,4,5,6,7,8,9,10];
  switch (action.type) {
    case 'increment':
      if (state.count < pages.length) {
        return { count: state.count + 1 };
      }
      return state;
    case 'decrement':
      if(state.count>0){
        return { count: state.count - 1 };
      }
      return state;
    default:
      return state;
  }
}
export default function ProfileSection() {
  const [loading,setLoading]=useState(true);
  const [state, dispatch] = useReducer(reducer, {count:0});
  useEffect(()=>{
    setLoading(false);
  },[]);
  if(loading){
    return (
      <>
        <section className="profile mb-10">
          <div className="container text-center">
            <h6>Loading...</h6>
          </div>
        </section>
      </>
    )
  }

  return (
    <>
      <section className="profile mb-10">
         <div className="container pr">
          <div className="sec-title text-center">
            <div className="sec-title__top justify-content-center">
              <span className="line-left"></span>
              <h6 className="sec-title__tagline bw-split-in-right">About Us</h6>
              <span className=""></span>
              </div>
              <h3 className="sec-title__title bw-split-in-left">Visionaries behind MBK</h3>
          </div>
             <div className="cover">
              <div className="book">
                {/* <label className="book__page book__page--1" onClick={()=>dispatch({ type: 'decrement' })}>
                  <img src="/images/profile/01(565x800).jpg" alt="" />
                </label> */}
                 {/* <label  className={ `book__page book__page--4 th-bg`} onClick={()=>dispatch({ type: 'increment' })}>
                  <div className="page__content-1  ptx df-c">
                      <h2 className="text-white w-100 text-center">The End</h2>
                   
                  </div>
                </label> */}
                <FirstPage  dispatch={dispatch} page={state.count} />
                <LastPage dispatch={dispatch} page={state.count} />
               

                {/* <label className={`book__page book__page--2 ${state.count>=1?'page_show':''}`} >
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
                    </div>
                    <div className="bottom-img">
                      <img src={'/images/profile/mountain_l.png'} />
                    </div>
                  </div>
                </label> */}
                  
                <label className={`book__page book__page--5 ${state.count>=2?'page_show':''}`} >
                  <div className="book__page-front logo_watermark_r">
                    <div className="page__content">
                      <h2 className="text-1">Observation</h2>
                        <h4>
                          Experience wellness and vitality amid nature’s
                          serenity, surrounded by luxury, accessibility,
                          and peace — your true sanctuary awaits.
                        </h4>
                        <h2>or</h2>
                        <h4>
                          Find a home that mirrors your individuality —
                          where every moment is a celebration of life.
                        </h4>
                        {/* <div className="page__number">4</div> */}
                    </div>
                    <div className="bottom-img">
                        <img src={'/images/profile/mountain_r.png'} />
                    </div>
                  </div>
                  <div className="book__page-back logo_watermark_l">
                    <div className="page__content ext-pd">
                      <div className="row">
                        <div className="col-lg-4">
                          <img  src="/images/profile/mahadev.png"/>
                          <span className="mbk-t">M</span>
                        </div>
                        <div className="col-lg-4">
                          <img  src="/images/profile/balaji.png"/>
                          <span className="mbk-t">B</span>
                        </div>
                        <div className="col-lg-4">
                          <img  src="/images/profile/khatushyam_ji.png"/>
                          <span className="mbk-t">K</span>
                        </div>
                      </div>
                      <div className="row">
                          <div className="col-lg-12 pt-2">
                              <h3 className="abt-hd">The Spirit and Symbolism Behind The MBK Identity</h3>
                              <p className="abt-txt"><b>Where Divine Inspiration Meets Timeless Design</b></p>
                              <p className="abt-txt">At MBK Luxury Real Estate Group, our identity is not just a mark - it is a philosophy, a divine
                                confluence of spirituality, vision, and purpose. The name MBK is derived from sacred
                                inspirations, symbolizing the eternal blessings and guiding forces that shape our journey in
                                the world of real estate. Every element of our emblem - from its sacred geometry to its colors
                                and symbols - has been thoughtfully chosen to reflect our ethos of growth, prosperity, and
                                excellence.
                              </p>
                              <p className="abt-txt">
                                  <b>Each letter of MBK draws its strength from revered deities, representing protection, prosperity, and progress:</b>
                              </p>
                          </div>
                      </div>
                      <div className="row">
                        <div className="col-lg-12">
                            <div className="tdf">
                              <span>
                                <img src={'/images/profile/small_icon.png'} />
                                The Divine Foundation of MBK
                              </span>
                            </div>
                        </div>
                        <div className="col-lg-12">
                          <p className="abt-txt">
                            <b>M stands for Mahakaal Ji</b> - the eternal embodiment of Lord Shiva, symbolizing
                                transformation, resilience, and the power to build foundations that transcend time.
                                Mahakaal's energy inspires us to create spaces that are strong, enduring, and spiritually
                                grounded.
                          </p>
                            <p className="abt-txt"><b>B stands for Balaji</b> - invoking the divine blessings of Salasar Balaji, Mehndipur Balaji, and
                                Bageshwar Balaji. Balaji represents devotion, protection, and unwavering success —
                                virtues that guide our work ethic and define our relationship with clients and stakeholders.
                                </p>
                          <p className="abt-txt">
                            <b>K stands for Khatu Shyam Ji and Maa Kali</b> - embodiments of courage, victory, and divine
                            energy. They inspire us to overcome challenges with faith and fortitude while ensuring that
                            every MBK creation carries the essence of positivity, power, and purpose.

                          </p>
                        </div>
                        <p className="abt-txt pt-2">
                          Together, these divine forces form the spiritual cornerstone of MBK - guiding us as we design, develop, and deliver extraordinary real estate experiences.
                        </p>
                      </div>
                        {/* <div className="page__number">5</div> */}
                    </div>
                  </div>
                </label>

                <label className={`book__page book__page--6 ${state.count>=3?'page_show':''}`} >
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

                <label className={`book__page book__page--7 ${state.count>=4?'page_show':''}`} >
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

                <label className={`book__page book__page--8 ${state.count>=5?'page_show':''}`} >
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

                <label className={`book__page book__page--9 ${state.count>=6?'page_show':''}`} >
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

                <label className={`book__page book__page--10 ${state.count>=7?'page_show':''}`} >
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
                <label className={`book__page book__page--11 ${state.count>=8?'page_show':''}`} >
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

                <label className={`book__page book__page--12 ${state.count>=9?'page_show':''}`} >
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

                <label className={`book__page book__page--13 ${state.count>=10?'page_show':''}`} >
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

              </div>
            </div>
            <div className="book-controls">
              <button className="book-prev" onClick={()=>dispatch({ type: 'decrement' })}><i className="icon-angle-small-right"></i></button>
              <button className="book-next" onClick={()=>dispatch({ type: 'increment' })}><i className="icon-angle-small-right"></i></button>
            </div>
         </div>
      </section>
    </>
  );
}