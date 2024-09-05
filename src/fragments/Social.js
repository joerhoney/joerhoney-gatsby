import React from "react";
// Components
import Icon from "@components/Icon";
// CSS
import "@css/icons.css";
import "@css/profiles.css";

const Social = (props) => {
  const { className, heading, invert } = props;
  return (
    <div className={`profiles ${className ?? ""}`}>
      <h4>{heading ? heading : "Find me on:"}</h4>
      <div className="icons">
        <Icon href="https://www.linkedin.com/in/joerhoney/" name="Linkedin" />
        <Icon href="https://gravatar.com/joerhoney" name="Gravatar" />
      </div>
    </div>
  );
};

export default Social;
