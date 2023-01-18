import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import MovieApi from "../common/Apis/MovieApi";
import { key } from "../common/Apis/MovieApiKey";

const movieText = "Harry";
export const fetchAsyncMovies = createAsyncThunk("movies/fetchAsyncMovies", async () => {
  const response = await MovieApi.get(
    `?apikey=${key}&s=${movieText}&type=movie`
  );
  return response.data;
});
const showText = "Friends"
export const fetchAsyncShows = createAsyncThunk("movies/fetchAsyncShows", async () => {
    const response = await MovieApi.get(
      `?apikey=${key}&s=${showText}&type=series`
    );
    return response.data;
  });

  export const fetchAsyncMoviesOrShows = createAsyncThunk("movies/fetchAsyncMoviesOrShows", async (id ) => {
    const response = await MovieApi.get(
      `?apikey=${key}&i=${id}&plot=full`
    );
    return response.data;
  });

const initialState = {
  movies: {},
  shows: {},
  moviesOrShows : {},
};

const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    removeMoviesorShows : (state) => {
      state.moviesOrShows = {}

    }
  },
  extraReducers: {
    [fetchAsyncMovies.pending] : () => {
        console.log("pending")
    },
    [fetchAsyncMovies.fulfilled] : (state , {payload}) =>  {
        console.log("fetched successfully")
        return {...state , movies : payload} 

    },
    [fetchAsyncMovies.rejected] : () => {
        console.log("rejected")

    },
    [fetchAsyncShows.fulfilled] : (state , {payload}) =>  {
        console.log("fetched successfully")
        return {...state , shows : payload} 
    },
    [fetchAsyncMoviesOrShows.fulfilled] : (state , {payload}) =>  {
      console.log("fetched successfully")
      return {...state , moviesOrShows: payload} 

  },
  }
});

export const { removeMoviesorShows } = movieSlice.actions;
export const getAllMovies = (state) => state.movies.movies;
export const getAllShows = (state) => state.movies.shows;
export const getAllMoviesOrShows = (state) =>  state.movies.moviesOrShows;
export default movieSlice.reducer;
