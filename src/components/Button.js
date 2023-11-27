import React from "react";
import Icon from "./Icon.js";
import isExternal from "../utils/isExternal.js";
import getDomainName from "../utils/getDomainName.js";
import "../css/buttons.css";

const Button = (props) => {
  const rel = isExternal(props.href) ? "noreferrer" : "";
  const target = isExternal(props.href) ? "_blank" : "";
  return (
    <a
      className={`button ${props.className}`}
      href={props.href}
      rel={rel}
      target={target}
    >
      {isExternal(props.href) ? (
        <Icon className="external" label="false" name="ExternalLink" />
      ) : (
        ""
      )}
      <div className="text">{props.children}</div>{" "}
      {props.window && (
        <div className="window">{getDomainName(props.href)}</div>
      )}
    </a>
  );
};

export default Button;
