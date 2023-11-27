import React from "react";
import "../css/gallery.css";

const Gallery = (props) => {
  return (
    <section className={`gallery ${props.className ? props.className : ""}`}>
      {props.children}
    </section>
  );
};

export default Gallery;
