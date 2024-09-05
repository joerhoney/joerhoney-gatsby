import React from "react";
// Components
import { Link } from "gatsby";
import { Q, A, Step, End } from "../components/Wizard";
// Fragments
import ButtonContact from "@fragments/ButtonContact";
import ButtonWebsitesPackages from "@fragments/ButtonWebsitesPackages";
// import ButtonWebMaintenancePlans from "@fragments/ButtonWebMaintenancePlans";
import Social from "@fragments/Social";

const HowFindWebsite = (props) => {
  const { name } = props; // Must be explicitly passed in and match parent fragment.
  return (
    <>
      <Step id="qa_WebsiteIDK" name={name}>
        <Q>What data are you missing?</Q>
        <A a="How to find it." goto="qa_HowToFind">
          <Step id="qa_HowToFind" name={name}>
            <Q>Do you know what your website's domain name is?</Q>
            <A a="Yes." goto="qa_DomainKnown">
              <Step id="qa_DomainKnown" name={name}>
                <Q>Okay. What happens when you go to your domain?</Q>
                <A
                  a="It says 'This site can't be reached' (or similar)."
                  goto="qa_DomainCantBeReached"
                >
                  <Step id="qa_DomainCantBeReached" name={name}>
                    <Q>
                      This usually means the domain name isn't registered yet,
                      or it isn't connected to a web hosting server.
                    </Q>
                    <A
                      a="Oops! I was entering it wrong. I see it now."
                      goto="qa_HelpedNext"
                    />
                    <A
                      a="Hm, maybe I have the wrong domain name."
                      goto="qa_DomainIDK"
                    />
                    <A
                      a="I know I have a domain name, and I'm definitely entering it right."
                      goto="qa_DomainDefCantBeReached"
                    >
                      <End id="qa_DomainDefCantBeReached" name={name}>
                        <p>
                          Sounds like your domain name isn't connected to a
                          server. There are a number of possible reasons for
                          this. If you know where your website is (or should be)
                          hosted, you can log in to your web hosting account and
                          check:
                        </p>
                        <ul>
                          <li>If any of your services have expired.</li>
                          <li>
                            If any of your payment methods have expired, causing
                            auto-renewal to fail.
                          </li>
                        </ul>
                        <p>
                          Update and renew any/all of these and your website
                          should come back online soon. If that doesn't work,
                          contact your web hosting company. If that isn't the
                          problem, maybe it's a technical issue. Sometimes web
                          hosting companies will help with this, depending on
                          the level of support included with the plan you've
                          subscribed to. They may even jump in and fix the issue
                          for you if you contact them about it. If not:
                        </p>
                        <ButtonContact />
                        <p>I can help.</p>
                      </End>
                    </A>
                  </Step>
                </A>
                <A
                  a="I get a 404 error code / it says 'page missing' (or similar)."
                  goto="qa_404"
                >
                  <Step id="qa_404" name={name}>
                    <Q>
                      <p>
                        Looks like you're trying to go to a specific page on
                        your website, but it isn't there. The domain name should
                        end with an extension (.com, .org, .biz, etc.). Other
                        symbols after the extension (especially if there is a
                        forward slash "/") generally refer to a specific page on
                        the website. That page may be missing, while your
                        website may still be there. Try removing anything after
                        the '.com', '.org', or other extension and see if your
                        website shows up, then return here for more help.
                      </p>
                      <p>Did that work?</p>
                    </Q>
                    <A a="Yes." goto="qa_HelpedNext" />
                    <A
                      a="Yes. But I needed that page. Why isn't it there?"
                      goto="qa_Page404"
                    >
                      <End id="qa_Page404" name={name}>
                        <p>
                          There are a number of possible reasons for this and
                          I'd be happy to help you solve it. Please reach out to
                          me.
                        </p>
                        <ButtonContact />
                      </End>
                    </A>
                    <A
                      a='No, I&apos;m still getting a 404/"page missing" error.'
                      goto="qa_WebsiteDef404"
                    >
                      <End id="qa_WebsiteDef404" name={name}>
                        <p>
                          Okay. Looks like you'll need to reach out to your web
                          hosting company. Or...
                        </p>
                        <ButtonContact />
                        <p>I can help.</p>
                      </End>
                    </A>
                    <A
                      a='I don&apos;t have anything after the ".com" and I still get an error.'
                      goto="qa_WebsiteDef404"
                    />
                  </Step>
                </A>
                <A a="It says 500 / 'Server Error' (or similar)" goto="qa_500">
                  <End id="qa_500" name={name}>
                    <p>
                      There is some issue with the server (a special type of
                      computer, basically) your website is hosted on. Sometimes
                      web hosting companies will help with this, depending on
                      the level of support including with the plan you've
                      subscribed to. They may even jump in and fix the issue for
                      you if you contact them about it. If not:
                    </p>
                    <ButtonContact />
                    <p>I can help.</p>
                  </End>
                </A>
                <A
                  a="It looks like a placeholder page."
                  goto="qa_DomainPlaceholder"
                >
                  <Step id="qa_DomainPlaceholder" name={name}>
                    <Q>
                      It sounds like you have a domain name registered, but no
                      hosting service is connected with it yet.
                    </Q>
                    <A
                      a="I thought I bought a web hosting plan."
                      goto="qa_WebsiteDisconnect"
                    >
                      <Step id="qa_WebsiteDisconnect" name={name}>
                        <Q>
                          <p>
                            Maybe you bought a web hosting plan and never
                            connected it to your website. The web hosting
                            company you purchased it from should be able to help
                            you with this if you contact them. If not:
                          </p>
                          <br />
                          <ButtonContact />
                          <p>I can help.</p>
                        </Q>
                        <A
                          a="Oh, actually I don't have a website to connect it to. Can you build one for me?"
                          goto="qa_CanYouBuildNewWebsite"
                        >
                          <End id="qa_CanYouBuildNewWebsite">
                            <p>
                              Absolutely! Please see my website packages to get
                              started:
                            </p>
                            <ButtonWebsitesPackages />
                          </End>
                        </A>
                        <A
                          a="How do I know if I have a website to connect it to or not?"
                          goto="qa_WebsiteFindIf"
                        >
                          <End id="qa_WebsiteFindIf">
                            <p>
                              If you don't recall having a website created for
                              your domain name, log into your hosting account
                              and check what products you have there. If it is
                              still unclear, contact your web hosting company.
                              Or if you would like someone else to manage all of
                              this for you:
                            </p>
                            <ButtonContact />
                          </End>
                        </A>
                      </Step>
                    </A>
                    <A
                      a="Oh, can I connect my website with one of your website packages?"
                      goto="qa_CanYouBuildNewWebsite"
                    />
                    <A
                      a="Do I have to buy a web hosting plan? I thought I just needed a domain name."
                      goto="qa_HostingNecessary"
                    >
                      <End id="qa_HostingNecessary" name={name}>
                        Yes, a domain name is just a sort of address used to
                        find your website. Your website has to be built by
                        someone and placed on a server (a computer that stays ON
                        at a web hosting company). I'd be happy to help with
                        that! Please choose from one of my website packages:
                        <br />
                        <ButtonWebsitesPackages />
                      </End>
                    </A>
                  </Step>
                </A>
                <A a="Just a blank white page." goto="qa_WhiteScreen">
                  <End id="qa_WhiteScreen">
                    Your website likely has an issue with it's code. I can help
                    with that.
                    <ButtonContact />
                  </End>
                </A>
                <A
                  a="It doesn't look like my website / It looks like someone else's."
                  goto="qa_LooksWrong"
                >
                  <End id="qa_LooksWrong" name={name}>
                    <p>
                      This may be a more complex situation, requiring some
                      advanced troubleshooting. Please:
                    </p>
                    <ButtonContact />
                  </End>
                </A>
                <A
                  a="There are lots of similar websites to click on, but mine isn't there."
                  goto="qa_SERP"
                >
                  <Step id="qa_SERP" name={name}>
                    <Q>
                      <p>
                        Sounds like you're looking at a SERP (
                        <span style={{ textDecoration: "underline" }}>S</span>
                        earch{" "}
                        <span style={{ textDecoration: "underline" }}>E</span>
                        ngine{" "}
                        <span style={{ textDecoration: "underline" }}>R</span>
                        esults{" "}
                        <span style={{ textDecoration: "underline" }}>R</span>
                        age). Please be sure you are entering the domain name
                        into your browser's address bar with no spaces, not a
                        search engine like Google.
                      </p>
                    </Q>
                    <A
                      a="I did. I'm at the right domain name, but it just shows a list of other websites to click on. It's not my website."
                      goto="qa_LooksWrong"
                    />
                    <A
                      a="Oops! Okay, I entered it into the address bar, not a search engine."
                      goto="qa_DomainKnown"
                    />
                    <A a="I don't get it." goto="qa_IDontGetIt" />
                  </Step>
                </A>
              </Step>
            </A>
            <A
              a="Yeah, but it's not on Google/Bing/Yahoo!/etc. anymore"
              goto="qa_NotOnGoogle"
            >
              <Step id="qa_NotOnGoogle" name={name}>
                <Q>
                  <p>
                    Google, Bing, Yahoo!, etc. are just search engines. There
                    are many websites on the Internet which are very difficult
                    to find on a search engine. Of course, that isn't ideal for
                    your website, but it doesn't mean your website doesn't
                    exist. Type your domain name (example: mywebsite.com) into
                    the address bar and press enter/return (make sure you don't
                    use any spaces). This should take you straight to your
                    website. Try that and return here for more help.
                  </p>
                  <p>Did that work?</p>
                </Q>
                <A a="Yes!" goto="qa_HelpedNext" />
                <A a="No." goto="qa_DomainKnown" />
                <A
                  a="Oh. Actually I don't know my domain name."
                  goto="qa_DomainIDK"
                />
              </Step>
            </A>
            <A a="No." goto="qa_DomainIDK">
              <Step id="qa_DomainIDK" name={name}>
                <Q>
                  <p>
                    Are you getting billed by any web hosting companies, such as
                    GoDaddy, DigitalOcean, or Wix?
                  </p>
                  <p>
                    Other possible hosting companies: AWS (Amazon Web Services),{" "}
                    Google, Squarespace, HostGater, Hostinger, BlueHost,
                    DreamHost, Hostinger, Shopify, Cloudinary, 1&amp;1, etc.
                  </p>
                </Q>
                <A a="Yes." goto="qa_DomainBilledY">
                  <Step id="qa_DomainBilledY" name={name}>
                    <Q>Are you able to log into your web hosting account?</Q>
                    <A a="Yes." goto="qa_DomainCanLoginY">
                      <Step id="qa_DomainCanLoginY" name={name}>
                        <Q>
                          <p>
                            You should be able to find out what services you're
                            paying for and what domain name(s) you have in your
                            dashboard. If you have trouble finding your way
                            around, look for a support phone number to call or a
                            chat box to send messages to get support. Most web
                            hosting companies are very helpful with this.
                          </p>
                          <p>Try that and return here for further guidance.</p>
                          <p>Where you able to find the answer?</p>
                        </Q>
                        <A a="Yes." goto="qa_HelpedNext" />
                        <A a="No." goto="qa_ForHelp" />
                      </Step>
                    </A>
                    <A a="No." goto="qa_DomainCanLoginN">
                      <Step id="qa_DomainCanLoginN" name={name}>
                        <Q>
                          <p>
                            Okay. Locate your hosting company's support number
                            on their website or billing statement. Alternately,
                            many hosting companies also have a chat service.
                            Contact them and let them know what you need help
                            finding. Most web hosting companies are very
                            helpful. Return here for further help.
                          </p>
                          <p>
                            Were you able to find what you were looking for?
                          </p>
                        </Q>
                        <A a="Yes. Thank you!" goto="qa_HelpedNext" />
                        <A a="Nope." goto="qa_ForHelp" />
                      </Step>
                    </A>
                  </Step>
                </A>
                <A a="No." goto="qa_DomainIDK-BilledN">
                  <Step id="qa_DomainIDK-BilledN" name={name}>
                    <Q>Sounds like you don't have a website. </Q>
                    <A
                      a="I still think I have one somewhere."
                      goto="qa_DomainIDK-BilledN"
                    >
                      <End id="qa_DomainIDK-BilledN" name={name}>
                        I can help, if we can have a live talk.
                        <br />
                        <ButtonContact />
                      </End>
                    </A>
                    <A
                      a="Well I need one. Can you help me?"
                      goto="qa_DomainIDK-BilledN-NeedWebsite"
                    >
                      <End id="qa_DomainIDK-BilledN-NeedWebsite" name={name}>
                        Absolutely! Here are my website packages:
                        <br />
                        <ButtonWebsitesPackages />
                      </End>
                    </A>
                    <A
                      a="I actually need help with something else."
                      goto="qa_DomainIDK-BilledN-HelpElse"
                    >
                      <End id="qa_DomainIDK-BilledN-HelpElse" name={name}>
                        Okay. Here are my other web services:
                        <br />
                        [Web Services page]
                      </End>
                    </A>
                  </Step>
                </A>
              </Step>
            </A>
            <A a="What's a domain name?" goto="qa_DomainWhat">
              <Step id="qa_DomainWhat" name={name}>
                <Q>
                  A domain name is the web address, usually ending with .com,
                  .org, or another 'dot word'. Here are some examples:
                  <li>thelostbean.com</li>
                  <li>www.youthforhumanrights.org</li>
                  Do you have a domain name?
                </Q>
                <A a="Yes / I think so." goto="qa_HowToFind" />
                <A a="Not that I know of." goto="qa_DomainN" />
              </Step>
            </A>
          </Step>
        </A>
        <A
          a="Which company it is set up with."
          goto="qa_WebsiteIDK-DomainIDK"
        />
        <A a="Whether I have ownership of it." goto="qa_WebsiteIDK-Owner">
          <Step id="qa_WebsiteIDK-Owner" name="problems">
            <Q>Which part of it are you unsure of your ownership of?</Q>
            <A a="The domain name." goto="qa_WebsiteIDK-DomainIDK" />
            <A
              a="The web hosting account the website is on."
              goto="qa_WebsiteIDK-DomainIDK"
            />
            <A a="The company." goto="qa_WebsiteIDK-Owner-Company">
              <End id="qa_WebsiteIDK-Owner-Company" name="problems">
                Sounds like you may need a lawyer, which I am not. But here are
                a few ways I can help:
                <br />
                <ButtonWebsitesPackages />
                <br />
                [All Services section]
                <br />
                <ButtonContact />
                <p>
                  Maybe I can make some suggestions to help you get to the
                  bottom of your situation.
                </p>
              </End>
            </A>
          </Step>
        </A>
        <A a="I just want a new one." goto="qa_WebsiteN-NeedWebY" />
      </Step>
      <End id="qa_IDontGetIt" name={name}>
        <p>Okay. No problem. Please:</p>
        <ButtonContact />
        <p>I can help.</p>
      </End>
      <End id="qa_HelpedNext" name={name}>
        <div className="question">Good! What shall I help with next?</div>
        <Link className="answer" to="/solutions/web-maintenance">
          Website maintenance/updates
        </Link>
        <Link className="answer" to="/solutions/web-presence">
          Website marketing
        </Link>
        <Link className="answer" to="/solutions/website">
          A new website
        </Link>
        <Link className="answer" to="/solutions/web-design">
          Design assistance
        </Link>
        <Link className="answer" to="/artist">
          Graphic arts / illustration
        </Link>
        <Link className="answer" to="#contact">
          Something else
        </Link>
      </End>
      <End id="qa_HelpedThanks" name={name}>
        <p>You're very welcome! Reach out to me anytime. Also...</p>
        <Social />
      </End>
      <End id="qa_ForHelp" name={name}>
        For help, please:
        <ButtonContact />
      </End>
    </>
  );
};

export default HowFindWebsite;
