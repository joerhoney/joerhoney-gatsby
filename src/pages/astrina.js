import * as React from "react";
// Components
import Mailto from "@components/Mailto";
import { Link } from "gatsby";
// import Showcase from "@components/Showcase";
// Layouts
import Page from "@layouts/Page";
// Fragments
import Arrow from "@fragments/Arrow";
import Profiles from "@fragments/Profiles";
import ScrollIndicator from "@fragments/ScrollIndicator";
// CSS
import "@css/reel.css";
// Impages
import dragon from "@images/art/dragon-both-ends.webp";

const astrinaPage = (props) => {
  return (
    <>
      {/* <section className="hero page">
        <div className="hero__bg">
          <img
            alt="Illustration of a dragon"
            loading="lazy"
            src={dragon}
          />
        </div>
        <h1>Creative</h1>
      </section> */}
      <Page>
        <header>
          <h1>Astrina</h1>
          <p>Free Hosting + Content Control</p>
        </header>

        <main>
          <section>
            <div className="offer-box">
              <h3>The Offer</h3>
              <div className="price">$999</div>
              <div className="hosting">One-time cost</div>
              <p>Hosting: Free* (see details below)</p>
              <p>Monthly fees: $0</p>
            </div>
            <p>
              We build your website using Astrina—a modern, author-friendly
              platform that gives you free hosting and puts content management
              directly in your hands.
            </p>
          </section>

          <section>
            <h2>What You Get</h2>
            <ul>
              <li>
                <strong>Zero Hosting Costs</strong>
                <br />
                Your site runs on enterprise-grade infrastructure (Netlify) at
                no cost. No monthly bills. No surprise fees.
              </li>
              <li>
                <strong>Edit Your Own Content</strong>
                <br />
                No more waiting for a developer or paying $60-$120 per change.
                Use our visual editor to update text, images, links, create new
                pages, and publish in seconds.
              </li>
              <li>
                <strong>Professional, Flexible Design</strong>
                <br />
                Your site is fast, mobile-friendly, and SEO-ready. Change
                colors, layouts, and add new sections without rebuilding.
              </li>
              <li>
                <strong>Your Data Stays Yours</strong>
                <br />
                Everything is stored in Git (version control). You own your
                content. No vendor lock-in. No surprise platform shutdowns.
              </li>
            </ul>
          </section>

          <section>
            <h2>Why $999 Makes Sense</h2>
            <p>Let's look at a small business making 2 updates per year:</p>

            <div className="math-section">
              <div className="math-comparison">
                <div>
                  <h4>Old Way</h4>
                  <p>Hosting: ~$15/month = $180/year</p>
                  <p>2 edits × $90 = $180/year</p>
                  <div className="total">$360/year</div>
                  <p>Over 5 years: $1,800 + waiting for developer</p>
                </div>
                <div>
                  <h4>Astrina Way</h4>
                  <p>Setup: $999 (one time)</p>
                  <p>Hosting: $0/year</p>
                  <p>Edit cost: $0/year (you do it)</p>
                  <div className="total">$999 total</div>
                  <p>Over 5 years: $999 + unlimited updates</p>
                </div>
              </div>
            </div>

            <p>
              <strong>You break even in ~3 years.</strong> After that, every
              year you save $360+, plus the ability to make changes instantly
              instead of waiting days for a developer.
            </p>

            <p>
              Once you can edit your own site, you probably will. You might
              update hours, add services, share announcements, refresh your
              portfolio. With traditional hosting, each change costs money. With
              Astrina, it costs nothing.
            </p>
          </section>

          <section>
            <h2>What's Included</h2>
            <ul>
              <li>Custom domain setup</li>
              <li>Professional web implementation of your existing brand</li>
              <li>Mobile-responsive layout</li>
              <li>Visual content editor (no coding)</li>
              <li>Training on how to use the editor</li>
              <li>Content migration and setup</li>
            </ul>
            <p>
              <strong>Note:</strong> The $999 investment covers implementation
              of your existing branding and visual identity. This includes
              refinement and elaboration of existing brand elements to create a
              cohesive web presence. If you're starting from scratch or need
              full custom design services, those are available as an add-on.{" "}
              <a href="mailto:joe@joerhoney.com?subject=Astrina%20Design%20Services">
                Get a quote for custom design.
              </a>
            </p>
          </section>

          <section>
            <h2>Important Caveats</h2>
            <div className="caveat-box">
              <h3>Free Hosting: With Conditions</h3>
              <p>
                Netlify's free tier is industry-standard and stable. We believe
                it will continue indefinitely. However:
              </p>
              <ul>
                <li>
                  Netlify <em>could</em> change their free tier structure in the
                  future
                </li>
                <li>
                  If they do, hosting would likely cost $10-20/month (still
                  cheap compared to traditional hosting)
                </li>
                <li>
                  We'll notify you immediately and help you decide next steps
                </li>
                <li>Your site will continue to work regardless</li>
              </ul>
            </div>

            <div className="caveat-box">
              <h3>Not for Everyone</h3>
              <p>
                <strong>Works best for:</strong> Small businesses,
                straightforward content (pages, testimonials, services), owners
                who want control.
              </p>
              <p>
                <strong>Less ideal for:</strong> Complex custom features,
                high-traffic apps, advanced e-commerce.
              </p>
            </div>
          </section>

          <section>
            <h2>Questions?</h2>
            <div className="faq">
              <div className="faq-item">
                <strong>How long does it take to build?</strong>
                <p>
                  Typically 3-6 weeks depending on design complexity and content
                  readiness.
                </p>
              </div>
              <div className="faq-item">
                <strong>Can I add more pages later?</strong>
                <p>
                  Yes, you can create them yourself in the editor instantly.
                </p>
              </div>
              <div className="faq-item">
                <strong>What if I want to hire someone to edit later?</strong>
                <p>
                  The editor includes 2 free seats (you and one team member).
                  Additional editor seats can be added for $10-20/month each.
                </p>
              </div>
              <div className="faq-item">
                <strong>Can you redesign it in 2 years?</strong>
                <p>Yes, and all your content migrates seamlessly.</p>
              </div>
              <div className="faq-item">
                <strong>What if I want to leave?</strong>
                <p>All your content is yours—we'll help you export it.</p>
              </div>
            </div>
          </section>

          <section>
            <h2>Ready to Get Started?</h2>
            <p>
              Schedule a 30-minute consultation to see if Astrina is right for
              your business.
            </p>
            <a
              href="mailto:joe@joerhoney.com?subject=Astrina%20Inquiry"
              className="cta-button"
            >
              Get in Touch
            </a>
          </section>
        </main>

        <footer>
          <p>
            Astrina is a custom setup combining Astro, TinaCMS, Git, Netlify,
            and TinaCloud—industry-standard, stable tools. Your content is
            always portable.
          </p>
          <p>© 2026 Joe Rhoney</p>
        </footer>
      </Page>
    </>
  );
};

export default astrinaPage;

export const Head = () => (
  <>
    <title>Astrina | Free Hosting + Content Control</title>
    <meta
      name="description"
      content="Practicing visual arts since childhood and still enjoying it today."
    />
    <meta property="og:keywords" content="Artist, Joe Rhoney" />
    <meta property="og:type" content="website" />
  </>
);
