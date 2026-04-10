
export default function Form() {
  return (
    <>
        
    <section className="contact-page contact-four section-space">
            <div className="container">
                <div className="contact-four__inner">
                    <div className="row gutter-y-30">
                        <div className="col-lg-3">
                           
                        </div>
                        <div className="col-lg-8">
                            <div className="contact-four__form">
                                <div className="sec-title text-start">
                                    <div className="sec-title__top justify-content-start">
                                        <span className="line-left"></span>
                                        <h6 className="sec-title__tagline bw-split-in-right">CONTACT</h6>
                                        <span className=""></span>
                                    </div>
                                    <h3 className="sec-title__title bw-split-in-left">Request A Free Quote Get <br /> This Contact Us.</h3>
                                </div>
                                <form action="/contact.php" className="form-one" method="post">
                                    <div className="form-one__group">
                                        <div className="form-one__control">
                                            <input type="text" name="text" placeholder="Your Name *" />
                                        </div>
                                        <div className="form-one__control">
                                            <input type="text" name="number" placeholder="Your Phone *" />
                                        </div>
                                        <div className="form-one__control">
                                            <input type="email" name="email" placeholder="Your Email *" />
                                        </div>
                                        <div className="form-one__control">
                                            <input type="text" name="subject" placeholder="Your Subjects *" />
                                        </div>
                                        <div className="form-one__control form-one__control--full">
                                            <textarea name="comments" cols={30} rows={10} placeholder="Your Comments *"></textarea>
                                        </div>
                                        <div className="form-one__control form-one__control--full">
                                          <button type="submit" className="zoomvilla-btn">SEND REQUEST <i className="icon-angle-small-right"></i></button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="contact-four__bottom">
                    <div className="contact-four__call">
                        <div className="contact-four__call__icon">
                            <i className="icon-phone-call"></i>
                        </div>
                        <h4 className="contact-four__call__text">Make An Appointment <br />Now <a href="tel:055-5800-222-55">(+91) 9871354814</a></h4>
                    </div>
                    {/* <!-- <a href="contact.html" className="zoomvilla-btn">Call Us Now <i className="icon-angle-small-right"></i></a> --> */}
                </div>
            </div>
        </section>

    </>
  );
}