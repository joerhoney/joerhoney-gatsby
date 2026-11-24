import React from "react";

/**
 * A row of skill/tech chips. Accepts an array or a comma-separated string
 * (the format used in markdown frontmatter).
 */
const Tags = ({ items, className = "skills items" }) => {
  const list = (Array.isArray(items) ? items : (items ?? "").split(","))
    .map((item) => item.trim())
    .filter(Boolean);
  if (!list.length) return null;
  return (
    <ul className={className}>
      {list.map((item) => (
        <li key={item}>
          <b>{item}</b>
        </li>
      ))}
    </ul>
  );
};

export default Tags;
