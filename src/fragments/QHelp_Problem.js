import React from "react";
// Components
import { Link } from "gatsby";
import { Q, A, Step, End } from "../components/Wizard";
// Fragments
import ButtonContact from "@fragments/ButtonContact";
// import ButtonWebsitesPackages from "@fragments/ButtonWebsitesPackages";
// import ButtonWebMaintenancePlans from "@fragments/ButtonWebMaintenancePlans";
// import QWebsiteIDK from "@fragments/QHelp_WebsiteIDK";

const Problem = (props) => {
  const { name } = props; // Must be explicitly passed in and match parent fragment.
  return (
    <>
      <Step id="qa_WebsiteProblem" name="problems">
        <Q>Tell me about your website problem.</Q>
        <A a="It seems to be missing or broken." goto="qa_WebsiteBroken">
          <End id="qa_WebsiteBroken">
            <p>
              Got it! Please use the form below to describe what you are
              experiencing. Be sure to include your web address and details such
              as the web browser you are using, so that I may see the exact same
              issue on my end.
            </p>
            <ButtonContact />
          </End>
        </A>
        <A a="It's not working right." goto="qa_WebsiteBroken" />
        <A a="It doesn't get enough/any traffic." goto="qa_WebsiteTraffic">
          <End id="qa_WebsiteTraffic">
            <p>
              Sounds like people aren't finding your website, and we need to
              find out why. It could have to do with search engine optimization,
              web presence, or marketing.
            </p>
            <p>For a free consultation:</p>
            <ButtonContact />
          </End>
        </A>
        <A a="It doesn't retain visitors." goto="qa_WebsiteRetention">
          <End id="qa_WebsiteRetention">
            <p>
              There are ways to find out why your website visitors are not
              finding what they're looking for on your website.
            </p>
            <p>For a free consultation:</p>
            <ButtonContact />
          </End>
        </A>
        <A a="It's slow/laggy." goto="qa_WebsiteSlow">
          <End id="qa_WebsiteSlow">
            <p>
              Got it! Please use the form below to describe what you are
              experiencing. Be sure to include your web address and details such
              as the web browser you are using, so that I may see the exact same
              issue on my end.
            </p>
            <ButtonContact />
          </End>
        </A>
        <A a="It's unprofessional/ugly." goto="qa_WebsiteUgly">
          <End id="qa_WebsiteUgly">
            <p>
              No problem! Let's get in touch so we can give your website the
              look & feel that brings out the best in your company:
            </p>
            <ButtonContact />
          </End>
        </A>
        <A a="The content is out-dated." goto="qa_WebsiteOutdated">
          <End id="qa_WebsiteOutdated">
            <p>
              No worries. Reach out to me and let's work together to bring it
              up-to-date.
            </p>
            <ButtonContact />
          </End>
        </A>
        <A a="I forgot how to find it." goto="qa_WebsiteIDK">
          <End id="qa_WebsiteIDK" name={name}>
            {/* <QWebsiteIDK name="problems" /> */}
            <p>
              Uh-oh! Sounds tricky, but a little toubleshooting should help us
              find your website again.
            </p>
            <ButtonContact />
          </End>
        </A>
        <A a="I forgot how edit it." goto="qa_WebsiteIDK">
          <End id="qa_WebsiteIDK" name={name}>
            {/* <QWebsiteIDK name="problems" /> */}
            <p>
              Oops! Okay. There are ways to figure it out again, as long as you
              still have any needed passwords. If not... well, let's just see
              how far we can get.
            </p>
            <ButtonContact />
          </End>
        </A>
      </Step>
    </>
  );
};

export default Problem;
