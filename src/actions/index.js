import axios from "axios";

export function getVideoGames() {
  return async function (dispatch) {
    try {
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

export function getVideogameByName(payload) {
  return async function (dispatch) {
    try {
      let json = axios.get(`http://localhost:3001/videogames?name=${payload}`);
      return dispatch({
        type: "GET_VIDEOGAME_BY_NAME",
        payload: json.data,
      });
    } catch (error) {
      console.log("frontError, no se encontro el juego ");
    }
  };
}

export function getGenres() {
  return async function (dispatch) {
    try{let json = await axios.get("http://localhost:3001/genres", {});
    return dispatch({ type: "GET_GENRES", payload: json.data });
  }catch(error){
    console.log(error)
  }
    
  };
}

export function postGame(payload) {
  return async function () {
    try{let json = await axios.post(
      "http://localhost:3001/videogame",
      payload
    );
    return json;
  }catch(error){
    console.log(error)
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

// export function emptyDetails() {
//   return {
//       type: "EMPTY_DETAILS"
//   };
// };

export function getVideogameById(id) {
  return async function (dispatch) {
    try {
      var json = await axios.get(`http://localhost:3001/videogames/:${id}`);
      return dispatch({
        type: "GET_VIDEOGAME_BY_ID",
        payload: json.data,
      });
    } catch (error) {
      console.log("no se pudo traer el detalle", error);
    }
  };
}

