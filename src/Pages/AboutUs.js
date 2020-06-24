import React from "react";
import Base from "../components/Base";

import office from "../assets/companyOffice.jpg";

export default function AboutUs() {
  return (
    <Base>
      <div className="container">
        <div className="row">
          <div class="col-lg-12 my-5">
            <h1 className="text-center display-4">About Us</h1>
          </div>
          <div class="col-lg-6">
            <h1>IWIN ceramic</h1>
            <p className="mt-5">
              The Company carries the vision to cater world class Parking Tiles.
              It believes in manufacturing superior quality Parking Tiles with
              sharp market visualization.
            </p>
            <p>
              The I win Ceramic Company with its track record of many successful
              years as leading ceramic company is capable to design and
              manufacture most modern 12x12 Parking Tiles and 12x12 Digital
              Parking Tiles in this competitive market.
            </p>
            <p>
              The I win Ceramic Company has a huge production capacity which
              falls in line with high European standards. The I win Ceramic
              Company has an in-house R & D department, where in continuous
              research is done in designs and quality, in order to provide value
              for money to our customers.
            </p>
            <p>
              The I win Ceramic Company has well established dealer network
              throughout the whole country and it has marked its presence in
              export market of various countries.
            </p>
            <button type="button" class="btn btn-dark btn-lg mt-5">
              Download Catalouge
            </button>
          </div>
          <div class="col-lg-6">
            <div className="m-5">
              <img
                src={office}
                alt=""
                style={{
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
