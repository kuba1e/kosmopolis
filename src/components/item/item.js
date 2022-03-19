import React from "react";
import './item.css'

const Item = ({item:{img, title, date, genre, vote}})=>{

  return (
    <div className="item">
      <div className="item-img-container"><img className="item-img" src={img}/></div>
      <div className="item-title-container"><h5 className="item-title">{title}, {date}</h5></div>
      <div className="item-subtitle-container"><h6 className="item-subtitle">{genre} rate: {vote}</h6></div>
    </div>
  )
}

export default Item