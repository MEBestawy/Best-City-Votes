import React from "react";
import "../styles/SideDrawer/SideDrawer.css";

const SideDrawer = props => {
  var drawerContainerClasses = "drawer-container ";
  drawerContainerClasses += props.opened === true ? "opened" : "";
  return <div className={drawerContainerClasses}></div>;
};

export default SideDrawer;
