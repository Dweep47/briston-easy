
export default function VideoSection() {
  return (
    <>
         <div className="video-three m-t90" id="video">
            <div className="video-three__bg">
                <video className="w-100 home-video" muted loop autoPlay controls={false} playsInline>
                  <source src="https://res.cloudinary.com/dudmhx45w/video/upload/v1756981041/Briston-video-2_pt3vlo.mp4" type="video/mp4" />
                  <source src="/images/Briston-video-2.mp4" type="video/mp4" />
                </video>
            </div>
            <div className="mt-2 wow fadeInUp" data-wow-duration='1500ms' data-wow-delay='300ms'>
                <h2 className="video-three__title">Residential</h2>
            </div>
        </div>
    </>
  );
}