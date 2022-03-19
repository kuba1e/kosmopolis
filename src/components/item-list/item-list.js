import React from "react";
import './item-list.css'
import Item from "../item/item";

const ItemList = ({items})=>{
  return (
    <div className="item-list-container">
        <ul className="item-list">
            {items.map(item=>{
              return <li className="list-item" key= {item.id}><Item item={item}/></li>
            })}
        </ul>
    </div>
  )
}

export default ItemList