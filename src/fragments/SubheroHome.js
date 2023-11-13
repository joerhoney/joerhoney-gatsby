import React from "react";
import styled from "styled-components";

const Subhero_Home = ({ children }) => {
  return <SubheroStyles className="subhero">{children}</SubheroStyles>;
};

export default Subhero_Home;

const SubheroStyles = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  min-height: 100vh;
  position: relative;
  @media screen and (orientation: portrait) {
    min-height: unset;
  }
`;
