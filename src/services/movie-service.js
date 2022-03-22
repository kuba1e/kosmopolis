import noImage from "./no-image.png";

export default class MovieService {
  _baseUrl = "https://api.themoviedb.org/3";
  _apiKey = "?api_key=0cdf453a2fe6e4473d259e845c6b04c5";
  _baseImgUrl = "https://image.tmdb.org/t/p/w500";

  fetchResource = async (url) => {
    return await fetch(`${this._baseUrl}${url}${this._apiKey}`);
  };

  fetchPopularContent = async (url, transformDataService) => {
    try {
      const response = await this.fetchResource(url);
      const genresArray = await this._fetchGenres();
      if (!response.ok) {
        throw new Error(response.status);
      }
      const data = await response.json();
      return transformDataService(data.results, genresArray);
    } catch (error) {
      throw new Error(error);
    }
  };

  fetchPopularMovies = async () => {
    try {
      return this.fetchPopularContent(
        "/movie/popular",
        this._transformMoviesData
      );
    } catch (error) {
      throw new Error(error);
    }
  };

  fetchTvSeries = async () => {
    try {
      return this.fetchPopularContent(
        "/tv/top_rated",
        this._transformTvSeriesData
      );
    } catch (error) {
      throw new Error(error);
    }
  };

  fetchMovies = async () => {
    try {
      return this.fetchPopularContent(
        "/movie/top_rated",
        this._transformMoviesData
      );
    } catch (error) {
      throw new Error(error);
    }
  };

  fetchUpcomingMovies = async () => {
    try {
      return this.fetchPopularContent(
        "/movie/upcoming",
        this._transformMoviesData
      );
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
      return genresArray.find((genre) => genre.id === id)?.name;
    });
    return genreNames;
  };

  _getMoviesImgUrl = (path) => {
    if (!path) {
      return noImage;
    }
    return `${this._baseImgUrl}${path}`;
  };

  _transformMoviesData = (data, genres) => {
    const preparedData = data.map((item) => {
      const {
        backdrop_path = "",
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
        title: this._transformTitle(title),
        overview,
        vote,
        date: this._transformDate(date),
      };
    });
    return preparedData;
  };

  _transformTvSeriesData = (data, genres) => {
    const preparedData = data.map((item) => {
      const {
        backdrop_path,
        first_air_date: date,
        genre_ids,
        id,
        name,
        origin_country: country,
        vote_average: vote,
        overview,
      } = item;

      return {
        id,
        genre: this._extractGenresNames(genres, genre_ids),
        img: this._getMoviesImgUrl(backdrop_path),
        title: this._transformTitle(name),
        overview,
        vote,
        date: this._transformDate(date),
        country,
      };
    });

    return preparedData;
  };

  _transformDate = (date) => {
    return new Date(date).getFullYear();
  };

  _transformTitle = (title) => {
    return title.length > 20 ? title.slice(0, 20) + "..." : title;
  };
}
