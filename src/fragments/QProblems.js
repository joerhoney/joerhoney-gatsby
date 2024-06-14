import React from "react";
// Components
import { Link } from "gatsby";
import { Wizard, Q, A, Step, End } from "../components/Wizard";
// Fragments
import ButtonContact from "@fragments/ButtonContact";
import ButtonWebsitesPackages from "@fragments/ButtonWebsitesPackages";
import ButtonWebMaintenancePlans from "@fragments/ButtonWebMaintenancePlans";
import HowFindWebsite from "@fragments/QProblems_HowFind";

function QProblems() {
  return (
    <Wizard start="qa_Help" name="problems">
      <Step id="qa_Help">
        <Q>What web problems/challenges do you need help with?</Q>
        <A a="An existing website." goto="qa_XWebsite">
          <Step id="qa_XWebsite">
            <Q>Tell me about your website.</Q>
            <A
              a="It seems to be missing or broken."
              goto="qa_WebsiteBroken"
            ></A>
            <A a="It's not working right." goto="qa_WebsiteBroken"></A>
            <A
              a="It doesn't get enough/any traffic."
              goto="qa_WebsiteTraffic"
            ></A>
            <A a="It doesn't retain visitors." goto="qa_WebsiteRetention"></A>
            <A a="It's slow/laggy." goto="qa_WebsiteSlow"></A>
            <A a="It's unprofessional/ugly." goto="qa_WebsiteUgly"></A>
            <A a="The content is out-dated." goto="qa_WebsiteOutdated"></A>
            <A a="I don't know / I lost track of it." goto="qa_WebsiteIDK">
              <Step id="qa_WebsiteIDK">
                <Q>What data are you missing?</Q>
                <A a="How to find it." goto="qa_HowToFind">
                  <HowFindWebsite name="problems" />
                </A>
                <A
                  a="Which company it is set up with."
                  goto="qa_WebsiteIDK-DomainIDK"
                />
                <A
                  a="Whether I have ownership of it."
                  goto="qa_WebsiteIDK-Owner"
                >
                  <Step id="qa_WebsiteIDK-Owner">
                    <Q>Which part of it are you unsure of your ownership of?</Q>
                    <A a="The domain name." goto="qa_WebsiteIDK-DomainIDK" />
                    <A
                      a="The web hosting account the website is on."
                      goto="qa_WebsiteIDK-DomainIDK"
                    />
                    <A a="The company." goto="qa_WebsiteIDK-Owner-Company">
                      <End id="qa_WebsiteIDK-Owner-Company">
                        Sounds like you may need a lawyer, which I am not. But
                        here are a few ways I can help:
                        <br />
                        <ButtonWebsitesPackages />
                        <br />
                        [All Services section]
                        <br />
                        <ButtonContact />
                        <p>
                          Maybe I can make some suggestions to help you get to
                          the bottom of your situation.
                        </p>
                      </End>
                    </A>
                  </Step>
                </A>
                <A a="I just want a new one." goto="qa_WebsiteN-NeedWebY" />
              </Step>
            </A>
          </Step>
        </A>
        <A a="I need a new website." goto="qa_NewWebsite">
          <End id="qa_NewWebsite">
            <p>Great! Please see my website packages:</p>
            <ButtonWebsitesPackages />
          </End>
        </A>
        <A a="Website maintenance." goto="qa_Maintenance">
          <End id="qa_Maintenance">
            <p>No problem! Please see my web maintenance plans:</p>
            <ButtonWebMaintenancePlans />
          </End>
        </A>
        <A a="Web design." goto="qa_Design">
          <End id="qa_Design">
            <p>
              Awesome! Let's get in touch so we can work together on your design
              needs:
            </p>
            <ButtonContact />
          </End>
        </A>
        <A a="Web presence." goto="qa_Presence">
          <End id="qa_Presence">
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
