import React from "react";
import Home from "./Home";
import About from "./About";
import Token from "./Token";
import Address from "./Address";
import PageButton from "./PageButton";
import Projects from "./Projects";

const layout = () => {
  return (
    <>
      <Home />
      <About />
      <Token />
      <Projects />

      <Address />
      <PageButton />
    </>
  );
};

export default layout;
