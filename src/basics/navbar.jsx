import React from "react";
import { Link } from "react-router-dom";
import logo from "../Logo-PNGs/txtandlogodifflogogradyparentback.png";

function Navbar() {
  return (
    <div class="sidenav">
      <img alt="logo" src={logo} onClick={() => window.location.href="/"} className="smallLogo"/>
      <Link to="/allSubjects">Learning</Link>
      <a href="#courses">Courses</a>
      <Link to="/schedule">Schedule</Link>
      <a href="#clients">Profile</a>
      <a href="#login" id="login">Sign In</a>
    </div>
  );
}

export default Navbar;
