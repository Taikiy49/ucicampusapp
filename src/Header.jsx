import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div className="header-container">
      <Link to="/" className="header-logo">
        UCIvents
      </Link>

      <nav className="header-nav-links">
        <Link to="/" className="header-nav-link">
          Home
        </Link>
        <Link to="/events" className="header-nav-link">
          Events
        </Link>
        <Link to="/profile" className="header-nav-link">
          Profile
        </Link>
      </nav>

      <div className="header-right">
        <input
          type="text"
          placeholder="Search for events, clubs..."
          className="search-bar"
        />
      </div>
    </div>
  );
};

export default Header;
