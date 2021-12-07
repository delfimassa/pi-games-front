import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { postGame, getGenres } from "../actions/index";
import { useDispatch, useSelector } from "react-redux";
import jsonPlatforms from "../platforms.json";
import Navbar from "./Navbar";
import "../styles/CreateForm.css";
import mario from "../assets/img/mario-bros1.jpg";

const validate = (input) => {
  let errores = {};
  if (!input.name) {
    errores.name = "Required name*";
  }
  if (!input.img) {
    errores.img = "Required image*";
  }
  if (input.genres.length === 0) {
    errores.genres = "Required at least 1 genre*";
  }
  if (!input.rating) {
    errores.rating = "Required rating*";
  }
  if (!input.description) {
    errores.description = "Required description*";
  }
  if (input.platforms.length === 0) {
    errores.platforms = "Required at least 1 platform*";
  }
  return errores;
};

const CreateForm = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const genres = useSelector((state) => state.genres);
  const platforms = jsonPlatforms;
  const [input, setInput] = useState({
    name: "",
    description: "",
    platforms: [],
    img: "",
    genres: [],
    rating: 0,
    released: "",
  });
  const [errors, setErrors] = useState({
    name: "",
    img: "",
    genres: "",
    rating: "",
    description: "",
    platforms: "",
  });

  useEffect(() => {
    dispatch(getGenres());
  }, []); ////

  function handleChange(e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
    setErrors(
      validate({
        ...input,
        [e.target.name]: e.target.value,
      })
    );
  }

  function handleCheckPlatforms(e) {
    if (e.target.checked) {
      setInput({
        ...input,
        platforms: [...input.platforms, e.target.value],
      });
    }
    console.log(input.platforms);
    setErrors(
      validate({
        ...input,
        rating: e.target.value,
      })
    );
  }

  function handleCheckGenres(e) {
    // if (e.target.checked) {
    setInput({
      ...input,
      genres: [...input.genres, e.target.value],
    });
    // }
    console.log(input.genres);
    setErrors(
      validate({
        ...input,
        rating: e.target.value,
      })
    );
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(input);
    if (
      errors.name ||
      errors.genres ||
      errors.rating ||
      errors.img ||
      errors.platforms
    ) {
      alert("Inserte la informacion requerida");
    } else {
      dispatch(postGame(input));
      alert("Videojuego creado con exito! :)");
      //  setInput({
      //  name: "",
      //  description: "",
      //  platforms: [],
      //  img: "",
      //  genres: [],
      //  rating: 0,
      //  released: "",})
      history.push("/home");
    }
  }
  return (
    <div>
      <Navbar />
      <div className="contenedor centrado">
        <h1>Upload a new videogame!</h1>
        <form onSubmit={(e) => handleSubmit(e)}>
          <div className="formGrid">
            {/* col1 */}
            <div className="cols col1">
              <img width="100%" src={mario} alt="mario"></img>
            </div>
            {/* col2 */}
            <div className="cols col2">
              <div>
                <label>Name: </label>
                <br />
                {errors.name && <p className="required">{errors.name}</p>}

                <input
                  onChange={(e) => handleChange(e)}
                  type="text"
                  value={input.name}
                  name="name"
                ></input>
              </div>
              <div>
                <label>Description: </label>
                <br />{" "}
                {errors.description && (
                  <p className="required">{errors.description}</p>
                )}
                <input
                  onChange={(e) => handleChange(e)}
                  type="text"
                  value={input.description}
                  name="description"
                ></input>
              </div>
              <div>
                <label>Launching date: </label>
                <br />
                <input
                  onChange={(e) => handleChange(e)}
                  type="text"
                  placeholder="aaaa-mm-dd"
                  value={input.released}
                  name="released"
                ></input>
              </div>
              <div>
                <label>Rating: </label>
                <br />
                {errors.rating && <p className="required">{errors.rating}</p>}

                <input
                  onChange={(e) => handleChange(e)}
                  type="number"
                  value={input.rating}
                  name="rating"
                ></input>
              </div>
            </div>
            {/* col3 */}
            <div className="cols col3">
              <div>
                <label>Image: </label>
                <br />
                <input
                  placeholder="image url here"
                  onChange={(e) => handleChange(e)}
                  type="text"
                  value={input.img}
                  name="img"
                ></input>
              </div>
              <label>Platforms:</label>
              <br />
              {errors.platforms && (
                <p className="required">{errors.platforms}</p>
              )}

              <select>
                {platforms &&
                  platforms.map((pl) => {
                    return (
                      <option
                        type="checkbox"
                        name={pl.name}
                        value={pl.name}
                        onChange={(e) => handleCheckPlatforms(e)}
                      >
                        {pl.name}
                      </option>
                    );
                  })}
              </select>
              <div className="">
                <label>Genres:</label>
                <br />
                {errors.genres && <p className="required">{errors.genres}</p>}

                <select>
                  {genres &&
                    genres.map((gr) => {
                      return (
                        <option
                          type="checkbox"
                          name={gr.name}
                          value={gr.name}
                          onChange={(e) => handleCheckGenres(e)}
                        >
                          {gr.name}
                        </option>
                      );
                    })}
                </select>
              </div>
              <br />
              <button className="enviar" type="submit">
                Enviar
              </button>
            </div>
          </div>

          {/* <div className="cols">
              <label>Platforms: </label>
              <br />
              {platforms &&
                platforms.map((pl) => {
                  return (
                    <label>
                      <input
                        type="checkbox"
                        name={pl.name}
                        value={pl.name}
                        onChange={(e) => handleCheckPlatforms(e)}
                      ></input>
                      {pl.name}
                    </label>
                  );
                })}
              {errors.platforms && <p>{errors.platforms}</p>}
            </div> */}
          {/* col3 */}
          {/* <div className="cols">
              <label>Genres: </label>
              <br />
              {genres &&
                genres.map((gr) => {
                  return (
                    <label>
                      <input
                        type="checkbox"
                        name={gr.name}
                        value={gr.name}
                        onChange={(e) => handleCheckGenres(e)}
                      ></input>
                      {gr.name}
                    </label>
                  );
                })}
              {errors.genres && <p>{errors.genres}</p>}
            </div> */}
        </form>
      </div>
    </div>
  );
};

export default CreateForm;
