import React, { useState } from "react";
import { useQuery } from "react-query";
import Pagination from "react-js-pagination";
import Loader from "react-loader-spinner";
import styled from "styled-components";

import { Layout } from "../commons/Layout";
import { MovieList } from "../components/MovieList";
import { fetchMovies } from "../FetchAPI";

export const Movies = (params) => {
  const { data, isLoading } = useQuery("movies", fetchMovies);
  const [activePage, setActivePage] = useState(1);

  let itemsPerPage = 21;

  function handlePageChange(pageNumber) {
    console.log(`active page is ${pageNumber}`);
    setActivePage(pageNumber);
  }

  let movies = data?.slice(
    activePage * itemsPerPage - itemsPerPage,
    activePage * itemsPerPage
  );
  return (
    <Layout padding={true} marginTop={true}>
      <Heading>MOVIES</Heading>
      {data && <MovieList movies={movies} />}
      {isLoading && (
        <Spinner>
          <Loader type="TailSpin" color="#00BFFF" height={100} width={100} />
        </Spinner>
      )}
      <Pagination
        activePage={activePage}
        itemsCountPerPage={itemsPerPage}
        totalItemsCount={data?.length}
        pageRangeDisplayed={8}
        onChange={handlePageChange}
      />
    </Layout>
  );
};
const Heading = styled.h3`
  text-align: center;
  color: white;
  font-size: 32px;
  margin: 0 0 40px;
`;
const Spinner = styled.div`
  display: flex;
  margin: 20% 50%;
  align-content: center;
`;
