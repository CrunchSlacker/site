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
    </Routes>
  </BrowserRouter>
);
