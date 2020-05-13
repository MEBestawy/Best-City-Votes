import React from "react";
import "../styles/MenuToggle/MenuToggle.css";

const MenuToggle = props => {
  const toggleMenuClass = props.opened ? "opened-menu" : "";
  return (
    <div
      id="toggle-menu-background"
      className={toggleMenuClass}
      onClick={props.onPress}
    >
      <div className="line top-line-of-toggle-menu"></div>
      <div className="line mid-line-of-toggle-menu"></div>
      <div className="line bottom-line-of-toggle-menu"></div>
    </div>
  );
};

export default MenuToggle;
