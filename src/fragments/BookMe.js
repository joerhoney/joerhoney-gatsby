import React from "react";
// Coponents
import Icon from "@components/Icon.js";
// CSS
import "@css/buttons.scss";

const BookMe = ({ children, icon = true, className }) => {
  return (
    <a
      className={`bookme ${className ?? ""}`}
      href="https://calendly.com/joerhoney/30-min-call"
      target="_blank"
    >
      {icon && <Icon label="false" name="CalendarBold" />}
      {children || "Book me"}
    </a>
  );
};

export default BookMe;
