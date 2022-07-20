import React from "react";
import Navbar from "../../basics/navbar.jsx";
import { Link } from "react-router-dom";

export default function AllSubjects() {
  return (
    <>
      <h1 className="title" id="navMove">Learning</h1>
      <div className="allSubs">
        <Navbar />

        <div>
          <Link to="/calculus" className="noUnderline">
            <h2 className="small-title">Mathematics</h2>
          </Link>

          <ul style={{ listStyle: "none", padding: 0 }}>
            <li>
              <Link to="/calculus/units/1" className="noUnderline">
                Unit One
              </Link>
            </li>
            <li>
              <Link to="/calculus/units/2" className="noUnderline">
                Unit Two
              </Link>
            </li>
            <li>
              <Link to="/calculus/units/3" className="noUnderline">
                Unit Three
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <Link to="/physics" className="noUnderline">
            <h2 className="small-title">Physics</h2>
          </Link>

          <ul style={{ listStyle: "none", padding: 0 }}>
            <li>
              <Link to="/calculus/units/1">Unit 1</Link>
            </li>
            <li>
              <Link to="/calculus/units/2">Unit 2</Link>
            </li>
            <li>
              <Link to="/calculus/units/3">Unit 3</Link>
            </li>
          </ul>
        </div>

        <div>
          <Link to="/chemistry" className="noUnderline">
            <h2 className="small-title">Chemistry</h2>
          </Link>

          <ul style={{ listStyle: "none", padding: 0 }}>
            <li>
              <Link to="/calculus/units/1">Unit 1</Link>
            </li>
            <li>
              <Link to="/calculus/units/2">Unit 2</Link>
            </li>
            <li>
              <Link to="/calculus/units/3">Unit 3</Link>
            </li>
          </ul>
        </div>

        <div>
          <Link to="/csp" className="noUnderline">
            <h2 className="small-title">Computer Science</h2>
          </Link>

          <ul style={{ listStyle: "none", padding: 0 }}>
            <li>
              <Link to="/calculus/units/1">Unit 1</Link>
            </li>
            <li>
              <Link to="/calculus/units/2">Unit 2</Link>
            </li>
            <li>
              <Link to="/calculus/units/3">Unit 3</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
