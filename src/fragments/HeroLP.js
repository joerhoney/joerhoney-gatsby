import React from "react";
// Components
import { Half, Split } from "@components/Split";

const HeroLP = (props) => {
  return <div className="heroLP tilt--split">{props.children}</div>;
};

export default HeroLP;
