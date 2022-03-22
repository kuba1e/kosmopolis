const upcomingMoviesList = (state, action)=>{
  if(state === undefined){
    return {
      loading:true,
      upcomingMoviesData: [], 
      error:false
    }
  }

  switch (action.type){
    case 'REQUESTED_UPCOMING_MOVIES':
      return {
        ...state.upcomingMovies,
        loading:true
      }
    case 'DOWNLOADED_UPCOMING_MOVIES':
        return {
          ...state.popularMovies,
          loading:false,
          error: false,
          upcomingMoviesData: [...action.payload]
        }
    case 'FAILED_TO_DOWNLOADED_UPCOMING_MOVIES': 
        return{
          ...state.upcomingMovies,
          loading: false,
          error: true
        }

    default: return state.upcomingMovies   

  }

}

export default upcomingMoviesList