import React from "react";
import styled from "styled-components";

export const Input = ({ heading,handleFieldChange, name , ...rest}) => {

  return (
    <Container>
      <h6>{heading}:</h6>
      <TextInput
        type="text"
        name={name}
       {...rest}
        onChange={(e) => handleFieldChange(name, e.target.value,e)}
      />
    </Container>
  );
};
const Container = styled.div`
   h6 {
    margin: 0;
    font-size: 14px;
    text-transform: uppercase;
  }
`;
const TextInput = styled.input`
  width: 100%;
  align-self: center;
  margin: 8px 0 15px;
  padding: 8px 4px;
  line-height: 20px;
  border: 2px solid white;
  outline: none;
  transition: all 0.5s ease;
  box-shadow: 0px 0px 2px 0px rgba(0, 0, 0, 0.5);
  &:focus {
    border-color: #28d836;
    box-shadow: 0px 0px 6px 0px rgba(131, 123, 123, 0.5);
  }
`;
