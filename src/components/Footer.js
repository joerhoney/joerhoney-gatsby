import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <Wrapper>
      <div className="inner">
        {/* <ul className="sitemap">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/story">About me</a>
          </li>
          <li>
            <a href="#contact">Contact me</a>
          </li>
        </ul> */}
        <p className="copyright">
          &copy;{new Date().getFullYear()} Joe Rhoney.
          <br />
          Proudly built with Gatsby.
        </p>
      </div>
    </Wrapper>
  );
};

export default Footer;

const Wrapper = styled.footer`
  bottom: 0;
  left: 0;
  position: fixed;
  z-index: 10;
  width: 300px;
  .inner::before {
    background-color: var(--color2);
    background-image: var(--gradFooter);
    bottom: 0;
    content: "";
    left: -46px;
    position: absolute;
    rotate: 22deg;
    transform-origin: bottom left;
    z-index: -1;
    width: 304px;
    height: 122px;
  }
  .inner {
    box-sizing: border-box;
    color: var(--color5);
    opacity: 0.66;
    padding: var(--unit2);
    /* max-width: var(--max_text); */
    transition: all ease 0.5s;
  }
  .inner:hover {
    color: var(--color6);
    opacity: 1;
  }
  /* .sitemap {
    list-style: none;
    margin: 0;
    padding: 0;
  } */
  .copyright {
    font-size: 0.8rem;
    margin-bottom: 0;
    margin-top: var(--unit2);
  }
`;
