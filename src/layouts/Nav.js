import React from "react";
// Components
import { Link } from "gatsby";
// CSS
import "@css/nav.css";

const Nav = (props) => {
  console.log("props: ", props);
  const items = props.items || {
    Home: "/",
    Developer: "/developer",
    Artist: "/artist",
    Contact: "#contact",
  };
  return (
    <nav className="nav">
      <div className="group">
        <Link to="/" className="logo">
          :j
        </Link>
        <ul>
          {Object.keys(items).map((item) => (
            <li key={item}>
              <Link className="nav-link" to={items[item]}>
                {item}
              </Link>
            </li>
          ))}
          {/* {items.map((item) => (
            <li key={item}>
              <Link className="nav-link" to={item}>
                {item}
              </Link>
            </li>
          ))} */}
          {/* <li>
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
            <Link className="nav-link" to="#contact">
              Contact
            </Link>
          </li> */}
        </ul>
      </div>
    </nav>
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
