import React from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import "normalize.css";
import "./global.css";
import { ParallaxProvider } from "react-scroll-parallax";

const Page = ({ children, className }) => {
  return (
    <ParallaxProvider>
      <Nav />
      <main className={`${className} bottomL`}>{children}</main>
      <Footer />
    </ParallaxProvider>
  );
};

export default Page;
