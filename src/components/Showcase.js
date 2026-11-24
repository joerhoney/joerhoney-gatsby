import React from "react";
// Utilities
import getDomainName from "@utils/getDomainName";
// Components
import { Link } from "gatsby";
import Button from "./Button.js";
import Tags from "./Tags.js";

/**
 * One portfolio entry: title, short description, screenshot, body copy
 * (children), skill chips and a button.
 *
 * href  External project link ("See project").
 * to    Internal project story, e.g. "/work/r3risk/" ("See project story").
 */
const Showcase = ({
  alt,
  children,
  className,
  desc,
  href,
  skills,
  src,
  styles,
  title,
  to,
}) => (
  <div
    className={["showcase", className].filter(Boolean).join(" ")}
    style={styles}
  >
    <div className="heading">
      <h3>{title}</h3>
      {desc && <p className="desc">{desc}</p>}
    </div>
    {src && (
      <img
        alt={alt ?? `Screenshot of ${href ? getDomainName(href) : title}.`}
        src={src}
        loading="lazy"
        width="180px"
      />
    )}
    <div className="content">{children}</div>
    {skills && <Tags items={skills} />}
    {href && (
      <Button href={href}>
        See project<span className="blinking">:</span>
      </Button>
    )}
    {to && (
      <Link className="button" to={to}>
        See project story<span className="blinking">:</span>
      </Link>
    )}
  </div>
);

export default Showcase;
