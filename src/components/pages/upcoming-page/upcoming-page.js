import React, { useEffect } from "react";
import "./upcoming-page.css";
import ItemList from "../../item-list/item-list";
import Filters from "../../filters";
import { connect } from "react-redux";
import { getUpcomingMovies } from "../../async-foo/async-foo";
import { bindActionCreators } from "redux";

const UpcomingPage = ({fetchUpcomingMovies, error, loading, upcomingMoviesData}) => {
  useEffect(()=>{
    fetchUpcomingMovies()
  }, [])


  return (
    <section className="section">
      <div className="section-inner-container wrapper">
        <div className="section-title">
          <h2 className="section-title-text">Upcoming movies</h2>
        </div>
        <Filters />
        <ItemList items={upcomingMoviesData} />
        <div className="section-control">
          <div className="section-control-line"></div>
          <button className="section-control-btn">See More</button>
        </div>
      </div>
    </section>
  );
};

const mapStateToProps = ({ upcomingMovies: { upcomingMoviesData, loading, error } }) => {
  return {
    upcomingMoviesData,
    loading,
    error,
  };
};

const mapDispatchToProps = (dispatch, { movieService }) => {
  return bindActionCreators({
    fetchUpcomingMovies: getUpcomingMovies(movieService),
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(UpcomingPage);
