import React from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
// import SmoothScroll from "smooth-scroll";
/* CSS */
import "normalize.css";
import "./global.css";
import "./colors-default.css";
import "./icons.css";
import "./units.css";

const Page = ({ children, className }) => {
  return (
    <>
      <Nav />
      <main className={className}>{children}</main>
      <Footer />
    </>
  );
};

export default Page;

// export const Head = () => (
//   <>
//     <body className="colors-default" />
//   </>
// );
