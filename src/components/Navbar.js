import React from "react";
import "./footer.css";
import { Link } from "react-router-dom";

import logo from "../assets/logo.png";
export default function Navbar() {
  return (
    <div>
      <div className="header ">
        <div className="header-container">
          <p>
            <a className="ml-3" href="mailto:info@iwinceramic.com">
              info@iwinceramic.com
            </a>
            <a className="ml-3" href="tel:+919612833333">
              9612833333
            </a>
          </p>
        </div>
      </div>
      <nav className="navbar navbar-expand-lg navbar-light ">
        <Link className="navbar-brand ml-5" to="/">
          <img
            src={logo}
            alt=""
            style={{
              height: "5rem",
            }}
          />
        </Link>
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
            <div class="dropdown show">
              <a
                class="nav-item nav-link dropdown-toggle"
                id="dropdownMenuButton"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
                href="#"
              >
                Product
              </a>
              <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <a class="dropdown-item" href="#">
                  Porcelian/Vitrified Tiles
                </a>
                <a class="dropdown-item" href="#">
                  Ceramic Tiles
                </a>
              </div>
            </div>
            <a className="nav-item nav-link" href="#">
              We Are
            </a>
            <Link className="nav-item nav-link" to="/about-us">
              About
            </Link>
            <Link className="nav-item nav-link" to="/contact-us">
              Contact Us
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}
