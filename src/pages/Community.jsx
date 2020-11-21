import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { ICONS } from "../assets";

import { Layout } from "../commons/Layout";
import { Btn } from "../components/Btn";
import { getAuthStatus, getUserData, logOut } from "../store/auth";
import { COLORS } from "../styles/COLORS";

const mapStateToProps = (state) => ({
  status: getAuthStatus(state),
  user: getUserData(state),
});
export const Community = connect(mapStateToProps, { logOut })(
  ({ status, user, logOut }) => {
    return (
      <Container>
        <Layout marginTop>
          {!!status ? (
            <Container>
              <SideBar>
                <Image src={ICONS.avatar} />
                <Btn onClick={() => alert("hello")} title={"change avatar"} />
                <Line />
                <Heading>Account Details</Heading>
                <Button onClick={() => logOut()}>Log out</Button>
              </SideBar>
              <InnerContainer>
                <Name>{user.fullName}</Name>
                <Inputs>....</Inputs>
              </InnerContainer>
            </Container>
          ) : (
            <Container>
              <h1>please log in</h1>
            </Container>
          )}
        </Layout>
      </Container>
    );
  }
);
const Line = styled.hr`
  border: 0;
  border-top: 2px solid ${COLORS.secondaryBg};
  width: 100%;
`;
const Container = styled.div`
  color: white;
  display: grid;
  width: 100%;
  margin-top: 80px;
  h1{
    font-size:30px;
    text-transform: uppercase;
    text-align: center;
    margin: 80px 0 0;
  }
`;
const InnerContainer = styled.div`
  grid-row: 1/4;
  grid-column: 2/10;
  margin: 0 !important;
`;
const Name = styled.div`
  position: relative;
  bottom: 100px;
  font-size: 35px;
`;

const SideBar = styled.div`
  padding: 15px;
  margin: 0 !important;
  background-color: ${COLORS.mainBg};
  height: 500px;
  width: 240px;
  position: relative;
  bottom: 85px;
  grid-row: 1/5;
  grid-column: 1/2;
  grid-template-columns: 240px;
  display: flex;
  flex-direction: column;
  border: 3px solid ${COLORS.secondaryBg};
  border-radius: 5px;
`;
const Image = styled.img`
  border-radius: 100%;
  height: 160px;
  width: 160px;
  margin: 5px auto;
`;
const Heading = styled.h3`
  text-align: left;
  margin: 0;
  font-weight: lighter;
  color: ${COLORS.text};
`;
const Inputs = styled.div``;

const Button = styled.button`
  outline: none;
  border: none;
  cursor: pointer;
  height: 20px;
  text-align: left;
  background: transparent;
  color: white;
  font-size: 18px;
  width: 55px;
  padding: 10px 0;
  &:hover {
    color: ${COLORS.textOnHover};
  }
`;
