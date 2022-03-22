const movieList = (state, action) => {
  if (state === undefined) {
    return {
      loading: true,
      moviesData: [],
      error: false,
    };
  }

  switch (action.type) {
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
