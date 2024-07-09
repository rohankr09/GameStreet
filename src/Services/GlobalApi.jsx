import axios from "axios";

const key = "b13a8486480e4a13afabf184b22bb6b5";
const axiosCreate=axios.create({
    baseURL: 'https://api.rawg.io/api'
})

const getGenreList = axiosCreate.get('/genres?key='+key);
const getAllGames = axiosCreate.get('/games?key='+key);
const getGameListByGenreId=(id)=>axiosCreate.get('/games?key='+key+'&genres='+id)

export default {
    getGenreList,
    getAllGames,
    getGameListByGenreId
}
