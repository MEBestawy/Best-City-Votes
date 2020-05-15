import React from "react";
import "../styles/SideDrawer/SideDrawer.css";

const SideDrawer = props => {
  var drawerContainerClasses = "drawer-container ";
  drawerContainerClasses += props.opened === true ? "opened" : "";
  return (
    <div className={drawerContainerClasses}>
      <div className="menu-text">
        <p>
          This website was designed and developed by Mahmoud El Bestawy. I
          designed the UI using the AdobeXD and implemented the frontend code
          using the React.js library.
        </p>
        <p>
          I started this project as an opportunity to gain experience and
          showcase my progress using web development tools such as React and
          SCSS. I also created this project with the hopes of experimenting with
          backend development by eventually adding server-side functionality
          through keeping track of the amount of votes for each animal.
        </p>
        <p>
          Throughout this project I gained experience dealing with props, state
          manipulation, event-raising, and event-handling in React. If you are
          interested in examining my work in more detail, the button below links
          to the GitHub repository holding the code for this project.
        </p>
      </div>
      <a href="https://github.com/MEBestawy/favourite-pet-survey-site">
        <button className="menu-promo-button"> My Github </button>
      </a>
    </div>
  );
};

export default SideDrawer;
