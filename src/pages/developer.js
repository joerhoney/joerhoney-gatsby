import * as React from "react";
// Utilities
import since from "@utils/since";
// Components
import Button from "@components/Button";
import Collection from "@components/Collection";
import Mailto from "@components/Mailto";
import { Link } from "gatsby";
import Showcase from "@components/Showcase";
// Layouts
import Page from "@layouts/Page";
// CSS
import "@css/developer.scss";
// Fragments
import Arrow from "@fragments/Arrow";
import Profiles from "@fragments/Profiles";
import {
  Browsers,
  Cms,
  Communities,
  Compilers,
  Languages,
  Os,
  Services,
  Software,
  OtherTech,
} from "@fragments/Skills";
// Images
import dragon from "@images/heros/dragon.webp";
import avatar from "@images/portrait.webp";
import codazenimg from "@images/screenshots/codazen-home.webp";
import kreizenbeckimg from "@images/screenshots/kreizenbeck-home.webp";
import metaimg from "@images/screenshots/meta-home.webp";
import laactingcoachimg from "@images/screenshots/laactingcoach-home.webp";
import laparksimg from "@images/screenshots/lacounty-parks-home.webp";
import laprobationimg from "@images/screenshots/lacounty-probation-home.webp";
import bradentonperioimg from "@images/screenshots/bradentonperio-home.webp";
import dentistinsantaclaraimg from "@images/screenshots/dentistinsantaclara-home.webp";
import southfortworthdentistimg from "@images/screenshots/southfortworthdentist-home.webp";
import westchestergentledentistryimg from "@images/screenshots/westchestergentledentistry-home.webp";

const codazenskills = [
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
  laactingcoachskills = [
    "WordPress Plugins",
    "WordPress Theme",
    "HTML5",
    "CSS3",
    "PHP",
  ],
  laparksskills = [
    "Adobe Illustrator",
    "Responsive Design",
    "WordPress Plugins",
    "WordPress Theme",
    "Vector Graphics",
    "JavaScript",
    "HTML5",
    "CSS3",
  ],
  laprobationskills = [
    "Responsive Design",
    "WordPress Plugins",
    "WordPress Theme",
    "JavaScript",
    "HTML5",
    "CSS3",
    "PHP",
  ],
  metaskills = [
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
  dentistryskills = [
    "WordPress Theme",
    "WordPress Plugins",
    "HTML5",
    "CSS3",
    "PHP",
  ],
  dentistryParagraphs = [
    `While working at Gilleard Marketing, I launched many websites
    for dental practitioners, in states all across the U.S. Since
    WordPress was the platform of choice at GM, I built a custom
    theme and several custom plugins to expedite our workflow and
    support better control over desired end results. `,
    `As the web developer, I built these websites according to the
    designers' specifications, which were provided to me as a
    Photoshop file. `,
    `These are some of websites I built at Gilleard Marketing. `,
  ];

const codePage = () => {
  return (
    <>
      <section className="hero page">
        <div className="hero__bg">
          <img loading="lazy" src={dragon} alt="Illusutration of a Dragon" />
        </div>
        <h1>Developer</h1>
      </section>
      <Page>
        <section className="alignable bottomS">
          <article className="self-center">
            <p>
              These days, a web developer is usually expected to be well-rounded
              and specialize in several aspects of the web. The industry
              continues to grow exponentially, and anyone involved should know
              that no one can specialize in all of it. So what do I mean when I
              say I'm a web developer? Let me start by sharing the more specific
              web roles I consider myself a good fit for, and why:
            </p>
          </article>
        </section>
        <section
          className="alignable skew_b compensateTHalf topS cta_b"
          style={{ position: "relative" }}
        >
          <div className="article">
            <h2 className="tilt">Roles</h2>
          </div>
          <div className="columns-few bottomS columns-few--tilt">
            <div className="column">
              <h3>Front-End Developer</h3>
              <p>
                All things considered, this is primarily where my skill set and
                experience places me. Most of what I do is comprised of
                converting design and content to a functional user interface. In
                more recent years I've been using a lot of Node, React, GraphQL
                and Gatsby.
              </p>
            </div>
            <div className="column">
              <h3>Creative Developer</h3>
              <p>
                This lesser-known role is where I see myself heading in my
                career path. Generally expected to have some HTML canvas and
                WebGL knowledge, as well as a deep understanding of CSS, a
                Creative Developer specializes in digital experiences. I am
                passionate about learning these skills.
              </p>
            </div>
            <div className="column">
              <h3>WordPress Developer</h3>
              <p>
                The majority of my web industry experience involves over 100
                WordPress websites I designed, built and/or managed over the
                course of about 12 years. Most of these include my own custom
                theme and some of my own plugins (10 available in the public
                directory under the name AddFunc).
              </p>
            </div>
            <div className="column">
              <h3>Web Developer</h3>
              <p>
                To me, this blanket term means understanding the fundamental
                mechanics of the web and having a thorough grasp of the 3
                pillars of web linguistics (HTML, CSS and JavaScript). In
                addition to the daily use of these, a web developer sees the
                relationships, similarities and differences in all web languages
                and can therefore adapt as needed.
              </p>
            </div>
            <div className="column">
              <h3>Web/UI Designer</h3>
              <p>
                I have designed many websites and have carefully observed the
                evolution of modern web design trends and its crossover into
                online and offline apps.
              </p>
            </div>
          </div>
          <img
            alt="Portrait of Joe Rhoney."
            className="portrait transluscent"
            height="290"
            loading="lazy"
            src={avatar}
            width="240"
          />
        </section>
        <section className="alignable bottomM topS" id="skills">
          <article className="self-center bottomXS">
            <h2>Skills &amp; Tools</h2>
            <p>
              These are the technical skills I've picked up and tools I've
              worked with in my career. I'm always eager to learn and teach what
              I know!
            </p>
          </article>
          <div className="content-center self-center wide">
            <div className="reveal-child-b">
              <Languages />
              <Cms />
              <Compilers />
              <OtherTech />
              <Communities />
              <Services />
              <Browsers />
              <Software />
              <Os />
            </div>
          </div>
        </section>
        <section className="alignable skew_b tint1_b" id="work">
          <article className="self-center">
            <h2>Work Portfolio</h2>
            <p>
              Explore a glimpse of my work history featuring projects I've
              either spearheaded or significantly contributed to in their
              development and ongoing maintenance.
            </p>
          </article>
          <Showcase
            desc="Analytics Enhancement and Website Maintenance"
            to="meta"
            href="https://meta.com"
            skills={metaskills}
            src={metaimg}
            styles={{ marginTop: "var(--unit4)" }}
            title="Meta"
          >
            <p>
              Built out sections on several pages using Meta's custom XML
              component sets. Some of the areas of the website included:
            </p>
            <ul>
              <li>Quest products</li>
              <li>Quest Accessories</li>
              <li>Horizon</li>
              <li>Meta for Work</li>
              <li>VR for Good</li>
              <li>Meta Experiences</li>
            </ul>
            <p>
              Reviewed sections built by others (including Meta staff and my
              team mates) for design adherence, copy accuracy and code quality.
              Deprecated old components (built in XHP), as well as old pages,
              files and directories. Updated, added and removed 301 redirects.
              Executed similar work on oculus.com and portal.facebook.com, prior
              to migration to meta.com. Audited page event logging on several
              meta.com pages, compared to best practices, recommended specific
              updates, and helped to establish more precise standards for
              analytics. Implemented these findings upon approval.
            </p>
          </Showcase>
          <Showcase
            desc="Website and blog maintenance, modifications and improvements."
            to="codazen"
            href="https://codazen.com"
            skills={codazenskills}
            src={codazenimg}
            title="Codazen"
          >
            <p>
              Updated pages with React, powered by Gatsby on Node and deployed
              via GitHub through Netlify (prior to migration). Created new React
              components. Participated in peer-reviews as required for all work.
              Added blog posts powered by HubSpot. Became the go-to for
              Codazen's blog as to it's maintenance and structure and necessary
              steps for improvement. Provided insight and direction on migration
              to newer frameworks and platforms, for an improved company
              website.
            </p>
          </Showcase>
          <Showcase
            desc="New modern website for the county's many parks, built with WordPress."
            href="https://parks.lacounty.gov"
            skills={laparksskills}
            src={laparksimg}
            title="Los Angeles County Parks &amp; Recreation"
          >
            <p>
              Working at RD Technology Solutions, I contributed to the
              development of many websites for the County of Los Angeles such as
              these. Some of my responsibilities included:
            </p>
            <ul>
              <li>Responsive web layout</li>
              <li>Content formatting and styling</li>
              <li>Accessibility compliance</li>
              <li>Page element selection and creation</li>
            </ul>
            <p>
              On the LA County Parks website, we needed an entire set of icons
              to represent the various features available at all of their parks,
              while adhering to a consistent look. I was provided icons for a
              few park features, and was tasked to find or create matching icons
              for the remaining features. Using Adobe Illustrator, I fabricated
              or drew (from scratch) the remaining icons needed for the project,
              while maintaining a consistent color palette, stroke weight and
              size. The client was very happy with the results, as it was
              exactly what they wanted.
            </p>
          </Showcase>
          <Showcase
            desc="New modern website for a county probation department, built with WordPress."
            href="https://probation.lacounty.gov"
            skills={laprobationskills}
            src={laprobationimg}
            title="Los Angeles County Probation Department"
          >
            <p>
              The LA County Probation Dept. needed a new website with modern
              features.
            </p>
            <p>
              Problem: They had several categories to feature, but within those
              categories they had a large amount of subcategories. They wanted
              to feature all of this on the home page, in a way that is
              user-friendly and relatively simple, despite the massive quantity
              of options. They also wanted a large slideshow on the Home page,
              to follow the modern trend, with friendly colors matching their
              logo.
            </p>
            <p>
              Solution: I came up with a feature tile set representing the main
              categories, placed over a fullscreen slideshow. Clicking on each
              tile displays its many subcategories, which takes you to the
              pertinent page. With animated queues, this layout was clear and
              intuitive.
            </p>
            <p>
              The client at the LA County Probation Dept. was very pleased with
              this new home page.
            </p>
          </Showcase>
          <Showcase
            desc="New website for an acting career trainer."
            href="https://losangelesactingcoach.com"
            skills={laactingcoachskills}
            src={laactingcoachimg}
            title="Los Angeles Acting&nbsp;Coach"
          >
            <p>
              April needed a modern website to market her acting coaching
              service. After Riafox put this new WordPress website together with
              a modern theme and fulfilled most of the necessary requirements,
              they asked me to modify a few of the theme features that fell
              short. This included:
            </p>
            <ul>
              <li>The hero layout</li>
              <li>The slideshow (for the testimonials)</li>
              <li>The blog posts tiles</li>
            </ul>
          </Showcase>
          <Showcase
            desc="Website makeover, built on WordPress with a modified theme."
            to="kreizenbeck"
            href="https://www.kreizenbeckplanroom.com"
            skills={[
              "WordPress Plugins",
              "WordPress Theme",
              "HTML5",
              "CSS3",
              "PHP",
            ]}
            src={kreizenbeckimg}
            title="Kreizenbeck Constructors"
          >
            <p>
              The client needed their WordPress website's design coded into the
              theme. The main objective was to showcase their construction work,
              so there were many galleries. A plugin with limited features used
              for the galleries, but it had limited features that didn't cover
              the design or informational needs. After I configured and coded
              adjustments in order to theme the website just as the design
              portrayed, I added an informational hover effect to the gallery,
              which did not come included with the plugin. The client was happy
              with the results and very pleased with the website overall.
            </p>
          </Showcase>
          <Collection
            desc="New WordPress websites, built with a custom theme and plugins."
            skills={dentistryskills}
            title="Dental Websites"
            paragraphs={dentistryParagraphs}
          >
            <div className="card">
              <img
                alt="Screenshot of bradentonperio.com"
                src={bradentonperioimg}
              />
              <Button
                href="https://bradentonperio.com"
                window="bradentonperio.com"
              />
            </div>
            <div className="card">
              <img
                alt="Screenshot of dentistinsantaclara.com"
                src={dentistinsantaclaraimg}
              />
              <Button
                href="https://dentistinsantaclara.com"
                window="dentistinsantaclara.com"
              />
            </div>
            <div className="card">
              <img
                alt="Screenshot of southfortworthdentist.com"
                src={southfortworthdentistimg}
              />
              <Button
                href="https://southfortworthdentist.com"
                window="southfortworthdentist.com"
              />
            </div>
            <div className="card">
              <img
                alt="Screenshot of westchestergentledentistry.com"
                src={westchestergentledentistryimg}
              />
              <Button
                href="https://westchestergentledentistry.com"
                window="westchestergentledentistry.com"
              />
            </div>
          </Collection>
        </section>
        <section className="alignable topS bottomM skew_b tint3_b">
          <div className="columns-few columns-few--tilt">
            <div className="column u-jump-section" id="plugins">
              <h3>WordPress Plugins</h3>
              <p>
                I have published 10 custom plugins in the WordPress directory
                under the name AddFunc. You can see them here:
              </p>
              <Button href="https://profiles.wordpress.org/addfunc/#content-plugins">
                AddFunc Plugins
              </Button>
            </div>
            <div className="column u-jump-section" id="resume">
              <h3>My Résumé</h3>
              <p>
                You may already have it, but for convenience and to serve also
                as correlation, you can find my résumé here:
              </p>
              <a className="button" href="/resume">
                View Résumé
              </a>
            </div>
            <div className="column u-jump-section" id="story">
              <h3>Journey of an&nbsp;Artist</h3>
              <p>
                Want to know more about me personally? Well, I wrote a bit about
                my life here:
              </p>
              <a className="button" href="/blog/journey-of-an-artist/">
                My Story
              </a>
            </div>
          </div>
        </section>
        <section className="alignable skew_b cta_b bottomS" id="contact">
          <article className="self-center">
            <h2>Contact me</h2>
            <p>
              Please don't hesitate to send me an email. I'll get back to you as
              soon as possible. I look forward to hearing from you!&nbsp;
              <b className="u-heading-font">:j</b>
            </p>
            <Arrow
              className="self-right"
              style={{
                bottom: "150%",
                left: "-114px",
                rotate: "280deg",
              }}
              inward
            >
              <Mailto className="button" subject="General Inquiry">
                Email Me
              </Mailto>
            </Arrow>
          </article>
        </section>
        <section className="alignable">
          <Profiles className="article reveal-child-b self-center compensateBHalf" />
        </section>
      </Page>
    </>
  );
};

export default codePage;

export const Head = () => (
  <>
    <title>Front-End Developer :joe rhoney</title>
    <meta
      name="description"
      content="Practicing front-end development since 2006, with a strong 
               background in graphic design and visual arts."
    />
    <meta property="og:keywords" content="Developer, Joe Rhoney" />
    <meta property="og:type" content="website" />
  </>
);
