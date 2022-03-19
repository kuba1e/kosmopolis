export default class MovieService {
  _baseUrl = "https://api.themoviedb.org/3";
  _apiKey = "?api_key=0cdf453a2fe6e4473d259e845c6b04c5";
  _baseImgUrl = "https://image.tmdb.org/t/p/w500";

  fetchPopularMovies = async () => {
    try {
      const response = await fetch(
        `${this._baseUrl}/movie/popular${this._apiKey}`
      );
      const genresArray = await this._fetchGenres();
      if (!response.ok) {
        throw new Error(response.status);
      }
      const data = await response.json();
      return this._transformMoviesData(data.results, genresArray);
    } catch (error) {
      throw new Error(error);
    }
  };

  _fetchGenres = async () => {
    try {
      const response = await fetch(
        `${this._baseUrl}/genre/movie/list${this._apiKey}`
      );
      if (!response.ok) {
        throw new Error(response.status);
      }
      const data = await response.json();
      return data.genres;
    } catch (error) {
      throw new Error(error);
    }
  };

  _extractGenresNames = (genresArray, genresIdArray) => {
    const genreNames = genresIdArray.map((id) => {
      return genresArray.find((genre) => genre.id === id).name;
    });
    console.log(genreNames);
    return genreNames;
  };

  _getMoviesImgUrl = (path) => {
    return `${this._baseImgUrl}${path}`;
  };

  _transformMoviesData = (data, genres) => {
    const preparedData = data.map((item) => {
      const {
        backdrop_path,
        id,
        genre_ids,
        title,
        overview,
        vote_average: vote,
        release_date: date,
      } = item;

      return {
        id,
        genre: this._extractGenresNames(genres, genre_ids),
        img: this._getMoviesImgUrl(backdrop_path),
        title,
        overview,
        vote,
        date,
      };
    });
    return preparedData;
  };
}
