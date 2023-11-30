import React from "react";
import { useState } from "react";
import { Link } from "gatsby";
import Icon from "./Icon";

const Nav = () => {
  const noscriptCSS = (
    <style>
      {`.nav {
      position: absolute;
    }
    .nav ul::before {
          left: -49px;
        transform: rotate(13deg);
        width: 330px;
        top: -162px;
        height: 698px;
    }`}
    </style>
  );
  const [active, setActive] = useState(false);
  // ...
  function handleClick() {
    setActive((isActive) => !isActive);
  }
  return (
    <>
      <noscript>
        <style>
          {`.nav {
            position: absolute;
          }
          .nav ul::before {
                left: -49px;
              transform: rotate(13deg);
              width: 330px;
              top: -162px;
              height: 698px;
          }`}
        </style>
      </noscript>
      <nav
        className={`nav ${active ? "active" : "inactive"}`}
        onClick={handleClick}
      >
        <Link to="/" className="logo">
          :j
        </Link>
        <div className="group">
          <div className="toggle" aria-label="Open navigation">
            <Icon className="open" label="false" name="Hamburger" />
          </div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/developer">Developer</Link>
            </li>
            <li>
              <Link to="/artist">Artist</Link>
            </li>
            <li>
              <Link to="/resume">Résumé</Link>
            </li>
            <li>
              <Link to="#contact" title="Contact">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div
          className="toggle"
          aria-label="Close navigation"
          onClick={handleClick}
        >
          <Icon className="close" label="false" name="Close" />
        </div>
      </nav>
    </>
  );
};

export default Nav;

// export const Head = () => {
//   return (
//     <noscript>
//       <style>
//         {`.nav {
//   position: static;
// }
// .nav ul::before {
//   content: none;
// }
// `}
//       </style>
//     </noscript>
//   );
// };
