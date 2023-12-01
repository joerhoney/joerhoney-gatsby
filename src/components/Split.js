import React from "react";
import { Link } from "gatsby";
import * as clss from "../css/split.module.css";

const Split = (props) => {
  return (
    <div className={clss.splitWrap}>
      <div
        className={`${clss.split} ${
          typeof props.className !== "undefined" ? props.className : ""
        }`}
      >
        {props.children}
      </div>
    </div>
  );
};

const Half = (props) => {
  const alt = props.alt ?? "";
  // TODO: Use <GatsbyImage />
  return (
    <div
      className={`${clss.half} ${
        typeof props.className !== "undefined" ? props.className : ""
      }`}
      id={props.id}
    >
      {props.src && (
        <img
          alt={alt}
          src={props.src}
          style={{ objectPosition: props.position }}
        />
      )}
      <div className={clss.cell}>
        <div className={clss.title}>
          <h2>{props.heading}</h2>
        </div>
        <div className={clss.content}>
          {props.children}
          {props.button && (
            <Link className="button" to={props.to}>
              {props.button}
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export { Split, Half };
