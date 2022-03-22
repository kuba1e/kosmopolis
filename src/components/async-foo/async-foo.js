import {
  requestedPopularMovies,
  downloadedtPopularMovies,
  failedToDownloadedPopularMovies,
  requestedTvSerials,
  failedToDownloadedTvSerials,
  downloadedTvSerials,
  requestedMovies,
  downloadedMovies,
  failedToDownloadedMovies,
  requestedUpcomigMovies,
  downloadedtUpcomigMovies,
  failedToDownloadedUpcomigMovies,
} from "../../actions";

const getPopularMovies = (movieService) => () => {
  return async (dispatch) => {
    try {
      dispatch(requestedPopularMovies());
      const movies = await movieService.fetchPopularMovies();
      dispatch(downloadedtPopularMovies(movies));
    } catch (error) {
      dispatch(failedToDownloadedPopularMovies(error));
    }
  };
};

const getTvSerials = (movieService) => () => {
  return async (dispatch) => {
    try {
      dispatch(requestedTvSerials());
      const tvSerials = await movieService.fetchTvSeries();
      dispatch(downloadedTvSerials(tvSerials));
    } catch (error) {
      dispatch(failedToDownloadedTvSerials(error));
    }
  };
};

const getMovies = (movieService) => () => {
  return async (dispatch) => {
    try {
      dispatch(requestedMovies());
      const movies = await movieService.fetchMovies();
      dispatch(downloadedMovies(movies));
    } catch (error) {
      dispatch(failedToDownloadedMovies(error));
    }
  };
};

const getUpcomingMovies = (movieService) => () => {
  return async (dispatch) => {
    try {
      dispatch(requestedUpcomigMovies());
      const movies = await movieService.fetchUpcomingMovies();
      dispatch(downloadedtUpcomigMovies(movies));
    } catch (error) {
      console.log(error)
      dispatch(failedToDownloadedUpcomigMovies(error));
    }
  };
};

export { getPopularMovies, getTvSerials, getMovies, getUpcomingMovies };
