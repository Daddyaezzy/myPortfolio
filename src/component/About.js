import React, { useEffect } from "react";
import "../styles/about.css";
import Aos from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    Aos.init({ duration: 2000, opacity: 0 });
  }, []);
  const navigateToBuy = () => {
    window.open(
      "https://poocoin.app/tokens/0xf858475aa2258c3d9d124bb15b9dd7778d68027c",
      "_blank"
    );
  };
  return (
    <>
      <div className="about-us">
        <div className="container">
          <div className="row d-flex justify-content-center">
            <div className="col-xl-6 col-lg-7 col-md-10">
              <div className="about-title">
                <p data-aos="fade-right">KNOW ABOUT US</p>
                <h3 data-aos="fade-up">NO JEETS ALLOWED</h3>
              </div>
              <div data-aos="fade-up" className="about-body">
                <p>
                  NOJEETSALLOWED is a community token dedicated to rewarding the
                  chads in crypto community. All utilities developed will be to
                  lessen the amounts of paper hands and increase reward to
                  diamond hands and chads. NOJEETSALLOWED will be assisting and
                  compensating those who lost to jeets. Grab a bag of
                  NOJEETSALLOWED and enjoy the services it has to offer.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div data-aos="zoom-out-down" className="about-buy">
        <button onClick={navigateToBuy}>Buy Now</button>
      </div>
    </>
  );
};

export default About;
