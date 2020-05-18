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
        width: 0,
        votes: 0,
        name: "Dog",
        chosen: false,
        imgGreen: DogGreen,
        imgRed: DogRed
      },
      {
        width: 0,
        votes: 0,
        name: "Cat",
        chosen: false,
        imgGreen: CatGreen,
        imgRed: CatRed
      },
      {
        width: 0,
        votes: 0,
        name: "Fish",
        chosen: false,
        imgGreen: FishGreen,
        imgRed: FishRed
      },
      {
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
  updateServerData = URL => {};

  getServerData = URL => {
    fetch(URL)
      .then(response => response.json())
      .then(data => {
        var options = this.state.voteOptions;
        var maxVotes = this.state.maxVotes;

        for (var i = 0; i < options.length; i++) {
          options[i].votes = 0;
        }

        data.forEach(elem => {
          const { rendered } = elem.title;
          for (var i = 0; i < options.length; i++) {
            rendered.toLowerCase() === options[i].name.toLowerCase() &&
              options[i].votes++;
            if (maxVotes < options[i].votes) maxVotes = options[i].votes;
          }
        });

        if (maxVotes) {
          options.forEach(option => {
            option.width = 100 * (option.votes / maxVotes);
          });
        }
        this.setState({ options, maxVotes });
      });
  };

  handlePickOption = name => {
    if (this.props.menuOppened) {
      return;
    }

    const optionsArr = this.state.voteOptions;
    optionsArr.forEach(option => {
      option.chosen = false;
    });

    optionsArr.filter(opt => {
      return opt.name === name;
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

    const URL = "http://localhost:8888/wordpress/wp-json/wp/v2/votes";
    this.updateServerData(URL);
    this.getServerData(URL);
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
