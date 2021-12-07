const initialState = {
  videogames: [],
  detail: [],
  genres: [],
  allVideoGames: [],
};

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case "GET_VIDEOGAME_BY_NAME":
      return {
        ...state,
        videogames: action.payload,
      };

    case "GET_VIDEOGAME_BY_ID":
      return {
        ...state,
        detail: action.payload,
      };

    case "GET_VIDEOGAMES":
      return {
        ...state,
        videogames: action.payload,
        allVideoGames: action.payload,
      };

    case "GET_GENRES":
      return {
        ...state,
        genres: action.payload,
      };

    case "POST_VIDEOGAME":
      return { ...state };

    case "FILTER_BY_GENRE": {
      const allGames = state.allVideoGames;
      let gamesFiltered = [];
      if (action.payload === "All") {
        return state.allVideoGames;
      } else {
        for (var i = 0; i < allGames?.length; i++) {
          let gen = allGames[i].genres.map((elem) => elem.name);
          if (gen.includes(action.payload)) gamesFiltered.push(allGames[i]);
        }
      }
      return {
        ...state,
        videogames: gamesFiltered,
      };
    }

    case "FILTER_BY_DBORAPI":
      const dborapiFilter =
        action.payload === "all"
          ? state.allVideoGames
          : action.payload === "mydb"
          ? state.allVideoGames.filter((e) => e.createdInDb)
          : state.allVideoGames.filter((e) => !e.createdInDb);
      return {
        ...state,
        videogames: dborapiFilter,
      };

    case "ORDER_BY_NAME":
      let sortedArr =
        action.payload === "asc"
          ? state.videogames.sort(function (a, b) {
              if (a.name.toLowerCase() > b.name.toLowerCase()) {
                return 1;
              }
              if (a.name.toLowerCase() < b.name.toLowerCase()) {
                return -1;
              }
              return 0;
            })
          : state.videogames.sort(function (a, b) {
              if (a.name.toLowerCase() > b.name.toLowerCase()) {
                return -1;
              }
              if (a.name.toLowerCase() < b.name.toLowerCase()) {
                return 1;
              }
              return 0;
            });
      return {
        ...state,
        videogames: sortedArr,
      };

    case "ORDER_BY_RATING":
      let sortedByRating =
        action.payload === "rasc"
          ? state.videogames.sort(function (a, b) {
              if (a.rating > b.rating) {
                return 1;
              }
              if (a.rating < b.rating) {
                return -1;
              }
              return 0;
            })
          : state.videogames.sort(function (a, b) {
              if (a.rating > b.rating) {
                return -1;
              }
              if (a.name < b.name) {
                return 1;
              }
              return 0;
            });
      return {
        ...state,
        videogames: sortedByRating,
      };

    default:
      return state;
  }
}
