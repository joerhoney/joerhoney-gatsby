import React from "react";
// CSS
import "@css/wizard.scss";

const Wizard = (props) => {
  // const { children, className, id } = props;
  const renderChildren = (children) => {
    return React.Children.map(children, (child) => {
      if (React.isValidElement(child)) {
        return React.cloneElement(child, {
          name: props.name,
          children: renderChildren(child.props.children),
        });
      }
      return child;
    });
  };

  return (
    <div className={`wizard ${props.className}`}>
      <input
        type="radio"
        id={props.id}
        name={props.name}
        defaultChecked={true}
      />
      {renderChildren(props.children)}
      <label className="qa_restart" htmlFor={props.id}>
        Start over
      </label>
    </div>
  );
};

const Step = (props) => {
  const { children } = props;
  return <ul className="step">{children}</ul>;
};

const Q = (props) => {
  return (
    <li>
      <div className="question">
        <div className="qa_bubble">{props.children}</div>
      </div>
    </li>
  );
};

const A = (props) => {
  const { a, goto, id, name } = props;
  return (
    <li>
      <div className="answer">
        <label className="qa_bubble" htmlFor={goto ? goto : id}>
          {a}
        </label>
      </div>
      {id && <input type="radio" id={id} name={name} />}
      {props.children}
    </li>
  );
};

const End = (props) => {
  return (
    <div className="end">
      <div className="qa_bubble">{props.children}</div>
    </div>
  );
};

export { Wizard, Step, Q, A, End };
