import React from "react";
import { Link } from "react-router-dom";
import "../styles/secondslider.css";
import { GiCrossedSwords } from "react-icons/gi";
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";
import logo from "../images/logo-color-removebg-preview.png";

const SecondSlider = ({ showNav2, setShowNav2 }) => {
  return (
    <>
      <div className={`slider2-show ${showNav2 ? "active" : ""}`}>
        <div className="slider2-top d-flex align-items-center justify-content-center gap-140 p-4">
          <div className="slider2-logo">
            <img src={logo} alt="logo" />
          </div>
          <div
            className={`slider2-cancel ${showNav2 ? "active" : ""}`}
            onClick={() => setShowNav2(false)}
          >
            <GiCrossedSwords className="fs-2 " />
          </div>
        </div>
        <div className="navnav2-links">
          <ul>
            <li>
              <div className="eachLink">
                <Link to="/">Home</Link>
              </div>
            </li>
            <li>
              <div className="eachLink">
                <Link to="/about">About Us</Link>
              </div>
            </li>
            <li>
              <div className="eachLink">
                <Link to="/contact">Contact</Link>
              </div>
            </li>
          </ul>
        </div>
        <div className="social2-links d-flex justify-content-center align-items-center gap-20">
          <div className="each-social">
            <Link>
              <FaFacebook />
            </Link>
          </div>
          <div className="each-social">
            <Link>
              <FaTwitter />
            </Link>
          </div>
          <div className="each-social">
            <Link>
              <FaInstagram />
            </Link>
          </div>
          <div className="each-social">
            <Link>
              <FaLinkedin />
            </Link>
          </div>
          <div className="each-social">
            <Link>
              <FaYoutube />
            </Link>
          </div>
        </div>
        <div className="my-copyright">
          <p>
            Copyright © 2023 - By <span>Ali3n Tech</span>
          </p>
        </div>
      </div>
    </>
  );
};

export default SecondSlider;
