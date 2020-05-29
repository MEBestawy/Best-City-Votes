import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaw } from "@fortawesome/free-solid-svg-icons";
import "../styles/VotingOption/VotingOption.css";

const VotingOption = props => {
  var containerClass = "container ";
  containerClass += props.option.chosen ? "chosen-opt" : "";

  var optionVotesWidthClasses = "votes-bar-counter ";
  optionVotesWidthClasses += props.voted ? "show " : "";

  var optionNameClasses = "vote-opt-name ";
  optionNameClasses += props.voted ? "display-none " : "";

  const voteCounter = props.voted ? (
    <p className="vote-counter">{props.option.votes}</p>
  ) : (
    <FontAwesomeIcon className="icon" icon={faPaw} />
  );
  return (
    <div
      className={containerClass}
      onClick={() => {
        props.onPick(props.option.name);
      }}
    >
      <div className="icon-background">{voteCounter}</div>
      <div
        className={optionVotesWidthClasses}
        style={{ width: props.option.width + "%" }}
      />

      <div className={optionNameClasses}>{props.option.name}</div>
    </div>
  );
};

export default VotingOption;
