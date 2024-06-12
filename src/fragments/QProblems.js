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
    <Wizard id="qa_Problems" name="problems">
      <Step>
        <Q>What web problems/challenges do you need help with?</Q>
        <A a="A new website." id="qa_Problems_NewWebsite">
          <End>
            Great! Please see my website packages:
            <br />
            <ButtonWebsitesPackages />
          </End>
        </A>
        <A a="An existing website." id="qa_Problems_XWebsite"></A>
        <A a="Web maintenance." id="qa_Problems_HelpWithWebMaintenance">
          <End>
            No problem! Please see my web maintenance plans:
            <br />
            <ButtonWebMaintenancePlans />
          </End>
        </A>
        <A a="Web design." id="qa_Problems_WebDesign">
          <End>
            Awesome! Let's get in touch so we can work together on your design
            needs:
            <br />
            <ButtonContact />
          </End>
        </A>
        <A a="Web presence." id="qa_Problems_WebPresence">
          <End>
            Got it! Please contact me so I learn more about your business and
            determine what we need to do to build your web presence:
            <br />
            <ButtonContact />
          </End>
        </A>
      </Step>
    </Wizard>
  );
}

export default QProblems;
