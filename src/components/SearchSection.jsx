import React from "react";
import "../styles/SearchSection/SearchSection.css";

class SearchSection extends React.Component {
  state = { inputVal: "" };
  render() {
    return (
      <div className="search-section-container">
        <input
          id="search-bar"
          placeholder="Name of a city..."
          onChange={event => this.setState({ inputVal: event.target.value })}
        />
        <button
          id="search-btn"
          className="search-bar-btn"
          onClick={() => {
            this.props.onSearchPress(this.state.inputVal);
          }}
        >
          Search
        </button>
        <button
          id="add-btn"
          className="search-bar-btn"
          onClick={() => {
            this.props.onAddPress(this.state.inputVal);
          }}
        >
          Add
        </button>
      </div>
    );
  }
}

export default SearchSection;
