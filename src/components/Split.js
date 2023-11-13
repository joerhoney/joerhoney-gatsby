import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
// import { useParallax } from "react-scroll-parallax";
import { Parallax } from "react-scroll-parallax";
import { StaticImage } from "gatsby-plugin-image";

const Split = (props) => {
  return <SplitWrap className={props.className}>{props.children}</SplitWrap>;
};

const SplitWrap = styled.div`
  display: grid;
  box-sizing: border-box;
  grid-template-columns: 50vw 50vw;
  grid-template-rows: 100vh;
  position: relative;
  rotate: 22deg;
  width: 100vw;
  .split-half {
    display: flex;
  }
  .split-half .cell {
    align-content: center;
    align-items: center;
    box-sizing: border-box;
    color: currentColor;
    justify-content: center;
    justify-items: center;
    /* height: 100%; */
  }
  .split-half:nth-child(1) {
    justify-content: flex-end;
  }
  .split-half:nth-child(2) {
    justify-content: flex-start;
  }
  .split-half:nth-child(1) .cell .content {
    padding-left: var(--unit12);
  }
  .split-half:nth-child(2) .cell .content {
    padding-right: var(--unit12);
  }
  /* .split-half > div {
    height: 100%;
  } */
  .split-half:nth-child(1) .cell {
    display: grid;
    grid-template-columns: [content] calc(50vw - (5.5vh + 4.4vw)) [title] calc(
        5.5vh + 4.4vw
      );
    grid-template-rows: [space] 100vh;
  }
  .split-half:nth-child(2) .cell {
    display: grid;
    grid-template-columns: [title] calc(5.5vh + 4.4vw) [content] calc(
        50vw - (5.5vh + 4.4vw)
      );
    grid-template-rows: [space] 100vh;
  }
  .split-half:nth-child(1) img {
    right: 0;
  }
  .split-half:nth-child(2) img {
    left: 0;
  }
  @media (orientation: portrait) {
    .split-half:nth-child(1) img {
      left: -50%;
      width: 150%;
    }
    .split-half:nth-child(2) img {
      right: -50%;
      width: 150%;
    }
  }
  .split-half .cell .title {
    grid-column: title;
    grid-row: space;
    margin: 0;
    padding: 0;
  }
  .split-half .cell .content {
    box-sizing: border-box;
    grid-column: content;
    grid-row: space;
    margin: 0;
    padding: 0;
    /* width: calc(50vw - (5.5vh + 4.4vw)); */
  }
  .split-half:nth-child(1) .cell .content {
    text-align: right;
  }
  .split-half h2 {
    margin: 0;
    padding: 0;
    rotate: -90deg;
    text-align: center;
  }
  :nth-child(1)::before {
    left: -60vh;
  }
  :nth-child(2)::before {
    right: -60vh;
  }
`;

const Half = (props) => {
  const alt = props.alt ?? "";
  const src = props.src;
  console.log(props.src);
  console.log(src);
  return (
    <Halfwrap className={`${props.className} split-half`}>
      {props.src && (
        <StaticImage
          alt={alt}
          layout="fullWidth"
          placeholder="blurred"
          src={src}
          style={{ objectPosition: props.position }}
        />
      )}
      <Parallax className="cell" speed={props.speed}>
        <div className="title">
          <h2>{props.heading}</h2>
        </div>
        <div className="content">
          {props.children}
          {props.button && (
            <Link className="button" to={props.to}>
              {props.button}
            </Link>
          )}
        </div>
      </Parallax>
    </Halfwrap>
  );
};

const Halfwrap = styled.div`
  box-sizing: border-box;
  font-size: calc(1.5vh + 1.2vw);
  position: relative;
  img {
    bottom: 0;
    mix-blend-mode: overlay;
    object-fit: contain;
    opacity: 0.5;
    position: absolute;
    top: 0;
    width: 100%;
  }
  p {
    line-height: 1.2em;
  }
  .cell {
    text-decoration: none;
  }
  h2 {
    font-size: calc(5vh + 4vw);
  }
`;

export { Split, Half };
