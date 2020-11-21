import React from "react";
import styled from "styled-components";

import { COLORS } from "../styles/COLORS";

export const Layout = ({ children, transparent, marginTop, padding }) => {
  return (
    <Container
      padding={padding}
      marginTop={marginTop}
      transparent={transparent}
    >
      <div>{children}</div>
    </Container>
  );
};

const Container = styled.div`
  margin-top: ${(p) => (p.marginTop ? "80px" : 0)};
  background-color: ${(p) => (p.transparent ? "" : COLORS.mainBg)};
  height: 100%;
  padding: ${(p) => (p.padding ? "50px 0" : 0)};

  div {
    max-width: 1200px;
    margin: 0 auto;
    
    
  }
`;
