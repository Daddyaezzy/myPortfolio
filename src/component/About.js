import React from "react";
import "../styles/about.css";

const About = () => {
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
                <p>KNOW ABOUT US</p>
                <h3>NO JEETS ALLOWED</h3>
              </div>
              <div className="about-body">
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
      <div className="about-buy">
        <button onClick={navigateToBuy}>Buy Now</button>
      </div>
    </>
  );
};

export default About;
