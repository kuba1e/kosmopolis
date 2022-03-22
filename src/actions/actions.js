const requestedPopularMovies = () => ({ type: "REQUESTED_POPULAR_MOVIES" });
const downloadedtPopularMovies = (data) => ({
  type: "DOWNLOADED_POPULAR_MOVIES",
  payload: data,
});
const failedToDownloadedPopularMovies = (error) => ({
  type: "FAILED_TO_DOWNLOADED_POPULAR_MOVIES",
  payload: error,
});

const requestedMovies = () => ({ type: "REQUESTED_MOVIES" });
const downloadedMovies = (data) => ({
  type: "DOWNLOADED_MOVIES",
  payload: data,
});
const failedToDownloadedMovies = (error) => ({
  type: "FAILED_TO_DOWNLOADED_MOVIES",
  payload: error,
});

const requestedTvSerials = () => ({ type: "REQUESTED_TV_SERIALS" });
const downloadedTvSerials = (data) => ({
  type: "DOWNLOADED_TV_SERIALS",
  payload: data,
});
const failedToDownloadedTvSerials = (error) => ({
  type: "FAILED_TO_DOWNLOADED_TV_SERIALS",
  payload: error,
});

const requestedUpcomigMovies = () => ({ type: "REQUESTED_UPCOMING_MOVIES" });
const downloadedtUpcomigMovies = (data) => ({
  type: "DOWNLOADED_UPCOMING_MOVIES",
  payload: data,
});
const failedToDownloadedUpcomigMovies = (error) => ({
  type: "FAILED_TO_DOWNLOADED_UPCOMING_MOVIES",
  payload: error,
});

export {
  requestedPopularMovies,
  failedToDownloadedPopularMovies,
  downloadedtPopularMovies,
  requestedTvSerials,
  downloadedTvSerials,
  failedToDownloadedTvSerials,
  requestedMovies,
  downloadedMovies,
  failedToDownloadedMovies,
  requestedUpcomigMovies,
  downloadedtUpcomigMovies,
  failedToDownloadedUpcomigMovies,
};
