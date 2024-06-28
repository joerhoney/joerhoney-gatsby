import React from "react";
// Components
import Icon from "@components/Icon";
// CSS
import "@css/icons.scss";
import "@css/profiles.css";

const Profiles = (props) => {
  return (
    <div className={`profiles ${props.className}`}>
      <h4>{props.heading ? props.heading : "Find me on:"}</h4>
      <div className="icons reveal-child-b inline">
        <Icon href="https://www.linkedin.com/in/joerhoney/" name="LinkedIn" />
        <Icon href="https://github.com/joerhoney" name="GitHub" />
        <Icon
          href="https://stackoverflow.com/users/1383937/joe-rhoney"
          name="Stack Overflow"
        />
        <Icon href="https://codepen.io/joerhoney" name="CodePen" />
        <Icon href="https://gravatar.com/joerhoney" name="Gravatar" />
      </div>
    </div>
  );
};

export default Profiles;
