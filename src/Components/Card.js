import React from 'react';

const Card = ({image, name, genres}) => {
    return (
        <div>
            <h3>{name}</h3>
            <h5>{genres}</h5>
            <img src={image} alt="not found" width="200px" height="250px"></img>
        </div>
    );
};

export default Card;