import React from "react";
// CSS
import "@css/buttons.scss";
import "@css/form.css";

const Form = (props) => {
  return (
    <div className="contact">
      <form
        action="https://formspree.io/f/xvojjlev"
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
      </form>
    </div>
  );
};

export default Form;
