import React from "react";
import "../css/scroll-indicator.css"

const ScrollIndicator = (props) => {
  return (
    <div
      className={`scroll-indicator ${props.className ? props.className : ""}`} 
      style={props.style && props.style}
    >
      <pre>
&nbsp;                 \⁻⁻\<br />
&nbsp;                  \  \<br />
&nbsp; __________________\  \<br />
&nbsp;|___________________   ⟩<br />
&nbsp;                   /  /<br />
&nbsp;Scroll that way<span className="blinking">█</span>  /  /<br />
&nbsp;                 /__/
      </pre>
    </div>
  )
};

export default ScrollIndicator;
