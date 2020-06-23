import React from "react";
import "./footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div class="myfooter mt-5">
      <div class="container">
        <div className="row ">
          <div className="col-lg-3 col-md-6">
            <h5 className="footer-heading">IWIN CERAMIC</h5>
            <p>
              I win Ceramic Corporate Office Pacific Business Park Second floor
              Shop No. 249,250,251 8-A National Highway Near Sunora Ceramic
              Morbi 363642
            </p>
          </div>

          <div className="col-lg-3 col-md-6">
            <h5 className="footer-heading">OUR PRODUCTS</h5>
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
            <h5 className="footer-heading">I AM...</h5>
            <ul>
              <li>
                <a>Importer</a>
              </li>
              <li>
                <a>Distributer</a>
              </li>
              <li>
                <a>Builder</a>
              </li>
              <li>
                <a>Home/Office owner</a>
              </li>
            </ul>
          </div>

          <div className="col-lg-3 col-md-6">
            <h5 className="footer-heading">CONTACT US</h5>
            <a href="mailto:info@iwinceramic.com">info@iwinceramic.com</a>
            <br />
            <a href="tel:+919825289599">+9198252 89599</a>
            <br />
            <a href="tel:+919612833333">+919612833333</a>
          </div>
        </div>
      </div>
      <div className="copyright">Copyright 2020</div>
    </div>
  );
};

export default Footer;
