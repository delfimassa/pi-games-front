const initialState = {
  videogames: [],
  allVideoGames: [],
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case "GET_VIDEOGAMES":
      return {
        ...state,
        videogames: action.payload,
        allVideoGames: action.payload, //?
      };

    case "FILTER_BY_GENRE": {
      const allGames = state.allVideoGames;
      // const statusFiltered = action.payload === 'All' ? allGames : allGames.filter(e=>e.genres.includes(action.payload))
      let gamesFiltered = [];
      if (action.payload === "All") {
        return allGames;
      } else {
        for (var i = 0; i < allGames.length; i++) {
          let gen = allGames[i].genres.map((elem) => elem.name);
          if (gen.includes(action.payload)) gamesFiltered.push(allGames[i]);
        }
      }
      return {
        ...state,
        videogames: gamesFiltered,
      }
    };

    case 'FILTER_BY_DBORAPI':
      const dborapiFilter = action.payload === 'mydb' ? state.allVideoGames.filter(e=>e.createdInDb) : state.allVideoGames.filter(e=>!e.createdInDb)
    return{
      ...state,
      videogames: action.payload === 'all' ? state.allVideoGames : dborapiFilter
      //videogames: dborapiFilter
    }

    case 'ORDER_BY_NAME':
      let sortedArr = action.payload === 'asc' ? state.videogames.sort(function(a,b){
        if(a.name>b.name){
          return 1;
        }
        if(a.name<b.name){
          return -1
        }
        return 0;
      }) : state.videogames.sort(function(a,b){
        if(a.name>b.name){
          return -1;
        }
        if(a.name<b.name){
          return 1
        }
        return 0;
      })
      return {
        ...state,
        videogames: sortedArr
      }

    default:
      return state;
  }
}

export default rootReducer;
