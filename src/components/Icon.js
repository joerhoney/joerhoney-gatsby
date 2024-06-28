import React from "react";
// Utilities
import ConditionalWrap from "@utils/ConditionalWrap";
// Components
// Devicons from the react-icons collection: https://react-icons.github.io/react-icons/icons?name=di
// More icons: https://react-icons.github.io/react-icons/
import {
  DiAtom,
  DiBrackets,
  DiModernizr,
  DiResponsive,
  DiTerminal,
  DiW3C,
} from "react-icons/di";
import { HiExternalLink, HiMenu } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import {
  SiAdobeaftereffects,
  // SiAdobedreamweaver,
  SiAdobeillustrator,
  // SiAdobeindesign,
  SiAdobephotoshop,
  // SiAdobepremierepro,
  SiAffinitydesigner,
  SiAffinityphoto,
  SiAmazonaws,
  SiApache,
  SiApple,
  SiAtlassian,
  SiBabel,
  SiBem,
  SiGnubash,
  SiBootstrap,
  SiCodeium,
  SiCodepen,
  SiContentful,
  SiCss3,
  SiDigitalocean,
  SiDrupal,
  SiFigma,
  SiFilezilla,
  SiFirefoxbrowser,
  SiFreecodecamp,
  SiGatsby,
  SiGit,
  SiGithub,
  SiGoogleanalytics,
  SiGooglechrome,
  SiGoogledrive,
  SiGravatar,
  SiHtml5,
  SiJavascript,
  SiJira,
  SiJoomla,
  SiJquery,
  SiLinkedin,
  SiLinux,
  SiMarkdown,
  SiMedium,
  SiMicrosoftedge,
  SiMongodb,
  SiMysql,
  SiNodedotjs,
  SiNpm,
  SiPhp,
  SiPython,
  SiReact,
  SiSafari,
  SiSass,
  SiSelenium,
  SiStackoverflow,
  SiStrapi,
  SiStripe,
  SiTailwindcss,
  SiVisualstudiocode,
  SiWindows,
  SiWordpress,
  SiZsh,
} from "react-icons/si";
import {
  // SvgClose,
  SvgHamburger,
  SvgResponsive,
  SvgW3c,
} from "./SVGs.js";

// These are Devicons which are missing from the react-icons collection: https://react-icons.github.io/react-icons/icons?name=di

const Icon = (props) => {
  const iconMap = {
    // DevIcons
    Atom: <DiAtom />,
    Brackets: <DiBrackets />,
    Modernizr: <DiModernizr />,
    Terminal: <DiTerminal />,
    // Heroicons
    ExternalLink: <HiExternalLink />,
    Menu: <HiMenu />,
    // Ionicons 5
    Close: <IoClose />,
    // Simple Icons
    AfterEffects: <SiAdobeaftereffects />,
    Apache: <SiApache />,
    Apple: <SiApple />,
    Atlassian: <SiAtlassian />,
    AWS: <SiAmazonaws />,
    Babel: <SiBabel />,
    Bash: <SiGnubash />,
    BEM: <SiBem />,
    Bootstrap: <SiBootstrap />,
    Chrome: <SiGooglechrome />,
    Codeium: <SiCodeium />,
    CodePen: <SiCodepen />,
    Contentful: <SiContentful />,
    CSS3: <SiCss3 />,
    Designer: <SiAffinitydesigner />,
    DigitalOcean: <SiDigitalocean />,
    Drupal: <SiDrupal />,
    Edge: <SiMicrosoftedge />,
    Figma: <SiFigma />,
    FileZilla: <SiFilezilla />,
    Firefox: <SiFirefoxbrowser />,
    freeCodeCamp: <SiFreecodecamp />,
    Gatsby: <SiGatsby />,
    Git: <SiGit />,
    GitHub: <SiGithub />,
    Gravatar: <SiGravatar />,
    GoogleAnalytics: <SiGoogleanalytics />,
    GoogleDrive: <SiGoogledrive />,
    HTML5: <SiHtml5 />,
    Illustrator: <SiAdobeillustrator />,
    JavaScript: <SiJavascript />,
    Jira: <SiJira />,
    Joomla: <SiJoomla />,
    jQuery: <SiJquery />,
    LinkedIn: <SiLinkedin />,
    Linux: <SiLinux />,
    Markdown: <SiMarkdown />,
    Medium: <SiMedium />,
    Mongodb: <SiMongodb />,
    Mysql: <SiMysql />,
    Nodejs: <SiNodedotjs />,
    NPM: <SiNpm />,
    Photo: <SiAffinityphoto />,
    Photoshop: <SiAdobephotoshop />,
    Php: <SiPhp />,
    Python: <SiPython />,
    React: <SiReact />,
    Safari: <SiSafari />,
    Sass: <SiSass />,
    Selenium: <SiSelenium />,
    StackOverflow: <SiStackoverflow />,
    Strapi: <SiStrapi />,
    Stripe: <SiStripe />,
    Tailwind: <SiTailwindcss />,
    VSCode: <SiVisualstudiocode />,
    Windows: <SiWindows />,
    WordPress: <SiWordpress />,
    Zsh: <SiZsh />,
    // Custom icons
    Hamburger: <SvgHamburger />,
    Responsive: <SvgResponsive />,
    W3C: <SvgW3c />,
  };

  const { className, href, name } = props;
  const label = props.label ? props.label : name;
  const icon = name.replace(/\.|\s/g, "");
  console.log("was: ", name, " now: ", icon);

  return (
    <>
      {name && (
        <ConditionalWrap
          condition={href}
          wrapper={(children) => (
            <a
              className="icon-link"
              href={href}
              rel="noreferrer"
              target="_blank"
            >
              {children}
            </a>
          )}
        >
          <div className={`icon ${className ?? ""}`}>
            {iconMap[icon]}
            {label !== "false" ? <b>{label}</b> : ""}
          </div>
        </ConditionalWrap>
      )}
    </>
  );
};

export default Icon;
