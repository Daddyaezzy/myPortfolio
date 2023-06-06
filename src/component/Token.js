import React, { useEffect } from "react";
import "../styles/token.css";
import Aos from "aos";
import "aos/dist/aos.css";

const Token = () => {
  useEffect(() => {
    Aos.init({ duration: 2000, opacity: 0 });
  }, []);

  return (
    <>
      <div className="container token">
        <div className="row d-flex justify-content-center">
          <div className="col-xl-6 col-lg-7 col-md-10">
            <div className="section-title">
              <span data-aos="fade-right" className="sub-title">
                TOKENOMICS
              </span>
              <h3 data-aos="fade-up" className="heading">
                420 TRILLION SUPPLY
              </h3>
            </div>
          </div>
        </div>
        <div className="row d-flex justify-content-center">
          <div className="col-xl-10">
            <div data-aos="fade-up" className="item-wrapper ">
              <div className="about-buy">
                <button>Buy tax 0%</button>
              </div>
              <div className="about-buy">
                <button>Sell tax 10%</button>
              </div>
              <div className="about-buy">
                <button>5% liquidity </button>
              </div>
              <div className="about-buy">
                <button>5% marketing and charity</button>
              </div>

              <div className="about-buy">
                <button>Supply 100,000,000</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Token;
