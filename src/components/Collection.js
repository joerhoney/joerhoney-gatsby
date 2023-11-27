import React from "react";
import "../css/showcase.css";

const Collection = (props) => {
  return (
    <div className="collection">
      <div className="about">
        <div className="heading">
          <h3>{props.title}</h3>
          {props.desc && <p className="desc">{props.desc}</p>}
        </div>
        {props.paragraphs && (
          <>
            {props.paragraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </>
        )}
        {props.skills && (
          <ul className="skills items">
            {props.skills.map((skill) => (
              <li key={skill}>
                <b>{skill}</b>
              </li>
            ))}
          </ul>
        )}
      </div>
      <div className="cards">{props.children}</div>
    </div>
  );
};

const Collectable = (props) => {
  return <div className="card">{props.children}</div>;
};

const CollectDesc = (props) => {
  return <div className="desc">{props.children}</div>;
};

export { Collection, Collectable, CollectDesc };
