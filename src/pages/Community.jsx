import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { Layout } from "../commons/Layout";
import { getAuthStatus, getUserData } from "../store/auth";

const mapStateToProps = (state) => ({
  status: getAuthStatus(state),
  user: getUserData(state)
});
export const Community = connect(mapStateToProps)(({ status,user }) => {
  return (
    <Layout marginTop>
      {!!status ? (
        <Container>
          <SideBar> im lorem</SideBar>
          <Name>{user.name}</Name>
          <Inputs>helo1</Inputs>
        </Container>
      ) : (
        <Container> please log in</Container>
      )}
    </Layout>
  );
});
const Name = styled.div`
 grid-row: 1/2;
  grid-column: 2/4;
`
const Container = styled.div`
  color: white;
  display: grid;
 
`;
const SideBar = styled.div`
  margin: 0 !important; 
  background-color: red;
  height: 100px;
  width: 100px;
  position: relative;
  bottom: 50px;
  grid-row: 1/5;
  grid-column: 1/2;
`;
const Inputs = styled.div`
grid-column: 2/4;
grid-row: 2/5
`