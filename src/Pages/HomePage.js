import React from "react";
import Base from "../components/Base";

import banner from "../assets/banner.jpg";

export default function HomePage() {
  return (
    <Base>
      <div class="container">
        <div class="row mt-5">
          <div class="col-lg-6">
            <h1 class="display-5">Best Tile Manufacturer in India</h1>
            <p>
              The Company carries the vision to cater world class Parking Tiles.
              It believes in manufacturing superior quality Parking Tiles with
              sharp market visualization.
            </p>
            <p>
              Get top quality Porcelain tile, Ceramic tile and Vitrified tile in
              various types, designs and sizes at competitive prices. If you are
              looking for tile manufacturer in India, we are your best bet.
            </p>
            <button className="btn btn-outline-dark">Know More</button>
          </div>
          <div class="col-lg-6 mt-5">
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
    </Base>
  );
}
