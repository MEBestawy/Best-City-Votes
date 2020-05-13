import React from "react";
import VotingOptions from "./VotesSection";
import "../styles/BodySection/BodySection.css";

class BodySection extends React.Component {
  state = {
    voteOptions: [
      { id: 0, name: "Dog", chosen: false, src: "/public/images/dog.png" },
      { id: 1, name: "Cat", chosen: false, src: "/public/images/dog.png" },
      { id: 2, name: "Fish", chosen: false, src: "/public/images/dog.png" },
      { id: 3, name: "Other", chosen: false, src: "/public/images/dog.png" }
    ]
  };

  handlePickOption = id => {
    const chosen = this.state.voteOptions;
    chosen.forEach(option => {
      option.chosen = false;
    });
    this.state.voteOptions.filter(opt => {
      return opt.id === id;
    })[0].chosen = true;

    this.setState({ chosen });
  };

  handleVote = () => {
    // Send id to server
    console.log(123);
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
        />
        <button id="petVote" onClick={this.handleVote}>
          Vote
        </button>
      </div>
    );
  }
}

export default BodySection;
