import React from "react";
import VotingOption from "./VotingOption";
import SearchingSection from "./SearchSection";
import "../styles/VotesSection/VotesSection.css";

const VotesSection = props => {
  return (
    <div className="votes-section">
      <SearchingSection />
      <div className="options-container">
        {props.voteOptions.map((option, index) => (
          <VotingOption
            voted={props.voted}
            key={index}
            option={option}
            maxVotes={props.maxVotes}
            onPick={props.onPick}
          />
        ))}
      </div>
    </div>
  );
};

export default VotesSection;
