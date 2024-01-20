import React from "react";
import "@css/footer.css";

const Footer = () => {
  return (
    <footer>
      <div>
        <p className="copyright">
          &copy;{new Date().getFullYear()} Joe Rhoney.
          <br />
          Proudly built with Gatsby.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
