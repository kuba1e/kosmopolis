import React from "react";
import "./app.css";
import Header from "../header";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "../pages/home-page";
import TvSerialsPage from "../pages/tv-serials-page";
import MovieService from "../../services/movie-service";
import MoviesPage from "../pages/movie-page";
import UpcomingPage from "../pages/upcoming-page";
import ItemDetails from "../item-details";

const movieService = new MovieService();

const App = (props) => {
  const classes = "dark";
  return (
    <Router>
      <div className={classes}>
        <Header />
        <Switch>
          <Route
            path="/"
            exact
            render={()=><HomePage movieService={movieService} />}
          />
          <Route
            path="/serials/"
            exact
            render={()=><TvSerialsPage movieService={movieService} />}
          />
          <Route
            path="/movies/"
            exact
            render={()=><MoviesPage movieService={movieService} />}
          />
          <Route
            path="/upcoming/"
            exact
            render={()=><UpcomingPage movieService={movieService} />}
          />
          <Route
          path = "/movies/:id" exact render={({match})=>{
            return <ItemDetails movieService={movieService} id = {match.params.id}/>
          }}
          />
          <Route
          path = "/upcoming/:id" exact render={({match})=>{
            return <ItemDetails movieService={movieService} id = {match.params.id}/>
          }}
          />
          <Route
          path = "/:id" exact render={({match})=>{
            return <ItemDetails movieService={movieService} id = {match.params.id}/>
          }}
          />
          
        </Switch>
      </div>
    </Router>
  );
};

export default App;
