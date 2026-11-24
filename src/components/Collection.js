import React from "react";
// Components
import Tags from "./Tags.js";

/**
 * Like Showcase, but for a group of related projects: the copy sits on one
 * side and the project cards (children) on the other.
 */
const Collection = ({ children, desc, paragraphs, skills, title }) => (
  <div className="collection">
    <div className="about">
      <div className="heading">
        <h3>{title}</h3>
        {desc && <p className="desc">{desc}</p>}
      </div>
      {paragraphs?.map((paragraph, index) => (
        <p key={index}>{paragraph}</p>
      ))}
      {skills && <Tags items={skills} />}
    </div>
    <div className="cards">{children}</div>
  </div>
);

export default Collection;
