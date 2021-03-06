import React from "react";
import "./filters.css";

const Filters = (props) => {
  return (
    <div className="filters-container">
      <div className="filter">
        <label className="filter-label">
          Cinema
          <select className="filter-select" name="select" defaultValue={""}>
            <option className="filter-option" value="london">
              London
            </option>
            <option className="filter-option" value="london">
              London
            </option>
            <option className="filter-option" value="london">
              London
            </option>
            <option className="filter-option" value="london">
              London
            </option>
            <option className="filter-option" value="london">
              London
            </option>
          </select>
        </label>
      </div>
      <div className="filter">
        <label className="filter-label">
          Cinema
          <select className="filter-select" name="select" defaultValue={""}>
            <option className="filter-option" value="london">
              London
            </option>
            <option className="filter-option" value="london">
              London
            </option>
            <option className="filter-option" value="london">
              London
            </option>
            <option className="filter-option" value="london">
              London
            </option>
            <option className="filter-option" value="london">
              London
            </option>
          </select>
        </label>
      </div>
      <div className="filter">
        <label className="filter-label">
          Cinema
          <select className="filter-select" name="select" defaultValue={""}>
            <option className="filter-option" value="london">
              London
            </option>
            <option className="filter-option" value="london">
              London
            </option>
            <option className="filter-option" value="london">
              London
            </option>
            <option className="filter-option" value="london">
              London
            </option>
            <option className="filter-option" value="london">
              London
            </option>
          </select>
        </label>
      </div>
      <div className="search-filter">
        <input type="text" defaultValue={''}/>
        <div className="search-filter-shape">
          <i className="fa-solid fa-magnifying-glass"></i>
        </div>
      </div>
    </div>
  );
};

export default Filters;
