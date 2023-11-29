import * as React from "react";
import "../css/icons.css";
import Icon from "../components/Icon";

const Browsers = () => {
  return (
    <div className="icons">
      <Icon name="Chrome" />
      <Icon name="Firefox" />
      <Icon name="Ie" label="IE ☠️" />
      <Icon name="Safari" />
    </div>
  );
};
const Cms = () => {
  return (
    <div className="icons">
      <Icon name="Drupal" />
      <Icon name="Gatsby" />
      <Icon name="Joomla" />
      <Icon name="Wordpress" label="WordPress" />
    </div>
  );
};
const Communities = () => {
  return (
    <div className="icons">
      <Icon name="Codepen" />
      <Icon name="Stackoverflow" label="Stack Overflow" />
    </div>
  );
};
const Compilers = () => {
  return (
    <div className="icons">
      <Icon name="Apache" />
      <Icon name="Babel" />
      <Icon name="Git" />
      <Icon name="Modernizr" />
      <Icon name="NodejsSmall" label="Node.js" />
      <Icon name="Npm" label="npm" />
      {/* <Icon name="Bootstrap" /> */}
      <Icon name="Sass" />
    </div>
  );
};
const Languages = () => {
  return (
    <div className="icons">
      <Icon name="Css3Full" label="CSS3" />
      <Icon name="Html5" label="HTML5" />
      <Icon name="JsBadge" label="JavaScript" />
      <Icon name="JqueryLogo" label="jQuery" />
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
    <div className="icons">
      <Icon name="Apple" />
      <Icon name="Windows" />
      <Icon name="Linux" />
    </div>
  );
};
const Services = () => {
  return (
    <div className="icons">
      <Icon name="GithubBadge" label="Stack Overflow" />
      <Icon name="Aws" />
      <Icon name="DigitalOcean" label="Digital Ocean" />
      <Icon name="GoogleAnalytics" label="Google Analytics" />
      <Icon name="Atlassian" />
      <Icon name="Jira" />
      <Icon name="GoogleDrive" label="Google Drive" />
    </div>
  );
};
const Software = () => {
  return (
    <div className="icons">
      {/* <Icon name="AfterEffects" /> */}
      <Icon name="VSCode" />
      <Icon name="Atom" />
      <Icon name="Brackets" />
      <Icon name="Illustrator" />
      <Icon name="Photoshop" />
    </div>
  );
};
const OtherTech = () => {
  return (
    <div className="icons">
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
