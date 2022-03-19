const movieList=(state, action)=>{
  if(state === undefined){
    return {
      loading:false,
      moviesData: [], 
      error:false
    }
  }

  switch (action.type){
    case 'GOT_POPULAR_MOVIES':
        return {
          ...state.movies,
          moviesData: [...state.movies.moviesData,...action.payload]
        }

    default: return state.movies   

  }

}

export default movieList
