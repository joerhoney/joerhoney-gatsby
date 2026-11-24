import * as React from "react";
// Components
import Icon from "@components/Icon";

/*
  Skill icon groups for the Developer page. To add a skill, add its icon name
  to a group (the name must exist in src/components/Icon.js). Use
  { name, label } for a custom label, or { name, tight: true } for long names.
*/
const groups = {
  Languages: [
    "CSS3",
    "HTML5",
    "JavaScript",
    "jQuery",
    "Markdown",
    { name: "Mysql", label: "MySQL" },
    { name: "Php", label: "PHP" },
    "React",
  ],
  Cms: ["Contentful", "Drupal", "Gatsby", "Joomla", "Strapi", "WordPress"],
  Compilers: [
    "Apache",
    "Babel",
    "Git",
    "Modernizr",
    "Node.js",
    { name: "NPM", label: "npm" },
    "Sass",
    "Tailwind",
  ],
  OtherTech: ["BEM", "Responsive", "W3C", "Terminal"],
  Communities: ["CodePen", { name: "Stack Overflow", tight: true }],
  Services: [
    "GitHub",
    "AWS",
    { name: "Digital Ocean", tight: true },
    "Figma",
    "Analytics",
    "Drive",
    "Atlassian",
    "Jira",
    "Stripe",
  ],
  Browsers: ["Chrome", "Firefox", "Edge", "Safari"],
  Software: [
    "VS Code",
    "Atom",
    "Brackets",
    "FileZilla",
    "Illustrator",
    "Photoshop",
    "Designer",
    "Photo",
    "Selenium",
  ],
  Os: ["Apple", "Windows", "Linux"],
};

const IconGroup = ({ items }) => (
  <div className="icons inline">
    {items.map((item) => {
      const { name, label, tight } =
        typeof item === "string" ? { name: item } : item;
      return (
        <Icon
          key={name}
          name={name}
          label={label}
          className={tight ? "tracking-tight" : undefined}
        />
      );
    })}
  </div>
);

/** Every group, in display order. */
const AllSkills = () =>
  Object.entries(groups).map(([key, items]) => (
    <IconGroup key={key} items={items} />
  ));

export { AllSkills, IconGroup, groups as skillGroups };
