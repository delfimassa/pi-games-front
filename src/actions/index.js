import axios from "axios";

export function getVideoGames() {
  return async function (dispatch) {
    
    try {
      dispatch({
        type: "WAITING",
      })
      let json = await axios.get("http://localhost:3001/videogames"); //conecto con mi back :)
      return dispatch({
        type: "GET_VIDEOGAMES",
        payload: json.data,
      });
    } catch (error) {
      console.log("frontError, no se encontraron los juegos");
    }
  };
}

//Practicando con promise way
// export function getVideoGames() {
//   return function (dispatch) {
//     return fetch("http://localhost:3001/videogames")
//       .then(response => response.json())
//       .then(json => {
//         dispatch({ type: "GET_VIDEOGAMES", payload: json });
//       });
//   };
// }

// export function getGenres() {
//   return async function (dispatch) {
//     try {
//       let json = await axios.get("http://localhost:3001/genres", {});
//       return dispatch({ type: "GET_GENRES", payload: json.data });
//     } catch (error) {
//       console.log(error);
//     }
//   };
// }
//Practicando con promise way //axios!
export function getGenres() {
  return function (dispatch) {
    return axios.get("http://localhost:3001/genres")
      // .then(response => response.json())
      .then(response => {
        dispatch({ type: "GET_GENRES", payload: response.data });
      })
      .catch(error =>{
        console.log(error)
      });
  };
}

export function getVideogameById(id) {
  return async function (dispatch) {
    try {
      var json = await axios.get(`http://localhost:3001/videogames/${id}`);
      console.log("getbyid desde actions", json);
      return dispatch({
        type: "GET_VIDEOGAME_BY_ID",
        payload: json.data,
      });
    } catch (error) {
      console.log("no se pudo traer el detalle", error);
    }
  };
}

export function getVideogameByName(name) {
  
  return async function (dispatch) {
    try {
      dispatch({
    type: "WAITING",
  })
      let json = await axios.get(
        `http://localhost:3001/videogames?name=${name}`
      );
      console.log(json);

      return dispatch({
        type: "GET_VIDEOGAME_BY_NAME",
        payload: json.data,
      });
    } catch (error) {
      console.log("frontError, no se encontro el juego ");
    }
  };
}

export function postGame(payload) {
  return async function () {
    try {
      await axios.post("http://localhost:3001/videogame", payload);
    } catch (error) {
      console.log(error);
    }
  };
}

export function filterGamesByGenre(payload) {
  return {
    type: "FILTER_BY_GENRE",
    payload,
  };
}

export function filterBydborapi(payload) {
  return {
    type: "FILTER_BY_DBORAPI",
    payload,
  };
}

export function orderByName(payload) {
  return {
    type: "ORDER_BY_NAME",
    payload,
  };
}

export function orderByRating(payload) {
  return {
    type: "ORDER_BY_RATING",
    payload,
  };
}

export function deleteFilters() {
  return {
    type: "DELETE_FILTERS",
  };
}
