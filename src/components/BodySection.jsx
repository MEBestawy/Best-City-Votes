import React from "react";
import VotesSection from "./VotesSection";
import "../styles/BodySection/BodySection.css";
import firebase from "../firebase/firebase";

class Option {
  width = 0;
  votes = 0;
  name = "";
  chosen = false;
  docId = null;

  constructor(name) {
    this.name = name[0].toUpperCase() + name.substring(1);
  }
}

class BodySection extends React.Component {
  state = {
    voteOptions: [],
    voted: false,
    maxVotes: 0,
    loading: true
  };

  componentDidMount(props) {
    var { voteOptions } = this.state;
    var { maxVotes } = this.state;

    firebase
      .firestore()
      .collection("votes")
      .get()
      .then(snapshot => {
        snapshot.docs.forEach(doc => {
          var option = new Option(doc.data().name);
          option.docId = doc.id;
          option.votes = doc.data().votes;
          maxVotes = option.votes > maxVotes ? option.votes : maxVotes;
          voteOptions.push(option);
        });

        this.setState({ voteOptions, maxVotes, loading: false });
      });
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

    var maxVotes = this.state.maxVotes;
    options.forEach(option => {
      maxVotes = option.votes > maxVotes ? option.votes : maxVotes;
    });

    options.forEach(option => {
      option.width = 100 * (option.votes / maxVotes);
    });

    this.setState({ maxVotes, options, voted: true });
  };

  render() {
    if (this.state.voteOptions.length === 0) {
      return <h1>Loading...</h1>;
    }

    return (
      <div onClick={this.props.onPress} className={"body-section-container"}>
        <div className="title-prompt">Which is your favourite pet?</div>
        <VotesSection
          voted={this.state.voted}
          voteOptions={this.state.voteOptions}
          onPick={this.handlePickOption}
          maxVotes={this.state.maxVotes}
        />
        <button id="vote-btn" onClick={this.handleVote}>
          Vote
        </button>
      </div>
    );
  }
}

export default BodySection;
