import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Fotter";
import "../components/footer.css";
import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import Iframe from "react-iframe";
import {
  faInstagram,
  faFacebook,
  faTwitter,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
export default function ContactUs() {
  const { t, i18n } = useTranslation();
  const [values, setValues] = useState({
    name: "",
    email: "",
    subject: "",
    phone: "",
    message: "",
  });
  const { name, email, subject, phone, message } = values;
  const handleChange = (name) => (e) => {
    setValues({ ...values, [name]: e.target.value });
  };
  const handleClick = (e) => {
    e.preventDefault();
    console.log(values);
  };
  return (
    <div>
      <Navbar />
      <div style={{ display: "flex", justifyContent: "center" }}>
        <h1 className="display-5  mt-5 heading">{t("contactus.label")}</h1>
      </div>
      <div class="container">
        <div class="row">
          <div class="col-lg-8">
            <form className="m-5">
              <div class="form-row">
                <div class="form-group col-md-6">
                  <input
                    type="email"
                    class="form-control"
                    id="inputEmail4"
                    placeholder={t("eqname")}
                    name="name"
                    onChange={handleChange("name")}
                  />
                </div>
                <div class="form-group col-md-6">
                  <input
                    type="text"
                    class="form-control"
                    id="inputPassword4"
                    placeholder={t("eqemail")}
                    name="email"
                    onChange={handleChange("email")}
                  />
                </div>
              </div>
              <div class="form-row">
                <div class="form-group col-md-6">
                  <input
                    type="text"
                    class="form-control"
                    id="inputEmail4"
                    placeholder={t("subject.label")}
                    name="subject"
                    onChange={handleChange("subject")}
                  />
                </div>
                <div class="form-group col-md-6">
                  <input
                    type="text"
                    class="form-control"
                    id="inputPassword4"
                    placeholder={t("eqphone")}
                    onChange={handleChange("phone")}
                    name="phone"
                  />
                </div>
              </div>
              <div className="form-group ">
                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  placeholder={t("subject.label")}
                  onChange={handleChange("message")}
                  name="message"
                ></textarea>
              </div>
              <button type="submit" class="btn btn-dark" onClick={handleClick}>
                {t("sendus.label")}
              </button>
            </form>
          </div>
          <div class="col-lg-4">
            <div class="m-5">
              <p style={{ fontWeight: "bold", textAlign: "center" }}>Address</p>
              <p>
                I win Ceramic Corporate Office Pacific Business Park Second
                floor Shop No. 249,250,251 8-A National Highway Near Sunora
                Ceramic Morbi 363642
              </p>
              <a href="mailto:info@iwinceramic.com" className="contactus-icon">
                <FontAwesomeIcon className="mr-2" icon={faEnvelope} />
                info@iwinceramic.com
              </a>
              <br />

              <a href="tel:+919825289599" className="contactus-icon">
                <FontAwesomeIcon className="mr-2" icon={faPhone} />
                +9198252 89599
              </a>
              <br />
              <a href="tel:+919612833333" className="contactus-icon">
                <FontAwesomeIcon className="mr-2" icon={faPhone} />
                +919612833333
              </a>

              <p className=" mt-4">
                <Link href="#" className="mr-3 icont">
                  <FontAwesomeIcon icon={faInstagram} />
                </Link>
                <Link href="#" className="mr-3 icont">
                  <FontAwesomeIcon icon={faFacebook} />
                </Link>
                <Link href="#" className="mr-3 icont">
                  <FontAwesomeIcon icon={faTwitter} />
                </Link>
                <Link href="#" className="mr-3 icont">
                  <FontAwesomeIcon icon={faWhatsapp} />
                </Link>
              </p>
            </div>
          </div>
          <div class="col-12">
            <div
              className="p-5 text-center "
              style={{
                display: "flex",
                alignContent: "center",
                justifyContent: "center",
              }}
            >
              <Iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3676.86482907147!2d70.84853781491582!3d22.84448993504357!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39598c8f653d3b8b%3A0x9963198fb6fde971!2sPacific%20Business%20Park!5e0!3m2!1sen!2sin!4v1593420623896!5m2!1sen!2sin"
                width="70%"
                height="250"
                frameborder="0"
                style="border:0;"
                allowfullscreen=""
                aria-hidden="false"
                tabindex="0"
              ></Iframe>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
