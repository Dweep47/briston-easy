
export default function VideoSection() {
  return (
    <>
          <div className="video-three" id="video">
            <div className="video-three__bg">
                <video className="w-100 home-video" autoPlay muted loop playsInline controls={false} >
                    <source src="https://res.cloudinary.com/dudmhx45w/video/upload/v1756981058/Briston-video-8_j4lbq3.mp4" type="video/mp4" />
                    <source src="/images/Briston-video-8.mp4" type="video/mp4" />
                </video>
            </div>
            <div className="mt-2 wow fadeInUp" data-wow-duration='1500ms' data-wow-delay='300ms'>
                <h2 className="video-three__title">Township</h2>
            </div>
        </div>
    </>
  );
}