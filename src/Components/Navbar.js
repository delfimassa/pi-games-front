import React from "react";
import {Link} from "react-router-dom";
import purplemonster from "../assets/img/alienmonster.png";
import "../styles/Navbar.css";

const Navbar = () => {
  return (
    <nav id="navbar">
      <Link to="/home" className="logo">
        <img src={purplemonster} width="55px"></img>
      </Link>
      <div className="links">
        {" "}
        <Link to="/home" className="noDecoration">Home</Link>
        <Link to="/about" className="noDecoration">About</Link>
      </div>
    </nav>
  );
};

export default Navbar;
