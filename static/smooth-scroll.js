import * as React from "react";
import SmoothScroll from "smooth-scroll";

if (typeof window !== "undefined") {
  require("smooth-scroll")('a[href*="#"]');
}
