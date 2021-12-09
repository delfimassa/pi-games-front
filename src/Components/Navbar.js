import React from "react";
import {NavLink} from "react-router-dom";
import purplemonster from "../assets/img/alienmonster.png";
import "../styles/Navbar.css";

const Navbar = () => {
  return (
    <nav id="navbar">
      <NavLink to="/home" className="logo">
        <img src={purplemonster} width="55px" alt="logo, purple monster from pacman"></img>
      </NavLink>
      <div className="links">
        {" "}
        <NavLink to="/home" className="noDecoration" activeClassName="selected">Home</NavLink>
        <NavLink to="/about" className="noDecoration" activeClassName="selected">About</NavLink>
        <NavLink to="/game" className="noDecoration" activeClassName="selected">Upload</NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
