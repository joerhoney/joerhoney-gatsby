import React from "react";
// Components
import { Link } from "gatsby";
import { Q, A, Step, End } from "../components/Wizard";
import ButtonContact from "@fragments/ButtonContact";
import ButtonWebsitesPackages from "@fragments/ButtonWebsitesPackages";
import ButtonWebMaintenancePlans from "@fragments/ButtonWebMaintenancePlans";
import Social from "@fragments/Social";

const HowFindWebsite = (props) => {
  const { name } = props; // Must be explicitly passed in and match parent fragment.
  return (
    <>
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
                  This usually means the domain name isn't registered yet, or it
                  isn't connected to a web hosting server.
                </Q>
                <A
                  a="Oops! I was entering it wrong. I see it now."
                  goto="qa_HelpedNext"
                />
                <A
                  a="Hm, maybe I have the wrong domain name."
                  goto="qa_DomainIDK"
                ></A>
                <A
                  a="I know I have a domain name, and I'm definitely entering it right."
                  goto="qa_DomainDefCantBeReached"
                >
                  <End id="qa_DomainDefCantBeReached" name={name}>
                    <p>
                      Sounds like your domain name isn't connected to a server.
                      There are a number of possible reasons for this. If you
                      know where your website is (or should be) hosted, you can
                      log in to your web hosting account and check:
                    </p>
                    <ul>
                      <li>If any of your services have expired.</li>
                      <li>
                        If any of your payment methods have expired, causing
                        auto-renewal to fail.
                      </li>
                    </ul>
                    <p>
                      Update and renew any/all of these and your website should
                      come back online soon. If that doesn't work, contact your
                      web hosting company. If that isn't the problem, maybe it's
                      a technical issue. Sometimes web hosting companies will
                      help with this, depending on the level of support included
                      with the plan you've subscribed to. They may even jump in
                      and fix the issue for you if you contact them about it. If
                      not:
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
                    Looks like you're trying to go to a specific page on the
                    website, but it isn't there. The domain name should end with
                    an extension (.com, .org, .biz, etc.). Other symbols after
                    the extension (especially if there is a forward slash '/')
                    generally refer to a specific page on the website. That page
                    may be missing, while your website may still be there. Try
                    removing anything after the '.com', '.org', or other
                    extension and see if your website shows up, then return here
                    for more help.
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
                      There are a number of possible reasons for this and I'd be
                      happy to help you solve it. Please reach out to me.
                    </p>
                    <ButtonContact />
                  </End>
                </A>
                <A
                  a="No, I'm still getting a 404/'page missing' error."
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
                  computer, basically) your website is hosted on. Sometimes web
                  hosting companies will help with this, depending on the level
                  of support including with the plan you've subscribed to. They
                  may even jump in and fix the issue for you if you contact them
                  about it. If not:
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
                  <Step id="" name={name}>
                    <Q>
                      <p>
                        Maybe you bought a web hosting plan and never connected
                        it to a your website. The web hosting company you
                        purchased it with should be able to help you with this
                        if you contact them. If not:
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
                    <A a="How do I know if I have a website to connect it to or not?">
                      <End>
                        <p>
                          If you don't recall having a website created for your
                          domain name, log into your hosting account and check
                          what products you have there. If it is still unclear,
                          contact your web hosting company. Or if you would like
                          someone else to manage all of this for you:
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
                    Yes, a domain name is just a sort of address used to find
                    your website. Your website has to be built by someone and
                    placed on a server (a computer that stays ON at a web
                    hosting company). I'd be happy to help with that! Please
                    choose from one of my website packages:
                    <br />
                    <ButtonWebsitesPackages />
                  </End>
                </A>
              </Step>
            </A>
            <A a="Just a blank white page." goto="qa_WhiteScreen" />
            <A
              a="It doesn't look like my website / It looks like someone else's."
              goto="qa_GoDomain-LooksWrong"
            >
              <Step id="qa_GoDomain-LooksWrong" name={name}>
                <Q>Do you still own your domain name?</Q>
                <A
                  a="According to my domain name registrar I do."
                  goto="qa_LooksWrong-OwnDomainY"
                >
                  <Step id="qa_LooksWrong-OwnDomainY" name={name}>
                    <Q>Are you able to log into your domain name registrar?</Q>
                    <A
                      a="Yes. I'm logged in now."
                      goto="qa_LooksWrong-LoginDomainY"
                    >
                      <Step id="qa_LooksWrong-LoginDomainY" name={name}>
                        <Q>
                          Hm. If you own your domain name and you're seeing a
                          website there that doesn't look like your own:
                          <li>
                            You may have been subject to some sort of hacking
                          </li>
                          <li>
                            Your account may have fallen into the wrong hands,
                            or
                          </li>
                          <li>Maybe there is a technical issue.</li>I recommend
                          logging in and changing all relevant passwords
                          immediately. Additionally you may need malicious files
                          removed from your server. Sometimes your web hosting
                          company will help with some of these things, depending
                          on the level of support included in your plan. Try
                          contacting them and return here for further help.How
                          did that go?
                        </Q>
                        <A
                          a="They got me squared away."
                          goto="qa_WebsiteY-Helped"
                        />
                        <A
                          a="They couldn't/wouldn't help me."
                          goto="qa_WebsiteY-HelpedByHostCoN"
                        >
                          <End id="qa_WebsiteY-HelpedByHostCoN" name={name}>
                            Sorry to hear that. I may be able to provide further
                            guidance.
                            <br />
                            <ButtonContact />
                          </End>
                        </A>
                        <A
                          a="Turns out I don't own that domain name."
                          goto="qa_HowToFind"
                        />
                        <A
                          a="Oops! False alarm. I had the domain name wrong."
                          goto="qa_HowToFind"
                        />
                      </Step>
                    </A>
                    <A
                      a="No. I just tried and it didn't work."
                      goto="qa_LooksWrong-LoginDomainN"
                    >
                      <Step id="qa_LooksWrong-LoginDomainN" name={name}>
                        <Q>
                          <ol>
                            <li>
                              You can try the 'Forgot your password?' link, to
                              reset your password. Or contact your domain name
                              registrar for help.
                            </li>
                            <li>
                              Once you're logged in contact your domain name
                              registrar (if you're not already connected with
                              them) to see if they can help you understand why
                              your website isn't displaying on your domain name
                              as you would expect.
                            </li>
                            <li>Return here for more tips.</li>
                          </ol>
                          <p>How did that go?</p>
                        </Q>
                        <A
                          a="They got me squared away."
                          goto="qa_WebsiteY-Helped"
                        />
                        <A
                          a="They couldn't/wouldn't help me."
                          goto="qa_WebsiteY-HelpedByHostCoN"
                        />
                        <A
                          a="Turns out I don't own that domain name."
                          goto="qa_HowToFind"
                        />
                        <A
                          a="Oops! False alarm. I had the domain name wrong."
                          goto="qa_HowToFind"
                        />
                      </Step>
                    </A>
                  </Step>
                </A>
                <A a="No." goto="qa_LooksWrong-OwnDomainN">
                  <Step id="qa_LooksWrong-OwnDomainN" name={name}>
                    <Q>
                      <ul>
                        <li>
                          If you missed the opportunity to renew your domain
                          name or you cancelled it, you may be able to re
                          purchase it again, so long as no one else did so once
                          it opened up to the public.
                        </li>
                        <li>
                          If it has been purchased by someone else, but it's a
                          name which you should rightfully own because it's your
                          registered business name, this falls under the terms
                          of domain name disputes, which you may have a strong
                          case against. Here is link that might help you{" "}
                          <a href="https://www.legalzoom.com/articles/resolving-domain-name-disputes-online-lay-claim-to-your-domain">
                            resolve your domain name dispute
                          </a>
                          if needed.
                        </li>
                        <li>
                          Otherwise, you may need to register a new domain name
                          for your website.Once you've resolved your domain name
                          and you have one to work with, you can connect it to
                          your website.
                        </li>
                      </ul>
                      <p>Was this helpful?</p>
                    </Q>
                    <A a="Yes." goto="qa_WebsiteY-Helped" />
                    <A a="No." goto="qa_LooksWrong-NotUnderstanding">
                      <End id="qa_LooksWrong-NotUnderstanding" name={name}>
                        Maybe I'm not fully understanding your situation.
                        <br />
                        <ButtonContact />
                      </End>
                    </A>
                  </Step>
                </A>
                <A a="How do I find out?" goto="qa_LooksWrong-OwnDomainIDK">
                  <Step id="qa_LooksWrong-OwnDomainIDK" name={name}>
                    <Q>Are you able to log into your domain name registrar?</Q>
                    <A
                      a="Yes. I'm logged in now."
                      goto="qa_LooksWrong-OwnDomainIDK-LogInY"
                    >
                      <Step id="qa_LooksWrong-OwnDomainIDK-LogInY" name={name}>
                        <Q>
                          <p>
                            From your dashboard you should able to navigate to
                            your domains and see which domains you own. If you
                            have trouble finding it, please contact your domain
                            name registrar. Return here for more help.
                          </p>
                          <p>Did you find out about your domain name?</p>
                        </Q>
                        <A a="Yes. I own it." goto="qa_LooksWrong-OwnDomainY" />
                        <A
                          a="Yes. Actually I don't own it."
                          goto="qa_HowToFind"
                        />
                        <A
                          a="No. I still don't get it."
                          goto="qa_LooksWrong-OwnDomainIDK-LogInY-CantFind"
                        >
                          <End
                            id="qa_LooksWrong-OwnDomainIDK-LogInY-CantFind"
                            name={name}
                          >
                            If your domain name registrar can't/won't help you,
                            it may be time to transfer your domain name to a new
                            registrar. Alternately you can have someone manage
                            your domain name for you.
                            <br />
                            For more help, please:
                            <ButtonContact />
                          </End>
                        </A>
                      </Step>
                    </A>
                    <A a="No." goto="qa_LooksWrong-LoginDomainN" />
                  </Step>
                </A>
              </Step>
            </A>
            <A
              a="There are lots of similar websites to click on, but mine isn't there."
              goto="qa_GoDomain-SERP"
            >
              <Step id="qa_GoDomain-SERP" name={name}>
                <Q>
                  Sounds like you're looking at a SERP (search engine results
                  page). Please be sure you are entering the domain name into
                  your browser's address bar with no spaces, not a search engine
                  like Google.
                </Q>
                <A
                  a="I did. I'm at the right domain name, but it just shows a list of other websites to click on. It's not my website."
                  goto="qa_GoDomain-LooksWrong"
                />
                <A
                  a="Oops! Okay, I entered it into the address bar, not a search engine."
                  goto="qa_DomainKnown"
                />
                <A a="I don't get it." goto="qa_GoDomain-DontGetIt">
                  <End id="qa_GoDomain-DontGetIt" name={name}>
                    Okay. No problem.
                    <br />
                    Please
                    <ButtonContact />I can help.
                  </End>
                </A>
              </Step>
            </A>
          </Step>
        </A>
        <A
          a="Yeah, but it's not on Google/Bing/Yahoo!/etc. anymore"
          goto="qa_Domain-SearchEngN"
        >
          <Step id="qa_Domain-SearchEngN" name={name}>
            <Q>
              <p>
                Google, Bing, Yahoo!, etc. are just search engines. There are
                many websites on the Internet which are very difficult to find
                on a search engine. Of course, that isn't ideal for your
                website, but it doesn't mean your website doesn't exist. Type
                your domain name (example: mywebsite.com) into the address bar
                and press enter/return (make sure you don't use any spaces).
                This should take you straight to your website. Try that and come
                back to here for more help.
              </p>
              <p>Did that work?</p>
            </Q>
            <A a="Yes!" goto="qa_WebsiteY-Helped" />
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
              Are you getting billed by any web hosting companies, such as
              GoDaddy, AWS (Amazon Web Services), Google Cloud, 1&amp;1,
              HostGater, BlueHost, DigitalOcean, Squarespace, Wix, DreamHost,
              Hostinger, Shopify, etc.?
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
                        dashboard. If you have trouble finding your way around,
                        look for a support phone number to call or a chat box to
                        send messages for support. Most web hosting companies
                        are very helpful with this.
                      </p>
                      <p>
                        Try that and return here if you still need help, or if
                        you don't like your experience with your hosting company
                        for any reason.
                      </p>
                      <p>Anything else I can help with?</p>
                    </Q>
                    <A
                      a="Yes. I need a/another website."
                      goto="qa_NewWebsite"
                    />
                    <A
                      a="Yes. I need help with another thing."
                      goto="qa_Help"
                    />
                    <A a="Nope. Thanks!" goto="qa_HelpedThanks" />
                  </Step>
                </A>
                <A a="No." goto="qa_DomainCanLoginN">
                  <Step id="qa_DomainCanLoginN" name={name}>
                    <Q>
                      <p>
                        Okay. Locate your hosting company's support number on
                        their website or billing statement. Alternately, many
                        hosting companies also have a chat service. Contact them
                        and let them know what you need help finding. Most web
                        hosting companies are very helpful. Return here for
                        further help.
                      </p>
                      <p>Were you able to find what you were looking for?</p>
                    </Q>
                    <A a="Yes. Thank you!" goto="qa_WebsiteY-Helped" />
                    <A a="Nope." goto="qa_DomainBilledY-LoginFailed">
                      <End id="qa_DomainBilledY-LoginFailed" name={name}>
                        For help, please:
                        <ButtonContact />
                      </End>
                    </A>
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
              A domain name is the web address, usually ending with .com, .org,
              or another 'dot word'. Here are some examples:
              <li>thelostbean.com</li>
              <li>www.youthforhumanrights.org</li>
              Do you have a domain name?
            </Q>
            <A a="Yes / I think so." goto="qa_HowToFind" />
            <A a="Not that I know of." goto="qa_DomainN" />
          </Step>
        </A>
      </Step>
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
    </>
  );
};

export default HowFindWebsite;
