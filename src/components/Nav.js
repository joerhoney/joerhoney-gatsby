import React from "react";
import { useState } from "react";
import { Link } from "gatsby";

const Nav = () => {
  const noscriptCSS = `
  <style>
    .nav {
      position: absolute;
    }
    .nav ul::before {
          left: -49px;
        rotate: 13deg;
        width: 330px;
        top: -162px;
        height: 698px;
    }
  </style>`;
  const [active, setActive] = useState(false);
  // ...
  function handleClick() {
    setActive((isActive) => !isActive);
  }
  return (
    <>
      <noscript>{noscriptCSS}</noscript>
      <nav
        onClick={handleClick}
        className={`nav ${active ? "active" : "inactive"}`}
      >
        <Link to="/" className="logo" activeClassName="current">
          :j
        </Link>
        <ul>
          <li>
            <Link to="/" activeClassName="current">
              Home
            </Link>
          </li>
          <li>
            <Link to="/developer" activeClassName="current">
              Developer
            </Link>
          </li>
          <li>
            <Link to="/artist" activeClassName="current">
              Artist
            </Link>
          </li>
          <li>
            <Link to="/resume" activeClassName="current">
              Résumé
            </Link>
          </li>
          <li>
            <Link to="#contact" title="Contact">
              Contact
            </Link>
          </li>
        </ul>
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
