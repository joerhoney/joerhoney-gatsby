import React from "react";
// Components
import { Link } from "gatsby";
// CSS
import "@css/nav.scss";

const Nav = () => {
  // const noscriptCSS = `
  // &lt;style&gt;
  //   .nav {
  //     position: absolute;
  //   }
  //   .nav ul::before {
  //     translate: rotate(13deg);
  //     width: 330px;
  //     height: 698px;

  //     top: -162px;
  //     left: -49px;
  //   }
  // &lt;/style&gt;`;
  return (
    <>
      {/* <noscript>{noscriptCSS}</noscript> */}
      <nav className="nav">
        <div className="group">
          <Link to="/" className="logo">
            :j
          </Link>
          <ul>
            <li>
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="nav-link" to="/developer">
                Developer
              </Link>
            </li>
            <li>
              <Link className="nav-link" to="/artist">
                Artist
              </Link>
            </li>
            <li>
              <Link className="nav-link" to="#contact" title="Contact">
                Contact
              </Link>
            </li>
          </ul>
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
