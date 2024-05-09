import React from "react";
// Components
import { graphql, useStaticQuery } from "gatsby";
// CSS
import "@css/icons.css";
import "@css/footer.scss";

const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          copyright
        }
      }
    }
  `);
  return (
    <footer>
      <div className="footer__inner">
        <p className="copyright">
          &copy;{new Date().getFullYear()} {data.site.siteMetadata.copyright}
          <br />
          Proudly built with Gatsby.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
