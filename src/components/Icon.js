import React from "react";
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
import { HiMenu, HiOutlineExternalLink, HiOutlineMail } from "react-icons/hi";
import {
  IoClose,
  IoArrowDownCircleOutline,
  IoArrowBackCircleOutline,
  IoArrowForwardCircleOutline,
  IoArrowUpCircleOutline,
} from "react-icons/io5";
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
  SvgArrowSketch,
  SvgCalendarBold,
  // SvgClose,
  SvgExternalLinkBold,
  SvgHamburger,
  SvgMailBold,
  SvgResponsive,
  SvgW3c,
} from "./SVGs.js";

// Icon name (spaces/dots removed) → icon element. Built once, not per render.
const iconMap = {
  // DevIcons
  Atom: <DiAtom />,
  Brackets: <DiBrackets />,
  Modernizr: <DiModernizr />,
  Terminal: <DiTerminal />,
  // Heroicons
  // ExternalLinkBold: <HiExternalLink />,
  ExternalLink: <HiOutlineExternalLink />,
  Mail: <HiOutlineMail />,
  Menu: <HiMenu />,
  // Ionicons 5
  Close: <IoClose />,
  ArrowBack: <IoArrowBackCircleOutline />,
  ArrowDown: <IoArrowDownCircleOutline />,
  ArrowForward: <IoArrowForwardCircleOutline />,
  ArrowUp: <IoArrowUpCircleOutline />,
  // Simple Icons
  AfterEffects: <SiAdobeaftereffects />,
  Analytics: <SiGoogleanalytics />,
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
  Drive: <SiGoogledrive />,
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
  //Simple Line Icons
  // ArrowDown: <SlArrowDownCircle />,
  // ArrowLeft: <SlArrowLeftCircle />,
  // ArrowRight: <SlArrowRightCircle />,
  // ArrowUp: <SlArrowUpCircle />,
  // Custom icons
  ArrowSketch: <SvgArrowSketch />,
  CalendarBold: <SvgCalendarBold />,
  ExternalLinkBold: <SvgExternalLinkBold />,
  Hamburger: <SvgHamburger />,
  MailBold: <SvgMailBold />,
  Responsive: <SvgResponsive />,
  W3C: <SvgW3c />,
};

/**
 * <Icon name="GitHub" />            icon + its name as a label
 * <Icon name="Mail" label={false} /> icon only
 * <Icon name="Node.js" label="npm" /> custom label
 * href wraps it in an external link.
 */
const Icon = ({ className, href, label, name, style }) => {
  if (!name) return null;
  const text = label === undefined ? name : label;
  const icon = (
    <div className={`icon ${className ?? ""}`} style={style}>
      {iconMap[name.replace(/\.|\s/g, "")]}
      {text !== false && text !== "false" && <b>{text}</b>}
    </div>
  );
  return href ? (
    <a className="icon-link" href={href} rel="noreferrer" target="_blank">
      {icon}
    </a>
  ) : (
    icon
  );
};

export default Icon;
