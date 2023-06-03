import React, { useEffect } from "react";
import logo from "../images/NO JEETS TP.png";
import tpic from "../images/NO JEET PERSON 1.png";

import "../styles/home.css";

const Home = () => {
  useEffect(() => {
    const handleMouseMove = (event) => {
      const cursor = document.querySelector(".cursor");
      cursor.style.left = event.clientX + "px";
      cursor.style.top = event.clientY + "px";
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  useEffect(() => {
    const handleMouseMove = (event) => {
      const mainImg = document.querySelector(".main-img img");
      const mouseX = event.clientX;
      const mouseY = event.clientY;
      const imgRect = mainImg.getBoundingClientRect();
      const imgCenterX = imgRect.left + imgRect.width / 2;
      const imgCenterY = imgRect.top + imgRect.height / 2;
      const moveX = (mouseX - imgCenterX) / 10;
      const moveY = (mouseY - imgCenterY) / 10;
      mainImg.style.transition = "transform 0.2s ease-out";
      mainImg.style.transform = `translate(${moveX}px, ${moveY}px)`;
    };

    const mainImg = document.querySelector(".main-img img");
    mainImg.addEventListener("mouseenter", () => {
      document.addEventListener("mousemove", handleMouseMove);
    });
    mainImg.addEventListener("mouseleave", () => {
      mainImg.style.transition = "transform 0.5s ease-in-out";
      mainImg.style.transform = "translate(0, 0)";
      document.removeEventListener("mousemove", handleMouseMove);
    });

    return () => {
      mainImg.removeEventListener("mouseenter", () => {
        document.addEventListener("mousemove", handleMouseMove);
      });
      mainImg.removeEventListener("mouseleave", () => {
        mainImg.style.transition = "transform 0.5s ease-in-out";
        mainImg.style.transform = "translate(0, 0)";
        document.removeEventListener("mousemove", handleMouseMove);
      });
    };
  }, []);

  return (
    <section className="slider-area">
      <div className="container pt-5">
        <div className="row d-flex justify-content-between">
          <div className="col-lg-6 main-writing">
            <p className="position-relative">
              NOJEETSALLOWED IS A COMMUNITY TOKEN AIMED AT REWARDING ALL CHADS
              IN THE CRYPTO ECOSYSTEM.
              <span className="pseudo-element"></span>
            </p>
            <h2>JEETS</h2>
            <div className="buy-button pt-2 d-flex flex-column gap-20">
              <button className="button">BUY NOW</button>
              <button className="button">CHART</button>
            </div>
          </div>
          <div className="col-lg-5 main-img">
            <img src={logo} alt="bertcoin" />
          </div>
        </div>
      </div>
      <div className="slider-shape">
        <img src={tpic} alt="shape2" />
        <img src={tpic} alt="shape3" />
        <img src={tpic} alt="shape4" />
        <img src={tpic} alt="shape5" />
        <img src={tpic} alt="shape6" />
        <img src={tpic} alt="shape7" />
      </div>
      <div className="cursor"></div>
    </section>
  );
};

export default Home;
