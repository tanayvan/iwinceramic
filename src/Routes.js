import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import EnquiryForm from "./components/EnquiryForm";
import Card from "./components/Card";
import TestPage from "./Pages/TestPage";

export default function Routes(props) {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={HomePage}></Route>
      </Switch>
    </BrowserRouter>
  );
}
