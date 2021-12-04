import React from "react";
import { Link } from "react-router-dom";
import styles from "../styles/Landing.module.css";
import logo from "../assets/img/die.png";
// import logo from "../assets/img/alienmonster.png"
// import logo from "../assets/img/joystick3.png"

const LandingPage = () => {
  return (
    <div className={styles.landing}>
      <div className={styles.contenedor}>
        <h1 className={styles.titulo}>
          Game time <img src={logo} width="70px"></img>
        </h1>
        <h2 className={styles.delfi}>By Delfi Massa</h2></div>
        <Link to="/home">
          <button className={styles.letsgo}>Let's go!</button>
        </Link>
      
    </div>
  );
};

export default LandingPage;
