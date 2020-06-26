import React from "react";
import "./footer.css";
import { Link } from "react-router-dom";

import logo from "../assets/logo.png";
import { useTranslation } from "react-i18next";
import LaunguageSelector from "./LaunguageSelector";
export default function Navbar() {
  const { t, i18n } = useTranslation();
  return (
    <div>
      <nav className="navbar navbar-expand-lg ">
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
          className="navbar-toggler navbar-light"
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
              {t("home.label")} <span className="sr-only">(current)</span>
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
                {t("product.label")}
              </a>
              <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <a class="dropdown-item" href="#">
                  {t("porceliantiles.label")}
                </a>
                <a class="dropdown-item" href="#">
                  {t("ceramic.label")}
                </a>
              </div>
            </div>
            <a className="nav-item nav-link" href="#">
              {t("weare.label")}
            </a>
            <Link className="nav-item nav-link" to="/about-us">
              {t("about.label")}
            </Link>
            <Link className="nav-item nav-link" to="/contact-us">
              {t("contactus.label")}
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}
