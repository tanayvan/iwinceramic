import React, { Suspense } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import EnquiryForm from "./components/EnquiryForm";
import Card from "./components/Card";
import TestPage from "./Pages/TestPage";
import ContactUs from "./Pages/ContactUs";
import AboutUs from "./Pages/AboutUs";
import LaunguageSelector from "./components/LaunguageSelector";

export default function Routes(props) {
  return (
    <BrowserRouter>
      <Switch>
        <Suspense fallback={null}>
          <Route path="/" component={LaunguageSelector}></Route>
          <Route path="/" exact component={HomePage}></Route>
          <Route path="/contact-us" exact component={ContactUs}></Route>
          <Route path="/about-us" exact component={AboutUs}></Route>
        </Suspense>
      </Switch>
    </BrowserRouter>
  );
}
