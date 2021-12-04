import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getVideogameByName } from "../actions";

const SearchBar = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");

  function handleInputChange(e) {
    e.preventDefault();
    setName(e.target.value);
    console.log(name);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (name) {
      dispatch(getVideogameByName(name));
      setName("");
    }
  }

  return (
    <div>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          type="text"
          value={name}
          placeholder="Buscar..."
          onChange={(e) => handleInputChange(e)}
        ></input>
        <button type="submit">
          Buscar
        </button>
      </form>
    </div>
  );
};
export default SearchBar;
