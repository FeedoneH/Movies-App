import React, { useState } from "react";
import Pagination from "react-js-pagination";
import { useQuery } from "react-query";
import styled from "styled-components";

import { Layout } from "../commons/Layout";
import { NewsList } from "../components/NewsList";
import { fetchNews } from "../FetchAPI";
import { COLORS } from "../styles/COLORS";

export const News = (params) => {
  const { data, isLoading } = useQuery("news", fetchNews);
  const [activePage, setActivePage] = useState(1);
  let itemsPerPage = data?.length < 20 ? 7 : 10;
  console.log(data);
  function handlePageChange(pageNumber) {
    console.log(`active page is ${pageNumber}`);
    setActivePage(pageNumber);
  }

  let currentNews = data?.slice(
    activePage * itemsPerPage - itemsPerPage,
    activePage * itemsPerPage
  );
  return (
    <Container>
      {/* <h1>Daily News</h1> */}

      <Layout>
        <Container>{data && <NewsList news={currentNews} background={COLORS.itemBg} />}</Container>

        <Container>
          <Pagination
            activePage={activePage}
            itemsCountPerPage={itemsPerPage}
            totalItemsCount={data?.length}
            pageRangeDisplayed={3}
            onChange={handlePageChange}
          />
        </Container>
      </Layout>
    </Container>
  );
};

const Container = styled.div`
  padding: 20px 0 10px;
  margin: 40px 0;
  h1 {
    text-align: center;
    text-transform: uppercase;
    color: white;
  }
`;
