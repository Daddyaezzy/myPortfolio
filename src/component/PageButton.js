import React, { useState } from "react";
import "../styles/pagebutton.css";
import { FaArrowUp } from "react-icons/fa";

const PageButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const currentPosition = window.pageYOffset;

    if (currentPosition > 400) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <button
      className={`page-button ${isVisible ? "visible" : ""}`}
      style={{ backgroundColor: "red" }}
      onClick={scrollToTop}
    >
      <FaArrowUp className="upIcon" />
    </button>
  );
};

export default PageButton;
