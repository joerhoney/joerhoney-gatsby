import React from "react";
import * as clss from "../css/form.module.css";

const Form = (props) => {
  return (
    <div className={clss.contact}>
      <form
        action="https://%66%6f%72%6d%73%75%62%6d%69%74.co/%6a%6f%65%72%68%6f%6e%65%79%40%67%6d%61%69%6c%2e%63%6f%6d"
        className={props.className}
        method="POST"
      >
        <input type="text" name="name" placeholder="Full Name" required />
        <input type="email" name="email" placeholder="Email Address" required />
        <input
          type="text"
          name="_subject"
          placeholder="Subject Line"
          required
        />
        <textarea
          placeholder="Your Message"
          name="message"
          rows="10"
          required
        ></textarea>
        <button type="submit">Send</button>
        <input type="hidden" name="_next" value="/thanks" />
      </form>
    </div>
  );
};

export default Form;
