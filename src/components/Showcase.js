import React from "react";
import styled from "styled-components";
// import { Link } from "gatsby";
// import { useParallax } from "react-scroll-parallax";
import getDomainName from "../utils/getDomainName";

const Showcase = (props) => {
  return (
    <Parapper>
      <Wrapper className={props.className}>
        <h3>{props.title}</h3>
        {props.desc && <p className="desc">{props.desc}</p>}
        {props.src && (
          <img
            alt={
              props.alt
                ? props.alt
                : props.href
                ? `Screenshot of ${getDomainName(props.href)}.`
                : `Screenshot of ${props.title}.`
            }
            src={props.src}
            loading="lazy"
            width="180px"
          />
        )}
        {props.children}
        {props.skills && (
          <ul className="skills">
            {props.skills.map((skill) => (
              <li key={skill}>
                <b>{skill}</b>
              </li>
            ))}
          </ul>
        )}
        {props.href && (
          <a
            className="button at-bottom"
            href={props.href}
            rel="noreferrer"
            target="_blank"
          >
            See Project: {getDomainName(props.href)}
          </a>
        )}
      </Wrapper>
    </Parapper>
  );
};

export default Showcase;

// const Parapper = ({ children }) => {
//   const { ref } = useParallax({
//     translateX: 20,
//   });
//   return (
//     <div
//       ref={ref}
//       style={{
//         alignSelf: "center",
//         paddingLeft: "var(--unit8)",
//         paddingRight: "var(--unit8)",
//       }}
//     >
//       {children}
//     </div>
//   );
// };

const Parapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  /* box-sizing: border-box;
  display: grid;
  margin-top: var(--unit12);
  max-width: calc(var(--max_text) + var(--unit24));
  padding: 0 var(--unit6); */
  position: relative;
  width: 100%;
  /* @media (max-width: 1000px) and (min-width: 601px) {
    margin-right: calc(300px - 30vw);
    width: auto;
  } */
  /* @media (max-width: 810px) {
    margin-right: 40px;
  } */
`;

const Wrapper = styled.div`
  align-self: center;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  max-width: calc(var(--max_text) + var(--unit24));
  margin-bottom: 360px;
  padding: 0 var(--unit12);
  position: relative;
  width: 100%;
  h3 {
    align-items: flex-end;
    bottom: calc(100% - 60px);
    display: flex;
    justify-content: flex-end;
    flex-wrap: wrap;
    font-size: 2rem;
    margin-top: 0;
    max-width: 100%;
    position: absolute;
    right: var(--unit6);
    rotate: 22deg;
    text-align: right;
    transform-origin: bottom right;
    width: 360px;
  }
  h3 + p.desc::before {
    clear: right;
    content: "";
    display: block;
    float: right;
    height: 40px;
    shape-outside: polygon(0% 0%, 100% 0%, 100% 100%);
    width: 130px;
  }
  p.desc {
    font-weight: bold;
  }
  img {
    box-sizing: border-box;
    margin-bottom: 1.5em;
    width: 100%;
  }
  h3 + img {
    padding-top: 50px;
  }
  ul.skills {
    /* align-items: flex-end; */
    list-style: none;
    margin: 0 0 var(--unit-30);
    padding: 0;
    text-align: right;
  }
  ul.skills li {
    color: var(--color3);
    font-weight: bold;
    margin-bottom: var(--unit2);
    position: relative;
    white-space: nowrap;
  }
  a.button {
    align-self: center;
    display: inline-block;
    font-weight: bold;
    margin-bottom: var(--unit1);
    margin-top: 0;
    width: 80%;
  }
  a.button.at-bottom {
    rotate: 22deg;
    /* top: 100%; */
    transform-origin: left;
  }
  @media (min-width: 600px) {
    margin-bottom: 160px;
    padding-right: 200px;
    margin-top: 0;
    h3 {
      bottom: calc(100% - 114px);
    }
    ul.skills {
      display: flex;
      flex-direction: column;
      top: 75px;
      left: calc(100% - 170px);
      margin: 0;
      position: absolute;
      text-align: left;
    }
    ul.skills li {
      transform: rotate(22deg);
      transform-origin: left;
    }
    a.button {
      align-self: center;
      margin-top: var(--unit2);
      position: relative;
      width: 50%;
    }
    a.button.at-bottom {
      rotate: unset;
    }
  }
  @media (min-width: 1000px) {
    padding: 0 var(--unit12);
    h3 {
      bottom: calc(100% - 106px);
      right: var(--unit-6);
    }
    ul.skills {
      left: calc(100% - 70px);
    }
  }
  @media (prefers-color-scheme: dark) {
    ul.skills li {
      color: var(--color3);
    }
  }
`;
