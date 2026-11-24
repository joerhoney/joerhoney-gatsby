import React from "react";
// Components
import { Link } from "gatsby";

const Split = (props) => {
  return (
    <div className="splitWrap">
      <div className={`split ${props.className ?? ""}`} id={props.id}>
        {props.children}
      </div>
    </div>
  );
};

const Half = (props) => {
  const alt = props.alt ?? "";
  // TODO: Use <GatsbyImage />
  return (
    <div className={`half ${props.className ?? ""}`} id={props.id}>
      {props.src && (
        <img
          alt={alt}
          src={props.src}
          style={{ objectPosition: props.position }}
        />
      )}
      <div className="cell">
        <div className={props.lift ? "title lift" : "title"}>
          <h2>{props.heading}</h2>
        </div>
        <div className="content">
          {props.children}
          {props.button && (
            <Link className="button" to={props.to}>
              {props.button}
            </Link>
          )}
          {props.button2 && (
            <>
              <br />
              <Link className="button" to={props.to2}>
                {props.button2}
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export { Split, Half };
