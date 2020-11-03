import React, { useState } from "react";
import styled from "styled-components";

export const LogIn = ({}) => {
  const [fields, setFields] = useState({ email: "", password: "" });
  const handleFieldChange = (name, value) =>
    setFields((fields) => ({
      ...fields,
      [name]: value,
    }));
  console.log(fields);

  return (
    <div>
      <Container onClick={(e) => e.preventDefault()}>
        <h3>LOGIN</h3>
        <h6>Email</h6>
        <Input
          type="text"
          name="email"
          placeholder="Your e-mail"
          onChange={(e) => handleFieldChange("email", e.target.value)}
        />
        <h6>Password</h6>
        <Input
          type="password"
          name="password"
          placeholder="Your password"
          onChange={(e) => handleFieldChange("password", e.target.value)}
        />
        <Button onClick={console.log("object")}>log in</Button>
      </Container>
    </div>
  );
};

const Container = styled.div`
  padding: 10px 30px;
  background-color: white;
  position: absolute;
  height: 400px;
  width: 350px;
  left: 40%;
  top: 30%;
  z-index: 1;
  display: flex;
  flex-direction: column;
  h3 {
    text-align: center;
    font-size: 25px;
    text-transform: uppercase;
  }
  h6 {
    margin: 0;
    font-size: 14px;
    text-transform: uppercase;
  }
`;

const Input = styled.input`
  width: 100%;
  align-self: center;
  margin: 15px 0 20px;
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

const Button = styled.button`
  width: 100%;
  height: 40px;
  outline: none;
  font-size: 16px;
  margin-top: 10px;
  background-color: #f5164e;
  color: white;
  text-transform: uppercase;
  border: none;
  border-radius: 3px;
`;
