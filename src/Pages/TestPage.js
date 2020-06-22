import React from "react";
import Tiles from "../components/Card";

export default function TestPage() {
  return (
    <div>
      <div class="container">
        <div class="row">
          <div class="col-lg-4">
            <Tiles
              title="Soluble Salt Nano Tile"
              subtitle="Economic Floor Title"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
