import * as React from "react";
// Components
import Icon from "@components/Icon";
// CSS
import "@css/icons.scss";

const Browsers = () => {
  return (
    <div className="icons inline">
      <Icon name="Chrome" />
      <Icon name="Firefox" />
      <Icon name="Edge" />
      <Icon name="Safari" />
    </div>
  );
};
const Cms = () => {
  return (
    <div className="icons inline">
      <Icon name="Contentful" />
      <Icon name="Drupal" />
      <Icon name="Gatsby" />
      <Icon name="Joomla" />
      <Icon name="Strapi" />
      <Icon name="WordPress" />
    </div>
  );
};
const Communities = () => {
  return (
    <div className="icons inline">
      <Icon name="CodePen" />
      <Icon name="Stack Overflow" className="tight-text" />
    </div>
  );
};
const Compilers = () => {
  return (
    <div className="icons inline">
      <Icon name="Apache" />
      <Icon name="Babel" />
      <Icon name="Git" />
      <Icon name="Modernizr" />
      <Icon name="Node.js" />
      <Icon name="NPM" label="npm" />
      {/* <Icon name="Bootstrap" /> */}
      <Icon name="Sass" />
      <Icon name="Tailwind" />
    </div>
  );
};
const Languages = () => {
  return (
    <div className="icons inline">
      <Icon name="CSS3" />
      <Icon name="HTML5" />
      <Icon name="JavaScript" />
      <Icon name="jQuery" />
      <Icon name="Markdown" />
      {/* <Icon name="Mongodb" /> */}
      <Icon name="Mysql" label="MySQL" />
      <Icon name="Php" label="PHP" />
      {/* <Icon name="Python" /> */}
      <Icon name="React" />
    </div>
  );
};
const Os = () => {
  return (
    <div className="icons inline">
      <Icon name="Apple" />
      <Icon name="Windows" />
      <Icon name="Linux" />
    </div>
  );
};
const Services = () => {
  return (
    <div className="icons inline">
      <Icon name="GitHub" />
      <Icon name="AWS" />
      <Icon name="Digital Ocean" className="tight-text" />
      <Icon name="Figma" />
      <Icon name="Analytics" />
      <Icon name="Drive" />
      <Icon name="Atlassian" />
      <Icon name="Jira" />
      <Icon name="Stripe" />
    </div>
  );
};
const Software = () => {
  return (
    <div className="icons inline">
      {/* <Icon name="AfterEffects" /> */}
      <Icon name="VS Code" />
      <Icon name="Atom" />
      <Icon name="Brackets" />
      <Icon name="FileZilla" />
      <Icon name="Illustrator" />
      <Icon name="Photoshop" />
      <Icon name="Designer" />
      <Icon name="Photo" />
      <Icon name="Selenium" />
    </div>
  );
};
const OtherTech = () => {
  return (
    <div className="icons inline">
      <Icon name="BEM" />
      <Icon name="Responsive" />
      <Icon name="W3C" />
      <Icon name="Terminal" />
    </div>
  );
};

export {
  Browsers,
  Cms,
  Communities,
  Compilers,
  Languages,
  Os,
  Services,
  Software,
  OtherTech,
};
