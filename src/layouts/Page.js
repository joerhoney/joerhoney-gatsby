import React from "react";
// Components
// import { SEO } from "@components/seo";
// Layouts
import Footer from "./Footer";
import Nav from "./Nav";
// import NavIndicator from "./NavIndicator";
import Scheme from "./Scheme";

const Page = ({ children, className, id, nav, navItems, scheme }) => {
  return (
    <>
      <main id={id} className={className}>
        {scheme !== false && <Scheme />}
        {nav !== false && <Nav items={navItems} />}
        {/* {indicator !== false && <NavIndicator />} */}
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
