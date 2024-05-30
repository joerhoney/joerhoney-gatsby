import React from "react";
// CSS
import "@css/scheme.css";

class Scheme extends React.Component {
  componentDidMount() {
    document
      .getElementById("color-scheme")
      .querySelector(
        `input[value=${localStorage.getItem("colorScheme") ?? "auto"}]`
      ).checked = true;
  }
  render() {
    return (
      <>
        <fieldset id="color-scheme">
          <label
            className="light-scheme-icon"
            htmlFor="light-scheme"
            title="Light color scheme"
          >
            <input
              aria-label="Light color scheme"
              name="color-scheme"
              id="light-scheme"
              type="radio"
              value="light"
              onClick={() => localStorage.setItem("colorScheme", "light")}
            />
          </label>
          <label
            className="auto-scheme-icon"
            htmlFor="auto-scheme"
            title="Your default color scheme"
          >
            <input
              aria-label="Auto color scheme"
              name="color-scheme"
              id="auto-scheme"
              type="radio"
              value="auto"
              onClick={() => localStorage.setItem("colorScheme", "auto")}
            />
          </label>
          <label
            className="dark-scheme-icon"
            htmlFor="dark-scheme"
            title="Dark color scheme"
          >
            <input
              aria-label="Dark color scheme"
              name="color-scheme"
              id="dark-scheme"
              type="radio"
              value="dark"
              onClick={() => localStorage.setItem("colorScheme", "dark")}
            />
          </label>
        </fieldset>
      </>
    );
  }
}

export default Scheme;
