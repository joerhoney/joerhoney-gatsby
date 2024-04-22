import React from "react";
import { Script } from "gatsby";
/* CSS */
import "@css/scheme.css";

const Scheme = () => {
  return (
    <>
      <fieldset id="color-scheme">
        <label
          class="light-scheme-icon"
          htmlFor="light-scheme"
          title="Light color scheme"
        >
          <input
            name="color-scheme"
            id="light-scheme"
            type="radio"
            value="light"
            onClick={localStorage.setItem("colorScheme", "light")}
          />
        </label>
        <label
          class="auto-scheme-icon"
          htmlFor="auto-scheme"
          title="Your default color scheme"
        >
          <input
            name="color-scheme"
            id="auto-scheme"
            type="radio"
            value="auto"
            onClick={localStorage.removeItem("colorScheme")}
          />
        </label>
        <label
          class="dark-scheme-icon"
          htmlFor="dark-scheme"
          title="Dark color scheme"
        >
          <input
            name="color-scheme"
            id="dark-scheme"
            type="radio"
            value="dark"
            onClick={localStorage.setItem("colorScheme", "dark")}
          />
        </label>
      </fieldset>
      <Script id="second-unique-id">{`
window.onload = () => {
  document
    .getElementById("color-scheme")
    .querySelector(
      \`input[value=\${localStorage.getItem("colorScheme") ?? "auto"}]\`
    ).checked = true;
};`}</Script>
    </>
  );
};

export default Scheme;
