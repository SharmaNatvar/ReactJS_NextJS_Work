import React from "react";
import "./home.scss";
import HomeBanner from "./HomeBanner";
import HomeTrending from "./HomeTrending";
import HomePopular from "./HomePopular";
import HomeRating from "./HomeRating";

const HomeP = () => {
  return (
    <>
      <HomeBanner />
      <HomeTrending />
      <HomePopular/>
      <HomeRating/>
    </>
  );
};

export default HomeP;
