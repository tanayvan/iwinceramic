import React from "react";
import Navbar from "./Navbar";
import Footer from "./Fotter";

export default function Base({ children }) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
