import React from "react";
// CSS
import "@css/buttons.scss";
import "@css/form.scss";

const Form = (props) => {
  return (
    <div className="contact">
      <form
        name="Contact"
        className={props.className}
        action="/thanks-contact"
        method="POST"
        data-netlify="true"
      >
        <input type="hidden" name="form-name" value="Contact" />
        <input type="text" name="name" placeholder="Full Name *" required />
        <input
          type="email"
          name="email"
          placeholder="Email Address *"
          required
        />
        <input
          id="subject"
          type="text"
          name="subject"
          placeholder="Subject Line"
        />
        <input
          type="url"
          name="website"
          placeholder="Website (if you have one)"
        />
        <textarea
          id="message"
          placeholder="Your Message *"
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
