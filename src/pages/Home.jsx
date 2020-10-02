import React from "react";
import { useQuery } from "react-query";
import Loader from "react-loader-spinner";
import styled from "styled-components";
import { Link } from "react-router-dom";

import { SliderList } from "../components/SliderList";
import { fetchMovies, fetchNews } from "../FetchAPI";
import { NewsItem } from "../components";
import { COLORS } from "../styles/COLORS";
import { Layout } from "../commons/Layout";
export const Home = () => {
  const { data: movies, isLoading: moviesIsLoading } = useQuery(
    "movies",
    fetchMovies
  );
  const { data: news, isLoading: newsIsLoading } = useQuery("news", fetchNews);
console.log(news);
  return (
    <div>
      {moviesIsLoading && (
        <Spinner>
          <Loader type="TailSpin" color="#00BFFF" height={100} width={100} />
        </Spinner>
      )}
      <Main>
        <span>Follow Us</span>
        {movies && <SliderList movies={movies} />}
      </Main>
      <Layout transparent={false}>
        <NewsContainer>
        <Heading>latest news</Heading>
          {news && <NewsItem {...news[0]} />}
          <NewsLink to="news">see all movies news {">"}</NewsLink>
        </NewsContainer>
      </Layout>
    </div>
  );
};
const Spinner = styled.div`
  margin: 20% 50%;
`;
const Heading = styled.h1`
  margin: 0 0 50px;
  text-transform: uppercase;
  color: white;
`;
const Main = styled.div`
  margin: 20px 0 80px;

  display: flex;
  flex-direction: column;
  span {
    margin: 0 200px 25px;
    align-self: flex-end;
    color: white;
  }
`;
const NewsContainer = styled.div`
  margin: 50px 0 30px;
  display: inline-block;
 
  padding: 80px 0;
  width: 80%;
  height: 500px;
`;

const NewsLink = styled(Link)`
  color: ${COLORS.text};
  
  float: right;
  font-size: 19px;
  text-decoration: none;
  text-transform: uppercase;
  &:hover {
    color: yellow;
  }
`;
