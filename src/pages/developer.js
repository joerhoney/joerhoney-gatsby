import * as React from "react";
// Components
import Button from "@components/Button";
import Collection from "@components/Collection";
import { Link } from "gatsby";
import Showcase from "@components/Showcase";
// Content
import portfolio from "../content/portfolio";
// Layouts
import Page from "@layouts/Page";
// Fragments
import { AllSkills } from "@fragments/Skills";
// Images
import dragon from "@images/heros/dragon.webp";
import avatar from "@images/portrait-photo.webp";
import bradentonperioimg from "@images/screenshots/bradentonperio-home.webp";
import dentistinsantaclaraimg from "@images/screenshots/dentistinsantaclara-home.webp";
import westchestergentledentistryimg from "@images/screenshots/westchestergentledentistry-home.webp";
// Sections
import ContactSection from "@sections/ContactSection";
import Hero from "@sections/Hero";
import Seo from "@components/Seo";

const dentistryskills = [
    "WordPress Plugins",
    "WordPress Theme",
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
    <Page
      hero={
        <Hero title="Developer" img={dragon} alt="Illusutration of a Dragon" />
      }
    >
      <section className="alignable pb-sm">
        <article className="self-center">
          <p>
            These days, a web developer is usually expected to be well-rounded
            and specialize in several aspects of the web. The industry continues
            to grow exponentially, and anyone involved should know that no one
            can specialize in all of it. So what do I mean when I say I'm a web
            developer? Let me start by sharing the more specific web roles I
            consider myself a good fit for, and why:
          </p>
        </article>
      </section>
      <section
        className="alignable layer-skew mt-tilt-half pt-sm layer-cta"
        style={{ position: "relative" }}
      >
        <div className="article">
          <h2 className="tilt">Roles</h2>
        </div>
        <div className="columns-few pb-sm columns-few--tilt">
          <div className="column">
            <h3>Front-End Developer</h3>
            <p>
              All things considered, this is primarily where my skill set and
              experience places me. Most of what I do is comprised of converting
              design and content to a functional user interface. In more recent
              years I've been using a lot of Node, React, GraphQL and Gatsby.
            </p>
          </div>
          <div className="column">
            <h3>Creative Developer</h3>
            <p>
              This lesser-known role is where I see myself heading in my career
              path. Generally expected to have some HTML canvas and WebGL
              knowledge, as well as a deep understanding of CSS, a Creative
              Developer specializes in digital experiences. I am passionate
              about learning these skills.
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
              mechanics of the web and having a thorough grasp of the 3 pillars
              of web linguistics (HTML, CSS and JavaScript). In addition to the
              daily use of these, a web developer sees the relationships,
              similarities and differences in all web languages and can
              therefore adapt as needed.
            </p>
          </div>
          <div className="column">
            <h3>UX/UI Designer</h3>
            <p>
              I have designed many websites and have carefully observed the
              evolution of modern design trends and its crossover into online
              and offline apps. I am fascinated with what results in a good user
              experience versus a bad one. The design has a lot to do with that,
              but so does the logical flow of an interface.
            </p>
          </div>
        </div>
        <img
          alt="Portrait of Joe Rhoney."
          className="portrait translucent"
          height="290"
          loading="lazy"
          src={avatar}
          width="240"
        />
      </section>
      <section className="alignable pb-md pt-sm" id="skills">
        <article className="self-center pb-xs">
          <h2>Skills &amp; Tools</h2>
          <p>
            These are the technical skills I've picked up and tools I've worked
            with in my career. I'm always eager to learn and teach what I know!
          </p>
        </article>
        <div className="text-center self-center wide">
          <div className="reveal-child-b">
            <AllSkills />
          </div>
        </div>
      </section>
      <section className="alignable layer-skew layer-tint1" id="work">
        <article className="self-center">
          <h2>Work Portfolio</h2>
          <p>
            Explore a glimpse of my work history featuring projects I've either
            spearheaded or significantly contributed to in their development and
            ongoing maintenance.
          </p>
        </article>
        <Showcase
          {...portfolio.meta}
          styles={{ marginTop: "calc(var(--unit) * 4)" }}
        />

        <Showcase {...portfolio.codazen} />
        <Showcase {...portfolio.laparks} />
        <Showcase {...portfolio.laprobation} />
        <Showcase {...portfolio.r3risk} />
        <Showcase {...portfolio.santiago} />
        <Showcase {...portfolio.laactingcoach} />
        <Showcase {...portfolio.kreizenbeck} />
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
            <Link className="button" to="/work/psd-wordpress-rubino/">
              See project story<span className="blinking">:</span>
            </Link>
          </div>
          <div className="card">
            <img
              alt="Screenshot of dentistinsantaclara.com"
              src={dentistinsantaclaraimg}
            />
            <Link className="button" to="/work/psd-wordpress-khatani/">
              See project story<span className="blinking">:</span>
            </Link>
          </div>
          <div className="card">
            <img
              alt="Screenshot of westchestergentledentistry.com"
              src={westchestergentledentistryimg}
            />
            <Link className="button" to="/work/psd-wordpress-alidadi/">
              See project story<span className="blinking">:</span>
            </Link>
          </div>
        </Collection>
      </section>
      <section className="alignable pt-sm pb-md layer-skew layer-tint3">
        <div className="columns-few columns-few--tilt">
          <div className="column jump-target" id="plugins">
            <h3>WordPress Plugins</h3>
            <p>
              I have published 6 custom plugins in the WordPress directory under
              the name AddFunc. You can see them here:
            </p>
            <Button href="https://profiles.wordpress.org/addfunc/#content-plugins">
              AddFunc Plugins
            </Button>
          </div>
          <div className="column jump-target">
            <h3>Hire me! 😄</h3>
            <p>
              I am currently available for hire! You can learn about and contact
              me on LinkedIn.
            </p>
            <Button href="https://www.linkedin.com/in/joerhoney/">
              Me on LinkedIn
            </Button>
          </div>
          <div className="column jump-target" id="story">
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
      <ContactSection heading="Contact me">
        <p>
          Please don't hesitate to send me an email. I'll get back to you as
          soon as possible. I look forward to hearing from you!&nbsp;
          <b className="font-heading">:j</b>
        </p>
      </ContactSection>
    </Page>
  );
};

export default codePage;

export const Head = ({ location }) => (
  <Seo
    title="Front-End Developer"
    description="Practicing front-end development since 2006, with a strong background in graphic design and visual arts."
    keywords="Front-End Developer, Creative Developer, Joe Rhoney"
    pathname={location.pathname}
  />
);
