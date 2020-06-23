import React from "react";
import Navbar from "./Navbar";
import Footer from "./Fotter";
import EnquiryForm from "./EnquiryForm";

export default function Base({ children }) {
  return (
    <>
      <Navbar />
      {children}
      <div className="container my-5">
        <div className="row">
          <div className="col-lg-6 enquiry-form-container col-12">
            <div className="">
              <h1 className="text-center display-4 mt-5">Get Price List</h1>
              <div className="text-center mt-5 ">
                <p className="enquiry-text">
                  We generally respond within 24 hours.
                </p>
                <p className="enquiry-text">100% Response Rate</p>
                <p className="enquiry-text">For better quotations, include:</p>
                <p className="enquiry-text">- A self-introduction</p>
                <p className="enquiry-text">- Special requests, if any</p>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-12">
            <EnquiryForm />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
