import React from "react";
import Navbar from "../../basics/navbar.jsx";
import { InlineWidget } from "react-calendly";

export default function Schedule() {
  return (
    <>
      <Navbar />
      <div id="navMove">
        <h1 className="title">Schedule</h1>
        <InlineWidget url="https://calendly.com/peertupeer" />
      </div>
    </>
  );
}
