import React from "react";
import { Link } from "react-router-dom";
import "../styles/notfound.css";

const NotFound = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <div className="not-found">
            <h1>Oooops</h1>
            <h2>This page can't be found</h2>
            <p>
              Go back to <Link to="/">Home</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
