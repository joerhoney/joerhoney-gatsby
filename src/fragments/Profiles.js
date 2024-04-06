import React from "react";
// Components
import Icon from "@components/Icon";
// CSS
import "@css/icons.css";
import * as clss from "@css/profiles.module.css";

const Profiles = (props) => {
  return (
    <div className={`${clss.profiles} ${props.className}`}>
      <h4>{props.heading ? props.heading : "Find me on:"}</h4>
      <div className="icons">
        <Icon href="https://www.linkedin.com/in/joerhoney/" name="Linkedin" />
        <Icon
          href="https://github.com/joerhoney"
          label="GitHub"
          name="Github"
        />
        <Icon
          href="https://stackoverflow.com/users/1383937/joe-rhoney"
          label="Stack Overflow"
          name="Stackoverflow"
        />
        <Icon href="https://codepen.io/joerhoney" name="Codepen" />
        <Icon href="https://gravatar.com/joerhoney" name="Gravatar" />
      </div>
    </div>
  );
};

export default Profiles;
