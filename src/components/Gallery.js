import React from "react";
import "../css/gallery.css";

const Timeline = (props) => {
  return (
    <section className={`timeline ${props.className}`}>
      {props.children}
    </section>
  );
};

export default Timeline;
