import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

import { LOGOS } from "../assets/index";
import { COLORS } from "../styles/COLORS";
import { Layout } from "./Layout";

export const Header = ({logInOnClick, signUpOnClick}) => {
  return (
    <Layout transparent={true}>
      <Container>
        <div>
          <div>
            <img src={LOGOS.movie} alt="logo" />
            <span>My Movies</span>
          </div>

          <div>
            <Link to="">Home</Link>
            <Link  to="/movies">Movies</Link>
            <Link to="/news">News</Link>
            <Link to="/community">Community</Link>
          </div>
        </div>
        <div>
          <Btn onClick={logInOnClick}>log in</Btn>
          <Btn onClick={signUpOnClick}>
            <div>sign up</div>
          </Btn>
        </div>
      </Container>
    </Layout>
  );
};

const Container = styled.header`
  padding: 15px 0;
  display: flex;
  justify-content: space-between;
  div {
    margin: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  span {
    font-size: 22px;
    width: 13vw;
    color: white;
  }

  img {
    width: 80px;
    height: 80px;
    padding: 10px;
  }
`;

const Link = styled(NavLink)`
  text-transform: uppercase;
  text-decoration: none;
  font-size: 16px;
  padding: 10px 35px;
  margin: 5px;
  color: white;
  color: ${COLORS.text};
`;

const Btn = styled.button`
  padding: 0;
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  text-transform: uppercase;
  font-size: 13px;
  color: ${COLORS.text};
  font-weight: bold;
  &:nth-child(1) {
    margin-right: 25px;
  }
  div {
    border-radius: 20px;
    background-color: #dd003f;
    padding: 11px 20px;
    color: white;
  }
`;
