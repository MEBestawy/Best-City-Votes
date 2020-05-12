import React from "react";
import "../styles/VotingOption/VotingOption.css";

const VotingOption = prop => {
  var containerClass = "container ";
  containerClass += prop.className;
  return (
    <div className={containerClass}>
      <div className="background-pic"></div>
      <div className="vote-opt-name">{prop.option.name}</div>
    </div>
  );
};

export default VotingOption;
