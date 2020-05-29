import React from "react";
import MenuToggle from "./MenuToggle";
import BodySection from "./BodySection";
import SideDrawer from "./SideDrawer";
import BlurFilter from "./BlurFilter";
import "../styles/App/App.css";

class App extends React.Component {
  state = {
    menuOpened: false
  };

  handleMenuTogglePress = () => {
    this.setState({ menuOpened: !this.state.menuOpened });
  };

  handleBlurPress = () => {
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
        <BlurFilter
          onPress={this.handleBlurPress}
          menuOpenned={this.state.menuOpened}
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
