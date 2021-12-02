import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getVideoGames, filterGamesByGenre, filterBydborapi, orderByName } from "../actions";
import { Link } from "react-router-dom";
import Card from "./Card";
import Paginado from "./Paginado";

const Home = () => {
  const dispatch = useDispatch();
  const allVideoGames = useSelector((state) => state.videogames);
  const [currentPage, setCurrentPage] = useState(1);
  const [gamesPerPage, setGamesPerPage] = useState(15);
  const indexOfLastGame = currentPage * gamesPerPage; //5
  const indexOfFirstGame = indexOfLastGame - gamesPerPage;
  const currentGames = allVideoGames.slice(indexOfFirstGame, indexOfLastGame);
  const [oreden, setOrden] = useState('');

  const paginado = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    dispatch(getVideoGames());
  }, [dispatch]);

  function handleClick(e) {
    e.preventDefault();
    dispatch(getVideoGames());
  };

  function handleFilterByGenres(e){
    dispatch(filterGamesByGenre(e.target.value))
  };

  function handleFilterBydborapi(e){
    dispatch(filterBydborapi(e.target.value))
  };

  function handleOrderByName(e){
    e.preventDefault();
    dispatch(orderByName(e.target.value))
    setCurrentPage(1);
    setOrden(`Ordenado ${e.target.value}`) //???
  };

  return (
    <div>
      <Link to="/videogame">Agregar Videogame</Link>
      <h1>Videogames rawg!</h1>
      <button
        onClick={(e) => {
          handleClick(e);
        }}
      >
        Volver a cargar todos los personajes
      </button>
      <div>
        <select onChange={e=>handleOrderByName(e)}>
          <option value="asc">Alfabetico Asc</option>
          <option value="desc">Alfabetico Desc</option>
        </select>
        <select>
          <option value="rasc">Rating Asc</option>
          <option value="rdesc">Rating Desc</option>
        </select>
        <select onChange={e=>handleFilterBydborapi(e)}>
         <option value="all">Todos</option>
          <option value="api">Desde la API</option>
          <option value="mydb">Creado aqui</option>
        </select>

        <select onChange={e=>handleFilterByGenres(e)}>
          <option value="All">All</option>
          <option value="Action">Action</option>
          <option value="Indie">Indie</option>
          <option value="Adventure">Adventure</option>
          <option value="RPG">RPG</option>
          <option value="Strategy">Strategy</option>
          <option value="Shooter">Shooter</option>
          <option value="Adventure">Adventure</option>
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
          gamesPerpage={gamesPerPage}
          allVideoGames={allVideoGames.length}
          paginado={paginado}
        />
        {currentGames?.map((e) => {
          return (
            <div>
              <Link to={"/home/" + e.id}>
                <Card
                  name={e.name}
                  image={e.image}
                  genres={e.genres.map((e) => e.name)} 
                  //xra que tariga solo un array de nombre s y no de objs, sino rompen los de api
                  key={e.id}
                />
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
