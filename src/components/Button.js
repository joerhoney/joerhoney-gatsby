import React from "react";
// Utilities
import isExternal from "@utils/isExternal.js";
import getDomainName from "@utils/getDomainName.js";
// Coponents
import Icon from "./Icon.js";
// CSS
import "@css/buttons.scss";

const Button = (props) => {
  const { children, className, href, preview } = props;
  const rel = isExternal(href) ? "noreferrer" : "";
  const target = isExternal(href) ? "_blank" : "";
  return (
    <a
      className={`button ${className ?? ""}`}
      href={href}
      rel={rel}
      target={target}
    >
      {isExternal(href) ? (
        <Icon className="external" label="false" name="ExternalLinkBold" />
      ) : (
        ""
      )}
      {children && <div className="text">{children}</div>}
      {preview && <div className="window">{getDomainName(href)}</div>}
    </a>
  );
};

export default Button;
