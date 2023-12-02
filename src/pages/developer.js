import * as React from "react";
/* Components */
import Button from "../components/Button";
import Form from "../components/Formspree";
import Page from "../layouts/Page";
import Profiles from "../fragments/Profiles";
import Showcase from "../components/Showcase";
import Collection from "../components/Collection";
/* Partial Components */
import { StaticImage } from "gatsby-plugin-image";
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
} from "../fragments/Skills";
/* Functions */
import since from "../utils/since";
/* Images */
import codazenimg from "../images/screenshots/codazen-home.webp";
import kreizenbeckimg from "../images/screenshots/kreizenbeck-home.webp";
import metaimg from "../images/screenshots/meta-home.webp";
import laactingcoachimg from "../images/screenshots/laactingcoach-home.webp";
import laparksimg from "../images/screenshots/lacounty-parks-home.webp";
import laprobationimg from "../images/screenshots/lacounty-probation-home.webp";
import bradentonperioimg from "../images/screenshots/bradentonperio-home.webp";
import dentistinsantaclaraimg from "../images/screenshots/dentistinsantaclara-home.webp";
import southfortworthdentistimg from "../images/screenshots/southfortworthdentist-home.webp";
import westchestergentledentistryimg from "../images/screenshots/westchestergentledentistry-home.webp";

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
  kreizenbeckskills = [
    "WordPress Plugins",
    "WordPress Theme",
    "HTML5",
    "CSS3",
    "PHP",
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
      <section className="hero">
        <StaticImage
          alt="Illustration of a chinese dragon"
          placeholder="blurred"
          src="../images/dragon.webp"
        />
        <h1>Developer</h1>
      </section>
      <Page>
        <section className="alignable bottomM" id="skills">
          <article className="self-center">
            <h2>Skills &amp; Tools</h2>
            <p>
              These are the technical skills I've picked up and tools I've
              worked with in my career. I'm always eager to learn more. That's
              what I love most about coding.
            </p>
          </article>
          <div className="content-center self-center wide">
            <div className="reveal">
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
              Here are some of the projects I built or helped build and
              maintain.
            </p>
          </article>
          <Showcase
            desc="Analytics and website maintenance on Meta's custom CMS stack."
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
            skills={kreizenbeckskills}
            src={kreizenbeckimg}
            title="Kreizenbeck Constructors"
          >
            <p>
              The client needed their WordPress website's design coded into the
              theme. The main objective was to showcase their construction work,
              so there were many galleries. A plugin waslimited features used
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
        <section className="alignable skew_b cta_b" id="contact">
          <article className="self-center">
            <h2>Let's Build Something!</h2>
            <p>
              Nothing excites me more than starting a new project or making
              something better. For {since("Sept, 13, 1999")} years I have
              worked as a freelancer, serving clients in many industries, and
              have also worked as a full-time employee at various retail
              manufacturing and marketing agencies.
            </p>
            <div className="columns-2 bottomXS">
              <div className="pull tint2">
                <h4>Hire me! 😄</h4>
                <p>
                  I am currently available for hire! Not for long though, so act
                  fast if you want me on your team! 🙌
                </p>
              </div>
              <div className="pull tint3">
                <h4>Contract me! 👍</h4>
                <p>
                  I am also open for service as a freelance web developer. Send
                  me your project ideas and I'll help you hash out the web
                  solutions you need. 💡
                </p>
              </div>
            </div>
          </article>
          <Form className="compensateBHalf" />
        </section>
        <section className="alignable">
          <Profiles className="article reveal self-center compensateBHalf" />
        </section>
      </Page>
    </>
  );
};

export default codePage;

export const Head = () => (
  <>
    <title>Developer | :joe rhoney</title>
  </>
);
