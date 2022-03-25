import React, {Component, Fragment} from "react";
import Slider from "react-slick";
import Item from "../item/item";
import { renderFunction } from "../item-list";



export default class MultipleItems extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
      variableWidth: true,
      focusOnSelect: true,   
    };

    const similarMoviesData = this.props.similarMoviesData

    return (
      <div>
        <h2> Multiple items </h2>
        <Slider {...settings}>
          {similarMoviesData.map((movie)=>{
            return (
              <div key={movie.id}>
                <Item renderFunction={renderFunction} item = {movie}/>
              </div>
            )
          })}
        </Slider>
      </div>
    );
  }
}