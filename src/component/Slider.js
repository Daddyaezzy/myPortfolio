import React from "react";
import { Link } from "react-router-dom";
import "../styles/slider.css";
import { GiCrossedSwords } from "react-icons/gi";
import { FaInstagram, FaTwitter, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import logo from "../images/logo-color-removebg-preview.png";

const Slider = ({ setShowNav, showNav }) => {
  return (
    <>
      <div className={`slider-show ${showNav ? "active" : ""}`}>
        <div className="slider-top d-flex align-items-center justify-content-center gap-130 p-4">
          <div className="slider-logo">
            <img src={logo} alt="logo" />
          </div>
          <div
            className={`slider-cancel ${showNav ? "active" : ""}`}
            onClick={() => setShowNav(false)}
          >
            <GiCrossedSwords className="fs-2 " />
          </div>
        </div>
        <div className="navnav-links d-flex flex-column">
          <div className="eachLink">
            <Link to="/">Home</Link>
          </div>
          <div className="eachLink">
            <Link to="/about">About Us</Link>
          </div>
          <div className="eachLink">
            <Link to="/projects">Projects</Link>
          </div>
          <div className="eachLink">
            <Link to="/contact">Contact</Link>
          </div>
        </div>
        <div className="social-links d-flex justify-content-center align-items-center gap-20">
          <div className="each-social">
            <Link
              to="https://twitter.com/bigdidiy_?s=21&t=e_FqY7sZpmg_qqmAv7HYxg"
              target="_blank"
            >
              <FaTwitter />
            </Link>
          </div>
          <div className="each-social">
            <Link to="https://instagram.com/bigdidiy/" target="_blank">
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
    </>
  );
};

export default Slider;
