import React, { useEffect } from "react";

// Light / auto / dark picker. The CSS reads the checked radio with :has()
// (see src/css/base/_colors.scss); this only remembers the choice.
const schemes = [
  { value: "light", title: "Light color scheme", label: "Light color scheme" },
  {
    value: "auto",
    title: "Your default color scheme",
    label: "Auto color scheme",
  },
  { value: "dark", title: "Dark color scheme", label: "Dark color scheme" },
];

const Scheme = ({ style }) => {
  useEffect(() => {
    let saved = "auto";
    try {
      saved = localStorage.getItem("colorScheme") ?? "auto";
    } catch (e) {}
    const input = document.getElementById(`${saved}-scheme`);
    if (input) input.checked = true;
  }, []);
  const remember = (event) => {
    try {
      localStorage.setItem("colorScheme", event.target.value);
    } catch (e) {}
  };
  return (
    <fieldset id="color-scheme" className="color-scheme" style={style}>
      {schemes.map(({ value, title, label }) => (
        <label
          key={value}
          className={`${value}-scheme-icon`}
          htmlFor={`${value}-scheme`}
          title={title}
        >
          <input
            aria-label={label}
            name="color-scheme"
            id={`${value}-scheme`}
            type="radio"
            value={value}
            onChange={remember}
          />
        </label>
      ))}
    </fieldset>
  );
};

export default Scheme;
