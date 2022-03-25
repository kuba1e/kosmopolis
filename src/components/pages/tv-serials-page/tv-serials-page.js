import React, { useEffect } from "react";
import "./tv-serials-page.css";
import {ItemList} from "../../item-list/item-list";
import Filters from "../../filters";
import { connect } from "react-redux";
import { getTvSerials } from "../../async-foo/async-foo";
import { bindActionCreators } from "redux";

const TvSerialsPage = ({fetchTvSeries, error, loading, tvSerialsData}) => {
  useEffect(()=>{
    fetchTvSeries()
  }, [])


  return (
    <section className="section">
      <div className="section-inner-container wrapper">
        <div className="section-title">
          <h2 className="section-title-text">Popular TV serials</h2>
        </div>
        <Filters />
        <ItemList items={tvSerialsData} />
        <div className="section-control">
          <div className="section-control-line"></div>
          <button className="section-control-btn">See More</button>
        </div>
      </div>
    </section>
  );
};

const mapStateToProps = ({ tvSerials: { tvSerialsData, loading, error } }) => {
  return {
    tvSerialsData,
    loading,
    error,
  };
};

const mapDispatchToProps = (dispatch, { movieService }) => {
  return bindActionCreators({
    fetchTvSeries: getTvSerials(movieService),
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(TvSerialsPage);
