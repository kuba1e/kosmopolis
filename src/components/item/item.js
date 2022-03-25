import React from "react";
import "./item.css";
import { useHistory } from "react-router-dom";

const Item = ({
  item: { id, img, title, date, genre, vote },
  renderFunction,
}) => {
  const history = useHistory();
  const goToItemDetails = (id) => {
    history.push(`${id}`);
  };

  return (
    <div className="item">
      <div className="item-img-container" >
        <img className="item-img" src={img} />
      </div>
      <div className="item-title-container" onClick={()=>goToItemDetails(id)}>
        <h5 className="item-title">{title}</h5>
      </div>
      <div className="item-subtitle-container">
        <h6 className="item-subtitle ">{date}</h6>
      </div>
      <div className="item-subtitle-container">
        <h6 className="item-subtitle font-style">{renderFunction(genre)}</h6>
      </div>
      <div className="item-subtitle-container">
        <h6 className="item-subtitle font-style">Rate: {vote}</h6>
      </div>
    </div>
  );
};

export default Item;
