import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCity } from "@fortawesome/free-solid-svg-icons";
import "../styles/VotingOption/VotingOption.css";

const capFirst = name => {
  if (!name) return "";
  return name[0].toUpperCase() + name.substring(1);
};

const VotingOption = props => {
  var containerClass = "container ";
  containerClass += props.option.chosen ? "chosen-opt" : "";

  var optionVotesWidthClasses = "votes-bar-counter ";
  optionVotesWidthClasses += props.voted ? "show " : "";

  var optionNameClasses = "vote-opt-name ";
  optionNameClasses += props.voted ? "show-name-with-bar " : "";

  const voteCounter = props.voted ? (
    <p className="vote-counter">{props.option.votes}</p>
  ) : (
    <FontAwesomeIcon className="icon" icon={faCity} />
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

      <div className={optionNameClasses}>{capFirst(props.option.name)}</div>
    </div>
  );
};

export default VotingOption;
