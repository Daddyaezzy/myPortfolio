import React from "react";
import Home from "./Home";
import About from "./About";
import Token from "./Token";
import Address from "./Address";
import PageButton from "./PageButton";

const layout = () => {
  return (
    <>
      <Home />
      <About />
      <Token />

      <Address />
      <PageButton />
    </>
  );
};

export default layout;
