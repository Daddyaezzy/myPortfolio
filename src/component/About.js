import React from "react";
import "../styles/about.css";

const About = () => {
  return (
    <>
      <div className="about-us">
        <div className="container">
          <div className="row d-flex justify-content-center">
            <div className="col-xl-6 col-lg-7 col-md-10">
              <div className="about-title">
                <p>KNOW ABOUT US</p>
                <h3>BERTCOIN</h3>
              </div>
              <div className="about-body">
                <p>
                  Bertcoin the memecoin Launched on the Binance Smart chain that
                  pays homage to everyone’s favorite yellow Muppet character on
                  the long running PBS and HBO children's television show Sesame
                  Street. Bert was originally performed by Frank Oz. Our mission
                  is to provide a fun, community-driven investment opportunity
                  that celebrates the power of memes and pop culture. With a
                  vision to become the leading memecoin in the market, we
                  believe Bertcoin is the perfect addition to any investor’s
                  portfolio. Join us on this journey to revolutionize the world
                  of memecoins!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="about-buy">
        <button>Buy Now</button>
      </div>
    </>
  );
};

export default About;
