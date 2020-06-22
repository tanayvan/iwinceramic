import React from "react";
import Base from "../components/Base";

import banner from "../assets/banner.jpg";
import Tiles from "../components/Card";

export default function HomePage() {
  return (
    <Base>
      <div className="container">
        <div className="row mt-5">
          <div className="col-lg-6 mt-5">
            <h1 className="display-5">Best Tile Manufacturer in India</h1>
            <p>
              The Company carries the vision to cater world className Parking
              Tiles. It believes in manufacturing superior quality Parking Tiles
              with sharp market visualization.
            </p>
            <p>
              Get top quality Porcelain tile, Ceramic tile and Vitrified tile in
              various types, designs and sizes at competitive prices. If you are
              looking for tile manufacturer in India, we are your best bet.
            </p>
            <button className="btn btn-outline-dark">Know More</button>
          </div>
          <div className="col-lg-6 mt-5">
            <div className="px-5">
              <img
                src={banner}
                style={{
                  height: "40vh",
                  width: "100%",
                }}
              />
            </div>
          </div>
        </div>
      </div>
      {/* our Products */}
      <div class="container mt-5">
        <h1 class="display-5 text-muted text-center">Our Products</h1>
        <div class="row my-5">
          <div class="col-lg-4">
            <Tiles
              title="Soluble Salt Nano Tile"
              subtitle="Economic Floor Tile"
            />
          </div>
          <div class="col-lg-4">
            <Tiles
              title="Double Charged Porcelain/Vitrified Tile"
              subtitle="Double protection with elegance."
            />
          </div>
          <div class="col-lg-4">
            <Tiles
              title="Digital Glazed Porcelain/Vitrified Tile"
              subtitle="Shimmering variety of glazed tiles."
            />
          </div>
          <div class="col-lg-4">
            <Tiles
              title="Full Body Porcelain/Vitrified Tile"
              subtitle="Unique from Surface through Body"
            />
          </div>
          <div class="col-lg-4">
            <Tiles
              title="Parking Tile"
              subtitle="Tough as stone for parking and pavement."
            />
          </div>
          <div class="col-lg-4">
            <Tiles
              title="Ceramic Digital Wall Tile"
              subtitle="Add some glamour to your walls."
            />
          </div>
        </div>
      </div>
    </Base>
  );
}
