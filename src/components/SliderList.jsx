import React from "react";
import Slider from "react-slick";
import styled from "styled-components";
import { Layout } from "../commons/Layout";

import { SliderItem } from "./SliderItem";

export const SliderList = ({ movies }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
    dotsClass: "dots",
    arrows: false,
    className: "slider",
    autoplay :true
  };
  return (

    <Slider {...settings}>
      {movies.map((movie,i) => (
        <SliderItem key={i} {...movie} />
      ))}
    </Slider>

  );
};
