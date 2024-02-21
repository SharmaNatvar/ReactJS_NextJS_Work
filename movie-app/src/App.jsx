import { useEffect } from "react";
import { getDataFromApi } from "./redux-toolkit/api";
import { CONFIG_ENDPOINT, POPULAR_ENDPOINT } from "./redux-toolkit/constant";
import { useDispatch, useSelector } from "react-redux";
import { getApiConfig, getGenres } from "./redux-toolkit/slice/movieSlice";

import Header from "./Components/Header";
import Footer from "./Components/Footer";
import HomeP from "./Pages/Home/HomeP";
import Details from "./Pages/Details/Details";
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
    genresCall();
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


// all api
  const genresCall = async()=>{
    const promises = []
    const endPoints = ["tv","movie"]
    const allGenres = {}

    endPoints.forEach((url)=>{
      promises.push(getDataFromApi(`/genre/${url}/list`))
    });

    const data = await Promise.all(promises);
    data.map(({genres})=>{
      return genres.map((item)=>(allGenres[item.id] = item))
    })

    dispatch(getGenres(allGenres))

  }


  return (
    <>
    <Header/>
      <Routes>
        <Route path="/" element={<HomeP />} />
        <Route path="/:mediaType/:id" element={<Details />} />
        <Route path="/explore/:mediaType" element={<Explore />} />
        <Route path="/search/:search" element={<SearchResult />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
