import React from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <h2 className="logo">
        <Link to="/">React Router V6</Link>
      </h2>

      <div className="nav">
        <NavLink
          to="/"
          className={(active) => (active.isActive ? "active" : "navLink")}
        >
          Home
        </NavLink>
        <NavLink
          to="rooms"
          className={(active) => (active.isActive ? "active" : "navLink")}
        >
          Rooms
        </NavLink>
        <NavLink
          to="about"
          className={(active) => (active.isActive ? "active" : "navLink")}
        >
          About
        </NavLink>
      </div>
    </div>
  );
};

export default Header;
