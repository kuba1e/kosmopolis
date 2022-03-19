import MovieService from "../../services";
import { gotPopularMovies, failedGotPopularMovies } from "../../actions";


const movieService = new MovieService()

const getBooks =()=>{
  return async dispatch=>{
    try {
    const movies = await movieService.fetchPopularMovies()
    dispatch(gotPopularMovies(movies))
    } catch(error){
      dispatch(failedGotPopularMovies(error))
    }

  }
}

export default getBooks