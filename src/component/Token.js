import React from "react";
import "../styles/token.css";

const Token = () => {
  return (
    <>
      <div className="container token">
        <div className="row d-flex justify-content-center">
          <div className="col-xl-6 col-lg-7 col-md-10">
            <div className="section-title">
              <span className="sub-title">TOKENOMICS</span>
              <h3 className="heading">420 TRILLION SUPPLY</h3>
            </div>
          </div>
        </div>
        <div className="row d-flex justify-content-center">
          <div className="col-xl-10">
            <div className="item-wrapper ">
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
