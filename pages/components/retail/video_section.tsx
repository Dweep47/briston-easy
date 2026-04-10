
export default function VideoSection() {
  return (
    <>
         <div className="video-three" id="video">
            <div className="video-three__bg">
                <video className="w-100 home-video" muted loop autoPlay controls={false} playsInline>
                     <source src="https://res.cloudinary.com/dudmhx45w/video/upload/v1756981039/Briston-video-6_dubuzi.mp4" type="video/mp4" />
                    <source src="/images/Briston-video-6.mp4" type="video/mp4" />
                </video>
            </div>
            <div className="mt-2 wow fadeInUp" data-wow-duration='1500ms' data-wow-delay='300ms'>
                <h2 className="video-three__title">Retail</h2>
            </div>
        </div>
         <section className="apartment-details-one">
            <div className="apartment-details-one__list-box">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 mt-50 mb-50">
                            <h3 className="sec-title__title bw-split-in-left text-white">Prime Location Advantage</h3>
                            <p className="text-white wow fadeInUp animated" data-wow-duration="1500ms" data-wow-delay="300ms">
                                The retail sector is a cornerstone of the Indian economy, contributing significantly to GDP and employment. With a rapidly growing middle class and increasing urbanization, the demand for retail spaces is on the rise. Briston is at the forefront of this transformation, developing state-of-the-art retail complexes that cater to diverse consumer needs. Our projects are strategically located in high-traffic areas, ensuring maximum visibility and accessibility for retailers.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  );
}