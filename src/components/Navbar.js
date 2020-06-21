import React from "react";
import "./footer.css";

export default function Navbar() {
  return (
    <div>
      <div className="header">
        <div className="header-container">
          <p className="ml-2">tanayvan@gmail.com</p>
          <p className="ml-2">9714137409</p>
        </div>
      </div>
      <nav class="navbar navbar-expand-lg navbar-light ">
        <a class="navbar-brand ml-5" href="#">
          Iwin Ceramic
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav ml-auto">
            <a class="nav-item nav-link active" href="#">
              Home <span class="sr-only">(current)</span>
            </a>
            <a class="nav-item nav-link" href="#">
              Products
            </a>
            <a class="nav-item nav-link" href="#">
              We Are
            </a>
            <a class="nav-item nav-link" href="#">
              About
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
}
