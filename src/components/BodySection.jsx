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
        width: 0,
        votes: 0,
        name: "Dog",
        chosen: false,
        imgGreen: DogGreen,
        imgRed: DogRed
      },
      {
        id: 1,
        width: 0,
        votes: 0,
        name: "Cat",
        chosen: false,
        imgGreen: CatGreen,
        imgRed: CatRed
      },
      {
        id: 2,
        width: 0,
        votes: 0,
        name: "Fish",
        chosen: false,
        imgGreen: FishGreen,
        imgRed: FishRed
      },
      {
        id: 3,
        width: 0,
        votes: 0,
        name: "Other",
        chosen: false,
        imgGreen: OtherGreen,
        imgRed: OtherRed
      }
    ],

    maxVotes: 0
  };

  handlePickOption = id => {
    if (this.props.menuOppened) {
      return;
    }

    const optionsArr = this.state.voteOptions;
    optionsArr.forEach(option => {
      option.chosen = false;
    });

    optionsArr.filter(opt => {
      return opt.id === id;
    })[0].chosen = true;

    this.setState({ optionsArr });
  };

  handleVote = () => {
    var chosenOptArr = [];
    this.state.voteOptions.forEach(option => {
      if (option.chosen) {
        chosenOptArr.push(option);
      }
    });

    if (this.props.menuOppened) {
      return;
    } else if (chosenOptArr.length !== 1) {
      console.log(
        "Error: More or less than one option is chosen. Chosen options:",
        chosenOptArr
      );
      return;
    }
    // Here is where info on pets would be requested and mutated

    const chosenOpt = chosenOptArr[0];
    const index = this.state.voteOptions.indexOf(chosenOpt);
    var options = this.state.voteOptions;
    options[index].votes += 1;
    var maxVotes =
      options[index].votes >= this.state.maxVotes
        ? options[index].votes
        : this.state.maxVotes;

    options.forEach(option => {
      option.width = 100 * (option.votes / maxVotes);
    });

    console.log(options);
    this.setState({ options, maxVotes });
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
          maxVotes={this.state.maxVotes}
        />
        <button id="petVote" onClick={this.handleVote}>
          Vote
        </button>
      </div>
    );
  }
}

export default BodySection;
