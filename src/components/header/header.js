import React from "react";
import { Link } from "react-router-dom";
import "./header.css";

const Header = (props) => {
  return (
    <header className="header">
      <div className="header-wrapper-inner wrapper">
        <div className="nav-container">
          <nav className="nav">
            <ul className="nav-list">
              <Link className="logo" to="/">
                <h2>Kosmopolis</h2>
              </Link>
              <li className="nav-li-item">
                <Link to="/movies/">Films</Link>
              </li>
              <li className="nav-li-item">
                <Link to="/serials/">TV Serials</Link>
              </li>
              <li className="nav-li-item">
                <Link to="/upcoming/">Upcoming</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
