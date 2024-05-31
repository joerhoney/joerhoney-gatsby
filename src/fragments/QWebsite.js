import React from "react";
// Components
import { Link } from "gatsby";
import { Wizard, Q, A, Step, End } from "../components/Wizard";
// Fragments
import ButtonContact from "@fragments/ButtonContact";
import ButtonWebsitesPackages from "@fragments/ButtonWebsitesPackages";

function QWebsite() {
  return (
    <Wizard id="qa_Website" name="website">
      <Step>
        <Q>Do you have a website?</Q>
        <A a="Yes" id="qa_WebsiteY">
          <Step>
            <Q>Is your website working?</Q>
            <A
              a="Yes, but I need help with it."
              id="qa_WebsiteY-WorkingYN-HelpY"
            >
              <End>
                I can help with that! Go here:
                <br />
                <ButtonWebsitesPackages />
              </End>
            </A>
            <A a="No / sort of." goto="qa_WebsiteIDK-HowToFind" />
            <A a="I just want a new one." id="qa_WebsiteY-NeedNew">
              <End>
                Great! Please see my website packages:
                <br />
                <ButtonWebsitesPackages />
              </End>
            </A>
            <A a="I need help with something else." id="qa_Website-HelpElse">
              <End>
                Okay. Here are all my web serivces:
                <br />
                [All Services section]
              </End>
            </A>
          </Step>
        </A>
        <A a="No" id="qa_WebsiteN">
          <Step>
            <Q>Do you want/need a website?</Q>
            <A a="Yes." id="qa_WebsiteN-NeedWebY">
              <End>
                Great! Please see my website packages:
                <br />
                <ButtonWebsitesPackages />
              </End>
            </A>
            <A a="I need help with something else." id="qa_WebsiteN-HelpElse">
              <End>
                Okay. Here are my other web serivces:
                <br />
                [All Services section]
              </End>
            </A>
          </Step>
        </A>
        <A a="I don't know / I lost track of it." id="qa_WebsiteIDK">
          <Step>
            <Q>What data are you missing?</Q>
            <A a="How to find it." id="qa_WebsiteIDK-HowToFind">
              <Step>
                <Q>Do you know what your website's domain name is?</Q>
                <A a="Yes." id="qa_WebsiteIDK-DomainKnown">
                  <Step>
                    <Q>Okay. What happens when you go to it?</Q>
                    <A
                      a="It says 'This site can't be reached' (or similar)"
                      id="qa_WebsiteIDK-GoDomain-CantBeReached"
                    >
                      <Step>
                        <Q>
                          This usually means the domain name isn't registered
                          yet, or it isn't connected to a web hosting server.
                        </Q>
                        <A
                          a="Oops! I was entering it wrong. I see it now."
                          goto="qa_WebsiteY-Helped"
                        />
                        <A
                          a="Hm, maybe I have the wrong domain name."
                          goto="qa_WebsiteIDK-DomainIDK"
                        ></A>
                        <A
                          a="I'm definitely entering it right."
                          id="qa_WebsiteIDK-DomainY-CantBeReached-HelpY"
                        >
                          <End>
                            <p>
                              Sounds like your website isn't connected to a
                              server. There are a number of possible reasons for
                              this. If you know where your website is (or should
                              be) hosted, you can log in to your web hosting
                              account and check:
                            </p>
                            <ul>
                              <li>If any of your services have expired.</li>
                              <li>
                                If any of your payment methods have expired,
                                causing auto-renew to fail.
                              </li>
                            </ul>
                            <p>
                              Renew any/all of these and your website should
                              come back online soon. If that doesn't work,
                              contact your web hosting company.If that isn't the
                              problem, maybe it's a technical issue. Sometimes
                              web hosting companies will help with this,
                              depending on the level of support including with
                              the plan you've subscribed to. They may even jump
                              in and fix the issue for you if you contact them
                              about it. If not:
                            </p>
                            <ButtonContact />
                            <p>Maybe I can help.</p>
                          </End>
                        </A>
                      </Step>
                    </A>
                    <A
                      a="I get a 404 error code / it says 'page missing' (or similar)."
                      id="qa_WebsiteIDK-GoDomain-404"
                    >
                      <Step>
                        <Q>
                          <p>
                            Looks like you're trying to go to a specific page on
                            the website, but it isn't there. The domain name
                            should end with an extension (.com, .org, .biz,
                            etc.). Other symbols after the extension (especially
                            if there is a forward slash '/'), can refer to a
                            specific page on the website, which may no longer be
                            there, or the path (the word(s) after the slash
                            necessary to arrive at that page) have changed. Try
                            removing anything after the '.com', '.org', or other
                            extension and see if your website loads, then return
                            here for more help.
                          </p>
                          <p>Did that work?</p>
                        </Q>
                        <A a="Yes." id="qa_WebsiteY-Helped">
                          <End>
                            <div className="question">
                              Good! What shall I help with next?
                            </div>
                            <Link
                              className="answer"
                              to="/solutions/web-maintenance"
                            >
                              Website maintenance/updates
                            </Link>
                            <Link
                              className="answer"
                              to="/solutions/web-presence"
                            >
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
                        </A>
                        <A
                          a="No, I'm still getting a 404/'page missing' error."
                          id=""
                        >
                          <End>
                            <ButtonContact />
                            <p>Maybe I can help.</p>
                          </End>
                        </A>
                        <A
                          a="I don't have anything after the extension and I still get an error."
                          id=""
                        >
                          <End>(same as above)</End>
                        </A>
                      </Step>
                    </A>
                    <A
                      a="It says 500 / 'Server Error' (or similar)"
                      id="qa_WebsiteIDK-GoDomain-500"
                    >
                      <Step>
                        <Q>
                          There is some issue with the server your website is
                          hosted on. Sometimes web hosting companies will help
                          with this, depending on the level of support including
                          with the plan you've subscribed to. They may even jump
                          in and fix the issue for you if you contact them about
                          it. If not:
                        </Q>
                        <End>
                          <ButtonContact />
                          <p>Maybe I can help.</p>
                        </End>
                      </Step>
                    </A>
                    <A a="It looks like a placeholder page." id="">
                      <Step>
                        <Q>
                          It sounds like you have a domain name registered, but
                          no hosting service is connected with it yet.
                        </Q>
                        <A a="I thought I bought a website/hosting plan." id="">
                          <End>
                            Maybe you bought a web hosting plan and never set it
                            up. The web hosting company you purchased it with
                            should be able to help you with this if you contact
                            them. If not:
                            <br />
                            <ButtonContact />
                            <p>Maybe I can help.</p>
                          </End>
                        </A>
                        <A
                          a="Oh, can I connect my website with one of your website packages?"
                          id=""
                        >
                          <End>
                            Absolutely! Please choose a website package here:
                            <br />
                            <ButtonWebsitesPackages />
                          </End>
                        </A>
                        <A
                          a="Do I have to buy a web hosting plan? I thought I just needed a domain name. "
                          id=""
                        >
                          <End>
                            Yes, a domain name is just a name. Your website has
                            to be built by someone. I'd be happy to help with
                            that! Please choose from one of my website packages:
                            <br />
                            <ButtonWebsitesPackages />
                          </End>
                        </A>
                      </Step>
                    </A>
                    <A
                      a="Just a blank white page."
                      goto="qa_WebsiteIDK-GoDomain-White"
                    ></A>
                    <A
                      a="It doesn't look like my website / It looks like someone else's."
                      id="qa_WebsiteIDK-GoDomain-LooksWrong"
                    >
                      <Step>
                        <Q>Do you still own your domain name?</Q>
                        <A
                          a="According to my domain name registrar I do."
                          id="qa_WebsiteIDK-LooksWrong-OwnDomainY"
                        >
                          <Step>
                            <Q>
                              Are you able to log into your domain name
                              registrar?
                            </Q>
                            <A
                              a="Yes. I'm logged in now."
                              id="qa_WebsiteIDK-LooksWrong-LoginDomainY"
                            >
                              <Step>
                                <Q>
                                  Hm. If you own your domain name and you're
                                  seeing a website there that doesn't look like
                                  your own:
                                  <li>
                                    You may have been subject to some sort of
                                    hacking
                                  </li>
                                  <li>
                                    Your account may have fallen into the wrong
                                    hands, or
                                  </li>
                                  <li>Maybe there is a technical issue.</li>I
                                  recommend logging in and changing all relevant
                                  passwords immediately. Additionally you may
                                  need malicious files removed from your server.
                                  Sometimes your web hosting company will help
                                  with some of these things, depending on the
                                  level of support included in your plan. Try
                                  contacting them and return here for further
                                  help.How did that go?
                                </Q>
                                <A
                                  a="They got me squared away."
                                  goto="qa_WebsiteY-Helped"
                                />
                                <A
                                  a="They couldn't/wouldn't help me."
                                  id="qa_WebsiteY-HelpedByHostCoN"
                                >
                                  <End>
                                    Sorry to hear that. I may be able to provide
                                    further guidance.
                                    <br />
                                    <ButtonContact />
                                  </End>
                                </A>
                                <A
                                  a="Turns out I don't own that domain name."
                                  goto="qa_WebsiteIDK-HowToFind"
                                ></A>
                                <A
                                  a="Oops! False alarm. I had the domain name wrong."
                                  goto="qa_WebsiteIDK-HowToFind"
                                ></A>
                              </Step>
                            </A>
                            <A
                              a="No. I just tried and it didn't work."
                              id="qa_WebsiteIDK-LooksWrong-LoginDomainN"
                            >
                              <Step>
                                <Q>
                                  <ol>
                                    <li>
                                      You can try the 'Forgot your password?'
                                      link, to reset your password. Or contact
                                      your domain name registrar for help.
                                    </li>
                                    <li>
                                      Once you're logged in contact your domain
                                      name registrar (if you're not already
                                      connected with them) to see if they can
                                      help you understand why your website isn't
                                      displaying on your domain name as you
                                      would expect.
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
                                  goto="qa_WebsiteIDK-HowToFind"
                                />
                                <A
                                  a="Oops! False alarm. I had the domain name wrong."
                                  goto="qa_WebsiteIDK-HowToFind"
                                />
                              </Step>
                            </A>
                          </Step>
                        </A>
                        <A a="No." id="qa_WebsiteIDK-LooksWrong-OwnDomainN">
                          <Step>
                            <Q>
                              <ul>
                                <li>
                                  If you missed the opportunity to renew your
                                  domain name or you cancelled it, you may be
                                  able to re purchase it again, so long as no
                                  one else did so once it opened up to the
                                  public.
                                </li>
                                <li>
                                  If it has been purchased by someone else, but
                                  it's a name which you should rightfully own
                                  because it's your registered business name,
                                  this falls under the terms of domain name
                                  disputes, which you may have a strong case
                                  against. Here is link that might help you{" "}
                                  <a href="https://www.legalzoom.com/articles/resolving-domain-name-disputes-online-lay-claim-to-your-domain">
                                    resolve your domain name dispute
                                  </a>
                                  if needed.
                                </li>
                                <li>
                                  Otherwise, you may need to register a new
                                  domain name for your website.Once you've
                                  resolved your domain name and you have one to
                                  work with, you can connect it to your website.
                                </li>
                              </ul>
                              <p>Was this helpful?</p>
                            </Q>
                            <A a="Yes." goto="qa_WebsiteY-Helped" />
                            <A
                              a="No."
                              id="qa_WebsiteIDK-LooksWrong-NotUnderstanding"
                            >
                              <End>
                                Maybe I'm not fully understanding your
                                situation.
                                <br />
                                <ButtonContact />
                              </End>
                            </A>
                          </Step>
                        </A>
                        <A
                          a="How do I find out?"
                          id="qa_WebsiteIDK-LooksWrong-OwnDomainIDK"
                        >
                          <Step>
                            <Q>
                              Are you able to log into your domain name
                              registrar?
                            </Q>
                            <A
                              a="Yes. I'm logged in now."
                              id="qa_WebsiteIDK-LooksWrong-OwnDomainIDK-LogInY"
                            >
                              <Step>
                                <Q>
                                  <p>
                                    From your dashboard you should able to
                                    navigate to your domains and see which
                                    domains you own. If you have trouble finding
                                    it, please contact your domain name
                                    registrar. Return here for more help.
                                  </p>
                                  <p>
                                    Did you find out about your domain name?
                                  </p>
                                </Q>
                                <A
                                  a="Yes. I own it."
                                  goto="qa_WebsiteIDK-LooksWrong-OwnDomainY"
                                />
                                <A
                                  a="Yes. Actually I don't own it."
                                  goto="qa_WebsiteIDK-HowToFind"
                                />
                                <A
                                  a="No. I still don't get it."
                                  id="qa_WebsiteIDK-LooksWrong-OwnDomainIDK-LogInY-CantFind"
                                >
                                  <End>
                                    If your domain name registrar can't/won't
                                    help you, it may be time to transfer your
                                    domain name to a new registrar. Alternately
                                    you can have someone manage your domain name
                                    for you.
                                    <br />
                                    For more help, please:
                                    <ButtonContact />
                                  </End>
                                </A>
                              </Step>
                            </A>
                            <A
                              a="No."
                              goto="qa_WebsiteIDK-LooksWrong-LoginDomainN"
                            />
                          </Step>
                        </A>
                      </Step>
                    </A>
                    <A
                      a="There are lots of similar websites to click on, but mine isn't there."
                      id="qa_WebsiteIDK-GoDomain-SERP"
                    >
                      <Step>
                        <Q>
                          Sounds like you're looking at a SERP (search engine
                          results page). Please be sure you are entering the
                          domain name into your browser's address bar with no
                          spaces, not a search engine like Google.
                        </Q>
                        <A
                          a="I did. I'm at the right domain name, but it just shows a list of other websites to click on. It's not my website."
                          goto="qa_WebsiteIDK-GoDomain-LooksWrong"
                        />
                        <A
                          a="Oops! Okay, I entered it into the address bar, not a search engine."
                          goto="qa_WebsiteIDK-DomainKnown"
                        />
                        <A
                          a="I don't get it."
                          id="qa_WebsiteIDK-GoDomain-DontGetIt"
                        >
                          <End>
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
                  id="qa_WebsiteIDK-Domain-SearchEngN"
                >
                  <Step>
                    <Q>
                      <p>
                        Google, Bing, Yahoo!, etc. are just search engines.
                        There are many websites on the Internet which are very
                        difficult to find on a search engine. Of course, that
                        isn't ideal for your website, but it doesn't mean your
                        website doesn't exist. Type your domain name (example:
                        mywebsite.com) into the address bar and press
                        enter/return (make sure you don't use any spaces). This
                        should take you straight to your website. Try that and
                        come back to here for more help.
                      </p>
                      <p>Did that work?</p>
                    </Q>
                    <A a="Yes!" goto="qa_WebsiteY-Helped" />
                    <A a="No." goto="qa_WebsiteIDK-DomainKnown" />
                    <A
                      a="Oh. Actually I don't know my domain name."
                      goto="qa_WebsiteIDK-DomainIDK"
                    />
                  </Step>
                </A>
                <A a="No." id="qa_WebsiteIDK-DomainIDK">
                  <Step>
                    <Q>
                      Are you getting billed by any web hosting companies, such
                      as GoDaddy, AWS (Amazon Web Services), Google Cloud,
                      1&amp;1, HostGater, BlueHost, DigitalOcean, Squarespace,
                      Wix, DreamHost, Hostinger, Shopify, etc.?
                    </Q>
                    <A a="Yes." id="qa_WebsiteIDK-DomainIDK-BilledY">
                      <Step>
                        <Q>
                          Are you able to log into your web hosting account?
                        </Q>
                        <A a="Yes." id="qa_WebsiteIDK-DomainIDK-BilledY-LoginY">
                          <Step>
                            <Q>
                              <p>
                                You should be able to find out what services
                                you're paying for and what domain name(s) you
                                have in your dashboard. If you have trouble
                                finding your way around, look for a support
                                phone number to call or a chat box to send
                                messages for support. Most web hosting companies
                                are very helpful with this.
                              </p>
                              <p>
                                Try that and return here if you still need help,
                                or if you don't like your experience with your
                                hosting company for any reason.
                              </p>
                              <p>Anything else I can help with?</p>
                            </Q>
                            <A
                              a="Yes. I need a/another website."
                              id="qa_Website-NeedWebY"
                            >
                              <End>
                                I can help with that! Let's start here:
                                <br />
                                <ButtonWebsitesPackages />
                              </End>
                            </A>
                            <A
                              a="Yes. I need help with another thing."
                              id="qa_Website-HelpElse"
                            >
                              <End>
                                Okay. Here are the services I offer:
                                <br />
                                [All Services section]
                              </End>
                            </A>
                            <A
                              a="Nope. Thanks!"
                              goto="qa_Website-HelpedY-Thanks"
                            />
                          </Step>
                        </A>
                        <A a="No." id="qa_WebsiteIDK-DomainIDK-BilledY-LoginN">
                          <Step>
                            <Q>
                              <p>
                                Okay. Locate your hosting company's support
                                number on their website or billing statement.
                                Alternately, many hosting companies also have a
                                chat service. Contact them and let them know
                                what you need help finding. Most web hosting
                                companies are very helpful. Return here for
                                further help.
                              </p>
                              <p>
                                Were you able to find what you were looking for?
                              </p>
                            </Q>
                            <A a="Yes. Thank you!" goto="qa_WebsiteY-Helped" />
                            <A
                              a="Nope."
                              id="qa_WebsiteIDK-DomainIDK-BilledY-LoginFailed"
                            >
                              <End>
                                For help, please:
                                <ButtonContact />
                              </End>
                            </A>
                          </Step>
                        </A>
                      </Step>
                    </A>
                    <A a="No." id="qa_WebsiteIDK-DomainIDK-BilledN">
                      <Step>
                        <Q>Sounds like you don't have a website. </Q>
                        <A
                          a="I still think I have one somewhere."
                          id="qa_WebsiteIDK-DomainIDK-BilledN"
                        >
                          <End>
                            Maybe I can help, if we can have a live talk.
                            <br />
                            <ButtonContact />
                          </End>
                        </A>
                        <A
                          a="Well I need one. Can you help me?"
                          id="qa_WebsiteIDK-DomainIDK-BilledN-NeedWebsite"
                        >
                          <End>
                            Absolutely! Here are my website packages:
                            <br />
                            <ButtonWebsitesPackages />
                          </End>
                        </A>
                        <A
                          a="I actually need help with something else."
                          id="qa_WebsiteIDK-DomainIDK-BilledN-HelpElse"
                        >
                          <End>
                            Okay. Here are my other web services:
                            <br />
                            [Web Services page]
                          </End>
                        </A>
                      </Step>
                    </A>
                  </Step>
                </A>
                <A a="What's a domain name?" id="qa_WebsiteIDK-DomainWhat">
                  <Step>
                    <Q>
                      A domain name is the web address, usually ending with
                      .com, .org, or another 'dot word'. Here are some examples:
                      <li>thelostbean.com</li>
                      <li>www.youthforhumanrights.org</li>
                      Do you have a domain name?
                    </Q>
                    <A a="Yes / I think so." goto="qa_WebsiteIDK-DomainY" />
                    <A a="Not that I know of." goto="qa_WebsiteIDK-DomainIDK" />
                  </Step>
                </A>
              </Step>
            </A>
            <A
              a="Which company it is set up with."
              goto="qa_WebsiteIDK-DomainIDK"
            />
            <A a="Whether I have ownership of it." id="qa_WebsiteIDK-Owner">
              <Step>
                <Q>Which part of it are you unsure of your ownership of?</Q>
                <A a="The domain name." goto="qa_WebsiteIDK-DomainIDK" />
                <A
                  a="The web hosting account the website is on."
                  goto="qa_WebsiteIDK-DomainIDK"
                />
                <A a="The company." id="qa_WebsiteIDK-Owner-Company">
                  <End>
                    Sounds like you may need a lawyer, which I am not. But here
                    are a few ways I can help:
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
        </A>
      </Step>
    </Wizard>
  );
}

export default QWebsite;
