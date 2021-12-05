import React, { useEffect } from 'react';
import { Link } from "react-router-dom";
import { getVideogameById} from "../actions/index";
import { useDispatch, useSelector } from "react-redux";
import Navbar from './Navbar';

const Detail = (props) => {
    console.log(props);
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(getVideogameById(props.match.params.id))
    },[dispatch]);

    const selectedGame = useSelector((state)=>state.detail)
    return (
        <div>
            <Navbar/>
        <div>
            <p>DETAIL</p>
            {
                selectedGame.length > 0 ?
                <div>
                    <h1>{selectedGame[0].name}</h1>
                    <img src={selectedGame[0].img? selectedGame[0].img: selectedGame[0].image} alt="aa" width="500px" height="700px"></img>
                    <p>{selectedGame[0].description}</p>
                    <p>{selectedGame[0].launching}</p>
                    <p>{selectedGame[0].rating}</p>
                    <p>{selectedGame[0].platforms}</p>
                    <p>{!selectedGame[0].createdInDb? selectedGame[0].genres+'' : selectedGame[0].Genres}</p>
                </div>
                 : <div><p>Buscando...</p></div>
            }
            <Link to="/home">
            <button>Volver</button></Link>
        </div></div>
    );
};

export default Detail;