import { useEffect } from "react";
import { getDataFromApi } from "./redux-toolkit/api";
import { CONFIG_ENDPOINT, POPULAR_ENDPOINT } from "./redux-toolkit/constant";
import { useDispatch, useSelector } from "react-redux";
import { getApiConfig } from "./redux-toolkit/slice/movieSlice";

import Header from "./Components/Header";
import Footer from "./Components/Footer";
import HomeP from "./Pages/Home/HomeP";
import Details from "./Pages/Details";
import SearchResult from "./Pages/SearchResult";
import Explore from "./Pages/Explore";
import NotFound from "./Pages/NotFound";
import { Route, Routes } from "react-router-dom";

function App() {
  const dispatch = useDispatch();
  const movieData = useSelector((state) => state.movie.url);
  console.log(movieData);
  
  useEffect(() => {
    fetchApiConfig();
  }, []);

  const fetchApiConfig = () => {
    getDataFromApi(CONFIG_ENDPOINT).then((res) => {
      const url = {
        backdrop:res.images.secure_base_url+"original",
        poster:res.images.secure_base_url+"original",
        profile:res.images.secure_base_url+"original",
      }
      dispatch(getApiConfig(url));
    });
  };
  return (
    <>
    <Header/>
      <Routes>
        <Route path="/" element={<HomeP />} />
        <Route path="/details" element={<Details />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/search/:search" element={<SearchResult />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
