import React from "react";
import Icon from "@components/Icon";

function Arrow(props) {
  const { className, children, flip = false, inward = false, style } = props;
  const orientation =
    flip || inward
      ? " with-arrow__arrow-" + (inward ? "-in" : "") + (flip ? "-flip" : "")
      : "";
  const classes = "with-arrow__arrow" + orientation;
  return (
    <div className={className}>
      <div className="with-arrow" style={{ height: "100%", width: "100%" }}>
        <Icon name="ArrowSketch" className={classes} style={style} />
      </div>
      {children}
    </div>
  );
}

export default Arrow;
