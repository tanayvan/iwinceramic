import React, { Suspense } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import { Router } from "react-router";
import ContactUs from "./Pages/ContactUs";
import AboutUs from "./Pages/AboutUs";
import LaunguageSelector from "./components/LaunguageSelector";
import { createBrowserHistory } from "history";
const history = createBrowserHistory();

export default function Routes(props) {
  return (
    <BrowserRouter history={history}>
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
