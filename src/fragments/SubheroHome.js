import React from "react";
// CSS
import * as clss from "@css/subheroHome.module.css";

const SubheroHome = ({ children }) => {
  return <div className={clss.subhero}>{children}</div>;
};

export default SubheroHome;
