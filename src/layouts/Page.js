import React from "react";
import Nav from "../components/Nav";
import NavIndicator from "../fragments/NavIndicator";
import Footer from "../components/Footer";
// import SmoothScroll from "smooth-scroll";
/* CSS */
import "normalize.css";
import "../css/global.css";
import "../css/nav.css";
import "../css/colors-default.css";
import "../css/icons.css";
import "../css/units.css";
import "../css/buttons.css";

const Page = ({ children, className }) => {
  return (
    <>
      <main className={className}>
        <Nav />
        <NavIndicator />
        {children}
      </main>
      <Footer />
    </>
  );
};

export default Page;

// export const Head = () => (
//   <>
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
//     <body className="colors-default" />
//   </>
// );
