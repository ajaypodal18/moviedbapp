import React, { useEffect } from "react";
import NavScrollExample from "./components/Navbar";
import "./App.css";
import Popular from "./pages/Popular";
import Toprated from "./pages/Toprated";
import Upcoming from "./pages/Upcoming";
import { Route, Routes } from "react-router-dom";
import axios from "axios";
import {useDispatch} from 'react-redux';
import { setMovieData, setImageBaseUrl, setTopRated, setUpComing } from "./store/moviedbSlice";
// import Searchmovie from "./pages/Searchmovie";

const App = () => {
  const dispatch = useDispatch();

  const popularData = async()=>{
    try {
      const response = await axios.get("/movie/popular")
      dispatch(setMovieData(response.data.results))
      // console.log(response.data.results);
      
    } catch (error) {
      console.log("error", error);
      
    }
  }

  const fetchConfiguration = async()=>{
    try {
      const response = await axios.get("/configuration")
      // console.log("config",response.data.images.secure_base_url);
      dispatch(setImageBaseUrl(response.data.images.secure_base_url+"original"))
    }
    catch (error) {
      console.log("error", error);

    }

  }

  const fetchTopRated = async()=>{
    try {
      const response = await axios.get("/movie/top_rated")
      // console.log(response.data.results);
      dispatch(setTopRated(response.data.results))
    }  
    catch (error) {
      console.log("error", error);
    }
  }

  const fetchUpcoming = async()=>{
    try{
      const response = await axios.get("/movie/upcoming")
      // console.log(response);
      dispatch(setUpComing(response.data.results))
    }
    catch (error){
      console.log("error", error);
      
    }
    
  }
  // function call/

  useEffect(()=>{
    popularData()
    fetchConfiguration()
    fetchTopRated()
    fetchUpcoming()
  },)


  return (
    <>
      <NavScrollExample />
      <Routes>
        <Route path="/" element={<Popular />} />
        <Route path="/top-rated" element={<Toprated />} />
        <Route path="/upcoming" element={<Upcoming />} />
        {/* <Route path="search" element={<Searchmovie />} /> */}
      </Routes>
      
    </>
  );
};

export default App;
