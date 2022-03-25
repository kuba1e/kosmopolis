import React, { useEffect } from "react";
import "./item-details.css";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getMovie, getSimilarMovies } from "../async-foo";
import MultipleItems from "../slider/slider";

const ItemDetails = (props) => {
  const {
    id,
    fetchMovieDetails,
    fetchSimilarMovies,
    movieData: [
      {
        genres,
        title,
        homepage,
        overview,
        poster,
        vote,
        date,
        production_countries,
        budget,
        language,
      } = {},
    ],
    similarMoviesData,
    loading,
    error,
  } = props;
  useEffect(() => {
    fetchMovieDetails(id);
    fetchSimilarMovies(id);
  }, [id]);

  return (
    <section className="section item-details">
      <div className=" item-details-wrapper wrapper">
        <div className="title-container">
          <h2 className="title-text">{title}</h2>
        </div>
        <div className="content-container">
          <div className="img-container">
            <img className="img" src={poster}></img>
          </div>
          <div className="description-container">
            <div className="description-item">
              <h6 className="description-text">Year of produce: {date}</h6>
            </div>
            <div className="description-item">
              <h6 className="description-text">
                Country: {production_countries}
              </h6>
            </div>
            <div className="description-item">
              <h6 className="description-text">Genre: {genres}</h6>
            </div>
            <div className="description-item">
              <h6 className="description-text">
                Original language: {language}
              </h6>
            </div>
            <div className="description-item">
              <h6 className="description-text">Budget: {budget}</h6>
            </div>
            <div className="description-item">
              <h6 className="description-text">
                <a href={homepage}>Homepage</a>
              </h6>
            </div>
            <div className="description-item">
              <h6 className="description-text">Rate: {vote}</h6>
            </div>
            <div className="description-item">
              <h6 className="description-text">Overview:</h6>
            </div>
            <p className="description-paragraph">{overview}</p>
          </div>
        </div>
        <MultipleItems similarMoviesData={similarMoviesData} />
      </div>
    </section>
  );
};

const mapStateToProps = ({
  movies: { movieData, similarMoviesData, error, loading },
}) => {
  return { movieData, similarMoviesData, error, loading };
};

const mapDispatchToProps = (dispatch, { movieService }) => {
  return {
    fetchMovieDetails: bindActionCreators(getMovie(movieService), dispatch),
    fetchSimilarMovies: bindActionCreators(
      getSimilarMovies(movieService),
      dispatch
    ),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemDetails);
