import React from 'react';


function HomeBanner() {
  return (
    <react-fragment>  
        <section className="home_banner_area">
            <div className="banner_inner d-flex align-items-center">
                <div className="container">
                    <div className="banner_content row">
                        <div className="col-lg-5">
                            <h3>Georgia Helmet <br />Collections!</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>
                            <a className="white_bg_btn" href="#">View Collection</a>
                        </div>
                        <div className="col-lg-7">
                            <div className="halemet_img">
                                <img src="img/banner/helmat.png" alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </react-fragment>
  );
}

export default HomeBanner;
