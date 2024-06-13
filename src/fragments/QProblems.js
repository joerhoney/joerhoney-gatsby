import React from "react";
// Components
import { Link } from "gatsby";
import { Wizard, Q, A, Step, End } from "../components/Wizard";
// Fragments
import ButtonContact from "@fragments/ButtonContact";
import ButtonWebsitesPackages from "@fragments/ButtonWebsitesPackages";
import ButtonWebMaintenancePlans from "@fragments/ButtonWebMaintenancePlans";

function QProblems() {
  return (
    <Wizard start="q_Help" name="problems">
      <Step id="q_Help">
        <Q>What web problems/challenges do you need help with?</Q>
        <A a="An existing website." goto="q_XWebsite">
          <Step id="q_XWebsite">
            <Q>Tell me about your website.</Q>
            <A a="It seems to be missing or broken." goto="q_WebsiteBroken"></A>
            <A a="It's not working right." goto="q_WebsiteBroken"></A>
            <A
              a="It doesn't get enough/any traffic."
              goto="q_WebsiteTraffic"
            ></A>
            <A a="It doesn't retain visitors." goto="q_WebsiteRetention"></A>
            <A a="It's slow/laggy." goto="q_WebsiteSlow"></A>
            <A a="It's unprofessional/ugly." goto="q_WebsiteUgly"></A>
            <A a="The content is out-dated." goto="q_WebsiteOutdated"></A>
          </Step>
        </A>
        <A a="I need a new website." goto="q_NewWebsite">
          <End id="q_NewWebsite">
            <p>Great! Please see my website packages:</p>
            <ButtonWebsitesPackages />
          </End>
        </A>
        <A a="Website maintenance." goto="q_Maintenance">
          <End id="q_Maintenance">
            <p>No problem! Please see my web maintenance plans:</p>
            <ButtonWebMaintenancePlans />
          </End>
        </A>
        <A a="Web design." goto="q_Design">
          <End id="q_Design">
            <p>
              Awesome! Let's get in touch so we can work together on your design
              needs:
            </p>
            <ButtonContact />
          </End>
        </A>
        <A a="Web presence." goto="q_Presence">
          <End id="q_Presence">
            <p>
              Got it! Please contact me so I can learn more about your business
              and help you determine what we need to do to build your web
              presence:
            </p>
            <ButtonContact />
          </End>
        </A>
        <A a="What services to you offer?" goto="#services" />
        <A a="How can I contact you?" goto="#contact" />
      </Step>
    </Wizard>
  );
}

export default QProblems;
