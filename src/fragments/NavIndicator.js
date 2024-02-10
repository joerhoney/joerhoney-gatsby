import React from "react";

const NavIndicator = (props) => {
  return (
    <div  className={`nav-indicator ${props.className && props.className}`}>
      <pre>
&nbsp;  /⁻⁻/<br />
&nbsp; /  /_____________<br />
&nbsp;⟨   ______________|<br />
&nbsp; \  \<br />
&nbsp;  \__\  Main pages<span className="blinking">█</span><br />
      </pre>
    </div>
  )
};

export default NavIndicator;
