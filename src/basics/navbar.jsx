import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../pages/home';

export default function Navbar() {
  return (
    <nav>
        <button>Home</button>
        <button>About</button>
        <button>Calculus</button>
        <button>Physics</button>
        <button>CSA</button>
        <button>World History</button>
        <button>US History</button>
        <button>Government</button>
        <button>Contact</button>
    </nav>
  );
}