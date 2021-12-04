import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getVideoGames,
  filterGamesByGenre,
  filterBydborapi,
  orderByName,
  orderByRating,
} from "../actions";
import { Link } from "react-router-dom";
import Card from "./Card";
import Paginado from "./Paginado";
import SearchBar from "./SearchBar";

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getVideoGames());
  }, [dispatch]);
  
  const allVideoGames = useSelector((state) => state.videogames);
  const [order, setOrder] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  // const [gamesPerPage, setGamesPerPage] = useState(15);
  const gamesPerPage = 15;
  const lastGame = currentPage * gamesPerPage;
  const firstGame = lastGame - gamesPerPage;
  const currentGames = allVideoGames?.slice(firstGame, lastGame);

  const paginado = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  function handleClick(e) {
    e.preventDefault();
    dispatch(getVideoGames());
  };

  function handleOrderByName(e) {
    e.preventDefault();
    dispatch(orderByName(e.target.value));
    setCurrentPage(1);
    setOrder(`Ordenado ${e.target.value}`);
  }

  function handleOrderByRating(e) {
    e.preventDefault();
    dispatch(orderByRating(e.target.value));
    setCurrentPage(1);
    setOrder(`Ordenado ${e.target.value}`);
  }

  function handleFilterBydborapi(e) {
    e.preventDefault();
    dispatch(filterBydborapi(e.target.value));
    setCurrentPage(1);
    setOrder(`Ordenado ${e.target.value}`);
  }

  function handleFilterByGenres(e) {
    e.preventDefault();
    dispatch(filterGamesByGenre(e.target.value));
    setCurrentPage(1);
    setOrder(`Ordenado ${e.target.value}`);
  }

  //fucntion handleDelete

  return (
    <div>
      <Link to="/game">Agregar Videogame</Link>
      <h1>Videogames rawg!</h1>
      <button
        onClick={(e) => {
          handleClick(e);
        }}
      >
        Volver a cargar todos los personajes
      </button>
      <div>
        <select onChange={(e) => handleOrderByName(e)}>
          <option>Alfabeticamente</option>
          <option value="asc">A-Z</option>
          <option value="desc">Z-A</option>
        </select>
        <select onChange={(e) => handleOrderByRating(e)}>
          <option>Por rating</option>
          <option value="rasc">Menor a mayor</option>
          <option value="rdesc">Mayor a menor</option>
        </select>
        <select onChange={(e) => handleFilterBydborapi(e)}>
          <option value="all">Todos</option>
          <option value="api">Desde la API</option>
          <option value="mydb">Creado aqui</option>
        </select>

        <select onChange={(e) => handleFilterByGenres(e)}>
          <option>Por genero</option>
          <option value="All">All</option>
          <option value="Action">Action</option>
          <option value="Indie">Indie</option>
          <option value="Adventure">Adventure</option>
          <option value="RPG">RPG</option>
          <option value="Strategy">Strategy</option>
          <option value="Shooter">Shooter</option>
          <option value="Casual">Casual</option>
          <option value="Simulation">Simulation</option>
          <option value="Puzzle">Puzzle</option>
          <option value="Arcade">Arcade</option>
          <option value="Platformer">Platformer</option>
          <option value="Racing">Racing</option>
          <option value="Massively Multiplayer">Massively Multiplayer</option>
          <option value="Sports">Sports</option>
          <option value="Figthing">Figthing</option>
          <option value="Family">Family</option>
          <option value="Board Games">Board Games</option>
          <option value="Educational">Educational</option>
          <option value="Card">Card</option>
        </select>
        <Paginado
          allVideoGames={allVideoGames?.length}
          gamesPerpage={gamesPerPage}
          paginado={paginado}
        />
        <SearchBar />
        {currentGames ? (
          currentGames.map((e) => {
            return (
              <div>
                <Link to={`/home/${e.id}`}>
                  <Card
                    name={e.name}
                    image={e.image? e.image : <img src="https://images.unsplash.com/photo-1580327344181-c1163234e5a0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8dmlkZW8lMjBnYW1lfGVufDB8fDB8fA%3D%3D&w=1000&q=80"/>}
                    genres={e.genres.map((e) => e.name)}
                    //xra que tariga solo un array de nombre s y no de objs, sino rompen los de api
                    rating={e.rating}
                    key={e.id}
                  />
                </Link>
              </div>
            );
          })
        ) : (
          <p>Error! no hay nungun juego :(</p>
        )}
      </div>
    </div>
  );
};

export default Home;
