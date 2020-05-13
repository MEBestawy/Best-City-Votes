import React from "react";
import VotingOptions from "./VotesSection";
import "../styles/BodySection/BodySection.css";
import Dog from "../images/face.png";
import Cat from "../images/face.png";
import Rock from "../images/face.png";
import Other from "../images/face.png";

class BodySection extends React.Component {
  state = {
    voteOptions: [
      {
        id: 0,
        name: "Dog",
        chosen: false,
        img: Dog
      },
      {
        id: 1,
        name: "Cat",
        chosen: false,
        img: Cat
      },
      {
        id: 2,
        name: "Pet rock",
        chosen: false,
        img: Rock
      },
      { id: 3, name: "Other", chosen: false, img: Other }
    ]
  };

  handlePickOption = id => {
    if (this.props.menuOppened) {
      return;
    }

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
    if (this.props.menuOppened) {
      return;
    }
    // Send id to server
    console.log(123);
  };

  render() {
    var backgroundClasses = "body-background ";
    backgroundClasses += this.props.menuOppened ? "blur" : "";

    return (
      <div onClick={this.props.onPress} className={backgroundClasses}>
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
