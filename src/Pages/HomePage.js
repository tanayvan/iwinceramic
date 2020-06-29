import React from "react";
import Base from "../components/Base";

import banner from "../assets/banner.jpg";
import Tiles from "../components/Card";
import "../components/footer.css";
import { useTranslation } from "react-i18next";
import WeAre from "../components/WeAre";

export default function HomePage() {
  const { t } = useTranslation();
  return (
    <Base>
      {/* <div className="banner">
        <img src={banner3} className="banner-Image"></img>
        <div className="welcome">
          Welcome to <br />I win Ceramic
        </div>
      </div> */}
      <div className="container">
        <div className="row mt-5">
          <div className="col-lg-6 mt-5">
            <h1 className="display-5"> {t("introheading.label")}</h1>
            <p>{t("introp1.label")}</p>
            <p>{t("introp2.label")}</p>
            <button className="btn btn-outline-dark">
              {t("knowmore.label")}
            </button>
          </div>
          <div className="col-lg-6 mt-5">
            <div className="px-5" style={{ marginTop: 14 }}>
              <img
                src={banner}
                style={{ filter: "brightness(130%)" }}
                width={"100%"}
              />
            </div>
          </div>
        </div>
      </div>
      {/* our Products */}
      <div className="container mt-5">
        <h1 className="display-5 text-muted text-center">
          {t("ourproduct.label")}
        </h1>
        <div className="row my-5 ">
          <div className="col-lg-4 col-md-6">
            <Tiles
              title="Full Body Porcelain/Vitrified Tile"
              subtitle="Unique from Surface through Body"
            />
          </div>
          <div className="col-lg-4 col-md-6">
            <Tiles
              title="Double Charged Porcelain/Vitrified Tile"
              subtitle="Double protection with elegance."
            />
          </div>
          <div className="col-lg-4 col-md-6">
            <Tiles
              title="Digital Glazed Porcelain/Vitrified Tile"
              subtitle="Shimmering variety of glazed tiles."
            />
          </div>
          <div className="col-lg-4 col-md-6">
            <Tiles
              title="Soluble Salt Nano Tile"
              subtitle="Economic Floor Tile"
            />
          </div>

          <div className="col-lg-4 col-md-6">
            <Tiles
              title="Parking Tile"
              subtitle="Tough as stone for parking and pavement."
            />
          </div>
          <div className="col-lg-4 col-md-6">
            <Tiles
              title="Ceramic Digital Wall Tile"
              subtitle="Add some glamour to your walls."
            />
          </div>
        </div>
      </div>
      <div className="weare">
        <div className="container">
          <h1 className="display-5 text-muted text-center">We Are</h1>
          <WeAre />
        </div>
      </div>
    </Base>
  );
}
