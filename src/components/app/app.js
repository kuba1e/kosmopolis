import React, { useEffect } from "react";
import "./app.css";
import Header from "../header";
import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/home-page";
import TvSerialsPage from "../pages/tv-serials-page";
import MovieService from "../../services/movie-service";
import MoviesPage from "../pages/movie-page";
import UpcomingPage from "../pages/upcoming-page";


const movieService = new MovieService();

const App = (props) => {
  const classes = "dark";
  return (
    <div className={classes}>
      <Header />
      <Routes>
        <Route
          path="/"
          exact
          element={<HomePage movieService={movieService} />}
        />
        <Route
          path="/serials/"
          exact
          element={<TvSerialsPage movieService={movieService} />}
        />
        <Route path="/movies/" exact element={<MoviesPage movieService={movieService}/>}/>
        <Route
          path="/upcoming/"
          exact
          element={<UpcomingPage movieService={movieService} />}
        />
      </Routes>
    </div>
  );
};

export default App;
