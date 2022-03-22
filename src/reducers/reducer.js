import popularMovieList from "./popular-movie-list"
import tvSerialsList from "./tv-serials-list"
import movieList from "./movie-list"
import upcomingMoviesList from "./upcoming-movies-list"


const reducer = (state, action)=>{
      return {
        popularMovies: popularMovieList(state, action),
        tvSerials: tvSerialsList(state, action),
        movies: movieList(state, action),
        upcomingMovies: upcomingMoviesList(state, action)
      }
}

export default reducer