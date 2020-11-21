import React, { useState } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import Modal from "react-modal";

import { Input } from "./Input";
import { signUser, getAuthStatus, getError } from "../store/auth";
import { Redirect, withRouter } from "react-router-dom";

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
  error: getError(state),
});
const LogIn = ({
  isOpen,
  onRequestClose,
  signUp,
  signUser,
  status,
  error,
  history,
}) => {
  const [fields, setFields] = useState({
    email: "",
    password: "",
    fullName: "",
    retypePassword: "",
  });
  const redirect = () => {
    console.log(error, "redireee");
    if (!!status) {
      alert("hello");
      console.log(error, "redi");
      // history.push("/community")
      return <Redirect to="/community" />;
    } else if (error) {
      alert(error);
    }
  };
  const handleFieldChange = (name, value, e) => {
    e.preventDefault();
    setFields((fields) => ({
      ...fields,
      [name]: value,
    }));
  };

  const sign = (e, signIn) => {
    signUser(fields, signIn);
  };
  return (
    <Modal style={style} isOpen={!status} onRequestClose={onRequestClose}>
      {!!status ? (
        <Redirect to="/community" />
      ) : (
        <div>
          {!!signUp ? (
            <Container>
              <h3>Sign Up</h3>
              <Input
                heading={"Your Full Name"}
                name={"fullName"}
                placeholder="Your name"
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
              <Button onClick={()=>signUser(fields, false)}>sign up</Button>
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
              {error && <div>{error}</div>}

              <Button onClick={()=>signUser(fields, true)}>log in</Button>
            </Container>
          )}
        </div>
      )}
    </Modal>
  );
};

Modal.setAppElement("body");
export default withRouter(connect(mapStateToProps, { signUser })(LogIn));
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
  cursor: pointer;
`;
