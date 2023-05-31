import React from "react";
import { FaTwitter, FaTelegram } from "react-icons/fa";
import { AiOutlineRight } from "react-icons/ai";
import "../styles/footer.css";

const Footer = () => {
  return (
    <>
      <div className="container footer">
        <div className="row d-flex flex-column justify-content-left">
          <div className="footer-logo">
            <img src="https://bertcoin.io/assets/img/bertcoin.png" alt="logo" />
          </div>
          <div className="footer-writing">
            <p>
              Bert is Ernie's best friend and roommate on Sesame Street. The
              pair share the basement apartment at 123 Sesame Street. Contact:
              Support@bertcoin.io
            </p>
            <div className="footer-social">
              <p>
                ACTIVE
                <span>
                  {" "}
                  WITH US <AiOutlineRight />
                  <AiOutlineRight />
                </span>
              </p>
              <div className="theFooter-social">
                <FaTelegram className="fs-3" />
                <FaTwitter className="fs-3" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright">
        <p>
          Copyright © 2023 - ALL RIGHTS RESERVED BY <span>ALIEN TECH</span>
        </p>
      </div>
    </>
  );
};

export default Footer;
