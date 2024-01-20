import React from "react";
/* CSS */
import "@css/showcase.css";

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

export default Collection;
