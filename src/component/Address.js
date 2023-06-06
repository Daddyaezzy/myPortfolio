import React, { useEffect } from "react";
import "../styles/contact.css";
import Aos from "aos";
import "aos/dist/aos.css";

const Address = () => {
  useEffect(() => {
    Aos.init({ duration: 2000, opacity: 0 });
  }, []);
  return (
    <>
      <div className="container contact">
        <div className="row d-flex justify-content-center">
          <div className="col-xl-6 col-lg-7 col-md-10">
            <div className="section-title">
              <span data-aos="fade-right" className="sub-title">
                CONTRACT ADDRESS (BSC)
              </span>
              <h4 data-aos="fade-up" className="heading contact-heading">
                0xf858475aA2258C3d9d124bb15B9Dd7778d68027C
              </h4>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Address;
