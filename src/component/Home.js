import React, { useEffect } from "react";
// import { Link } from "react-router-dom";
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
    <>
      <div className="container pt-5">
        <div className="row d-flex justify-content-between">
          <div className="col-lg-6 main-writing">
            <p className="position-relative">
              BERT IS A YELLOW MUPPET CHARACTER ON THE LONG RUNNING PBS AND HBO
              CHILDREN'S TELEVISION SHOW SESAME STREET.
              <span className="pseudo-element"></span>
            </p>
            <h2>BERTCOIN</h2>
            <div className="buy-button pt-2 d-flex flex-column gap-20">
              <button className="button ">
                <span>BUY NOW</span>
              </button>
              <button className="button">BUY NOW</button>
            </div>
          </div>
          <div className="col-lg-5 main-img">
            <img
              src="https://bertcoin.io/assets/img/bertcoin.png"
              alt="bertcoin"
            />
          </div>
        </div>
      </div>
      <div className="slider-shape">
        <img
          src="https://bertcoin.io/assets/img/slider/slider_shape03.png"
          alt="shape"
        />
        <img
          src="https://bertcoin.io/assets/img/slider/slider_shape03.png"
          alt="shape"
        />
        <img
          src="https://bertcoin.io/assets/img/slider/slider_shape03.png"
          alt="shape"
        />
        <img
          src="https://bertcoin.io/assets/img/slider/slider_shape03.png"
          alt="shape"
        />
      </div>
      <div className="cursor"></div>
    </>
  );
};

export default Home;
