import React from "react";
import { Link } from "react-router-dom";
import "../styles/Landing.css";
// import logo from "../assets/img/die.png";
import logo from "../assets/img/alienmonster.png"
// import logo from "../assets/img/joystick3.png"

const LandingPage = () => {
  return (
    <div className="landing">
      <div className="contenedorLanding">
        <h1 className="tituloLanding primaryColor">
          Game time <img src={logo} width="70px" alt="logo, purple monster from pacman"></img>
        </h1>
        <h2 className="delfi primaryColor">By Delfi Massa</h2></div>
        <Link to="/home">
          <button className="letsgo thirdBg">Let's go!</button>
        </Link>
      
    </div>
  );
};

export default LandingPage;
