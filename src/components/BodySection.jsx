import React from "react";
import VotingOptions from "./VotesSection";
import "../styles/BodySection/BodySection.css";

class BodySection extends React.Component {
  state = {
    voteOptions: [
      { id: 0, name: "Dog" },
      { id: 1, name: "Cat" },
      { id: 2, name: "Fish" },
      { id: 3, name: "Other" }
    ],

    chosen: -1
  };

  handlePickOption = id => {
    const chosen = id;
    this.setState({ chosen });
  };

  handleVote = () => {
    // Send id to server
    console.log(this.state.chosen);
  };

  render() {
    var backgroundClasses = "body-background ";
    backgroundClasses += this.state.menuOpened ? "blur-background" : "";

    return (
      <div className={backgroundClasses}>
        <div className="title-prompt">Which is your favourite pet?</div>
        <VotingOptions
          voteOptions={this.state.voteOptions}
          onPick={this.handlePickOption}
          onVote={this.handleVote}
        />
        <button id="petVote"> Vote </button>
      </div>
    );
  }
}

export default BodySection;
