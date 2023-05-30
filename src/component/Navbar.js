import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// import logo from "../images/Image 29-05-2023 at 10.18.JPG";
import { FaBars } from "react-icons/fa";
import { TfiWrite } from "react-icons/tfi";
import "../styles/navbar.css";

const Navbar = () => {
  const [showFabars, setShowFabars] = useState(false);
  const [showFabars2, setShowFabars2] = useState(false);
  const [showButtons, setShowButtons] = useState(false);
  const [showLinks, setShowLinks] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const windowWidth = window.innerWidth;
      setShowFabars(windowWidth <= 1000);
      setShowFabars2(windowWidth >= 980);
      setShowButtons(windowWidth >= 600);
      setShowLinks(windowWidth >= 980);
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <header className="pt-2 pb-3">
      <div className="first-nav">
        <div className="container navbar-container">
          <div className="row">
            <div className="col-12">
              <div className="header-divide d-flex justify-content-between align-items-center">
                <div className="w-logo d-flex gap-50 align-items-center">
                  <img
                    className="logo1"
                    src="https://bertcoin.io/assets/img/bertcoin.png"
                    alt="logo"
                  />
                  {showLinks && (
                    <div className="a-links">
                      <Link>Home</Link>
                      <Link>About Us</Link>
                      <Link>Contact</Link>
                    </div>
                  )}
                </div>

                <div className="button-bar d-flex justify-content-between align-items-center gap-45">
                  <div className="d-flex gap-45 align-items-center">
                    {showButtons && (
                      <button className="nav-button d-flex justify-content-between align-items-center">
                        <TfiWrite />
                        <span>Buy Now</span>
                      </button>
                    )}
                    {showFabars2 && (
                      <div className="bars">
                        <FaBars className="text-white fs-2" />
                      </div>
                    )}
                  </div>
                  {showFabars && (
                    <div className="mobile-bars">
                      <FaBars className="text-white fs-2 fabars-m" />
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
