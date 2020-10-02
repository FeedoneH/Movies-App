import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import { COLORS } from "../styles/COLORS";

export const NewsItem = ({ title, description, publishedAt, urlToImage , background}) => {
  const date = new Date(publishedAt);
  const dateUTCHours = date.getHours();
  const today = new Date();
  const todayHour = today.getHours();
  const path = title.replace(/ /g, '-')
 
  let difference = todayHour - dateUTCHours;
  const showTime = () => {
    if (
      date.getDate() === today.getDate() &&
      date.getMonth() === today.getMonth() &&
      date.getFullYear() === today.getFullYear()
    ) {
      return <p>{difference} hours ago</p>;
    }
    return (
      <p>
        {date.toLocaleString("default", { month: "long" })} {date.getDate()},{" "}
        {date.getFullYear()}
      </p>
    );
  };
  return (
    <Container to={`/content/${encodeURI(path)}`} background={background}>
      <Image src={urlToImage} alt="news-img" />
      <Text>
        <h3>{title}</h3>
        {showTime()}
        <p>{description}</p>
      </Text>
    </Container>
  );
};

const Container = styled(Link)`
  background-color: ${p=> p.background};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  /* border: 1px solid transparent; */
  border-radius: 10px;
  margin: 40px 0;
  text-decoration: none;
  &:hover {
    h3 {
      color: yellow;
    
    }
  }
`;

const Image = styled.img`
  max-width: 300px;
  height: 250px;
  margin-right: 30px;
  border-radius: 10px;
`;
const Text = styled.div`
  color: ${COLORS.heading};
  margin: 0;
  padding: 0 40px 0 0; 
  h3 {
    padding-top: 0px;
    transition: all .3s;
  }

  p {
    font-size: 15px;
    color: ${COLORS.text};
  }
`;
