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

export const Head = () => (
  <>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Rubik&display=swap"
      rel="stylesheet"
    />
    {/* gatsby-plugin-preload-fonts
    https://www.gatsbyjs.com/plugins/gatsby-plugin-preload-fonts/?=font%20preload
    If fonts aren't loading: yarn run preload-fonts
    https://www.youtube.com/watch?v=i2oquvFdzbg
    */}
    {/* <body className="colors-default" /> */}
  </>
);
