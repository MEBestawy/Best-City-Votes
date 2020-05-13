import React from "react";
import MenuToggle from "./components/MenuToggle";
import BodySection from "./components/BodySection";
import SideDrawer from "./components/SideDrawer";
import "./styles/App/App.css";

class App extends React.Component {
  state = {
    menuOpened: false
  };

  handleMenuTogglePress = () => {
    this.setState({ menuOpened: !this.state.menuOpened });
  };

  handleBodySectionPress = () => {
    this.setState({ menuOpened: false });
  };

  render() {
    return (
      <React.Fragment>
        <SideDrawer opened={this.state.menuOpened} />
        <MenuToggle
          opened={this.state.menuOpened}
          onPress={this.handleMenuTogglePress}
        />
        <BodySection
          onPress={this.handleBodySectionPress}
          menuOppened={this.state.menuOpened}
        />
      </React.Fragment>
    );
  }
}

export default App;
