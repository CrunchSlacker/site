import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App";

import About from "./pages/about/about";
import Contact from "./pages/contact/contact";
import Calculus from "./pages/calculus/calculus";
import Physics from "./pages/physics/physics";
import AllSubjects from "./pages/allSubjects/allSubjects";
import CALC_UNIT_1_1 from "./pages/calculus/units/1.1/calc_unit_1.1";
import CALC_UNIT_3 from "./pages/calculus/units/3/CALC_UNIT_3";
import CALC_UNIT_4 from "./pages/calculus/units/4/CALC_UNIT_4";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/allSubjects" element={<AllSubjects />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/calculus" element={<Calculus />} />
      <Route path="/physics" element={<Physics />} />
      <Route path="/calculus/units/1" element={<CALC_UNIT_1_1 />} />
      <Route path="/calculus/units/3" element={<CALC_UNIT_3/>} />
      <Route path="/calculus/units/4" element={<CALC_UNIT_4/>} />
    </Routes>
  </BrowserRouter>
);
