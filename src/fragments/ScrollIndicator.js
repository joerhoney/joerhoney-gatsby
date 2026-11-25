import React from "react";

/**
 * ASCII arrow with a blinking cursor. `label` replaces "Scroll right"; keep
 * it 12 characters wide so the arrow's lines stay aligned.
 */
const ScrollIndicator = ({ className, label = "Scroll right", style }) => (
  <div
    className={["scroll-indicator", className].filter(Boolean).join(" ")}
    style={style}
  >
    <pre>
&nbsp;               \⁻⁻\<br />
&nbsp; _______________\  \<br />
&nbsp;|________________   ⟩<br />
&nbsp;                /  /<br />
&nbsp;{label}<span className="blinking">█</span>  /__/<br />
    </pre>
  </div>
);

export default ScrollIndicator;
