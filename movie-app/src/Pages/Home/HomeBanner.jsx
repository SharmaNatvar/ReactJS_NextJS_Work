import React, { useEffect, useState } from "react";
import "./home.scss";
import { useNavigate } from "react-router-dom";
import useFetch from "../../Hook/useFetch";
import { UPCOMING_ENDPOINT } from "../../redux-toolkit/constant";
import { useSelector } from "react-redux";
import Img from "../../Components/Image";
import Container from "../../Components/Container";

const HomeBanner = () => {
  const [background, setBackground] = useState(" ");
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const { url } = useSelector((state) => state.movie);

  const { data, loading } = useFetch(UPCOMING_ENDPOINT);

  useEffect(() => {
    const bg =
      url.backdrop +
      data?.results?.[Math.floor(Math.random() * 20)]?.backdrop_path;
    setBackground(bg);
  }, [data]);
  console.log(background);

  const handleSearch = (e) => {
    console.log(search);
    if (e.key === "Enter" && search.length > 0) {
      navigate(`/search/${search}`);
    }
  };

  return (
    <>
      <div className="homeBanner_bg">
        {!loading && (
          <div className="backdrop-img">
            <Img src={background} />
          </div>
        )}
        <div className="opacity_layer"></div>
        <Container>
            <div className="homeBanner_Textbox">
              <h1 className="homeBanner_title">Welcome.</h1>
              <p className="homeBanner_subTitle">
                Specific platforms or services where people can explore millions
                of movies and TV shows
              </p>
            <div className="homeBanner_inputBox">
              <input
                type="text"
                placeholder="choose your movie"
                onKeyUp={handleSearch}
                onChange={(e) => setSearch(e.target.value)}
              />
              <button>Search</button>
            </div>
            </div>
        </Container>
      </div>
    </>
  );
};

export default HomeBanner;
