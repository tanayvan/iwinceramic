import React, { useState } from "react";
import { useTranslation } from "react-i18next";

export default function EnquiryForm() {
  const { t, i18n } = useTranslation();
  const [values, setValues] = useState({
    name: "",
    email: "",
    phone: "",
    pricelist: "",
    details: "",
  });
  const { name, email, phone, pricelist, details } = values;
  const handleChange = (name) => (e) => {
    setValues({ ...values, [name]: e.target.value });
  };
  const handleClick = (e) => {
    e.preventDefault();
    console.log(values);
    fetch("http://localhost:4000/enquiryform", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: values.name,
        email: values.email,
        phone: values.phone,
        pricelist: values.pricelist,
        enquiry: values.details,
      }),
    })
      .then((response) => {
        setValues({
          name: "",
          email: "",
          phone: "",
          pricelist: "",
          details: "",
        });
        return response.json();
      })
      .catch((error) => console.log(error));
  };
  return (
    <div>
      <div className="form-container p-5">
        <form>
          <h1>{t("eqsye")}</h1>
          <div className="form-group">
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder={t("eqname")}
              name="name"
              onChange={handleChange("name")}
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder={t("eqemail")}
              onChange={handleChange("email")}
              name="email"
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              id="exampleInputPassword1"
              placeholder={t("eqphone")}
              onChange={handleChange("phone")}
              name="phone"
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              id="exampleInputPassword1"
              placeholder={t("eqpricelistdetails")}
              onChange={handleChange("pricelist")}
              name="pricelist"
            />
            <div className="form-group mt-3">
              <textarea
                className="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
                placeholder={t("eqdetails")}
                onChange={handleChange("details")}
                name="details"
              ></textarea>
            </div>
          </div>

          <button
            type="submit"
            className="btn btn-dark my-3"
            onClick={handleClick}
          >
            {t("sendus.label")}
          </button>
        </form>
      </div>
    </div>
  );
}
