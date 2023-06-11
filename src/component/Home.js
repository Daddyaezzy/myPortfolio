import React, { useEffect } from "react";
// import logo from "../images/NO JEETS TP.png";
import tpic from "../images/do-not-enter.png";
import myself from "../images/tempImage97l8Qv-removebg-preview.png";
import Aos from "aos";
import "aos/dist/aos.css";

import "../styles/home.css";

const Home = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
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

  const email = "pulumbu11@gmail.com"; // Replace with the desired email address

  const handleEmailClick = () => {
    window.location.href = `mailto:${email}`;
  };

  const phoneNumber = "+2349152033235"; // Replace with the desired phone number

  const handlePhoneClick = () => {
    window.location.href = `tel:${phoneNumber}`;
  };

  return (
    <section className="slider-area">
      <div className="container pt-5">
        <div className="row d-flex justify-content-between">
          <div className="col-lg-6 main-writing">
            <p data-aos="fade-up" className="position-relative">
              HELLO, I'M FAJOBI ANSELM I'M A FULL STACK DEVELOPER IN
              NIGERIA,WITH A MASTERING THE ART OF INNOVATION, COMMUNICATING WITH
              IMPACT, AND LEADING WITH EXCELLENCE
              <span className="pseudo-element"></span>
            </p>
            <h2 data-aos="fade-up">FAJOBI ANSELM</h2>
            <div
              data-aos="fade-up"
              className="buy-button pt-2 d-flex flex-column gap-20"
            >
              <button onClick={handleEmailClick} className="button">
                EMAIL ME
              </button>
              <button onClick={handlePhoneClick} className="button">
                CALL ME
              </button>
            </div>
          </div>
          <div data-aos="fade-left" className="col-lg-5 main-img">
            <img src={myself} alt="bertcoin" />
          </div>
        </div>
      </div>
      <div className="slider-shape">
        <img src={tpic} alt="shape2" />
        <img src={tpic} alt="shape3" />
        <img src={tpic} alt="shape4" />
        <img src={tpic} alt="shape5" />
        <img src={tpic} alt="shape6" />
        <img src={tpic} alt="shape6" />
        <img src={tpic} alt="shape7" />
      </div>
      <div className="cursor"></div>
    </section>
  );
};

export default Home;
