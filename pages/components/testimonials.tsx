
export default function Testimonials() {
  return (
    <>
        <section className="testimonials-one">
            <div className="container">
                <div className="testimonials-one__inner section-space">
                    <div className="sec-title text-center">
                        <div className="sec-title__top justify-content-center">
                            <span className="line-left"></span>
                            <h6 className="sec-title__tagline bw-split-in-right">Life Without Compromise The World at Your Reach</h6>
                            <span className="line-right"></span>
                        </div>
                        <h3 className="sec-title__title bw-split-in-left">A Landmark First A Lifestyle Like No Other</h3>
                    </div>
                    
                </div>
            </div>
            <div className=" hover:shine wow fadeInLeft" data-wow-duration='1500ms' data-wow-delay='300ms'>
                {/* <!-- <img className="full-image" src="assets/images/19.jpg" height="800" width="100%" alt="image"> --> */}
                  <video className="w-100 home-video" muted loop autoPlay controls={false} playsInline >
                    <source src="https://res.cloudinary.com/dudmhx45w/video/upload/v1756981041/Briston-video_fbsgf3.mp4" type="video/mp4" />
                    <source src="images/Briston-video.mp4" type="video/mp4" />
                  </video>
                  <div className="container">
                    {/* <!-- <div className="main-video-contant">
                        <h2 className="main-slider-three__title">Elegant Homes Equipped <br> with Smart Technology</h2>
                        <p className="main-slider-three__text">
                            Discover the future of living with our smart homes, designed to enhance your lifestyle with cutting-edge technology and unparalleled comfort.
                        </p>
                    </div> --> */}
                  </div>
            </div>
        </section>


    </>
  );
}