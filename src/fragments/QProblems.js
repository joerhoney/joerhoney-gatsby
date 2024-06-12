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
        <Q>What web problems/challenges do you need resolved?</Q>
        <A a="I need a website." id="qa_Problems_NeedWebsite">
          <End>
            Great! Please see my website packages:
            <br />
            <ButtonWebsitesPackages />
          </End>
        </A>
        <A
          a="I need to troubleshoot a website."
          id="qa_Problems_ToubleshootWebsite"
        ></A>
      </Step>
    </Wizard>
  );
}

export default QProblems;
