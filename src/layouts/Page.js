import React from "react";
// Layouts
import Footer from "./Footer";
import Nav from "./Nav";
import Scheme from "./Scheme";
// Fragments
import Profiles from "@fragments/Profiles";

/**
 * Site chrome around a page's sections.
 *
 * hero      Rendered before <main> (e.g. <Hero title="…" img={…} />).
 * nav       false hides the nav; navItems overrides its links ("none" = logo only).
 * scheme    false hides the light/dark picker.
 * profiles  false hides the closing "Find me on:" block.
 */
const Page = ({
  children,
  className,
  hero,
  id,
  nav,
  navItems,
  profiles = true,
  scheme,
}) => (
  <>
    {hero}
    <main id={id} className={className}>
      {scheme !== false && <Scheme />}
      {nav !== false && <Nav items={navItems} />}
      {children}
      {profiles && (
        <section className="alignable">
          <Profiles className="article reveal-child-b self-center" />
        </section>
      )}
    </main>
    <Footer />
  </>
);

export default Page;
