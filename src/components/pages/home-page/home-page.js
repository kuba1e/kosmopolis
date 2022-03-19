import React, { useEffect } from "react";
import Filters from "../../filters";
import ItemList from "../../item-list";
import {connect} from 'react-redux'
import store from "../../../store";

import getBooks from "../../async-foo/async-foo";

const {dispatch} = store


const HomePage = (props)=>{
  
  useEffect(()=>{
    dispatch(getBooks())
  }, [])

  const {movies} = props
  console.log(movies)

  return (
    <section className="section">
      <div className="section-inner-container">
        <div className="section-title">
            <h2 className="section-title-text">The most popular movies</h2>
        </div>
        <Filters/>
        <ItemList items={movies}/>
        <div className="section-control">
          <div className="section-control-line">
          </div>
          <button className="section-control-btn">See More</button>
        </div>
      </div>
    </section>
  )
}

const mapStateToProps=(state)=>{
  return {
    movies: state.movies.moviesData
  }
}

export default  connect(mapStateToProps)(HomePage)