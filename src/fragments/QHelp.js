import React from "react";
// Components
import { Link } from "gatsby";
import { Wizard, Q, A, Step, End } from "../components/Wizard";
// Fragments
import ButtonContact from "@fragments/ButtonContact";
import ButtonWebsitesPackages from "@fragments/ButtonWebsitesPackages";
import ButtonWebMaintenancePlans from "@fragments/ButtonWebMaintenancePlans";
import Mailto from "@components/Mailto";
import WebsiteProblem from "@fragments/QHelp_Problem";

function QHelp() {
  return (
    <Wizard start="qa_Help" name="problems">
      <Step id="qa_Help">
        <Q>What do you need help with?</Q>
        <A a="A new website." goto="qa_NewWebsite" />
        <A a="An existing website." goto="qa_XWebsite">
          <Step id="qa_XWebsite">
            <Q>What help do you need with your website?</Q>
            <A a="It needs to be updated." goto="qa_WebsiteUpdate"></A>
            <A a="It needs a new look." goto="qa_WebsiteNewLook"></A>
            <A a="I need someone to maintain it." goto="qa_WebsiteMaintain"></A>
            <A a="It has a problem." goto="qa_WebsiteProblem">
              <WebsiteProblem name="problems" />
            </A>
          </Step>
        </A>
        <A a="Art/design work." goto="qa_ArtDesign">
          <Step id="qa_ArtDesign">
            <Q>What kind of creative work do you need?</Q>
            <A a="Web, print or other design work." goto="qa_Design" />
            <A
              a="Illustration, animation or other creative services."
              goto="qa_Art"
            />
          </Step>
        </A>
        <A
          a="Other web services not specific to a website."
          goto="qa_WebNonSite"
        >
          <Step id="qa_WebNonSite">
            <Q>What kind of "non-website" web services do you need?</Q>
            <A
              a="Whatever branding/marketing my business could gain more business from. You tell me."
              goto="qa_Presence"
            />
            <A
              a="Local online marketing (Google Maps, Yelp!, Facebook, etc.)."
              goto="qa_Presence"
            />
            <A a="Social media branding." goto="qa_Presence"></A>
            <A a="Social media content." goto="qa_Presence"></A>
            <A a="Something else. I'll explain." goto="#contact"></A>
          </Step>
        </A>
        <A a="What services do you offer?" goto="#services" />
        <A a="How can I contact you?" goto="#contact" />
      </Step>
      <End id="qa_NewWebsite">
        <p>Great! Please see my website packages:</p>
        <ButtonWebsitesPackages />
      </End>
      <End id="qa_Maintenance">
        <p>No problem! Please see my web maintenance plans:</p>
        <ButtonWebMaintenancePlans />
      </End>
      <End id="qa_Design">
        <p>
          Awesome! Let's get in touch so we can work together on your design
          needs:
        </p>
        <Mailto
          className="button"
          subject="Consultation Request: Website Design"
          message="I would like a free consultation."
        >
          Email me
        </Mailto>
      </End>
      <End id="qa_Art">
        <p>Nice! Please contact me so we can discuss your creative project:</p>
        <Mailto />
        <p>Or you can learn more about my artistry and see some of my work:</p>
        <Link className="button" href="/artist">
          My Art
        </Link>
      </End>
      <End id="qa_Presence">
        <p>
          Got it! Please contact me so I can learn more about your business and
          help you determine what we need to do to build your web presence:
        </p>
        <ButtonContact />
      </End>
    </Wizard>
  );
}

export default QHelp;
