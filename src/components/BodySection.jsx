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

  getVotesArr(options = this.state.voteOptions) {
    var arr = [];

    options.forEach(option => {
      arr.push(option.votes);
    });

    return arr;
  }

  setWidths(options = this.state.voteOptions, maxV = this.state.maxVotes) {
    options.forEach(option => {
      option.width = 100 * (option.votes / maxV);
    });
    console.log(options);
    this.setState({ voteOptions: options });
  }

  componentDidMount(props) {
    var { voteOptions } = this.state;
    var { maxVotes } = this.state;

    firebase
      .firestore()
      .collection("votes")
      .onSnapshot(snapshot => {
        snapshot.docChanges().forEach(change => {
          var option = new Option(change.doc.data().name);
          option.docId = change.doc.id;
          option.votes = change.doc.data().votes;

          var oldOption = null;
          voteOptions.forEach(opt => {
            if (opt.name === option.name) {
              oldOption = opt;
            }
          });

          // Is it a new option
          if (oldOption === null) {
            voteOptions.push(option);
          } else {
            option.chosen = oldOption.chosen;
            voteOptions[voteOptions.indexOf(oldOption)] = option;
          }

          maxVotes = Math.max(...this.getVotesArr(voteOptions));
          if (this.state.voted) this.setWidths(voteOptions, maxVotes);
        });

        this.setState({ voteOptions, maxVotes, loading: false });
      });
  }

  handlePickOption = name => {
    if (this.props.menuOppened) {
      return;
    }

    const { voteOptions } = this.state;
    voteOptions.forEach(option => {
      option.chosen = false;
    });

    voteOptions.filter(opt => {
      return opt.name === name;
    })[0].chosen = true;

    this.setState({ voteOptions });
  };

  handleVote = () => {
    this.setState({ voted: true });

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

    var { voteOptions } = this.state;
    for (let i = 0; i < voteOptions.length; i++) {
      voteOptions[i] =
        voteOptions[i].name === chosenOpt.name ? chosenOpt : voteOptions[i];
    }

    var maxVotes = this.state.maxVotes;
    maxVotes = Math.max(...this.getVotesArr());
    this.setWidths(voteOptions, maxVotes);
    this.setState({ maxVotes, voteOptions });
  };

  render() {
    if (this.state.voteOptions.length === 0) {
      return <h1>Loading...</h1>;
    }

    return (
      <div onClick={this.props.onPress} className={"body-section-container"}>
        <div className="title-prompt">What is your favourite city?</div>
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
