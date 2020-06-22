import React from "react";
import "./card.css";

function Tiles({ className, title, subtitle }) {
  return (
    <div className={className}>
      <div className="tiles">
        <img
          className="image"
          width={"100%"}
          src="https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
          style={{}}
        />
        <div className="text-container ml-4 mt-3">
          <h4 className="title">{title}</h4>
          <p className="description text-muted">{subtitle}</p>
        </div>
      </div>
    </div>
  );
}

export default Tiles;
