import React, { useEffect } from "react";
import "./home-page.css";
import Filters from "../../filters";
import { ItemList } from "../../item-list";
import { connect } from "react-redux";
import { getPopularMovies } from "../../async-foo/async-foo";
import { bindActionCreators } from "redux";

const HomePage = ({ movies, loading, error, fetchPopularMovies }) => {
  useEffect(() => {
    fetchPopularMovies();
  }, []);

  return (
    <section className="section">
      <div className="section-inner-container wrapper">
        <div className="section-title">
          <h2 className="section-title-text">Popular movies</h2>
        </div>
        <Filters />
        <ItemList items={movies} />
        <div className="section-control">
          <div className="section-control-line"></div>
          <button className="section-control-btn">See More</button>
        </div>
      </div>
    </section>
  );
};

const mapStateToProps = ({
  popularMovies: { popularMoviesData: movies, loading, error },
}) => {
  return {
    movies,
    loading,
    error,
  };
};

const mapDispatchToProps = (dispatch, { movieService }) => {
  return bindActionCreators(
    {
      fetchPopularMovies: getPopularMovies(movieService),
    },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
