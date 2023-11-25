import React from "react";
import * as clss from "../css/showcase.module.css";
// import { Link } from "gatsby";
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
    <div className={clss.showcaseWrap}>
      <div className={`${clss.showcase} ${props.className}`}>
        <h3>{props.title}</h3>
        {props.desc && <p className={clss.desc}>{props.desc}</p>}
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
        {props.children}
        {props.skills && (
          <ul className={clss.skills}>
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
    </div>
  );
};

export default Showcase;
