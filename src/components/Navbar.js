import React from "react";
import "./footer.css";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <div className="headerw ">
        <div className="header-container">
          <p className="ml-2">tanayvan@gmail.com</p>
          <p className="ml-5">9714137409</p>
        </div>
      </div>
      <nav className="navbar navbar-expand-lg navbar-light ">
        <a className="navbar-brand ml-5" href="#">
          Iwin Ceramic
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav ml-auto">
            <Link className="nav-item nav-link active" to="/">
              Home <span className="sr-only">(current)</span>
            </Link>
            <a className="nav-item nav-link" href="#">
              Products
            </a>
            <a className="nav-item nav-link" href="#">
              We Are
            </a>
            <a className="nav-item nav-link" href="#">
              About
            </a>
            <Link className="nav-item nav-link" to="/contact-us">
              Contact Us
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}
