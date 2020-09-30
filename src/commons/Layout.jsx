import React from "react";
import styled from "styled-components";

import { COLORS } from "../styles/COLORS";

export const Layout = ({ children, transparent }) => {
  return (
    <Container transparent={transparent}>
      <div>{children}</div>
    </Container>
  );
};

const Container = styled.div`
  background-color: ${(p) => (p.transparent ? '' :  COLORS.mainBg)};
  height: 100%;
  /* padding: 80px 0;
  margin-top: 80px; */
  div {
    max-width: 1200px;
    margin: 0 auto;
  }
`;
