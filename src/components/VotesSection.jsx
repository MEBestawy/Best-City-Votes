import React from "react";
import VotingOption from "./VotingOption";
import "../styles/VotesSection/VotesSection.css";

const VotesSection = props => {
  return (
    <div className="options-container">
      {props.voteOptions.map(option => (
        <VotingOption
          voted={props.voted}
          key={option.name}
          option={option}
          maxVotes={props.maxVotes}
          onPick={props.onPick}
        />
      ))}
    </div>
  );
};

export default VotesSection;
