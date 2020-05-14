import React from "react";
import "../styles/VotingOption/VotingOption.css";

const VotingOption = props => {
  var containerClass = "container ";
  containerClass += props.className;
  containerClass += props.option.chosen ? "chosen-opt" : "";
  return (
    <div
      className={containerClass}
      onClick={() => {
        props.onPick(props.option.id);
      }}
    >
      <div className="pic-background">
        <img
          className="pic"
          src={
            props.option.chosen ? props.option.imgGreen : props.option.imgRed
          }
          alt=""
        />
      </div>
      <div className="vote-opt-name">{props.option.name}</div>
    </div>
  );
};

export default VotingOption;
