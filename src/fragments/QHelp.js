import React from "react";
// Components
import { Link } from "gatsby";
import { Wizard, Q, A, Step, End } from "../components/Wizard";
// Fragments
import ButtonContact from "@fragments/ButtonContact";
import ButtonWebsitesPackages from "@fragments/ButtonWebsitesPackages";
import ButtonWebMaintenancePlans from "@fragments/ButtonWebMaintenancePlans";
import HowFindWebsite from "@fragments/QHelp_HowFind";

function QHelp() {
  return (
    <Wizard start="qa_Help" name="problems">
      <Step id="qa_Help">
        <Q>What do you need help with?</Q>
        <A a="A new website." goto="qa_NewWebsite" />
        <A a="An existing website." goto="qa_XWebsite">
          <Step id="qa_XWebsite">
            <Q>Tell me about your website problem.</Q>
            <A a="It seems to be missing or broken." goto="qa_WebsiteBroken" />
            <A a="It's not working right." goto="qa_WebsiteBroken"></A>
            <A
              a="It doesn't get enough/any traffic."
              goto="qa_WebsiteTraffic"
            />
            <A a="It doesn't retain visitors." goto="qa_WebsiteRetention" />
            <A a="It's slow/laggy." goto="qa_WebsiteSlow" />
            <A a="It's unprofessional/ugly." goto="qa_WebsiteUgly" />
            <A a="The content is out-dated." goto="qa_WebsiteOutdated" />
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
              a="Local online marketing (Google Maps, Yelp!, Facebook, etc.)."
              goto="qa_Presence"
            />
            <A a="Social media branding." goto="qa_Presence"></A>
            <A a="Social media content." goto="qa_Presence"></A>
            <A
              a="Whatever branding/marketing my business could gain more web traffic from."
              goto="qa_Presence"
            />
            <A a="Something else." goto="qa_Presence"></A>
          </Step>
        </A>
        <A a="What services to you offer?" goto="#services" />
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
        <ButtonContact />
      </End>
      <End id="qa_Art">
        <p>Nice! Please contact me so we can discuss your creative project:</p>
        <ButtonContact />
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
