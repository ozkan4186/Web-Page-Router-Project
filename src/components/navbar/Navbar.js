import React from "react";
import { Link } from "react-router-dom";
import "../../App.css";

const Navbar = () => {
  return (
    <header>
      <div className="container">
        <div id="branding">
          <h1>
            <span className="highlight">Clarusway </span> Web Design
          </h1>
        </div>
        <nav>
          <ul>
            <li>
          <Link to="/home" >home</Link>
            </li>
            <li>
              <Link to="/about" >about</Link>
            </li>
            <li>
              <Link to="/services" >services</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
