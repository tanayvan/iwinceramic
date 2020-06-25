import React from "react";
import i18next from "i18next";

export default function LaunguageSelector() {
  const changeLaunguage = (e) => {
    i18next.changeLanguage(e.target.value);
  };
  return (
    <div onChange={changeLaunguage}>
      <select id="cars">
        <option value="en">English</option>
        <option value="ch">Chinese</option>
        <option value="sp">Spanish</option>
        <option value="ar">Arabic</option>
        <option value="fr">French</option>
        <option value="rs">Russian</option>
      </select>
    </div>
  );
}
