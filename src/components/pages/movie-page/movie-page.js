import React, { useEffect } from "react";
import "./movie-page.css";
import {ItemList} from "../../item-list/item-list";
import Filters from "../../filters";
import { connect } from "react-redux";
import { getMovies } from "../../async-foo/async-foo";
import { bindActionCreators } from "redux";

const MoviesPage = ({fetchMovies, error, loading, moviesData}) => {
  useEffect(()=>{
    fetchMovies()
  }, [])

  return (
    <section className="section">
      <div className="section-inner-container wrapper">
        <div className="section-title">
          <h2 className="section-title-text">The most popular movies</h2>
        </div>
        <Filters />
        <ItemList items={moviesData} />
        <div className="section-control">
          <div className="section-control-line"></div>
          <button className="section-control-btn">See More</button>
        </div>
      </div>
    </section>
  );
};

const mapStateToProps = ({ movies: { moviesData, loading, error } }) => {
  return {
    moviesData,
    loading,
    error,
  };
};

const mapDispatchToProps = (dispatch, { movieService }) => {
  return bindActionCreators({
    fetchMovies: getMovies(movieService),
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(MoviesPage);
