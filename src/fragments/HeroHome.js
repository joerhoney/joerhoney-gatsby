import React from "react";
import styled from "styled-components";

const Hero_Home = ({ children }) => {
  return (
    <Hero>
      <div className="hero-home">
        <h1 className="joerhoney">
          <b>Joe</b> <b>Rhoney</b>
        </h1>
        <div className="jBig">
          <p>
            UI/&#8203;UX, re&shy;spon&shy;sive lay&shy;out,
            hard&shy;ware-ac&shy;cel&shy;er&shy;at&shy;ed
            graph&shy;ics/&#8203;an&shy;i&shy;ma&shy;tion,
            ac&shy;ces&shy;si&shy;bili&shy;ty, search en&shy;gine
            op&shy;ti&shy;miza&shy;tion, de&shy;bug&shy;ging,
            de&shy;vice/&#8203;brows&shy;er
            com&shy;pat&shy;i&shy;bil&shy;i&shy;ty, adap&shy;tive out&shy;put,
            CSS3, HTML5, Ja&shy;va&shy;Script, ES6, React, JSON, jQuery, SVG,
            PHP, CLIs (Bash, Z shell, Git, Git&shy;Hub), SQL, All ma&shy;jor
            brows&shy;ers and their in&shy;spec&shy;tion tools, VS&shy;Code (and
            other IDEs), Git&shy;Hub Desk&shy;top, Cy&shy;ber&shy;Duck,
            File&shy;Zilla, Adobe Cre&shy;ative Suite (Adobe
            Pho&shy;to&shy;shop, Adobe Il&shy;lus&shy;tra&shy;tor, Adobe XD,
            Adobe Pre&shy;miere, Adobe After&shy;Ef&shy;fects),
            Af&shy;fin&shy;i&shy;ty Suite (Af&shy;fin&shy;i&shy;ty Pho&shy;to 2,
            Af&shy;fin&shy;i&shy;ty De&shy;sign&shy;er 2,
            Af&shy;fin&shy;i&shy;ty Pub&shy;lish&shy;er), GIMP, Ink&shy;Scape,
            At&shy;lass&shy;ian, Figma, Teal&shy;ium, Work&shy;Place, Slack,
            Zoom, Site&shy;Im&shy;prove, Pay&shy;Pal, WC3 Mark&shy;up
            Val&shy;i&shy;da&shy;tion, Google Search&shy;Con&shy;sole,
            Page&shy;Speed In&shy;sights, Mo&shy;bile-Friend&shy;ly Test,
            Reg&shy;Exr, Acu&shy;net&shy;ix, Brows&shy;er&shy;Stack,
            Se&shy;mant&shy;ics, nam&shy;ing con&shy;ven&shy;tion and code
            for&shy;mat ad&shy;her&shy;ence,
            cross-brows&shy;er/&#8203;de&shy;vice
            com&shy;pat&shy;i&shy;bil&shy;i&shy;ty, W3C com&shy;pli&shy;ance,
            ac&shy;cess&shy;i&shy;bil&shy;i&shy;ty, SEO page ba&shy;sics,
            con&shy;tin&shy;ued educa&shy;tion, Custom com&shy;pon&shy;ent
            librar&shy;ies, Hack/&#8203;XHP, React Na&shy;tive, Python, Perl,
            .NET, ASP, CSS pro&shy;cess&shy;ors (SCSS, etc.), Boot&shy;strap,
            scrum pro&shy;cess, us&shy;ing macOS, Windows, Linux OSs. Do you
            like this typographic layout? Learn more about it on my{" "}
            <a
              href="https://codepen.io/joerhoney/pen/bGOypwq"
              rel="noreferrer"
              target="_blank"
            >
              Codepen
            </a>
          </p>
        </div>
        <div className="jDots">
          <p>
            Il&shy;lus&shy;tra&shy;tion, an&shy;i&shy;ma&shy;tion, video
            ed&shy;i&shy;ting, pho&shy;tog&shy;ra&shy;phy, lay&shy;out,
            col&shy;or de&shy;sign, ty&shy;pog&shy;ra&shy;phy,
            char&shy;ac&shy;ter/&#8203;crea&shy;ture de&shy;sign,
            con&shy;cep&shy;tu&shy;al art, back&shy;ground art, life
            draw&shy;ing, car&shy;i&shy;ca&shy;tures Dig&shy;i&shy;tal art
            tab&shy;let, ink, pen&shy;cil/&#8203;graphite, char&shy;coal,
            col&shy;ored pen&shy;cil, pas&shy;tel, paint,
            wa&shy;ter&shy;col&shy;or, Pan&shy;tone Col&shy;or Chart, Adobe
            Il&shy;lus&shy;tra&shy;tor, Adobe Pho&shy;to&shy;shop,
            Af&shy;fin&shy;i&shy;ty Pho&shy;to 2, Af&shy;fin&shy;i&shy;ty
            De&shy;sign&shy;er 2. This lay&shy;out uses shape-out&shy;side to
            pro&shy;duce a shape-in&shy;side ef&shy;fect (since
            shape-in&shy;side still isn't sup&shy;por&shy;ted yet).
          </p>
        </div>
      </div>
    </Hero>
  );
};

export default Hero_Home;

// const Parapper = ({ children }) => {
//   const { ref } = useParallax({
//     speed: -100,
//     opacity: [29, 0, "easeOutQuint"],
//   });
//   return (
//     <div ref={ref} className="hero-home">
//       {children}
//     </div>
//   );
// };

const Hero = styled.div`
  width: 50vh;
  .hero-home {
    float: left;
    height: 100vh;
    margin-right: -3vw;
    top: 2vh;
    position: relative;
    rotate: 22deg;
    translate: 1vh 1vh;
    width: 50vh;
    z-index: 0;
  }
  @media screen and (orientation: portrait) {
    .hero-home {
      float: none;
      margin-bottom: 0;
    }
  }
  a {
    border-color: transparent;
    border-radius: 0.4vh;
    border-style: solid;
    border-width: 2px;
    display: inline-block;
    font-weight: 900;
    margin: -2px;
    text-decoration: none;
  }
  a:focus,
  a:hover {
    background: none;
    background-clip: unset;
    -webkit-background-clip: unset;
    border-color: currentColor;
    color: var(--color5);
    -webkit-text-fill-color: var(--color5);
  }
  h1 {
    display: inline-block;
    font-size: 13vh;
    font-weight: 400;
    line-height: 1.2em;
    position: absolute;
    text-transform: lowercase;
  }
  h1 b:nth-child(1) {
    left: 3.6vh;
    position: relative;
    top: -9.5vh;
  }
  h1 b:nth-child(1)::before {
    font: inherit;
    content: ": ";
    display: inline-block;
    letter-spacing: 0.2vh;
  }
  h1 b:nth-child(2) {
    left: 6.3vh;
    position: absolute;
    top: 51.2vh;
  }
  .hero-home p {
    background: -webkit-linear-gradient(
      var(--color6),
      var(--color5),
      var(--color4),
      var(--color3),
      var(--color2),
      var(--color1)
    );
    background-clip: text;
    -webkit-background-clip: text;
    font-family: Courier, monospace;
    font-size: 1.3vh;
    font-weight: 400;
    height: 100vh;
    hyphens: auto;
    margin: 0;
    letter-spacing: -0.09vh;
    line-height: 0.85em;
    padding: 0;
    position: relative;
    text-align: justify;
    -webkit-text-fill-color: transparent;
  }
  .jDots {
    position: absolute;
    top: 0;
    width: 20vh;
  }
  .jDots::before {
    content: "";
    display: block;
    float: left;
    height: 100vh;
    shape-outside: polygon(
      0% 0%,
      100% 0%,
      100% 18.3%,
      52.57% 18.33%,
      45.43% 19.41%,
      45.81% 28.88%,
      51.89% 29.84%,
      100% 29.81%,
      100% 40.58%,
      54.08% 40.5%,
      45.86% 41.7%,
      46.31% 51%,
      53.6% 52.13%,
      100% 52.07%,
      100% 73.5%,
      36.32% 73.5%,
      95.61% 100%,
      0% 100%
    );
    width: 18vh;
  }
  .jDots p {
    max-width: unset;
    width: 20vh;
  }
  .jDots p::before {
    content: "";
    display: block;
    float: right;
    height: 100vh;
    shape-outside: polygon(
      100% 0%,
      58.34% 0%,
      71.78% 0%,
      0% 0%,
      0% 18.45%,
      71.26% 19.66%,
      73.12% 28.06%,
      0% 29.14%,
      0% 40.55%,
      77.42% 41.64%,
      81.37% 50.19%,
      0% 51.89%,
      2.45% 73.5%,
      100% 73.5%
    );
    width: 1.75vh;
  }
  .jBig {
    position: absolute;
    top: 0;
  }
  .jBig::before {
    content: "";
    display: block;
    float: left;
    height: 100vh;
    shape-outside: polygon(
      0% 0%,
      100% 0.08%,
      100% 4.32%,
      95.05% 5.32%,
      95.16% 13.53%,
      100% 14.53%,
      100% 18.42%,
      95.42% 19.23%,
      95.68% 50.22%,
      95.21% 51.67%,
      93.52% 53.22%,
      90.05% 54.29%,
      84.94% 54.72%,
      72.21% 54.77%,
      68.26% 55.88%,
      68.26% 62.73%,
      72.12% 63.71%,
      100% 63.62%,
      99.78% 73.5%,
      73.5% 73.5%,
      74.39% 99.66%,
      0% 100%
    );
    width: 29vh;
  }
  .jBig p {
    max-width: unset;
    width: 50vh;
  }
  .jBig p::before {
    content: "";
    display: block;
    float: right;
    height: 100vh;
    shape-outside: polygon(
      100% 0%,
      0% 0%,
      0% 4.33%,
      38.9% 4.33%,
      44.95% 5%,
      46.24% 6.38%,
      46.24% 12.29%,
      45.78% 13.51%,
      41.52% 14.35%,
      0.11% 14.34%,
      0% 18.45%,
      39.28% 18.4%,
      44.38% 18.96%,
      46.24% 20.07%,
      46.21% 51.11%,
      44.03% 55.24%,
      37.11% 58.33%,
      27.62% 60.53%,
      16.31% 62.1%,
      0% 63.2%,
      0.01% 73.5%,
      74.76% 73.5%,
      75.78% 75.02%,
      90.75% 75.09%,
      40.38% 99.91%,
      100% 100%
    );
    width: 20.75vh;
  }
`;
