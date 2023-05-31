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
                <button>Buy Tax 7%</button>
              </div>
              <div className="about-buy">
                <button>Sell Tax 7%</button>
              </div>
              <div className="about-buy">
                <button>5% Marketing</button>
              </div>
              <div className="about-buy">
                <button>2% Liquidity</button>
              </div>
              <div className="about-buy">
                <button>100% LP Burned</button>
              </div>
              <div className="about-buy">
                <button>Ownership Renounce</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Token;
