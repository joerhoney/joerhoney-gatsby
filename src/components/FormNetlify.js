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
        <input type="hidden" name="_next" value="/thanks-contact" />
        <input
          type="hidden"
          name="_url"
          value="https://joerhoney.com/#contact"
        />
      </form>
    </div>
  );
};

export default Form;
