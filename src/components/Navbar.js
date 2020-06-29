import React from "react";
import "./footer.css";
import { Link, withRouter } from "react-router-dom";

import logo from "../assets/logo.png";
import { useTranslation } from "react-i18next";
import LaunguageSelector from "./LaunguageSelector";

const currentTab = (history, path) => {
  if (history.location.pathname === path) {
    return { color: "#ed1c24" };
  } else {
    return { color: "black" };
  }
};

const Navbar = ({ history }) => {
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
            <Link
              className="nav-item nav-link"
              to="/"
              style={currentTab(history, "/")}
            >
              {t("home.label")} <span className="sr-only">(current)</span>
            </Link>
            <div class="dropdown">
              <Link
                className="nav-item nav-link"
                to="/"
                style={currentTab(history, "/products")}
              >
                {t("product.label")} <span className="sr-only">(current)</span>
              </Link>
              <div class="dropdown-content">
                <Link href="#">{t("porceliantiles.label")}</Link>
                <Link href="#">{t("ceramic.label")}</Link>
              </div>
            </div>
            <Link
              className="nav-item nav-link"
              to="/about-us"
              style={currentTab(history, "/about-us")}
            >
              {t("about.label")}
            </Link>
            <Link
              className="nav-item nav-link"
              to="/contact-us"
              style={currentTab(history, "/contact-us")}
            >
              {t("contactus.label")}
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default withRouter(Navbar);
