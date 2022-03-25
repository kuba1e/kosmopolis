const movieList = (state, action) => {
  if (state === undefined) {
    return {
      loading: true,
      moviesData: [],
      movieData: [],
      similarMoviesData:[],
      error: false,
    };
  }

  switch (action.type) {
    case 'REQUESTED_MOVIE_DETAILS':
      return {
        ...state.movies,
        loading: true,
      };
      case "DOWNLOADED_MOVIE_DETAILS":
      return {
        ...state.movies,
        loading: false,
        error: false,
        movieData: [...action.payload],
      };
      case "FAILED_TO_DOWNLOADED_MOVIE_DETAILS":
      return {
        ...state.movies,
        loading: false,
        error: true,
      };
    case 'REQUESTED_SIMILAR_MOVIES':
      return {
        ...state.movies,
        loading: true,
      };
    case 'DOWNLOADED_SIMILAR_MOVIES':
      return {
        ...state.movies,
        similarMoviesData: [...action.payload],
        loading:false,
        error: false
      };
    case 'FAILED_TO_DOWNLOADED_SIMILAR_MOVIES':
      return {
        ...state.movies,
        loading:false,
        error: true
      };
    
    case "REQUESTED_MOVIES":
      return {
        ...state.movies,
        loading: true,
      };
    case "DOWNLOADED_MOVIES":
      return {
        ...state.movies,
        loading: false,
        error: false,
        moviesData: [...action.payload],
      };
    case "FAILED_TO_DOWNLOADED_MOVIES":
      return {
        ...state.movies,
        loading: false,
        error: true,
      };

    default:
      return state.movies;
  }
};

export default movieList;
