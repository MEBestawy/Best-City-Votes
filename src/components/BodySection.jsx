import React from "react";
import VotingOptions from "./VotesSection";
import "../styles/BodySection/BodySection.css";
import DogGreen from "../images/dog-green.png";
import CatGreen from "../images/cat-green.png";
import FishGreen from "../images/fish-green.png";
import OtherGreen from "../images/other-green.png";

import DogRed from "../images/dog-red.png";
import CatRed from "../images/cat-red.png";
import FishRed from "../images/fish-red.png";
import OtherRed from "../images/other-red.png";

class BodySection extends React.Component {
  state = {
    voteOptions: [
      {
        id: 0,
        name: "Dog",
        chosen: false,
        imgGreen: DogGreen,
        imgRed: DogRed
      },
      {
        id: 1,
        name: "Cat",
        chosen: false,
        imgGreen: CatGreen,
        imgRed: CatRed
      },
      {
        id: 2,
        name: "Fish",
        chosen: false,
        imgGreen: FishGreen,
        imgRed: FishRed
      },
      {
        id: 3,
        name: "Other",
        chosen: false,
        imgGreen: OtherGreen,
        imgRed: OtherRed
      }
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
    const chosenOpt = [];
    this.state.voteOptions.forEach(option => {
      if (option.chosen) {
        chosenOpt.push(option);
      }
    });
    if (this.props.menuOppened) {
      return;
    } else if (chosenOpt.length !== 1) {
      console.log(
        "Error: More or less than one option is chosen. Chosen options:",
        chosenOpt
      );
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
