import React from "react";
// Components
import { Link } from "gatsby";

const defaultItems = {
  Creative: "/creative",
  Developer: "/developer",
  Freelance: "/solutions",
  Contact: "#contact",
};

/**
 * items: { Label: "/path" } to override the links, or "none" for logo only.
 */
const Nav = ({ items = defaultItems }) => {
  const links = items === "none" ? {} : items;
  return (
    <nav className="nav">
      <div className="group">
        <Link to="/" className="logo">
          :j
        </Link>
        <ul>
          {Object.entries(links).map(([label, to]) => (
            <li key={label}>
              <Link className="nav-link" to={to}>
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
