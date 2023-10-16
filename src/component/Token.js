import React, { useEffect } from "react";
import "../styles/token.css";
import Aos from "aos";
import "aos/dist/aos.css";
import mongodb from "../images/mongodb.svg";
import express from "../images/express.svg";
import js from "../images/javascript.svg";
import react1 from "../images/react.svg";
import css from "../images/css.svg";
import node from "../images/nodejs.svg";
import next from "../images/next.svg";
import gsap from "../images/gsap.svg";
import git from "../images/github.svg";
import c from "../images/c.svg";
import figma from "../images/ce5e0bb3-16b9-4d88-9bca-7d237fe725a8-cover-removebg-preview.png";

const Token = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <>
      <div className="container token">
        <div className="row d-flex justify-content-center">
          <div className="col-xl-6 col-lg-7 col-md-10">
            <div className="section-title">
              <span data-aos="fade-right" className="sub-title">
                SKILLS
              </span>
              <h3 data-aos="fade-up" className="heading">
                WHAT I CAN DO
              </h3>
            </div>
          </div>
        </div>
        <div className="row d-flex justify-content-center">
          <div className="col-xl-10">
            <div data-aos="fade-up" className="item-wrapper ">
              <div className="about-buy">
                <img src={mongodb} alt="" />
                <button>MongoDB</button>
              </div>
              <div className="about-buy">
                <img src={express} alt="" />
                <button>Express</button>
              </div>
              <div className="about-buy">
                <img src={js} alt="" />
                <button>JavaScript</button>
              </div>
              <div className="about-buy">
                <img src={react1} alt="" />
                <button>React</button>
              </div>

              <div className="about-buy">
                <img src={css} alt="" />
                <button>CSS</button>
              </div>
              <div className="about-buy">
                <img src={node} alt="" />
                <button>NODE JS</button>
              </div>
              <div className="about-buy">
                <img src={react1} alt="" />
                <button>React Native</button>
              </div>
              <div className="about-buy">
                <img src={next} alt="" />
                <button>NEXT JS</button>
              </div>
              <div className="about-buy">
                <img src={git} alt="" />
                <button>GITHUB</button>
              </div>
              <div className="about-buy">
                <img src={gsap} alt="" />
                <button>GREENSOCK ANIMATION PLATFORM</button>
              </div>
              <div className="about-buy">
                <img src={figma} alt="" />
                <button>FIGMA</button>
              </div>
              <div className="about-buy">
                <img src={c} alt="" />
                <button>C++</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Token;
