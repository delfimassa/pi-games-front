import React, { useEffect } from 'react';
import { getVideogameById} from "../actions/index";
import { useDispatch, useSelector,} from "react-redux";
import { useParams } from 'react-router-dom';
import Navbar from './Navbar';
import defaultimg from "../assets/img/joysticks.jpg"

const Detail = () => {
    const dispatch = useDispatch();
    const selectedGame = useSelector((state)=>state.detail);
    console.log("selectedGame desde detail", selectedGame)
    const params = useParams();

    useEffect(() => {
        dispatch(getVideogameById(params.id))
    },[dispatch])

    return (
        <div>
            <Navbar/>
        <div>
            <p>DETAIL</p>
            {selectedGame?
                <div>
                    <h1>{selectedGame.name}</h1>
                    {/* <img src={selectedGame.img? selectedGame.img: selectedGame.image} alt="not found" width="500px" height="700px"></img> */}
                    <img src={selectedGame.image? selectedGame.image : defaultimg} alt="not found" width="500px" height="700px"></img>
                    <p>{selectedGame.description}</p>
                    <p>{selectedGame.launching}</p>
                    <p>{selectedGame.rating}</p>
                    <p>{selectedGame.platforms}</p>
                    <p>{selectedGame.genres}</p>
                </div>
                 : <div><p>Buscando...</p></div>}
        </div></div>
    );
};

export default Detail;