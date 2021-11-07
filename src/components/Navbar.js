import React, { useState } from "react";
import logo from "../images/logoBeach.png";
import { FaAlignRight } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOPen] = useState(false);

  const handleToggle = () => {
    setIsOPen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <NavLink to="/">
            <img src={logo} alt="Beach Resort" width="200" />
          </NavLink>
          <button onClick={handleToggle} type="button" className="nav-btn">
            <FaAlignRight className="nav-icon" />
          </button>
        </div>
        <ul className={isOpen ? "nav-links show-nav" : "nav-links"}>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/rooms/">Rooms</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
