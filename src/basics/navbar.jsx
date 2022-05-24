import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

export default function Navbar() {
  return (
    <nav className='navbar'>
        <Link to="/"><button>Home</button></Link>
        <Link to="/about"><button>About</button></Link>
        <Link to="/calculus"><button>Calculus</button></Link>
        <Link to="/physics"><button>Physics</button></Link>
        {/* <button>CSA</button>
        <button>World History</button>
        <button>US History</button>
        <button>Government</button> */}
        <Link to="/contact"><button>Contact</button></Link>
    </nav>
  );
}