import * as React from "react";
import Page from "../layouts/Page";
import blossom from "../images/cherry-blossom-half.webp";
import { Parallax } from "react-scroll-parallax";
import Form from "../components/Form";
import Profiles from "../fragments/Profiles";

const storyPage = () => {
  return (
    <Page>
      <div className="hero">
        <img
          alt="Watercolor of a woman in a kamono next to a cherry blossom."
          className="self-center"
          placeholder="blurred"
          src={blossom}
        />
        <h1>Story</h1>
      </div>
      <Parallax speed={10}>
        <section className="alignable bottomL topS">
          <article className="self-center">
            <p>
              <strong>TLDR;</strong> Lifetime artist, found a career in design
              in 1999, which quickly lead to a web development opportunity, and
              I've been designing and coding ever since... and my family and I
              lived happily ever after. 😁
            </p>
          </article>
        </section>
      </Parallax>
      <section className="alignable skewC tint3_b bottomS">
        <article className="self-center">
          <h2>Journey of an Artist</h2>
          <p>
            I have been an artist since my childhood, in Northern California. I
            spent most of my free time designing fictional vehicles, characters
            and creatures to be featured in a comic book series one day. As a
            teenager I began exploring my ability to produce music, but
            continued practicing illustration.
          </p>
          <p>
            As a top art student I was granted the opportunity to attend the
            CSSSA program (California State Summer School for the Arts),
            administored at the CalArts campus. There I gained a world of
            knowledge and experience in tradition animation.
          </p>
          <p>
            The next year (1998), I moved to Southern California where life was
            now traveling a million miles per hour. I soon got to work at
            K-mart, but I knew I had to put my talent to work in order to afford
            the living costs in the big city. My first design job began in 1999
            at a web marketing agency called Success Makers. Within the first
            two weeks needed me to learn HTML, so I quickly began my career as a
            web developer at the same time.
          </p>
          <p>
            In a few more years time, I began picking up odd jobs, illustrating
            portraits and various ideas needed for marketing and other purposes.
            Soon I had to become familier with freelancing and how to report
            taxes for that. Being able to freelance has saved me between jobs.
            It has also greatly facilitated the opportunity to self-train and
            gain a wide range of experiences.
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
      <section className="alignable skewC cta_b" id="contact">
        <article className="self-center">
          <h2>Contact Me</h2>
          <p>
            Whether you need help building something or you just want to
            connect... well I want to connect, so drop me an email!
          </p>
        </article>
        <Form />
      </section>
      <section className="alignable">
        <Profiles className="article reveal self-center" />
      </section>
    </Page>
  );
};

export default storyPage;

export const Head = () => (
  <>
    <title>My Story | :joe rhoney</title>
  </>
);
