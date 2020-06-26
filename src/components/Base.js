import React from "react";
import Navbar from "./Navbar";
import Footer from "./Fotter";
import EnquiryForm from "./EnquiryForm";
import { useTranslation } from "react-i18next";

export default function Base({ children }) {
  const { t, i18n } = useTranslation();
  return (
    <>
      <Navbar />
      {children}
      <div
        style={{
          marginTop: 10,
          backgroundImage: "linear-gradient(to top ,#D1D1D1,#F0F0F0)",
          padding: "10px 0px",
        }}
      >
        <div className="container my-5">
          <div className="row">
            <div className="col-lg-6 enquiry-form-container col-12">
              <div className="">
                <h1 className="text-center display-4 mt-5">
                  {t("eqformh1.label")}
                </h1>
                <div className="text-center mt-5 ">
                  <p className="enquiry-text">{t("eqformp1.label")}</p>
                  <p className="enquiry-text"> {t("eqformp2.label")}</p>
                  <p className="enquiry-text"> {t("eqformp3.label")}:</p>
                  <p className="enquiry-text">- {t("eqformp4.label")}</p>
                  <p className="enquiry-text">- {t("eqformp5.label")}</p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-12">
              <EnquiryForm />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
