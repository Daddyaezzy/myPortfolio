import React, { useState, useEffect } from "react";
import { SliderData } from "./SliderData";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";
import "../styles/imageSlider.css";
// import Spinner from "./layout/Spinner";
import Aos from "aos";
import "aos/dist/aos.css";

const ImageSlider = ({ sliders }) => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  const [current, setCurrent] = useState(0);
  const length = sliders.length;

  //   console.log(length);
  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };
  //   console.log(current);
  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
    console.log(current);
  };

  if (!Array.isArray(sliders) || sliders.length <= 0) {
    return <div>Loading...</div>;
  } else {
    return (
      <section data-aos="zoom-in" className="slider">
        <FaArrowAltCircleLeft className="left-arrow" onClick={prevSlide} />
        <FaArrowAltCircleRight className="right-arrow" onClick={nextSlide} />
        {SliderData.map((slider, index) => {
          return (
            <div
              key={index}
              className={index === current ? "slide active" : "slide"}
            >
              {index === current && (
                <img src={slider.image} alt="pic" className="image" />
              )}
            </div>
          );
        })}
      </section>
    );
  }
};

export default ImageSlider;
