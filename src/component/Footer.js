import React from "react";
import { Link } from "react-router-dom";
import { FaTwitter, FaLinkedin, FaWhatsapp, FaInstagram } from "react-icons/fa";
import { AiOutlineRight } from "react-icons/ai";
import "../styles/footer.css";
import logo from "../images/logo-color-removebg-preview.png";

const Footer = () => {
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
                <div className="each-social">
                  <Link
                    to="https://twitter.com/daddyaezzy?s=21&t=e_FqY7sZpmg_qqmAv7HYxg"
                    target="_blank"
                  >
                    <FaTwitter />
                  </Link>
                </div>
                <div className="each-social">
                  <Link to="https://instagram.com/daddyaezzy/" target="_blank">
                    <FaInstagram />
                  </Link>
                </div>
                <div className="each-social">
                  <Link
                    to="https://www.linkedin.com/in/anselm-fajobi-8ab5a623b"
                    target="_blank"
                  >
                    <FaLinkedin />
                  </Link>
                </div>
                <div className="each-social">
                  <Link to="https://wa.me/+2349096571954" target="_blank">
                    <FaWhatsapp />
                  </Link>
                </div>
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
