import React from "react";

export default function Wizard(props) {
  const { children, className, name, id } = props;

  return (
    <div className={`wizard ${className}`}>
      <input type="radio" id={id ? id : name} name={name} checked />
      {children}
    </div>
  );
}

export { Wizard, Q, A };
