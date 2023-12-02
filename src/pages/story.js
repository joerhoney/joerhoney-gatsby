import * as React from "react";
import Form from "../components/Formspree";
import Page from "../layouts/Page";
import Profiles from "../fragments/Profiles";
import { StaticImage } from "gatsby-plugin-image";

const storyPage = () => {
  return (
    <>
      <section className="hero">
        <StaticImage
          alt="Watercolor of a woman in a kamono next to a cherry blossom."
          placeholder="blurred"
          src="../images/heros/cherry-blossom-half.webp"
          style={{ placeItems: "flex-end" }}
        />
        <h1>Story</h1>
      </section>
      <Page>
        <section className="alignable">
          <article className="self-center">
            <h3>TL;DR</h3>
            <p>(To Long; Didn't Read)</p>
            <p>
              As a lifetime artist, I found a career in design in 1999. That
              quickly lead to a web development opportunity, and I've been
              designing and coding ever since…
            </p>
            <p>…and my family and I lived happily ever after. 😁</p>
          </article>
        </section>
        <section className="alignable skew_b tint3_b compensateT">
          <article className="self-center compensateB">
            <h2>Journey of an Artist</h2>
            <p>
              I have been an artist since my childhood in rural Northern
              California. I spent most of my free time creating and designing
              fictional vehicles, characters and creatures to be featured in a
              comic book series one day. As a teenager I began exploring my
              ability to produce music while continuing to practice
              illustration.
            </p>
            <p>
              As a top art student I was granted the opportunity to attend the
              CSSSA program (California State Summer School for the Arts),
              located at the CalArts campus in Valencia, CA. There, I gained a
              world of knowledge and experience in traditional animation.
            </p>
            <p>
              The next year (1998), I moved to Southern California, where life
              now seemed to be traveling a million miles per hour. I held
              various jobs until I landed my first design opportunity in 1999,
              at a web marketing agency called Success Makers. Within the first
              two weeks they asked me to learn HTML, so I quickly began my
              career as a web developer at the same time.
            </p>
            <p>
              In a few years' time, I began picking up small side jobs, drawing
              for acquaintances who needed illustrations for marketing campaigns
              and other purposes. Soon I became familiar with the processes of
              freelancing. Freelancing has also greatly facilitated the
              opportunity to self-train and gain a wide range of experiences.
            </p>
            <p>
              And the rest is pretty much history. I have been working graphic
              design and web developer jobs since then. 🙂
            </p>
          </article>
        </section>
        {/* <section className="alignable bottomS">
        <article className="self-center">
          <h2>achievements</h2>
          <p>
            30,000+ active installs and 100% 5-star rating out of 25 reviews for
            AddFunc Head & Footer Code. I am the founder of AddFunc and have
            created the entire line of AddFunc plugins. The following slides
            present the plugins I have completed and published in the WordPress
            repository.
          </p>
        </article>
      </section> */}
        <section className="alignable skew_b cta_b" id="contact">
          <article>
            <h2>Contact Me</h2>
            <p>
              Whether you need help building something or just want to connect…
              well, I want to connect, too! So drop me an email.
            </p>
          </article>
          <Form className="compensateBHalf" />
        </section>
        <section className="alignable">
          <Profiles className="article reveal" />
        </section>
      </Page>
    </>
  );
};

export default storyPage;

export const Head = () => (
  <>
    <title>My Story | :joe rhoney</title>
  </>
);
