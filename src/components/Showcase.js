import React from "react";
import "../css/showcase.css";
import getDomainName from "../utils/getDomainName";
import isExternal from "../utils/isExternal";
import Button from "./Button.js";

const Showcase = (props) => {
  const window = props.window
    ? props.window
    : props.href
    ? isExternal(props.href)
      ? getDomainName(props.href)
      : false
    : false;
  return (
    // <div className="showcaseWrap">
    <div className={`showcase ${props.className}`} style={props.styles}>
      <div className="heading">
        <h3>{props.title}</h3>
        {props.desc && <p className="desc">{props.desc}</p>}
      </div>
      {props.src && (
        <img
          alt={
            props.alt
              ? props.alt
              : props.href
              ? `Screenshot of ${getDomainName(props.href)}.`
              : `Screenshot of ${props.title}.`
          }
          src={props.src}
          loading="lazy"
          width="180px"
        />
      )}
      <div className="content">{props.children}</div>
      {props.skills && (
        <ul className="skills items">
          {props.skills.map((skill) => (
            <li key={skill}>
              <b>{skill}</b>
            </li>
          ))}
        </ul>
      )}
      {props.href && (
        <Button href={props.href} window={window}>
          See Project<span className="blinking">:</span>
        </Button>
      )}
    </div>
    // </div>
  );
};

export default Showcase;
