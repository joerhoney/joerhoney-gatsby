import React from "react";
// Components
import Mailto from "@components/Mailto";
// Fragments
import Arrow from "@fragments/Arrow";

/**
 * The "Contact me" call-to-action band that ends most pages: a heading, your
 * copy (children), and the email button with the hand-drawn arrow.
 *
 *   <ContactSection heading="Let's Talk Art!">
 *     <p>…</p>
 *   </ContactSection>
 *
 * className replaces the default look ("layer-skew layer-cta pb-sm");
 * aside renders after the article (e.g. a portrait).
 */
const ContactSection = ({
  heading = "Contact Me",
  children,
  subject = "General Inquiry",
  button = "Email Me",
  className = "layer-skew layer-cta pb-sm",
  aside,
  id = "contact",
}) => (
  <section className={`alignable jump-target ${className}`} id={id}>
    <article className="self-center">
      <h2>{heading}</h2>
      {children}
      <Arrow className="self-right" inward>
        <Mailto className="button" subject={subject}>
          {button}
        </Mailto>
      </Arrow>
    </article>
    {aside}
  </section>
);

export default ContactSection;
