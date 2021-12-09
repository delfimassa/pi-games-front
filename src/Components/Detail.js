import React, { useEffect } from "react";
import { getVideogameById } from "../actions/index";
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

  return (
    <div>
      <Navbar />
      <div className="contenedorDetail centrado">
        {selectedGame ? (
          <div className="gameDeetCard">
            <div className=" gameDeetGrid">
              <div className="titleAndImg">
                <h1>Name: {selectedGame.name}</h1>
                {/* <img src={selectedGame.img? selectedGame.img: selectedGame.image} alt="not found" width="500px" height="700px"></img> */}
                <img
                  src={
                    selectedGame.image
                      ? selectedGame.image
                      : selectedGame.img
                      ? selectedGame.img
                      : defaultimg
                  }
                  alt="not found"
                  width="500px"
                  height="700px"
                ></img>
              </div>
              <div className="details">
                <h2 className="detailData">
                  <span className="span">Launching date: </span>
                  {selectedGame.released||selectedGame.launching}
                </h2>
                <h2 className="detailData">
                  <span className="span">Rating: </span>
                  {selectedGame.rating}
                </h2>
                <h2 className="detailData">
                  <span className="span">Platforms: </span>
                  {" " + selectedGame.platforms}
                </h2>
                <h2 className="detailData">
                  <span className="span">Genres: </span>
                  {selectedGame.genres
                    ? selectedGame.genres.map((e) => (
                        <span key={e.name}>{e.name} </span>
                      )) || "selectedGame.genres"
                    : selectedGame.Genres
                    ? selectedGame.Genres.map((e) => (
                        <span key={e.name}>{e.name} </span>
                      ))
                    : "no tiene generos"}
                </h2>
              </div>
            </div>
            <div className="description">
              <h2 className="detailData">
                <span className="span">Description: </span>
              </h2>
              {selectedGame.description? <p> {selectedGame.description.replace(/<[^>]*>?/g, '')}</p> : <p>loading...</p>}
              
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
