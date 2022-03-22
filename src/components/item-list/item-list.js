import React from "react";
import "./item-list.css";
import Item from "../item/item";

const renderFunction = (genres) => {
  if(genres.length>1){
    return genres.slice(0,2).join(', ')
  } else {
    return genres.join(', ')
  }
  
};

const ItemList = ({ items }) => {
  return (
    <div className="item-list-container">
      <ul className="item-list">
        {items.map((item) => {
          return (
            <li className="list-item" key={item.id}>
              <Item item={item} renderFunction={renderFunction} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ItemList;
