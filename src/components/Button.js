import React from "react";
// Utilities
import isExternal from "@utils/isExternal.js";
import getDomainName from "@utils/getDomainName.js";
// Components
import Icon from "./Icon.js";

/**
 * Link styled as a button. External links (containing "://") open in a new
 * tab and get the external-link icon. preview shows the domain on hover.
 */
const Button = ({ children, className, href = "", preview }) => {
  const external = isExternal(href);
  return (
    <a
      className={`button ${className ?? ""}`}
      href={href}
      rel={external ? "noreferrer" : undefined}
      target={external ? "_blank" : undefined}
    >
      {external && (
        <Icon className="external" label={false} name="ExternalLinkBold" />
      )}
      {children && <div className="text">{children}</div>}
      {preview && <div className="window">{getDomainName(href)}</div>}
    </a>
  );
};

export default Button;
