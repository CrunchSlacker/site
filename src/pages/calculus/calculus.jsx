import React from "react";
import Navbar from "../../basics/navbar";
import styles from "./calculus.module.css";
import { Link } from "react-router-dom";

export default function Calculus() {
  return (
    <>
      <Navbar />
      <div className={styles.container}>
        <h1 className={styles.title}>Calculus</h1>
        <Link to="/calculus/units/1">Unit 1 : Limits and Continuity</Link>
        <Link to="/calculus/units/2">Unit 2: Differentiation</Link>
        <Link to="/calculus/units/3">
          Unit 3 : Differentiation (Composite, Implicit, and Inverse Functions)
        </Link>
        <Link to="/calculus/units/4">Unit 4</Link>
      </div>
    </>
  );
}
