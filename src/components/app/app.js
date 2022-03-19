import React, { useEffect } from "react";
import Header from "../header";
import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/home-page";




const App = (props) => {

  return (
    <React.Fragment>
      <Header />
      <Routes>
        <Route path="/" exact element={<HomePage />} />
      </Routes>
    </React.Fragment>
  );
};

export default App;
