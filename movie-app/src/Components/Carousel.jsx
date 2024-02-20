import React, { useRef } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Img from "./Image";
import "./Common.scss";
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";
import Container from "./Container";
import PosterBg from "../assets/no-poster.png";
import dayjs from "dayjs";
import CircleRating from "./CircleRating";

const Carousel = ({ data, loading }) => {
  const CarouselContainer = useRef();
  const navigate = useNavigate();
  const { url } = useSelector((state) => state.movie);

  const navigation = (val) => {
    navigate();
  };

  const skItem = () => {
    return (
      <div className="skeletonItem">
        <div className="posterBlock">
          <div className="textBlock">
            <div className="title skeleton"></div>
            <div className="date skeleton"></div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      <div className="carousel">
        <Container>
          <BsFillArrowLeftCircleFill
            className="carouselLeftNav arrow"
            onClick={() => navigation("left")}
          />

          <BsFillArrowRightCircleFill
            className="carouselRightNav arrow"
            onClick={() => navigation("right")}
          />
          {!loading ? (
            <div className="carouselItems">
              {data?.map((item) => {
                const posterUrl = item.poster_path
                  ? url.poster + item.poster_path
                  : PosterBg;
                return (
                  <div key={item.id} className="carouselItem">
                    <div className="posterBlock">
                      <Img src={posterUrl} />
                      <CircleRating rating={item.vote_average.toFixed(1)}/>
                    </div>
                    <div className="textBlock">
                      <span className="title">{item.title || item.name}</span>
                      <span className="date">
                        {dayjs(item.release_date || item.first_air_date).format(
                          "MMM D YYYY"
                        )}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="loadingSkeleton">
              {skItem()}
              {skItem()}
              {skItem()}
              {skItem()}
              {skItem()}
            </div>
          )}
        </Container>
      </div>
    </>
  );
};

export default Carousel;
