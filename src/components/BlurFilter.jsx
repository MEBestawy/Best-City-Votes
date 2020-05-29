import React from "react";
import "../styles/BlurFilter/BlurFilter.css";

const BlurFilter = props => {
  if (!props.menuOpenned) return "";
  return <div onClick={props.onPress} id="blur-screen"></div>;
};

export default BlurFilter;
