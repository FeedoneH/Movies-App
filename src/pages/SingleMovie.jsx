import React from "react";
import styled from "styled-components";
import { Layout } from "../commons/Layout";
export const SingleMovie = ({
  match: {
    params: { path },
  },
  location: {
    state: { movie },
  },
}) => {
  
  return (
    <Layout marginTop padding>
      <Container>
        <Img src={movie.Poster} />
        <Heading>
          {movie.Title}: <span>{movie.Year}</span>
        </Heading>
        <Description>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum libero
          odio alias praesentium ratione, odit delectus maiores, modi qui magnam
          ullam neque laborum dolorem in iusto obcaecati quas debitis corporis.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
          voluptas iure eaque rerum enim omnis necessitatibus aliquid possimus
          reprehenderit sapiente, ex, iusto vel a quae minima pariatur alias,
          aspernatur qui.
        </Description>
      </Container>
    </Layout>
  );
};

const Container = styled.div`
  display: grid;
  padding-right: 350px;
`;
const Img = styled.img`
  grid-row: 1 / 4;
  grid-column: 1 / 2;
`;
const Heading = styled.div`

  margin: 0 !important ;
  color: white;
  font-size: 36px;
  grid-row: 1/2;
  grid-column: 2 / 3;
  span {
    font-size: 25px;
  }
`;
const Description = styled.div`
  grid-row: 2/4;
  grid-column: 2 / 3;
  color: grey;
  /* padding: 0 25px; */
  width: 330px;
  margin: 0 !important ;
`;
