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
import firebase from "../firebase/firebase";

class Option {
  width = 0;
  votes = 0;
  name = "";
  chosen = false;
  imgGreen = null;
  imgRed = null;
  docId = null;

  constructor(name, imgGreen, imgRed) {
    this.name = name;
    this.imgGreen = imgGreen;
    this.imgRed = imgRed;
  }
}

class BodySection extends React.Component {
  state = {
    voteOptions: [
      new Option("Dog", DogGreen, DogRed),
      new Option("Cat", CatGreen, CatRed),
      new Option("Fish", FishGreen, FishRed),
      new Option("Other", OtherGreen, OtherRed)
    ],
    voted: false,

    maxVotes: 0
  };

  componentDidMount(props) {
    var options = this.state.voteOptions;

    firebase
      .firestore()
      .collection("votes")
      .get()
      .then(snap => {
        snap.docs.forEach(doc => {
          options.forEach(option => {
            if (doc.data().pet === option.name.toLowerCase()) {
              option.docId = doc.id;
              option.votes = doc.data().votes;
            }
          });
        });
      });

    this.setState({ options });
  }

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
    const chosenOpt = chosenOptArr[0];
    chosenOpt.votes += 1;
    firebase
      .firestore()
      .collection("votes")
      .doc(chosenOpt.docId)
      .update({ votes: chosenOpt.votes });

    var options = this.state.voteOptions;
    for (let i = 0; i < options.length; i++) {
      options[i] = options[i].name === chosenOpt.name ? chosenOpt : options[i];
    }

    this.setState({ options });

    var maxVotes = 0;
    options.forEach(option => {
      maxVotes = option.votes > maxVotes ? option.votes : maxVotes;
    });

    options.forEach(option => {
      option.width = 100 * (option.votes / maxVotes);
    });

    this.setState({ maxVotes, options, voted: true });
  };

  render() {
    var backgroundClasses = "body-background ";
    backgroundClasses += this.props.menuOppened ? "blur" : "";

    return (
      <div onClick={this.props.onPress} className={backgroundClasses}>
        <div className="title-prompt">Which is your favourite pet?</div>
        <VotingOptions
          voted={this.state.voted}
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
