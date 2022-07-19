import fullLogo from "./Logo-PNGs/peerlogotransparent.png";
import Navbar from "./basics/navbar.jsx";
import React from "react";
import "./App.css";

let width = window.innerWidth;
let height = window.innerHeight;

function App() {
  return (
    <>
      <Navbar />
      <div className="App">
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
          <h3 className="description">Peer to Peer Knowledge</h3>
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
          <h1>About Us</h1>
        </div>
      </div>
    </>
  );
}

export default App;
