import React from "react";
import "../styles/LoadingSection/LoadingSection.css";

const LoadingSection = props => {
  return (
    <div className="loader-background">
      <div className="loader-content">
        <div id="loading-icon">
          <div className="loading-logo-container">
            <div className="rotating-square" />
            {false ? "" : <div id="tower-svg-icon" />}
          </div>
        </div>
        <div id="loading-msg">Loading...</div>
      </div>
    </div>
  );
};

export default LoadingSection;
