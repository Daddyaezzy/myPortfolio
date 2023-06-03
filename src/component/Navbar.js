import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../images/NO JEETS TP.png";
import { FaBars } from "react-icons/fa";

import { TfiWrite } from "react-icons/tfi";
import "../styles/navbar.css";
import Slider from "./Slider";
import SecondSlider from "./SecondSlider";

const Navbar = () => {
  const [showFabars, setShowFabars] = useState(false);
  const [showFabars2, setShowFabars2] = useState(false);
  const [showButtons, setShowButtons] = useState(false);
  const [showLinks, setShowLinks] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [showNav, setShowNav] = useState(false);
  const [showNav2, setShowNav2] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const windowWidth = window.innerWidth;
      setShowFabars(windowWidth <= 1000);
      setShowFabars2(windowWidth >= 980);
      setShowButtons(windowWidth >= 600);
      setShowLinks(windowWidth >= 980);
    };

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const navbarHeight = document.querySelector("header").offsetHeight;
      setIsSticky(scrollPosition >= navbarHeight);
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);

    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`pt-2 pb-3 ${isSticky ? "sticky navbar-animation" : ""} `}
    >
      <div className="first-nav">
        <div className="container navbar-container">
          <div className="row">
            <div className="col-12">
              <div className="header-divide d-flex justify-content-between align-items-center">
                <div className="w-logo d-flex gap-50 align-items-center">
                  <Link to="/">
                    <img className="logo1" src={logo} alt="logo" />
                  </Link>
                  {showLinks && (
                    <div className="a-links">
                      <Link>Home</Link>
                      <Link>About Us</Link>
                      <Link>Contact</Link>
                    </div>
                  )}
                </div>

                <div className="button-bar d-flex justify-content-between align-items-center gap-45">
                  <div className="d-flex gap-45 align-items-center ">
                    {showButtons && (
                      <button className="nav-button d-flex justify-content-between align-items-center">
                        <TfiWrite />
                        <span>Buy Now</span>
                      </button>
                    )}
                    {showFabars2 && (
                      <div>
                        <div className="bars" onClick={() => setShowNav2(true)}>
                          <FaBars className="text-white fs-2" />
                        </div>
                        <SecondSlider
                          setShowNav2={setShowNav2}
                          showNav2={showNav2}
                        />
                      </div>
                    )}
                  </div>
                  {showFabars && (
                    <div>
                      <div
                        className="mobile-bars"
                        onClick={() => setShowNav(true)}
                      >
                        <FaBars className="text-white fs-2 fabars-m" />
                      </div>

                      <Slider setShowNav={setShowNav} showNav={showNav} />
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
