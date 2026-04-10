
export default function TopHeader() {
  return (
    <>
         <section className="page-header m-t90">
            <div className="page-header__bg" style={{backgroundImage: 'url(/images/18.jpg)'}}></div>
            <div className="container">
                <div className="page-header__content">
                    <h2 className="page-header__title bw-split-in-right">Contact Us</h2>
                    <ul className="zoomvilla-breadcrumb list-unstyled">
                        <li><a href="/">Home</a></li>
                        <li><span>Contact Us</span></li>
                    </ul>
                </div>
            </div>
        </section>
        
    </>
  );
}