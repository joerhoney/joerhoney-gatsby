import React from "react";
import { Link } from "gatsby";

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

const Nav = () => {
  return (
    <>
      <noscript>{noscriptCSS}</noscript>
      <nav className="nav">
        <ul>
          <li className="logo">
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
