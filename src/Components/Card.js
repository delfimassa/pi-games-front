import React from "react";
import defaultimg from "../assets/img/joysticks.jpg"

const Card = ({ image, name, genres, rating }) => {
  return (
    <div className="card">
      <img className="imagenes" src={image? image : defaultimg} alt="not found" ></img> <h3>{name}</h3>
      <h5>({genres})</h5>
      <h5>Rating: {rating}</h5>
    </div>
  );
};

export default Card;
