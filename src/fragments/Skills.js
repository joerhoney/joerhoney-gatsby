import * as React from "react";
import styled from "styled-components";
import "../layouts/icons.css";
import Icon from "../components/Icon";

const Browsers = () => {
  return (
    <Set className="icons">
      <Icon name="Chrome" />
      <Icon name="Firefox" />
      <Icon name="Ie" label="IE ☠️" />
      <Icon name="Safari" />
    </Set>
  );
};
const Cms = () => {
  return (
    <Set className="icons">
      <Icon name="Drupal" />
      <Icon name="Joomla" />
      <Icon name="Wordpress" label="WordPress" />
    </Set>
  );
};
const Communities = () => {
  return (
    <Set className="icons">
      <Icon name="Codepen" />
      <Icon name="Stackoverflow" label="Stack Overflow" />
    </Set>
  );
};
const Compilers = () => {
  return (
    <Set className="icons">
      <Icon name="Apache" />
      <Icon name="Babel" />
      <Icon name="Git" />
      <Icon name="NodejsSmall" label="Node.js" />
      <Icon name="Npm" label="npm" />
      {/* <Icon name="Bootstrap" /> */}
      <Icon name="Sass" />
    </Set>
  );
};
const Languages = () => {
  return (
    <Set className="icons">
      <Icon name="Html5" label="HTML5" />
      <Icon name="Css3Full" label="CSS3" />
      <Icon name="JsBadge" label="JavaScript" />
      <Icon name="React" />
      <Icon name="JqueryLogo" label="jQuery" />
      <Icon name="Php" />
      <Icon name="Python" />
      <Icon name="Markdown" />
      <Icon name="Modernizr" />
      <Icon name="Mysql" label="MySQL" />
      {/* <Icon name="Mongodb" /> */}
    </Set>
  );
};
const Os = () => {
  return (
    <Set className="icons">
      <Icon name="Apple" />
      <Icon name="Windows" />
      <Icon name="Linux" />
    </Set>
  );
};
const Services = () => {
  return (
    <Set className="icons">
      <Icon name="GithubBadge" label="Stack Overflow" />
      <Icon name="Aws" />
      <Icon name="DigitalOcean" label="Digital Ocean" />
      <Icon name="GoogleAnalytics" label="Google Analytics" />
      <Icon name="Atlassian" />
      <Icon name="Jira" />
      <Icon name="GoogleDrive" label="Google Drive" />
    </Set>
  );
};
const Software = () => {
  return (
    <Set className="icons">
      {/* <Icon name="AfterEffects" /> */}
      <Icon name="VSCode" />
      <Icon name="Atom" />
      <Icon name="Brackets" />
      <Icon name="Illustrator" />
      <Icon name="Photoshop" />
    </Set>
  );
};
const OtherTech = () => {
  return (
    <Set className="icons">
      <Icon name="Responsive" />
      <Icon name="W3C" />
      <Icon name="Terminal" />
    </Set>
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

const Set = styled.div`
  display: inline;
`;
