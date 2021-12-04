import React from 'react';

const Card = ({image, name, genres, rating}) => {
    return (
        <div>
            <h3>{name}</h3>
            <h5>{genres}</h5>
            <img src={image} alt="not found" width="200px" height="250px"></img>
            <h5>{rating}</h5>
        </div>
    );
};

export default Card;