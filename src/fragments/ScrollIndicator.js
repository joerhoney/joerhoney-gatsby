import React from "react";
import "@css/scroll-indicator.css"

const ScrollIndicator = (props) => {
  return (
    <div
      className={`scroll-indicator ${props.className ? props.className : ""}`} 
      style={props.style && props.style}
    >
      <pre>
&nbsp;               \⁻⁻\<br />
&nbsp; _______________\  \<br />
&nbsp;|________________   ⟩<br />
&nbsp;                /  /<br />
&nbsp;Scroll right<span className="blinking">█</span>  /__/<br />
      </pre>
    </div>
  )
};

export default ScrollIndicator;
