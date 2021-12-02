import axios from 'axios';

export function getVideoGames(){
    return async function(dispatch){
        var json = await axios.get("http://localhost:3001/videogames"); //conecto con mi back :)
        return dispatch({
            type: 'GET_VIDEOGAMES',
            payload: json.data
        })
    }
}

export function filterGamesByGenre(payload){
    return{
        type: 'FILTER_BY_GENRE',
        payload
    }
}

export function filterBydborapi(payload){
    return{
        type: 'FILTER_BY_DBORAPI',
        payload
    }
}

export function orderByName(payload){
    return{
        type: 'ORDER_BY_NAME',
        payload
    }
}