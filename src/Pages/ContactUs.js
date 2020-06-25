import React, { useState } from "react";
import Base from "../components/Base";
import Navbar from "../components/Navbar";
import Footer from "../components/Fotter";
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
      <h1 className="display-5 text-center mt-5">{t("contactus.label")}</h1>
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
                placeholder={t("eqphone ")}
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
      <Footer />
    </div>
  );
}
