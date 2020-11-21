import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import Modal from "react-modal";

import { Input } from "./Input";
import { signUser, getAuthStatus, getError } from "../store/auth";
import {withRouter } from "react-router-dom";
import { Btn } from "./Btn";

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
const LogIn = connect(mapStateToProps, { signUser })(
  ({ isOpen, onRequestClose, signUp, signUser, history, status, error }) => {
    const [fields, setFields] = useState({
      email: "",
      password: "",
      fullName: "",
      retypePassword: "",
    });
let openRef = useRef(isOpen)
    const handleFieldChange = (name, value, e) => {
      e.preventDefault();
      setFields((fields) => ({
        ...fields,
        [name]: value,
      }));
    };

    const sign = (signIn) => {
      
        signUser(fields, signIn);
     
    };
    useEffect(() => {
      if (!!status) {
        history.push("/community");
        openRef.current=false;
      } 
    }, [status]);
    return (
      <Modal style={style} isOpen={openRef.current} onRequestClose={onRequestClose}>
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
            <Btn onClick={() => sign(fields, false)} title={"sign up"} />
            {/* <Button onClick={()=>signUser(fields, false)}>sign up</Button> */}
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
            <Btn onClick={() => sign(true)} title={"log in"} />
          </Container>
        )}
      </Modal>
    );
  }
);

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
