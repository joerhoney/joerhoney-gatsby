import React from "react";
/* Layout */
import Footer from "./Footer";
import Nav from "./Nav";
import NavIndicator from "./NavIndicator";
import Scheme from "./Scheme";
/* CSS */
import "normalize.css";
import "@css/global.css";
import "@css/nav.css";
import "@css/colors-default.css";
import "@css/icons.css";
import "@css/units.css";
import "@css/hero.css";
import "@css/buttons.css";

const Page = ({ children, className }) => {
  return (
    <>
      <main className={className}>
        <Scheme />
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
