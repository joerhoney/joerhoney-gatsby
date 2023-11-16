import React from "react";
import { Link } from "gatsby";
import * as clss from "./nav.module.css";
import Icon from "../components/Icon";

const Nav = () => {
  return (
    <nav className={clss.nav}>
      <ul>
        <li className={clss.logo}>
          <Link to="/" activeClassName="current-page">
            Home
          </Link>
        </li>
        <li>
          <Link to="/developer" activeClassName="current-page">
            Developer
          </Link>
        </li>
        <li>
          <Link to="/artist" activeClassName="current-page">
            Artist
          </Link>
        </li>
        <li>
          <Link to="/resume" activeClassName="current-page">
            Résumé
          </Link>
        </li>
        <li>
          <Link to="#contact" title="Contact">
            Contact
          </Link>
        </li>
      </ul>
      <Icon label="false" name="Hamburger" />
    </nav>
  );
};

export default Nav;
