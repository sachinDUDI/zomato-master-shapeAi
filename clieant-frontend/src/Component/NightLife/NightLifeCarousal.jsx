import React from "react";
import Slider from "react-slick";

// components
import PictureCarousalCardN from "../PictureCarousalNightLife";
import { PictureCarousalCardN2,
  PictureCarousalCardN3,
  PictureCarousalCardN4 }
  from "../PictureCarousalNightLife";
import { NextArrow, PrevArrow  } from "../CarouselArrow";

const NightLifeCarousal = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="w-full">
      <Slider {...settings}>
        <PictureCarousalCardN />
        <PictureCarousalCardN2 />
        <PictureCarousalCardN3 />
        <PictureCarousalCardN4 />
        <PictureCarousalCardN2 />
        <PictureCarousalCardN />
        <PictureCarousalCardN3 />
      </Slider>
    </div>
  );
};

export default NightLifeCarousal;