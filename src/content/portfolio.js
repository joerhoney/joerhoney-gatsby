import React from "react";
// Screenshots
import hyperpressimg from "@images/screenshots/hyperpress-home-motion.webp";
import r3riskimg from "@images/screenshots/r3risk-home.webp";
import santiagochildrenscenterimg from "@images/screenshots/santiagochildrenscenter-home.webp";
import metaimg from "@images/screenshots/meta-home.webp";
import codazenimg from "@images/screenshots/codazen-home.webp";
import laparksimg from "@images/screenshots/lacounty-parks-home.webp";
import laprobationimg from "@images/screenshots/lacounty-probation-home.webp";
import laactingcoachimg from "@images/screenshots/laactingcoach-home.webp";
import kreizenbeckimg from "@images/screenshots/kreizenbeck-home.webp";

/*
  Every portfolio entry shown with <Showcase>. Pages pick entries by key:
    <Showcase {...portfolio.r3risk} />
  so a project shared by several pages is written once.

  title, desc   Heading and one-line summary.
  src           Screenshot (import it above).
  skills        Chips under the text.
  href / to     External site ("See project") / internal story ("See project story").
  body          The longer description.
*/
const portfolio = {
  hyperpress: {
    desc: "Landing page for a high-performance WordPress hosting service.",
    to: "/work/hyperpress/",
    skills: ["JavaScript", "WebGPU", "WordPress", "HTML5", "CSS3"],
    src: hyperpressimg,
    title: "HyperPress",
    body: (
      <>
        <p>
          WordPress theme with an animated starfield background and fireball
          effect for a unique and memorable flare. Animated effect optimized
          with webGPU for high performance, infinite randomized generation, and
          no looping. Hightech, responsive page layout in a clean and repeatable
          design system, which the client can expand upon without breaking the
          theme.
        </p>
      </>
    ),
  },
  r3risk: {
    desc: "Landing page/website for concierge security and crisis response.",
    to: "/work/r3risk/",
    skills: ["JavaScript", "Tailwind", "HTML5", "CSS3", "Git"],
    src: r3riskimg,
    title: "R3 Risk",
    body: (
      <>
        <p>
          Static landing page built with minimum HTML, CSS, and JavaScript, for
          highly efficient performance. The client needed a simple, modern, and
          professional look, with a focus on the services they provide. The page
          was designed to be responsive and mobile-friendly, with a clean and
          easy-to-read layout. The client was very pleased with the results.
        </p>
      </>
    ),
  },
  santiago: {
    desc: "Landing page for a preschool/childcare center.",
    to: "/work/santiagochildrenscenter/",
    skills: ["JavaScript", "HTML5", "CSS3", "Git"],
    src: santiagochildrenscenterimg,
    title: "Santiago Children's Center",
    body: (
      <>
        <p>
          Static landing page optimized for high performance and conversion.
          Crucial elements included a clear call-to-action, social credibilty, a
          focus on the benefits of the services, and a simple and friendly
          design. The client expressed satisfaction and was excited to begin her
          marketing campaign.
        </p>
      </>
    ),
  },
  meta: {
    desc: "Analytics Enhancement and Website Maintenance",
    href: "https://meta.com",
    skills: [
      "XHP (aka Hack)",
      "JavaScript",
      "Custom CMS",
      "Tealium",
      "React",
      "HTML5",
      "CSS3",
      "XML",
      "PHP",
    ],
    src: metaimg,
    title: "Meta",
    body: (
      <>
        <p>
          Working within a large, established design system meant a different
          kind of challenge than greenfield work — precision and consistency
          mattered more than individual creative direction. I built out sections
          across several product areas (Quest, Quest Accessories, Horizon, Meta
          for Work, VR for Good, Meta Experiences) using Meta's custom XML/XHP
          component sets, and carried that same work through oculus.com and
          portal.facebook.com ahead of their migration into meta.com.
        </p>
        <p>
          Beyond building, I reviewed sections built by teammates and Meta staff
          for design adherence, copy accuracy, and code quality — work that
          required understanding the system well enough to hold others to it,
          not just follow it myself. I also took on an analytics audit across
          several meta.com pages: comparing existing event logging against best
          practices, recommending specific changes, and helping establish
          clearer standards going forward, which I then implemented once
          approved.
        </p>
        <p>
          It was a good lesson in what "quality" means at scale — less about any
          one page looking good, and more about hundreds of pages staying
          consistent, accurate, and maintainable over time.
        </p>
      </>
    ),
  },
  codazen: {
    desc: "Website and blog maintenance, modifications and improvements.",
    href: "https://codazen.com",
    skills: [
      "JavaScript",
      "Contentful",
      "HubSpot",
      "GraphQL",
      "GitHub",
      "Gatsby",
      "React",
      "HTML",
      "Sass",
      "CSS3",
      "JSX",
      "Git",
    ],
    src: codazenimg,
    title: "Codazen",
    body: (
      <>
        <p>
          At Codazen, most of my work lived in their React/Gatsby site, deployed
          through GitHub via Netlify — building new components, updating
          existing pages, and going through peer review like everyone else on
          the team. Over time I became the person the team turned to for the
          blog specifically: its structure, its maintenance, and what it needed
          to keep improving, including new posts built around their HubSpot
          integration.{" "}
        </p>
        <p>
          I also spent time looking ahead — evaluating what a migration to newer
          frameworks and platforms could look like for the company site, and
          sharing that direction with the team.
        </p>
        <p>
          It was a good environment for learning what "ownership" looks like on
          someone else's codebase: less about staking out your own corner, and
          more about becoming reliably useful across the whole thing.
        </p>
      </>
    ),
  },
  laparks: {
    desc: "New modern website for the county's many parks, built with WordPress.",
    href: "https://parks.lacounty.gov",
    skills: [
      "Adobe Illustrator",
      "Responsive Design",
      "WordPress Plugins",
      "WordPress Theme",
      "Vector Graphics",
      "JavaScript",
      "HTML5",
      "CSS3",
    ],
    src: laparksimg,
    title: "Los Angeles County Parks & Recreation",
    body: (
      <>
        <p>
          Working at RD Technology Solutions, I contributed to the development
          of many websites for the County of Los Angeles such as these. Some of
          my responsibilities included:
        </p>
        <ul>
          <li>Responsive web layout</li>
          <li>Content formatting and styling</li>
          <li>Accessibility compliance</li>
          <li>Page element selection and creation</li>
        </ul>
        <p>
          On the LA County Parks website, we needed an entire set of icons to
          represent the various features available at all of their parks, while
          adhering to a consistent look. I was provided icons for a few park
          features, and was tasked to find or create matching icons for the
          remaining features. Using Adobe Illustrator, I fabricated or drew
          (from scratch) the remaining icons needed for the project, while
          maintaining a consistent color palette, stroke weight and size. The
          client was very happy with the results, as it was exactly what they
          wanted.
        </p>
      </>
    ),
  },
  laprobation: {
    desc: "New modern website for a county probation department, built with WordPress.",
    href: "https://probation.lacounty.gov",
    skills: [
      "Responsive Design",
      "WordPress Plugins",
      "WordPress Theme",
      "JavaScript",
      "HTML5",
      "CSS3",
      "PHP",
    ],
    src: laprobationimg,
    title: "Los Angeles County Probation Department",
    body: (
      <>
        <p>
          The LA County Probation Dept. needed a new website with modern
          features.
        </p>
        <p>
          Problem: They had several categories to feature, but within those
          categories they had a large amount of subcategories. They wanted to
          feature all of this on the home page, in a way that is user-friendly
          and relatively simple, despite the massive quantity of options. They
          also wanted a large slideshow on the Home page, to follow the modern
          trend, with friendly colors matching their logo.
        </p>
        <p>
          Solution: I came up with a feature tile set representing the main
          categories, placed over a fullscreen slideshow. Clicking on each tile
          displays its many subcategories, which takes you to the pertinent
          page. With animated queues, this layout was clear and intuitive.
        </p>
        <p>
          The client at the LA County Probation Dept. was very pleased with this
          new home page.
        </p>
      </>
    ),
  },
  laactingcoach: {
    desc: "New website for an acting career trainer.",
    href: "https://losangelesactingcoach.com",
    skills: ["WordPress Plugins", "WordPress Theme", "HTML5", "CSS3", "PHP"],
    src: laactingcoachimg,
    title: "Los Angeles Acting\u00a0Coach",
    body: (
      <>
        <p>
          April needed a modern website to market her acting coaching service.
          After Riafox put this new WordPress website together with a modern
          theme and fulfilled most of the necessary requirements, they asked me
          to modify a few of the theme features that fell short. This included:
        </p>
        <ul>
          <li>The hero layout</li>
          <li>The slideshow (for the testimonials)</li>
          <li>The blog posts tiles</li>
        </ul>
      </>
    ),
  },
  kreizenbeck: {
    desc: "Website makeover, built on WordPress with a modified theme.",
    href: "https://www.kreizenbeckplanroom.com",
    skills: ["WordPress Plugins", "WordPress Theme", "HTML5", "CSS3", "PHP"],
    src: kreizenbeckimg,
    title: "Kreizenbeck Constructors",
    body: (
      <>
        <p>
          The client needed their WordPress website's design coded into the
          theme. The main objective was to showcase their construction work, so
          there were many galleries. A plugin with limited features used for the
          galleries, but it had limited features that didn't cover the design or
          informational needs. After I configured and coded adjustments in order
          to theme the website just as the design portrayed, I added an
          informational hover effect to the gallery, which did not come included
          with the plugin. The client was happy with the results and very
          pleased with the website overall.
        </p>
      </>
    ),
  },
};

export default portfolio;
