import React from 'react';
import "../App.css";
import { Link } from 'react-router-dom';

function Nav() {
  return (
      <nav>
            <Link className="title" to="/">
                <h1>FridgeBook</h1>
            </Link>
            <ul className="nav-links">
                {/* This won't change the active link for unknown reason after being clicked */}
                
                <Link to="/home" className={window.location.pathname === "/home" ? "nav-link active" : "nav-link"}>
                    <li className="nav-item">Home</li>
                </Link>
            </ul>
      </nav>
  );
}

export default Nav;
