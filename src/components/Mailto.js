import React from "react";
// Utilities
import concatQuery from "@utils/concatQuery.js";
// Coponents
import Icon from "./Icon.js";
// CSS
import "@css/buttons.scss";

const Mailto = (props) => {
  const { children, className, subject, message } = props;
  const email = "%6A%6F%65@%6A%6F%65rh%6Fn%65y%2Ec%6Fm";
  const sub = subject ? "subject=" + encodeURIComponent(subject) : null;
  const msg = message
    ? "body=" +
      encodeURIComponent(
        message +
          " Please _______ (email/call/text) me at _______ (number if applicable)."
      )
    : null;
  const mailto = "mailto:" + email + concatQuery([sub, msg]);
  return (
    <a className={`button ${className ?? ""}`} href={mailto} target="_blank">
      <Icon className="mailto" label="false" name="MailBold" />
      {children && <div className="text">{children}</div>}
    </a>
  );
};

export default Mailto;
