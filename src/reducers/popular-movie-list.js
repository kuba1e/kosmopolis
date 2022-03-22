const popularMovieList=(state, action)=>{
  if(state === undefined){
    return {
      loading:true,
      popularMoviesData: [], 
      error:false
    }
  }

  switch (action.type){
    case 'REQUESTED_POPULAR_MOVIES':
      return {
        ...state.popularMovies,
        loading:true
      }
    case 'DOWNLOADED_POPULAR_MOVIES':
        return {
          ...state.popularMovies,
          loading:false,
          error: false,
          popularMoviesData: [...action.payload]
        }
    case 'FAILED_TO_DOWNLOADED_POPULAR_MOVIES': 
        return{
          ...state.popularMovies,
          loading: false,
          error: true
        }

    default: return state.popularMovies   

  }

}

export default popularMovieList
