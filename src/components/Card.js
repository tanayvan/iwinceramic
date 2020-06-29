import React from "react";
import "./card.css";

function Tiles({ className, title, subtitle, image }) {
  return (
    <div className={className}>
      <div className="tiles">
        <img className="image" width={"100%"} src={image} />
        <div className="text-container ml-4 mt-3">
          <h4 className="title">{title}</h4>
          <p className="description">{subtitle}</p>
        </div>
      </div>
    </div>
  );
}

export default Tiles;
