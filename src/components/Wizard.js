import React from "react";
// Components
import ConditionalWrap from "@utils/ConditionalWrap";
// CSS
import "@css/wizard.scss";

const Wizard = (props) => {
  // const { children, className, id } = props;
  const renderChildren = (children) => {
    return React.Children.map(children, (child) => {
      if (React.isValidElement(child)) {
        return React.cloneElement(child, {
          name: props.name,
          start: props.start,
          children: renderChildren(child.props.children),
        });
      }
      return child;
    });
  };

  return (
    <div className={`wizard ${props.className}`}>
      {renderChildren(props.children)}
      <label className="qa_restart" htmlFor={props.start}>
        Start over
      </label>
    </div>
  );
};

const Step = (props) => {
  const { children, id, name, start } = props;
  return (
    <>
      {id && (
        <input type="radio" id={id} name={name} defaultChecked={start === id} />
      )}
      <ul className="step">{children}</ul>
    </>
  );
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
  const { a, goto, id } = props;
  return (
    <li>
      <div className="answer">
        {goto.match(/#[a-z]+/gi) ? (
          <a className="qa_bubble" href={goto}>
            {a}
          </a>
        ) : (
          <label className="qa_bubble" htmlFor={goto}>
            {a}
          </label>
        )}
      </div>
      {props.children}
    </li>
  );
};

const End = (props) => {
  const { children, id, name } = props;
  return (
    <>
      {id && <input type="radio" id={id} name={name} />}
      <div className="end">
        <div className="qa_bubble">{children}</div>
      </div>
    </>
  );
};

export { Wizard, Step, Q, A, End };
