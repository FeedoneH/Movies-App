import React, { useState } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import Modal from "react-modal";

import { Input } from "./Input";
import { signUser, getAuthStatus } from "../store/auth";
import { Redirect } from "react-router-dom";

let style = {
  overlay: {
    top: 30,
    left: 40,
    right: 40,
    bottom: 10,
    backgroundColor: "transparent",
  },
  content: {
    padding: "10px 30px",
    height: "fit-content",
    width: "350px",
    left: "40%",
    top: "20%",
  },
};

const mapStateToProps = (state) => ({
  status: getAuthStatus(state),
});
export const LogIn = connect(mapStateToProps, { signUser })(
  ({
    isOpen,
    onRequestClose,
    signUp,
    signUser,
    status,
    history,
  }) => {
    const [fields, setFields] = useState({
      email: "",
      password: "",
      fullName: "",
      retypePassword: "",
    });
    const handleFieldChange = (name, value) =>
      setFields((fields) => ({
        ...fields,
        [name]: value,
      }));

    const sign = (signIn) => {
      signUser(fields, signIn);
      if (!!status) {
       return <Redirect to='/community'/>
      }
      alert("wrong");
    };
    return (
      <Modal style={style} isOpen={isOpen} onRequestClose={onRequestClose}>
        {!!signUp ? (
          <Container>
            <h3>Sign Up</h3>
            <Input
              heading={"Your Full Name"}
              name={"fullName"}
              placeholder="Your password"
              handleFieldChange={handleFieldChange}
            />
            <Input
              heading={"Email"}
              name={"email"}
              placeholder="Your e-mail"
              handleFieldChange={handleFieldChange}
            />
            <Input
              heading={"Password"}
              name={"password"}
              type={"password"}
              placeholder="Your password"
              handleFieldChange={handleFieldChange}
            />

            <Input
              heading={"Retype Password"}
              name={"retypePassword"}
              type={"password"}
              placeholder="Retype Your Password"
              handleFieldChange={handleFieldChange}
            />
            <Button onClick={() => sign(fields, false)}>sign up</Button>
          </Container>
        ) : (
          <Container>
            <h3>LOGIN</h3>
            <Input
              heading={"Email"}
              name={"email"}
              placeholder="Your e-mail"
              handleFieldChange={handleFieldChange}
            />
            <Input
              heading={"Password"}
              name={"password"}
              type={"password"}
              placeholder="Your password"
              handleFieldChange={handleFieldChange}
            />

            <Button onClick={() => sign(fields, true)}>log in</Button>
          </Container>
        )}
      </Modal>
    );
  }
);
Modal.setAppElement("body");

const Container = styled.div`
  background-color: white;
  display: flex;
  flex-direction: column;

  h3 {
    margin: 15px 0 20px;
    text-align: center;
    font-size: 25px;
    text-transform: uppercase;
  }
`;

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
`;
