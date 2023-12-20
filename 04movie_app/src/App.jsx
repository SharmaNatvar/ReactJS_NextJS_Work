import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Movies from "./Component/Movies/Movies";
import Navbar from "./Component/Navbar/Navbar";
import Genra from "./Component/Genra/Genra";
import MovieInfo from "./Component/MovieInfo/MovieInfo";
import { Provider } from "react-redux";
import store from "./app/store";


function App() {



  return (
    <Provider store={store}>
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Movies/>} />
        <Route path="/Genra" element={<Genra/>} />
        <Route path="/Movie/:id" element={<MovieInfo/>} />
      </Routes>
    </BrowserRouter>
    </Provider>
  )
}

export default App
