import React from "react";
// CSS
import "@css/gallery.css";

const Gallery = (props) => {
  return (
    <div
      className={`gallery ${props.className ? props.className : ""}`}
      {...(props.id ? `id=${props.id}` : "")}
    >
      {props.children}
    </div>
  );
};

export default Gallery;
