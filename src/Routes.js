import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import EnquiryForm from "./components/EnquiryForm";
import Card from "./components/Card";
import TestPage from "./Pages/TestPage";
import ContactUs from "./Pages/ContactUs";
import AboutUs from "./Pages/AboutUs";

export default function Routes(props) {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={HomePage}></Route>
        <Route path="/contact-us" exact component={ContactUs}></Route>
        <Route path="/about-us" exact component={AboutUs}></Route>
      </Switch>
    </BrowserRouter>
  );
}
