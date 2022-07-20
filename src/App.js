import fullLogo from "./Logo-PNGs/peerlogotransparent.png";
import Navbar from "./basics/navbar.jsx";
import React from "react";
import chadRoblox from "../src/fllasdk1g0p01.png";
import descriptionArt from "../src/green.png"
import "./App.css";

let width = window.innerWidth - 179;
let height = window.innerHeight + 100;

function App() {
  return (
    <>
      <div className="App">
        <Navbar />
        <div
          style={{
            width: width,
            height: height,
            display: "flex",
            alignItems: "center",
            justifyItems: "center",
            flexDirection: "column",
          }}
        >
          <img
            alt="full Logo"
            src={fullLogo}
            className="fullLogo"
            style={{ marginTop: 150 }}
          />
          <img alt="description" src={descriptionArt} style={{maxWidth: "550px", paddingRight: "75px"}}></img>
        </div>
      </div>

      <div
        id="navMove"
        style={{
          width: width,
          height: height,
          display: "flex",
          alignItems: "center",
          justifyItems: "center",
          flexDirection: "column",
          backgroundColor: "white",
        }}
      >
        <h1
          className="title"
          style={{ marginTop: "50px", marginBottom: "50px" }}
        >
          About Us
        </h1>
        <div style={{ display: "flex" }}>
          <div>
            <h1 className="small-title" style={{ marginRight: "100px" }}>
              Quandale Dingle
            </h1>
            <p style={{ maxWidth: "500px" }}>
              Quandale Dingle has twenty years of experience in the field of
              racing. He's a NASCAR racist as well top-level F1 racist. He is
              the best racist that the world has ever seen and he surpasses all
              racists before him.{" "}
            </p>
          </div>
          <img alt="chad roblox" src={chadRoblox}></img>
        </div>
      </div>
    </>
  );
}

export default App;
