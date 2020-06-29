import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Fotter";
import "../components/footer.css";
import { useTranslation } from "react-i18next";

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
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14707.45253977215!2d70.8514855!3d22.8445526!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x3af565c37e81a05e!2sI%20win%20Ceramic!5e0!3m2!1sen!2sin!4v1593173744477!5m2!1sen!2sin"
          width="600"
          height="450"
          frameborder="0"
          style="border:0;"
          allowfullscreen=""
          aria-hidden="false"
          tabindex="0"
        ></iframe>
      </div>

      <Footer />
    </div>
  );
}
