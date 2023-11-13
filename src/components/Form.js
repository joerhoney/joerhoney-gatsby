import React from "react";
import styled from "styled-components";

const Form = (props) => {
  return (
    <Wrapper>
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
    </Wrapper>
  );
};

export default Form;

const Wrapper = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  max-width: calc(var(--max_text) + var(--unit24));
  padding: 0 var(--unit12);
  width: 100%;

  margin: auto;
  form {
    display: grid;
    gap: var(--unit4);
    grid-template-columns: 1fr 1fr;
    /* grid-template-rows: repeat(4, auto [row-top]); */
  }
  form > * {
    display: grid;
  }
  input,
  textarea {
    grid-column-start: 1;
    grid-column-end: span 2;
  }
  button {
    grid-column-start: 2;
  }
  @media (min-width: 640px) {
    form {
      grid-template-columns: 2fr 1fr 1fr;
      grid-template-rows: repeat(4, auto [row-top]);
    }
    input {
      grid-column-start: unset;
      grid-column-end: unset;
    }
    textarea {
      grid-column-start: 2;
      grid-column-end: span 3;
      grid-row-start: 1;
      grid-row-end: span 4;
    }
    button {
      grid-column-start: 3;
      grid-column-end: span end;
      grid-row-start: 5;
    }
  }
`;
