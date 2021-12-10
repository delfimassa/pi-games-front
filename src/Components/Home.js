import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getVideoGames,
  filterGamesByGenre,
  filterBydborapi,
  orderByName,
  orderByRating,
  deleteFilters,
} from "../actions";
import { Link } from "react-router-dom";
import Card from "./Card";
import Pagination from "./Pagination";
import SearchBar from "./SearchBar";
import "../styles/Home.css";
import emoji from "../assets/img/joystick2.png";
import Navbar from "./Navbar";
import pacman from "../assets/img/pacman.gif";

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getVideoGames());
  }, [dispatch]);

  const allVideoGames = useSelector((state) => state.videogames);
  const [order, setOrder] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const gamesPerPage = 15;
  const lastGame = currentPage * gamesPerPage;
  const firstGame = lastGame - gamesPerPage;
  const currentGames = allVideoGames?.slice(firstGame, lastGame);

  const paginado = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  function handleClick(e) {
    e.preventDefault();
    dispatch(deleteFilters());
  }

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

  return (
    <div>
      <Navbar />
      <div className="contenedor centrado">
        {/* Jumbotron superior */}
        <div className="jumbos jumboSup">
          <h1 className="findUrGame">
            Find your game{" "}
            <img src={emoji} width="45px" alt="joystick emoji"></img>
          </h1>
          <nav className="navSU">
            <div className="colSearch">
              <SearchBar />
            </div>
            <div className="colUpload">
              <Link to="/game">
                <button className="thirdBg sizeSU">
                  Or upload a new one! &#8594;
                </button>
              </Link>
            </div>
          </nav>
          {/* selects */}
          <div>
            <select onChange={(e) => handleOrderByName(e)}>
              <option>Alphabetically</option>
              <option value="asc">A-Z</option>
              <option value="desc">Z-A</option>
            </select>
            <select onChange={(e) => handleOrderByRating(e)}>
              <option>By rating</option>
              <option value="rdesc">Best to worst</option>
              <option value="rasc">Worst to best</option>
            </select>
            <select onChange={(e) => handleFilterBydborapi(e)}>
              <option>Origin</option>
              <option value="all">All</option>
              <option value="api">From API</option>
              <option value="mydb">Created here</option>
            </select>

            <select onChange={(e) => handleFilterByGenres(e)}>
              <option>By genre</option>
              {/* <option value="All">All</option> */}
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
              <option value="Massively Multiplayer">
                Massively Multiplayer
              </option>
              <option value="Sports">Sports</option>
              <option value="Figthing">Figthing</option>
              <option value="Family">Family</option>
              <option value="Board Games">Board Games</option>
              <option value="Educational">Educational</option>
              <option value="Card">Card</option>
            </select>

            <button
              onClick={(e) => {
                handleClick(e);
              }}
            >
              Delete all filters
            </button>
          </div>
          {/* fin zona selects */}
        </div>

        {/* Junbotron inferior  */}
        <div className="jumbos">
          <Pagination
            allVideoGames={allVideoGames?.length}
            gamesPerpage={gamesPerPage}
            paginado={paginado}
          />
          <div className="jumboInf">
            {currentGames.length > 0 ? (
              currentGames.map((e) => {
                return (
                  <div key={e.id}>
                    <Link to={`/videogames/${e.id}`}>
                      <Card
                        name={e.name}
                        image={e.image}
                        genres={
                          e.genres
                            ? e.genres.map((e) => e.name + " ")
                            : e.Genres.map((e) => e.name + " ")
                        }
                        rating={e.rating}
                        key={e.id}
                      />
                    </Link>
                  </div>
                );
              })
            ) : (
              <div>
                <p>Loading...</p>
                <img src={pacman} alt="loading gif"></img>
              </div>
            )}
          </div>
          <Pagination
            allVideoGames={allVideoGames?.length}
            gamesPerpage={gamesPerPage}
            paginado={paginado}
          />
        </div>
        {/* fin jumbotron inferior */}
        {/* fin contenedor centrado */}
      </div>
    </div>
  );
};

export default Home;
