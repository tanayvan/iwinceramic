import React from "react";
import "./footer.css";
import logo from "../assets/logo-white.png";
import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import {
  faInstagram,
  faInstagramSquare,
  faFacebookSquare,
  faTwitterSquare,
  faWhatsappSquare,
} from "@fortawesome/free-brands-svg-icons";
const Footer = () => {
  const { t } = useTranslation();
  return (
    <div className="myfooter ">
      <div className="container">
        <div className="row ">
          <div className="col-lg-3 col-md-6">
            <h5 className="footer-heading">IWIN CERAMIC</h5>
            <img
              src={logo}
              alt=""
              style={{
                height: "4rem",
              }}
            />
            <p className="socialMedia-icon mt-4">
              <a href="#" className="mr-3">
                <FontAwesomeIcon icon={faInstagramSquare} />
              </a>
              <a href="#" className="mr-3">
                <FontAwesomeIcon icon={faFacebookSquare} />
              </a>
              <a href="#" className="mr-3">
                <FontAwesomeIcon icon={faTwitterSquare} />
              </a>
              <a href="#" className="mr-3">
                <FontAwesomeIcon icon={faWhatsappSquare} />
              </a>
            </p>
          </div>

          <div className="col-lg-3 col-md-6">
            <h5 className="footer-heading">{t("ourproduct.label")}</h5>
            <ul>
              <li>
                <a href="#">Soluble Salt Nano Tile</a>
              </li>
              <li>
                <a>Double Charged Porcelain/Vitrified Tile</a>
              </li>
              <li>
                <a>Digital Glazed Porcelain/Vitrified Tile</a>
              </li>
              <li>
                <a>Full Body Porcelain/Vitrified Tile</a>
              </li>
              <li>
                <a>Parking Tile</a>
              </li>
              <li>
                <a>Step Riser & Wood Look Tile</a>
              </li>
              <li>
                <a>Ceramic Digital Wall Tile</a>
              </li>
            </ul>
          </div>

          <div className="col-lg-3 col-md-6">
            <h5 className="footer-heading">{t("weare.label")}</h5>
            <ul>
              <li>
                <a>{t("importer.label")}</a>
              </li>
              <li>
                <a>{t("distributor.label")}</a>
              </li>
              <li>
                <a>{t("builder.label")}</a>
              </li>
              <li>
                <a>{t("homeoffice.label")}</a>
              </li>
            </ul>
          </div>

          <div className="col-lg-3 col-md-6">
            <h5 className="footer-heading">{t("contactus.label")}</h5>
            <p>
              I win Ceramic Corporate Office Pacific Business Park Second floor
              Shop No. 249,250,251 8-A National Highway Near Sunora Ceramic
              Morbi 363642
            </p>

            <a href="mailto:info@iwinceramic.com">
              <FontAwesomeIcon className="mr-2" icon={faEnvelope} />
              info@iwinceramic.com
            </a>
            <br />

            <a href="tel:+919825289599">
              <FontAwesomeIcon className="mr-2" icon={faPhone} />
              +9198252 89599
            </a>
            <br />
            <a href="tel:+919612833333">
              <FontAwesomeIcon className="mr-2" icon={faPhone} />
              +919612833333
            </a>
          </div>
        </div>
      </div>
      <div className="copyright">Copyright 2020</div>
    </div>
  );
};

export default Footer;
