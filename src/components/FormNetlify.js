import React from "react";
// CSS
import "@css/buttons.css";
import "@css/form.css";

const Form = (props) => {
  return (
    <div className="contact">
      <form
        name="contact"
        className={props.className}
        action="/thanks-contact"
        method="POST"
        data-netlify="true"
      >
        <input type="text" name="name" placeholder="Full Name" required />
        <input type="email" name="email" placeholder="Email Address" required />
        <input
          type="text"
          name="_subject"
          placeholder="Subject Line"
          required
        />
        <input
          type="url"
          name="website"
          placeholder="Website (if you have one)"
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
