import movieList from "./movie-list"


const reducer = (state, action)=>{
      return {
        movies: movieList(state, action)
      }
}

export default reducer