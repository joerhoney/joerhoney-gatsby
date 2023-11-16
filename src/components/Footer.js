import React from "react";
// import * as clss from "./footer.module.css";

const Footer = () => {
  return (
    // <div className={clss.footer}>
    <footer>
      <div>
        {/* <ul className="sitemap">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/story">About me</a>
          </li>
          <li>
            <a href="#contact">Contact me</a>
          </li>
        </ul> */}
        <p className="copyright">
          &copy;{new Date().getFullYear()} Joe Rhoney.
          <br />
          Proudly built with Gatsby.
        </p>
      </div>
    </footer>
    // </div>
  );
};

export default Footer;
