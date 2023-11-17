import React from "react";
import * as clss from "./showcase.module.css";
// import { Link } from "gatsby";
import getDomainName from "../utils/getDomainName";

const Showcase = (props) => {
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
          <a
            className="button at-bottom"
            href={props.href}
            rel="noreferrer"
            target="_blank"
          >
            See Project: {getDomainName(props.href)}
          </a>
        )}
      </div>
    </div>
  );
};

export default Showcase;
