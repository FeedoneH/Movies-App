import React from "react";
import styled from "styled-components";

export const Btn = ({ onClick , title }) => { return <Button onClick={onClick}>{title}</Button>;}

const Button = styled.button`
  width: 100%;
  height: 40px;
  outline: none;
  font-size: 16px;
  margin: 10px 0 20px;
  background-color: #f5164e;
  color: white;
  text-transform: uppercase;
  border: none;
  border-radius: 3px;
  cursor: pointer;
`;
