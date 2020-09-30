import React from "react";
import styled from "styled-components";
import { backcolor } from "../styles/COLORS";

export const SliderItem = ({ Title, Year, Poster, Type }) => {
  return (
    <Container>
      <Text>
        <h4>{Title}</h4>
      </Text>
      <Row>
        <Years>{Year}</Years> <p>{Type}</p>
      </Row>
      <Image src={Poster} />
    </Container>
  );
};
const Container = styled.div`
  overflow-wrap: break-word;
  background: black;
  color: white;
  margin: 12px;
  height: 390px;
  text-align: center;
  overflow-wrap: break-word;
`;

const Text = styled.div`
  position: absolute;
  bottom: 30%;
  padding: 0 15px;
  text-align: left;
  overflow-wrap: break-word;
  max-width: 280px;
  z-index: 2;

  h4 {
    margin: 0px;
    font-size: 18px;
    text-transform: uppercase;
  }
`;
const Row = styled.div`
  display: flex;
  flex-direction: row;
  position: absolute;
  padding: 0 5px;
  text-align: left;
  bottom: 15%;
  z-index: 999;
  p {
    text-transform: capitalize;
    font-size: 18px;
    padding: 5px 8px;
    align-self: center;
  }
`;
const Years = styled.p`
  margin: 0 10px;
  height: 100%;
  align-self: center;
  background: ${backcolor[Math.floor(Math.random() * backcolor.length)]};
  padding: 5px 8px;
  border-radius: 3px;
`;

const Image = styled.img`
  width: 100%;
  height: 390px;
  opacity: 0.6;
`;
