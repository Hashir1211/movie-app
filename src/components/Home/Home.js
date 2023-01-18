import "./Home.scss";
import React, { Component } from "react";
import MovieListing from "../MovieListing/MovieListing";
import { useEffect } from "react";
import { fetchAsyncMovies , fetchAsyncShows } from "../../feature/movies";

import { useDispatch } from "react-redux";
import { addMovies } from "../../feature/movies";

const Home = () => {  
    const dispacth = useDispatch()
    

  useEffect(() => {
   dispacth(fetchAsyncMovies());
   dispacth(fetchAsyncShows());
  },[dispacth]);
  return (
    <div>
      <div className="banner-logo"></div>
      <MovieListing />
    </div>
  );
};

export default Home;
