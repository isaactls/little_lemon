import React from "react";
import "./nav.css";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
const Nav = () => {
  const [windowwidth, setWindowWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleSize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleSize);
    return () => {
      window.removeEventListener("resize", handleSize);
    };
  }, []);
  const [isOpen, setIsOpen] = useState(false)
  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <nav className="nav-wrapper">
      {windowwidth > 892 ? (
        <ul className="nav-items-wrapper">
          <li>
            <NavLink className="nav-item" to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink className="nav-item" to="/About">
              About
            </NavLink>
          </li>
          <li>
            <NavLink className="nav-item" to="/Menu">
              Menu
            </NavLink>
          </li>
          <li>
            <NavLink className="nav-item" to="/Reservation">
              Reservation
            </NavLink>
          </li>
          <li>
            <NavLink className="nav-item" to="/Order_Online">
              Order Online
            </NavLink>
          </li>
          <li>
            <NavLink className="nav-item" to="/Login">
              Login
            </NavLink>
          </li>
        </ul>
      ) : (
        <div className={`hamburger-icon ${isOpen ? 'open' : ''}`} onClick={toggleMenu} >
          <span></span>
          <span></span>
          <span></span>
          {isOpen && (
              <ul className="nav-items-wrapper">
              <li>
                <NavLink className="nav-item" to="/">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink className="nav-item" to="/About">
                  About
                </NavLink>
              </li>
              <li>
                <NavLink className="nav-item" to="/Menu">
                  Menu
                </NavLink>
              </li>
              <li>
                <NavLink className="nav-item" to="/Reservation">
                  Reservation
                </NavLink>
              </li>
              <li>
                <NavLink className="nav-item" to="/Order_Online">
                  Order Online
                </NavLink>
              </li>
              <li>
                <NavLink className="nav-item" to="/Login">
                  Login
                </NavLink>
              </li>
            </ul>
          )}
        </div>
      )}
    </nav>
  );
};
export default Nav;
