import React from "react";
import { Link } from "react-router-dom";
import logo from "../Logo-PNGs/txtandlogodifflogogradyparentback.png";

function Navbar() {
  return (
    <div class="sidenav">
      <img alt="logo" src={logo} onClick={() => window.location.href="/"} className="smallLogo"/>
      <Link to="/allSubjects">Learning</Link>
      <Link to="/schedule">Schedule</Link>
      <a href="#clients">Profile</a>
      <Link to="/login" id="login">Login</Link>
    </div>
  );
}

export default Navbar;
