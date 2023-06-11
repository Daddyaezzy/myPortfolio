import React, { useEffect } from "react";
import "../styles/contact.css";
import Aos from "aos";
import "aos/dist/aos.css";

const Address = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
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
            </div>
            <div>
              <form action="" className="d-flex flex-column">
                <input type="text" placeholder="Your number or email" />
                <textarea
                  placeholder="Your message"
                  cols="20"
                  rows="8"
                ></textarea>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Address;
