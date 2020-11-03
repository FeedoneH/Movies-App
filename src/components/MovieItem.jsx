import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

export const MovieItem = ({ Title, Year, Poster, Type }) => {
  let path = Title.replace(/ /g, "_");
  let movie = { Title, Year, Poster, Type };
 
  return (
    <Container to={{ pathname: `/movies/${path}`, state: {movie}  }}>
      <ImageContainer>
        <Image src={Poster} />
      </ImageContainer>
      <h3>{Title}</h3>
      <p>Release Year: {Year}</p>
    </Container>
  );
};

const Container = styled(Link)`
  width: 160px;
  height: 100%;
  margin: 0 -5px;
  color: white;
  text-decoration: none;
  h3 {
    max-width: 120px;
    margin: 5px;
    font-size: 15px;
  }
  p {
    margin: 5px;
    font-size: 13px;
  }
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
`;
const ImageContainer = styled.div`
  padding: 0;
  width: 150px;
  height: 200px;
`;
