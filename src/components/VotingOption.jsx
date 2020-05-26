import React from "react";
import "../styles/VotingOption/VotingOption.css";

const VotingOption = props => {
  var containerClass = "container ";
  containerClass += props.option.chosen ? "chosen-opt" : "";

  var optionVotesWidthClasses = "votes-bar-counter ";
  optionVotesWidthClasses += props.voted ? "show " : "";

  var optionNameClasses = "vote-opt-name ";
  optionNameClasses += props.maxVotes !== 0 ? "display-none " : "";
  return (
    <div
      className={containerClass}
      onClick={() => {
        props.onPick(props.option.name);
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
      <div
        className={optionVotesWidthClasses}
        style={{ width: props.option.width + "%" }}
      >
        {props.voted ? props.option.votes : ""}
      </div>
      <div className={optionNameClasses}>{props.option.name}</div>
    </div>
  );
};

export default VotingOption;
