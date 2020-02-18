const fetch = require('node-fetch')
const url = "https://api.themoviedb.org/3/movie/now_playing?api_key="
const api = "8ddbe6143af6afcff9351038999b3629"
const displayMovie = [];
const movies = ()=>{
    return fetch(url+api)
    .then(res=>res.json())
    .then(({results})=>{ return results.forEach((obj)=> {
        newArr.push([obj.overview, obj.poster_path]);
    }
    )})
    .catch(err=>console.log('error occurred', err))
}
movies();

module.exports = displayMovie;