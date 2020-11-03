import React from "react";
import styled from "styled-components";
import { MovieItem } from "./MovieItem";
export const MovieList = ({ movies }) => {
  return (
    <Container>
      {movies.map((movie, i) => (
        <MovieItem key={i} {...movie} />
      ))}
    </Container>
  );
};
const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 160px);
  grid-auto-rows: auto;
  place-content: space-between;
  grid-gap: 10px;
`;
