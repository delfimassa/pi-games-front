import React, { useState, useEffect } from "react";
import { useHistory, Link } from "react-router-dom";
import { postGame, getGenres } from "../actions/index";
import { useDispatch, useSelector } from "react-redux";
import jsonPlatforms from "../platforms.json";

const validate = (input) => {
  let errores = {};
  if (!input.name) {
    errores.name = "Required name";
  }
  if (!input.img) {
    errores.img = "Required image";
  }
  if (input.genres.length === 0) {
    errores.genres = "Required at least 1 genre";
  }
  if (!input.rating) {
    errores.rating = "Required rating";
  }
  if (!input.description) {
    errores.description = "Required description";
  }
  if (input.platforms.length === 0) {
    errores.platforms = "Required at least 1 platform";
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
  }, []);

  function handleChange(e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
    setErrors(validate({
        ...input,
       [e.target.name]:e.target.value
    }))
  }

  function handleCheckPlatforms(e) {
    if (e.target.checked) {
      setInput({
        ...input,
        platforms: [...input.platforms, e.target.value],
      });
    }
    console.log(input.platforms);
    setErrors(validate({
        ...input,
        rating: e.target.value
    }))
  }

    function handleCheckGenres(e) {
      if (e.target.checked) {
        setInput({
          ...input,
          genres: [...input.genres, e.target.value],
        });
      }
      console.log(input.genres);
      setErrors(validate({
        ...input,
        rating: e.target.value
    }))
    }


 function handleSubmit(e){
     e.preventDefault();
     console.log(input)
    if (errors.name || errors.genres || errors.rating || errors.img || errors.platforms) {
        alert("Inserte la informacion requerida")
    }else {
    dispatch(postGame(input));
     alert('Videojuego creado con exito! :)')
    //  setInput({
    //  name: "",
    //  description: "",
    //  platforms: [],
    //  img: "",
    //  genres: [],
    //  rating: 0,
    //  released: "",})
     history.push('/home')
    }
}
  return (
    <div>
      <Link to="/home">
        <button>Volver</button>
      </Link>
      <h1>Carga tu videojuego!</h1>
      <form onSubmit={(e)=>handleSubmit(e)}>
        <div>
          <label>Nombre: </label>
          <input
            onChange={(e) => handleChange(e)}
            type="text"
            value={input.name}
            name="name"
          ></input>
          {errors.name && (<p>{errors.name}</p>)}
        </div>
        <div>
          <label>Descripcion: </label>
          <input
            onChange={(e) => handleChange(e)}
            type="text"
            value={input.description}
            name="description"
          ></input>
          {errors.description && (<p>{errors.description}</p>)}
        </div>
        <div>
          <label>Lanzamiento: </label>
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
          <input
            onChange={(e) => handleChange(e)}
            type="number"
            value={input.rating}
            name="rating"
          ></input>
          {errors.rating && (<p>{errors.rating}</p>)}
        </div>
        <div>
          <label>Imagen: </label>
          <input
            onChange={(e) => handleChange(e)}
            type="text"
            value={input.img}
            name="img"
          ></input>
        </div>
        {/* //////////////////// */}
        <br/><div>
        <label>Plataformas: </label><br/>
          {platforms &&
            platforms.map((pl) => {
              return (
                <label>
                  <input type="checkbox" name={pl.name} value={pl.name} onChange={(e)=>handleCheckPlatforms(e)}>
                  </input>
                  {pl.name}
                </label>
              );
            })}
          {errors.platforms && (<p>{errors.platforms}</p>)}
        </div><br/>
        <div>
          <label>Generos: </label><br/>
          {genres &&
            genres.map((gr) => {
              return (
                <label>
                  <input type="checkbox" name={gr.name} value={gr.name} onChange={(e)=>handleCheckGenres(e)}>
                  </input>
                  {gr.name}
                </label>
              );
            })}
            {errors.genres && (<p>{errors.genres}</p>)}
        </div><br/>
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default CreateForm;
