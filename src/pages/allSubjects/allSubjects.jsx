import React from "react";
import Navbar from "../../basics/navbar.jsx";
import { Link, Navigate } from "react-router-dom";

export default function AllSubjects() {
  return (
    <>
      <Navbar />

      <h1 className="title" id="navMove">Learning</h1>
      <div className="allSubs">
        <div>
          <h2 className="small-title" onClick={() => window.location.href="/calculus"}>Mathematics</h2>

          <ul style={{listStyle: "none", padding: 0}}>
            <li><div onClick={() => window.location.href="/calculus/units/1"}>Unit 1</div></li>
            <li><div onClick={() => window.location.href="/calculus/units/2"}>Unit 2</div></li>
            <li><div onClick={() => window.location.href="/calculus/units/3"}>Unit 3</div></li>
          </ul>
        </div>

        <div>
          <h1 className="small-title">Physics</h1>

          <ul style={{listStyle: "none", padding: 0}}>
            <li><Link to="/calculus/units/1">Unit 1</Link></li>
            <li><Link to="/calculus/units/2">Unit 2</Link></li>
            <li><Link to="/calculus/units/3">Unit 3</Link></li>
          </ul>
        </div>

        <div>
          <h1 className="small-title">Chemistry</h1>

          <ul style={{listStyle: "none", padding: 0}}>
            <li><Link to="/calculus/units/1">Unit 1</Link></li>
            <li><Link to="/calculus/units/2">Unit 2</Link></li>
            <li><Link to="/calculus/units/3">Unit 3</Link></li>
          </ul>
        </div>

        <div>
          <h1 className="small-title">Computer Science</h1>

          <ul style={{listStyle: "none", padding: 0}}>
            <li><Link to="/calculus/units/1">Unit 1</Link></li>
            <li><Link to="/calculus/units/2">Unit 2</Link></li>
            <li><Link to="/calculus/units/3">Unit 3</Link></li>
          </ul>
        </div>
      </div>
    </>
  );
}
