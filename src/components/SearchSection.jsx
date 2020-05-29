import React from "react";
import "../styles/SearchSection/SearchSection.css";

const SearchSection = props => {
  return (
    <div className="search-section-container">
      <input className="search-bar" placeholder="Name of a city..." />
      <button className="search-bar-btn" id="search-btn">
        Search
      </button>
      <button className="search-bar-btn" id="add-btn">
        Add
      </button>
    </div>
  );
};

export default SearchSection;
