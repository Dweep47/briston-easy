
export default function TopHeader() {
  return (
    <>
         <section className="page-header m-t90">
            <div className="page-header__bg" style={{backgroundImage: 'url(/images/mbk-cover.jpg)'}}></div>
            <div className="container">
                <div className="page-header__content">
                    <h2 className="page-header__title bw-split-in-right">About Us</h2>
                    <ul className="zoomvilla-breadcrumb list-unstyled">
                        <li><a href="/">Home</a></li>
                        <li><span>About Us</span></li>
                    </ul>
                </div>
            </div>
        </section>
    </>
  );
}