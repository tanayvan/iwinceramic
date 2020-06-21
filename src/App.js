import React from "react";
import "./App.css";

import Footer from "./components/Fotter";
import Navbar from "./components/Navbar";
import Base from "./components/Base";

function App() {
  return (
    <Base>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          height: "70vh",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1 class="display-1">Tanay Van</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
          dolores doloremque explicabo eligendi, in qui quos. Ipsam est autem
          id!
        </p>
      </div>
    </Base>
  );
}

export default App;
