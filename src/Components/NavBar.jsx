import React from "react";
import "../App.css";
import logo from "../assets/logo-mark.svg";

const NavBar = () => {
  return (
    <div className="navbar">
      <img
        src={logo}
        alt="vite logo"
        width="25"
        height="25"
        className="navbar-logo"
      />
      <h3>Coding Conf</h3>
    </div>
  );
};

export default NavBar;
