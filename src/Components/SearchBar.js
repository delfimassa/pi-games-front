import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getVideogameByName } from "../actions";
import "../styles/Home.css"

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
    
      <form className="searchBar" onSubmit={(e) => handleSubmit(e)}>
        <input
        className="sizeSU"
          type="text"
          value={name}
          placeholder="Search here..."
          onChange={(e) => handleInputChange(e)}
        ></input>
        <button className="sizeSU" type="submit">
          Search
        </button>
      </form>
    
  );
};
export default SearchBar;
