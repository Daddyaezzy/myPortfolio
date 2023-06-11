import React from "react";
import { FaTwitter, FaTelegram } from "react-icons/fa";
import { AiOutlineRight } from "react-icons/ai";
import "../styles/footer.css";
import logo from "../images/logo-color-removebg-preview.png";

const Footer = () => {
  const toTele = () => {
    window.open("https://t.me/nojeetsallowedbsc", "_blank");
  };

  return (
    <>
      <div className="container footer">
        <div className="row d-flex flex-column justify-content-left">
          <div className="footer-logo ">
            <img src={logo} alt="logo" />
          </div>
          <div className="footer-writing">
            <p>Here are my socials where i can be also be contacted</p>
            <div className="footer-social">
              <p>
                ACTIVE
                <span>
                  {" "}
                  WITH ME <AiOutlineRight />
                  <AiOutlineRight />
                </span>
              </p>
              <div className="theFooter-social">
                <FaTelegram onClick={toTele} className="fs-3" />
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
