import React, { useEffect } from "react";
import { getVideogameById, emptyDetails } from "../actions/index";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Navbar from "./Navbar";
import defaultimg from "../assets/img/joysticks.jpg";
import "../styles/Detail.css";

const Detail = () => {
  const dispatch = useDispatch();
  const selectedGame = useSelector((state) => state.detail);
  console.log("selectedGame desde detail", selectedGame);
  const params = useParams();

  useEffect(() => {
    dispatch(getVideogameById(params.id));
  }, [dispatch]);


//   useEffect(() => {
//     dispatch(getVideogameById(params.id))
//     return function vaciar() {
//         dispatch(emptyDetails())
//     }
// }, [dispatch])

  return (
    <div>
      <Navbar />
      <div className="contenedorDetail centrado">
        {selectedGame ? (
          <div className="gameDeetCard">
            <div className="titleAndImg">
              <h1>Name: {selectedGame.name}</h1>
              {/* <img src={selectedGame.img? selectedGame.img: selectedGame.image} alt="not found" width="500px" height="700px"></img> */}
              <img
                src={selectedGame.image ? selectedGame.image : defaultimg}
                alt="not found"
                width="500px"
                height="700px"
              ></img>
            </div>
            <div className="details">
              <h3 className="detailData">
                <span className="span">Description: </span>
                {selectedGame.description}
              </h3>
              <h3 className="detailData">
                <span className="span">Launching date: </span>
                {selectedGame.launching}
              </h3>
              <h3 className="detailData">
                <span className="span">Rating: </span>
                {selectedGame.rating}
              </h3>
              <h3 className="detailData">
                <span className="span">Platforms: </span>
                {selectedGame.platforms}
              </h3>
              <h3 className="detailData">
                <span className="span">Genres: </span>
                {selectedGame.genres
                  ? selectedGame.genres.map((e) => <span>{e.name}</span>)
                  : selectedGame.Genres.map((e) => <span>{e.name}</span>)}
              </h3>
            </div>
          </div>
        ) : (
          <div>
            <p>Buscando...</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Detail;
