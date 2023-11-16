import React from "react";
import * as clss from "./subheroHome.module.css";

const SubheroHome = ({ children }) => {
  return <div className={clss.subhero}>{children}</div>;
};

export default SubheroHome;
