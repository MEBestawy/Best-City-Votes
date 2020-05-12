import React from "react";
import MenuToggle from "./components/MenuToggle";
import BodySection from "./components/BodySection";
import SideDrawer from "./components/SideDrawer";
import "./styles/App/App.css";

class App extends React.Component {
  state = {
    menuOpened: false
  };

  render() {
    return (
      <React.Fragment>
        <MenuToggle />
        <SideDrawer />
        <BodySection />
      </React.Fragment>
    );
  }
}

export default App;
