import React from "react";
import Base from "../components/Base";

import banner from "../assets/banner.jpg";
import support from "../assets/24support.png";
import quality from "../assets/quality.png";
import lessprice from "../assets/lessprice.png";
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
        <div className="row mt-1">
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
        <h1 className="display-5 text-center text-muted">
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
      {/* 24*7 support */}
      <div class="container my-4">
        <div class="row">
          <div class="col-lg-4">
            <div class="support-container">
              <img src={support} alt="" className="support-image" />
              <h3 className="text-center my-3">24x7 support</h3>
              <p className="m-2">
                We have 50+ people in trade and support department who are
                always available to answer your queries, requests 24x7, round
                the clock. Have queries?
              </p>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="support-container">
              <img src={quality} alt="" className="support-image" />
              <h3 className="text-center my-3">Low Cost, Best Price</h3>
              <p className="m-2">
                Thanks to the economy of scale of our operations, we can
                manufacture top grade tiles at low costs. We pass on this
                benefit to you by offering the best tiles at competitively low
                prices.
              </p>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="support-container">
              <img src={lessprice} alt="" className="support-image" />
              <h3 className="text-center my-3">24x7 support</h3>
              <p className="m-2">
                Our super qualified technocrats and experienced R&D team make
                sure that every tile that reaches you is of great quality. We do
                not compromise on this aspect.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Base>
  );
}
