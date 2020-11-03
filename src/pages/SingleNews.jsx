import React, { useEffect } from "react";
import styled from "styled-components";
import Loader from "react-loader-spinner";

import { useQuery } from "react-query";
import { fetchNews } from "../FetchAPI";
import { Layout } from "../commons/Layout";
import { COLORS } from "../styles/COLORS";

export const SingleNews = ({
  match: {
    params: { path },
  },
}) => {
  const { data, isLoading } = useQuery("news", fetchNews);
  const newsTitle = path.replace(/_/g, " ");
  const singleNews = data?.find((news) => news.title === newsTitle);

  const date = new Date(singleNews?.publishedAt);
  return (
    <Container>
      {isLoading ? (
        <Spinner>
          <Loader type="TailSpin" color="#00BFFF" height={100} width={100} />
        </Spinner>
      ) : (
        <Layout>
          <h3>{singleNews.title}</h3>
          <h5>
            {date.getDate()} {date.toLocaleString("default", { month: "long" })}
            {date.getFullYear()}
          </h5>
          <img alt="news img" src={singleNews.urlToImage} />
          <p>{singleNews.content}</p>
        </Layout>
      )}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  color: white;
  margin-top: 40px;
  h3 {
    font-size: 26px;
    margin-bottom: 0;
  }
  h5 {
    font-weight: normal;
    color: ${COLORS.text};
  }
  img {
    max-width: 80%;
    max-height: 70%;
  }
  p {
    color: ${COLORS.text};
    width: 80%;
  }
`;

const Spinner = styled.div`
  margin: 20% 50%;
`;
